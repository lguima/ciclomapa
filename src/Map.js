import React, { Component } from 'react';

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

import { MAPBOX_ACCESS_TOKEN } from './constants.js'

import './Map.css'


let map, popup;
let selectedCycleway;

const geocodingClient = mbxGeocoding({ accessToken: MAPBOX_ACCESS_TOKEN });


class Map extends Component {
    constructor(props) {
        super(props);

        this.onMapMoved = this.onMapMoved.bind(this);
    }

    showPopup(e) {
        console.debug(e.features[0]);

        const coords = e.lngLat;
        const props = e.features[0].properties;

        const layer = this.props.layers.find(l =>
            l.id === e.features[0].layer.id.split('--')[0]
        );

        let html = '';

        if (props.name) {
            html += `<h2>${props.name}</h2>`;
        } else {
            html += '<i>Sem nome</i>';
        }
        
        html += `<p>Tipo: <b>${layer.name}</b></p>`;

        // html += `<h3>Tipo: ${layer.name}</h3>`;
        // html += `<p>${layer.description}</p>`;

        // const prettyProps = JSON.stringify(props, null, 2)
        //     .replace(/(?:\r\n|\r|\n)/g, '<br/>')
        //     .replace(/"|,|\{|\}/g, '');
        // html += prettyProps;

        html += `
            <a
                target="_BLANK"
                rel="noopener"
                href="https://www.openstreetmap.org/${props.id}"
            >
                Editar no OSM
            </a>
    `;

        popup.setLngLat(coords)
            .setHTML(html)
            .addTo(map);
    }

    hidePopup() {
        popup.remove();
    }

    // southern-most latitude, western-most longitude, northern-most latitude, eastern-most longitude
    getCurrentBBox() {
        const fallback = "-23.036345361742164,-43.270405878917785,-22.915284125684607,-43.1111041211104";

        if (map) {
            const sw = map.getBounds().getSouthWest();
            const ne = map.getBounds().getNorthEast();
            return `${sw.lat},${sw.lng},${ne.lat},${ne.lng}`;
        } else {
            return fallback;
        }
    }

    reverseGeocode(lngLat) {
        geocodingClient
            .reverseGeocode({
                query: lngLat,
                types: ['place'],
                limit: 1
            })
            .send()
            .then(response => {
                const match = response.body;

                console.debug('reverseGeocode', match.features);

                if (match.features && match.features[0]) {
                    this.props.onMapMoved({area: match.features[0].place_name});
                }
            })
            .catch(err => {
                console.error(err.message);
            });
    }

    onMapMoved() {
        const lat = map.getCenter().lat;
        const lng = map.getCenter().lng;
        const zoom = map.getZoom();

        this.props.onMapMoved({
            lat: lat,
            lng: lng,
            zoom: zoom,
        });
    }

    addDynamicLayer(l) {
        const filters = [
            "any",
            ...l.filters.map(f => 
                typeof f[0] === 'string' ?
                    ["==", ["get", f[0]], f[1]]
                    :
                    [ "all",
                        ...f.map(f2 =>
                            ["==", ["get", f2[0]], f2[1]]
                        )
                    ]
                )
        ];

        // const layers = map.getStyle().layers;
        // // Find the index of the first symbol layer in the map style
        // let firstSymbolId;
        // for (var i = 0; i < layers.length; i++) {
        //     if (layers[i].type === 'symbol') {
        //         firstSymbolId = layers[i].id;
        //         break;
        //     }
        // }

        // Check if layer has a border color set. If that's the case the logic is a
        //  little different and we'll need 2 layers, one for the line itself and 
        //  another for the line underneath which creates the illusion of a border.
        if (l.style.borderColor) {
            // Border
            map.addLayer({
                "id": l.id+'--border',
                "type": "line",
                "source": "osm",
                "name": l.name,
                "description": l.description,
                "paint": {
                    "line-color": l.style.borderColor,
                    "line-width": [
                        "case",
                        ["boolean", ["feature-state", "highlight"], false],
                        12,
                        l.style.lineWidth
                    ],
                    ...(l.style.borderStyle === 'dashed' && {'line-dasharray': [1, 0.6]})
                },
                "filter": filters,
            // }, firstSymbolId);
            });

            // Line
            map.addLayer({
                "id": l.id,
                "type": "line",
                "source": "osm",
                "name": l.name,
                "description": l.description,
                "paint": {
                    "line-color": l.style.lineColor,
                    "line-width": [
                        "case",
                        ["boolean", ["feature-state", "highlight"], false],
                        12,
                        l.style.lineWidth - l.style.borderWidth
                    ],
                    ...(l.style.lineStyle === 'dashed' && {'line-dasharray': [1, 0.6]})
                },
                "filter": filters,
            // }, firstSymbolId);
            });
        } else {
            map.addLayer({
                "id": l.id,
                "type": "line",
                "source": "osm",
                "name": l.name,
                "description": l.description,
                "paint": {
                    "line-color": l.style.lineColor,
                    "line-width": [
                        "case",
                        ["boolean", ["feature-state", "highlight"], false],
                        12,
                        l.style.lineWidth
                    ],
                    ...(l.style.lineStyle === 'dashed' && {'line-dasharray': [1, 0.6]})
                },
                "filter": filters,
            // }, firstSymbolId);
            });
        }

        
        // Interactions

        const interactiveId = l.style.borderColor ? 
            l.id + '--border'
            : l.id;

        map.on("mouseenter", interactiveId, e => {
            if (e.features.length > 0) {
                // Cursor
                map.getCanvas().style.cursor = 'pointer';

                // Hover style
                // if (hoveredCycleway) {
                //     map.setFeatureState({ source: 'osm', id: hoveredCycleway }, { highlight: false });
                // }
                // hoveredCycleway = e.features[0].id;
                // map.setFeatureState({ source: 'osm', id: hoveredCycleway }, { highlight: true });
            }
        });

        map.on("mouseleave", interactiveId, e => {
            // Hover style
            // if (hoveredCycleway && !selectedCycleway) {
                // map.setFeatureState({ source: 'osm', id: hoveredCycleway }, { highlight: false });

                // Cursor cursor
                map.getCanvas().style.cursor = '';
            // }
            // hoveredCycleway = null;
        });

        map.on("click", interactiveId, e => {
            if (e.features.length > 0) {
                if (selectedCycleway) {
                    map.setFeatureState({ source: 'osm', id: selectedCycleway }, { highlight: false });
                }
                selectedCycleway = e.features[0].id;
                map.setFeatureState({ source: 'osm', id: selectedCycleway }, { highlight: true });

                this.showPopup(e);
            }
        });
    }

    initLayers() {
        map.addSource("osm", {
            "type": "geojson",
            "data": this.props.data || {
                'type': 'FeatureCollection',
                'features': []
            },
            "generateId": true
        });

        // In GeoJSON layers are from most important to least important, but we 
        //   want the most important ones to be on top.
        // Slice is used here to don't destructively reverse the original array.
        this.props.layers.slice().reverse().forEach(l => {
            this.addDynamicLayer(l);
        }); 

        // map.addSource('some id', {
        //     type: 'geojson',
        //     // data: 'http://overpass-api.de/api/interpreter?data=node[amenity=school](bbox);out;(way[amenity=school](bbox);node(w););out;'
        //     // data: 'http://overpass-api.de/api/interpreter?data=node[name=%22Im Tannenbusch%22][highway=bus_stop];out+skel;'
        //     data: 'https://firebasestorage.googleapis.com/v0/b/ciclomapa-app.appspot.com/o/ciclomapa-Nitero%CC%81i%2C%20Rio%20De%20Janeiro%2C%20Brazil.json?alt=media&token=79733a19-009d-46f1-af7b-e55bb3dd9bb5'
        // });
    }

    componentDidUpdate(prevProps) {
        if (!map || !map.getSource('osm')) {
            return;
        }

        if (this.props.data !== prevProps.data) {
            map.getSource('osm').setData(this.props.data);
        }
        
        if (this.props.style !== prevProps.style) {
            map.setStyle(this.props.style);
        }
        
        // if (this.props.zoom !== prevProps.zoom) {
        //     map.setZoom(this.props.zoom);
        // }
        
        if (this.props.center !== prevProps.center) {
            map.setCenter(this.props.center);
        }
        
        // Compare only 'isActive' field of layers
        if (this.props.layers.map(l => l.isActive).join() === prevProps.layers.map(l => l.isActive).join()) {
            this.props.layers.forEach( l => {
                map.setLayoutProperty(l.id, 'visibility', l.isActive ? 'visible' : 'none');
                if (l.style.borderColor) {
                    map.setLayoutProperty(l.id+'--border', 'visibility', l.isActive ? 'visible' : 'none');
                }
            })
        }
    }
    
    componentDidMount() {
        this.reverseGeocode(this.props.center);

        mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
        
        map = new mapboxgl.Map({
            container: this.mapContainer,
            style: this.props.style,
            center: this.props.center,
            zoom: this.props.zoom
        });

        
        // Native Mapbox map controls

        const searchBar = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            language: 'pt-br',
            placeholder: 'Buscar endereços, estabelecimentos, ...',
            countries: 'br',
            // collapsed: true
        });
        map.addControl(searchBar, 'bottom-right');

        const cityPicker = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            language: 'pt-br',
            placeholder: 'Buscar cidades brasileiras',
            countries: 'br',
            types: 'place',
            marker: false,
            clearOnBlur: true
        });
        cityPicker.on('result', result => {
            console.debug('geocoder result', result);
            this.reverseGeocode(result.result.center);
            document.querySelector('body').classList.remove('show-city-picker');
            cityPicker.clear();
        });
        map.addControl(cityPicker, 'top-left');

        map.addControl(
            new mapboxgl.NavigationControl({
                showCompass: false
            }),
            'bottom-right'
        );
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }),
            'bottom-right'
        );
        // map.addControl(new mapboxgl.FullscreenControl({ container: document.querySelector('body') }));


        // Listeners

        map.on('load', () => {
            this.initLayers();
            this.onMapMoved();

            map.on('moveend', this.onMapMoved);

            // Further chages on styles reinitilizes layers
            map.on('style.load', () => {
                this.initLayers();
                this.onMapMoved();
            });
        });


        popup = new mapboxgl.Popup({
            closeOnClick: false
        });
        popup.on('close', e => {
            if (selectedCycleway) {
                map.setFeatureState({ source: 'osm', id: selectedCycleway }, { highlight: false });
            }
            selectedCycleway = null;
        });
    }

    render() {
        return (
            // Thanks https://blog.mapbox.com/mapbox-gl-js-react-764da6cc074a
            <div ref={el => this.mapContainer = el}></div>
        )
    }
}

export default Map;