(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){e.exports=a.p+"static/media/itdp.c441e7e0.png"},137:function(e,t,a){e.exports=a.p+"static/media/ucb.8a36a689.png"},138:function(e,t,a){e.exports=a.p+"static/media/logo_green.d4480602.svg"},143:function(e,t,a){e.exports=a.p+"static/media/normal.9a5dc9c9.png"},144:function(e,t,a){e.exports=a.p+"static/media/satelite.a853a709.png"},155:function(e,t,a){e.exports=a(287)},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},255:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},284:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(4),i=a.n(r),s=a(153),c=a(10),l=a(11),d=a(19),p=a(17),u=a(22),h=a(20),m=a(40),y=a(292),f=(a(160),a(130)),g=a(106),b=a(27),v=a.n(b),w=(a(161),a(131)),k=a.n(w),O=a(94),S=a.n(O),C=(a(192),a(132)),E=a.n(C),j="pk.eyJ1IjoiY21kYWxiZW0iLCJhIjoiY2pnbXhjZnplMDJ6MjMzbnk0OGthZGE1ayJ9.n1flNO8ndRYKQcR9wNIT9w",M=-38.5225359,D=-3.7719909,L=10.9,x=window.matchMedia&&window.matchMedia("(max-width: ".concat("430px",")")).matches;a(206);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var N=E()({accessToken:j}),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onMapMoved=a.onMapMoved.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"showPopup",value:function(e){var t=e.lngLat,a=e.features[0].properties,o=this.props.layers.find(function(t){return t.id===e.features[0].layer.id.split("--")[0]}),n="";a.name?n+="<h2>".concat(a.name,"</h2>"):n+="<i>Sem nome</i>",n+="<p>Tipo: <b>".concat(o.name,"</b></p>"),n+='\n            <a\n                target="_BLANK"\n                rel="noopener"\n                href="https://www.openstreetmap.org/'.concat(a.id,'"\n            >\n                Editar no OSM \u203a\n            </a>\n    '),this.popup.setLngLat(t).setHTML(n).addTo(this.map)}},{key:"showHoverPopup",value:function(e){var t=e.lngLat,a=this.props.layers.find(function(t){return t.id===e.features[0].layer.id.split("--")[0]});this.hoverPopup.setLngLat(t).setHTML("<h3>".concat(a.name,"<h3>")).addTo(this.map)}},{key:"hidePopup",value:function(){this.popup.remove()}},{key:"getCurrentBBox",value:function(){if(this.map){var e=this.map.getBounds().getSouthWest(),t=this.map.getBounds().getNorthEast();return"".concat(e.lat,",").concat(e.lng,",").concat(t.lat,",").concat(t.lng)}return"-23.036345361742164,-43.270405878917785,-22.915284125684607,-43.1111041211104"}},{key:"reverseGeocode",value:function(e){var t=this;console.debug("lngLat",e),e&&e[0]&&e[1]?(this.map.setMaxBounds(),N.reverseGeocode({query:e,types:["place"],limit:1}).send().then(function(e){var a=e.body.features;if(console.debug("reverseGeocode",a),a&&a[0]){var o=a[0];t.searchBar&&t.searchBar.setBbox(o.bbox),t.map.once("moveend",function(){t.map.setMaxBounds([[o.bbox[0]-.15,o.bbox[1]-.15],[o.bbox[2]+.15,o.bbox[3]+.15]])}),t.props.onMapMoved({area:o.place_name})}}).catch(function(e){console.error(e.message)})):console.error("Something wrong with lngLat passed.")}},{key:"onMapMoved",value:function(){var e=this.map.getCenter().lat,t=this.map.getCenter().lng,a=this.map.getZoom();this.props.onMapMoved({lat:e,lng:t,zoom:a})}},{key:"getMapboxFilterForLayer",value:function(e){return["any"].concat(Object(g.a)(e.filters.map(function(e){return"string"===typeof e[0]?["==",["get",e[0]],e[1]]:["all"].concat(Object(g.a)(e.map(function(e){return["==",["get",e[0]],e[1]]})))})))}},{key:"addDynamicLayer",value:function(e){var t=this,a=this.getMapboxFilterForLayer(e);e.style.borderColor?(this.map.addLayer({id:e.id+"--border",type:"line",source:"osm",name:e.name,description:e.description,paint:F({"line-color":e.style.borderColor,"line-width":["interpolate",["exponential",1.5],["zoom"],10,2,18,3*e.style.lineWidth]},"dashed"===e.style.borderStyle&&{"line-dasharray":[1,.6]}),filter:a},"road-label-small"),this.map.addLayer({id:e.id,type:"line",source:"osm",name:e.name,description:e.description,paint:F({"line-color":e.style.lineColor,"line-width":["interpolate",["exponential",1.5],["zoom"],10,2,18,3*(e.style.lineWidth-e.style.borderWidth)]},"dashed"===e.style.lineStyle&&{"line-dasharray":[1,.6]}),filter:a},"road-label-small")):this.map.addLayer({id:e.id,type:"line",source:"osm",name:e.name,description:e.description,paint:F({"line-color":e.style.lineColor,"line-width":["interpolate",["exponential",1.5],["zoom"],10,2,18,3*e.style.lineWidth]},"dashed"===e.style.lineStyle&&{"line-dasharray":[1,.6]}),filter:a},"road-label-small");var o=e.style.borderColor?e.id+"--border":e.id;this.map.on("mouseenter",o,function(e){e.features.length>0&&(t.map.getCanvas().style.cursor="pointer")}),this.map.on("mouseleave",o,function(e){t.map.getCanvas().style.cursor=""}),this.map.on("click",o,function(e){e.features.length>0&&(t.selectedCycleway&&t.map.setFeatureState({source:"osm",id:t.selectedCycleway},{highlight:!1}),t.selectedCycleway=e.features[0].id,t.map.setFeatureState({source:"osm",id:t.selectedCycleway},{highlight:!0}),t.showPopup(e))})}},{key:"initLayers",value:function(){var e=this;console.debug("initLayers"),this.map.addSource("osm",{type:"geojson",data:this.props.data||{type:"FeatureCollection",features:[]},generateId:!0}),this.props.layers.slice().reverse().forEach(function(t){e.addDynamicLayer(t)}),this.map.on("sourcedata",function(t){if(t.isSourceLoaded){var a={};e.props.layers.forEach(function(t){var o=e.map.querySourceFeatures("osm",{filter:e.getMapboxFilterForLayer(t)}),n=0;o.forEach(function(e){n+=k()(e)}),console.debug("".concat(t.name,": ").concat(n,"km")),a[t.id]=n}),e.props.updateLengths(a)}})}},{key:"componentDidUpdate",value:function(e){var t=this;this.map&&this.map.getSource("osm")&&(this.props.data!==e.data&&this.map.getSource("osm").setData(this.props.data),this.props.showSatellite!==e.showSatellite&&this.map.setLayoutProperty("satellite","visibility",this.props.showSatellite?"visible":"none"),this.props.center!==e.center&&this.map.setCenter(this.props.center),this.props.layers.map(function(e){return e.isActive}).join()===e.layers.map(function(e){return e.isActive}).join()&&this.props.layers.forEach(function(e){t.map.setLayoutProperty(e.id,"visibility",e.isActive?"visible":"none"),e.style.borderColor&&t.map.setLayoutProperty(e.id+"--border","visibility",e.isActive?"visible":"none")}))}},{key:"componentDidMount",value:function(){var e=this;v.a.accessToken=j,this.map=new v.a.Map({container:this.mapContainer,style:this.props.style,center:this.props.center,zoom:this.props.zoom}),x||(this.searchBar=new S.a({accessToken:v.a.accessToken,mapboxgl:v.a,language:"pt-br",placeholder:"Buscar endere\xe7os, estabelecimentos, ...",countries:"br"}),this.map.addControl(this.searchBar,"bottom-right"));var t=new S.a({accessToken:v.a.accessToken,mapboxgl:v.a,language:"pt-br",placeholder:"Buscar cidades brasileiras",countries:"br",types:"place",marker:!1,clearOnBlur:!0,flyTo:!1});t.on("result",function(a){var o;console.debug("geocoder result",a),o="Vit\xf3ria, Esp\xedrito Santo, Brasil"===a.place_name?[-40.3144,-20.2944]:a.result.center,e.map.flyTo({center:o}),e.reverseGeocode(a.result.center),document.querySelector("body").classList.remove("show-city-picker"),t.clear()}),this.map.addControl(t,"top-left"),this.map.addControl(new v.a.NavigationControl({showCompass:!1}),"bottom-right");var a=new v.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!1});a.on("geolocate",function(t){console.debug("geolocate",t),e.reverseGeocode([t.coords.longitude,t.coords.latitude])}),this.map.addControl(a,"bottom-right"),this.map.on("load",function(){e.initLayers(),e.onMapMoved(),e.map.on("moveend",e.onMapMoved)}),this.popup=new v.a.Popup({closeOnClick:!1}),this.popup.on("close",function(t){e.selectedCycleway&&e.map.setFeatureState({source:"osm",id:e.selectedCycleway},{highlight:!1}),e.selectedCycleway=null}),this.hoverPopup=new v.a.Popup({closeButton:!1,className:"hover-popup"}),this.reverseGeocode(this.props.center)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{ref:function(t){return e.mapContainer=t}})}}]),t}(o.Component),z=(a(207),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.area.split(",")[0];return n.a.createElement("div",{id:"spinner",className:"loader-container"},n.a.createElement("div",{className:"loader"},this.props.error?n.a.createElement("div",null,n.a.createElement("div",{style:{fontSize:"42px"}},n.a.createElement("span",{role:"img","aria-label":"Emoji triste"},"\ud83d\ude13")),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Ops!"),n.a.createElement("div",null,"O OSM est\xe1 mal humorado neste momento. Atualize a p\xe1gina para tentar denovo."))):n.a.createElement("div",null,n.a.createElement("svg",{className:"spinnersvg",viewBox:"25 25 50 50"},n.a.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"6",strokeMiterlimit:"10"})),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Carregando mapa ciclovi\xe1rio de ",n.a.createElement("b",null,e),"."),n.a.createElement("div",null,"Como \xe9 a primeira vez que voc\xea carrega esta cidade pode demorar um pouquinho :)")))))}}]),t}(o.Component)),B=(a(208),a(56)),P=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onClose",value:function(){document.querySelector("body").classList.remove("show-city-picker")}},{key:"render",value:function(){return n.a.createElement("div",{id:"backdrop",onClick:this.onClose},n.a.createElement(B.a,{id:"closeBtn",type:"link",size:"large",onClick:this.onClose},"Cancelar"))}}]),t}(o.Component),U=a(291),W=a(15),_=a(288),T=a(289),R=a(51),I=a(136),q=a.n(I),G=a(137),V=a.n(G),K=a(138),H=a.n(K),Y=(a(255),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"info",value:function(){U.a.info({title:"Sobre",className:"about-modal",content:n.a.createElement("div",null,n.a.createElement("p",null,"A plataforma CicloMapa \xe9 uma ferramenta que buscar ampliar a visibilidade das infraestruturas ciclovi\xe1rias mapeadas no OpenStreetMap e engajar uma comunidade de mapeadores para atualiza\xe7\xe3o colaborativa de dados e incid\xeancia em pol\xedticas p\xfablicas de mobilidade urbana."),n.a.createElement("p",null,"Este \xe9 um projeto Open Source, e seu c\xf3digo pode ser encontrado no ",n.a.createElement("a",{href:"https://github.com/cmdalbem/ciclomapa/"},"GitHub"),"."),n.a.createElement("div",null,"Apoio:",n.a.createElement("div",{className:"logos"},n.a.createElement("a",{href:"http://itdpbrasil.org",target:"_BLANK",rel:"noopener noreferrer"},n.a.createElement("img",{src:q.a,alt:"Logo do ITDP"})),n.a.createElement("a",{href:"https://www.uniaodeciclistas.org.br/",target:"_BLANK",rel:"noopener noreferrer"},n.a.createElement("img",{src:V.a,alt:"Logo da UCB"}))))),onOk:function(){}})}},{key:"showCityPicker",value:function(){var e=document.querySelector("body");e.classList.add("show-city-picker"),e.querySelector(".mapboxgl-ctrl-top-left .mapboxgl-ctrl-geocoder input").focus()}},{key:"componentDidMount",value:function(){var e=this;Object(R.a)("hasSeenWelcomeMsg").then(function(t){t||(e.info(),Object(R.b)("hasSeenWelcomeMsg",!0))})}},{key:"render",value:function(){var e,t=this.props.title.split(","),a=t[0],o=t[1],r="Bras\xedlia"===a;return this.props.lastUpdate&&(e=this.props.lastUpdate.toLocaleString("pt-BR")),n.a.createElement("div",{className:"topbar",style:{height:64}},n.a.createElement("h1",{id:"logo"},n.a.createElement("img",{src:H.a,alt:"CICLOMAPA"})),n.a.createElement("div",null,n.a.createElement(B.a,{size:x?"default":"large",onClick:this.showCityPicker},n.a.createElement("h3",{className:"areaname"},n.a.createElement("span",{className:"state"},o),n.a.createElement("span",{className:"city"},a),n.a.createElement(W.a,{type:"down",size:"small",style:{fontSize:"16px",color:"#4ba96e"}}))),e&&n.a.createElement("span",{className:"data-tooltip"},n.a.createElement(_.a,{placement:"bottom",content:n.a.createElement("div",{style:{maxWidth:300}},n.a.createElement("div",null,"Dados obtidos do OpenStreetMaps em ",n.a.createElement("b",null,e),"."),n.a.createElement(B.a,{size:"small",icon:"redo",type:"danger",ghost:!0,onClick:this.props.forceUpdate,disabled:r},"Atualizar"),r&&n.a.createElement("div",{style:{fontStyle:"italic",fontSize:""}},"Esta cidade n\xe3o pode ser atualizada automaticamente.")),arrowPointAtCenter:!0},n.a.createElement(W.a,{type:"info-circle",style:{marginLeft:"8px"}})))),n.a.createElement("div",{className:"nav-links"},n.a.createElement(B.a,{size:"large",type:"link",onClick:this.info},"Sobre"),n.a.createElement(T.a,{type:"vertical"}),n.a.createElement(B.a,{size:"large",type:"link",onClick:this.props.downloadData,disabled:r,style:{opacity:r?.5:1}},n.a.createElement(W.a,{type:"download"})," Dados")))}}]),t}(o.Component)),Z=a(143),Q=a.n(Z),$=a(144),X=a.n($),ee=(a(258),function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={selected:0},a.options=[{name:"dark",img:Q.a},{name:"satellite",img:X.a}],a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(this.state!==t){var a=this.options[this.state.selected];this.props.onMapShowSatelliteChanged("satellite"===a.name)}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"switcher-bar"},this.options.map(function(t,a){return n.a.createElement("div",{onClick:function(){return e.setState({selected:a})},className:e.state.selected===a?"selected":"",key:t.img},n.a.createElement("img",{src:t.img,alt:""}))}))}}]),t}(o.Component)),te=a(151),ae=a(290),oe=(a(259),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e,t){this.props.onLayersChange(e,t)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"layers-panel"},this.props.layers&&this.props.layers.map(function(t){return n.a.createElement(te.a,{placement:"left",title:t.description,arrowPointAtCenter:!0,key:t.name},n.a.createElement("div",{className:"layer-row",onClick:e.onChange.bind(e,t.id,!t.isActive),style:{opacity:t.isActive?1:.5}},n.a.createElement("div",null,n.a.createElement("span",{className:"layer-miniature",style:{height:2*t.style.lineWidth,background:"solid"===t.style.lineStyle?t.style.lineColor:"repeating-linear-gradient(90deg, ".concat(t.style.lineColor,", ").concat(t.style.lineColor," 3px, transparent 3px, transparent 6px)"),borderColor:t.style.borderColor,borderStyle:t.style.borderStyle,borderWidth:t.style.borderWidth?t.style.borderWidth/2:"0",borderLeft:"none",borderRight:"none"}}),n.a.createElement("span",{className:"layer-name"},t.name),e.props.lengths&&Object.keys(e.props.lengths).length>0&&e.props.lengths[t.id]>0&&n.a.createElement("span",{className:"layer-length",style:{fontWeight:300,opacity:.5}},Math.round(e.props.lengths[t.id]),"km")),n.a.createElement(ae.a,{size:"small",checked:t.isActive})))}))}}]),t}(o.Component)),ne=a(146),re=a.n(ne),ie=a(100),se=a.n(ie),ce=a(147);function le(e){var t="\xe0\xe1\xe4\xe2\xe3\xe5\u0103\xe6\xe7\xe8\xe9\xeb\xea\u01f5\u1e27\xec\xed\xef\xee\u1e3f\u0144\u01f9\xf1\xf2\xf3\xf6\xf4\u0153\xf8\u1e55\u0155\xdf\u015b\u0219\u021b\xf9\xfa\xfc\xfb\u01d8\u1e83\u1e8d\xff\u017a\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,function(e){return"aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------".charAt(t.indexOf(e))}).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}var de={undefined:function(){return 0},boolean:function(){return 4},number:function(){return 8},string:function(e){return 2*e.length},object:function(e){return e?Object.keys(e).reduce(function(t,a){return pe(a)+pe(e[a])+t},0):0}},pe=function(e){return de[typeof e](e)},ue=a(72),he=["https://overpass.kumi.systems/api/interpreter","https://overpass-api.de/api/interpreter","http://overpass.openstreetmap.fr/api/interpreter","http://overpass.osm.ch/api/interpreter","https://overpass.nchc.org.tw"],me=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"getQuery",value:function(e){var t=e.bbox,a=e.areaId,o=ue.map(function(e){return e.filters.map(function(e){return"way"+("string"===typeof e[0]?'["'.concat(e[0],'"="').concat(e[1],'"]'):e.map(function(e){return'["'.concat(e[0],'"="').concat(e[1],'"]')}).join(""))+(t?"(".concat(t,");\n"):"(area.a);\n")}).join("")}).join("");return"\n            [out:json][timeout:500];\n            ".concat(!t&&"area(".concat(a,")->.a;"),"\n            (\n                ").concat(o,"\n            );\n            out body geom;\n        ")}},{key:"massageLayersData",value:function(){return ue.forEach(function(e){e.style.lineStyle=e.style.lineStyle||"solid",e.isActive=void 0===e.isActive||e.isActive,e.style.borderColor&&(e.style.borderStyle=e.style.borderStyle||"solid",e.style.borderWidth=e.style.borderWidth||3),e.id=le(e.name)}),ue}},{key:"getLayers",value:function(){return this.massageLayersData()}},{key:"getData",value:function(t){return new Promise(function(a,o){var n;se.a.getJSON("https://nominatim.openstreetmap.org/search?format=json&q=".concat(encodeURI(t.area)),function(o){var r;console.debug("nominatimData",o),r="Vit\xf3ria, Espirito Santo, Brazil"===t.area?3601825817:36e8+o[0].osm_id;var i=e.getQuery({areaId:r});console.debug("generated query: ",i);for(var s=encodeURI(i),c=[],l=function(e){var t=he[e]+"?data="+s;console.debug(e+" OSM server: "+he[e]),c[e]=se.a.getJSON(t,function(t){if(t.elements.length>0){console.debug("SUCCESS! @ "+e);for(var o=0;o<c.length;o++)o!==e&&(console.debug("Aborting "+o),c[o].abort());console.debug("osm data: ",t),n=re()(t,{flatProperties:!0}),console.debug("converted to geoJSON: ",n),a({geoJson:n})}else{console.debug("Server ".concat(e," returned an empty result."));for(var r=!0,i=0;i<c.length;i++)i!==e&&void 0===c[i].status&&(r=!1);r&&(console.debug("I was the last one, so probably the result is empty."),a({geoJson:null}))}}).fail(function(t){"abort"!==t.statusText&&console.error("Servidor ".concat(e," deu erro:"),t)})},d=0;d<he.length;d++)l(d)}).fail(function(e){console.error("Deu erro! Saca s\xf3:",e),y.a.error({message:"Erro",description:"Ops, erro na API do Nominatim. Abra o console para ver mais detalhes."}),o()})})}}]),e}(),ye=a(101),fe=a.n(ye),ge=a(102),be=a.n(ge),ve=!1;var we={apiKey:"AIzaSyDUbMY3UuyJ9vVVBblhUR9L1B3TV6a3eRU",authDomain:"ciclomapa-app.firebaseapp.com",databaseURL:"https://ciclomapa-app.firebaseio.com",projectId:"ciclomapa-app",storageBucket:"ciclomapa-app.appspot.com",messagingSenderId:"377722964538",appId:"1:377722964538:web:bc0fada0b3db0587514303"},ke=function(){function e(){Object(c.a)(this,e),fe.a.initializeApp({apiKey:we.apiKey,authDomain:we.authDomain,projectId:we.projectId}),this.db=fe.a.firestore()}return Object(l.a)(e,[{key:"getAllCitiesDocs",value:function(){var e=this;return new Promise(function(t){e.db.collection("cities").get().then(function(e){console.debug("[Firestore] Documents found:"),e.forEach(function(e){console.debug("\u2022 "+e.id," => ",e.data())}),t(e)})})}},{key:"compressJson",value:function(e){console.debug("Before: ",pe(e));var t=function(e){return be.a.deflate(JSON.stringify(e),{to:"string"})}(e);return console.debug("After: ",pe(t)),t}},{key:"saveToFirestore",value:function(e,t,a,o){var n=le(e);return 2===o&&(n+=2),this.db.collection("cities").doc(n).set({name:e,geoJson:t,updatedAt:a,part:o||""})}},{key:"save",value:function(e,t,a){var o=this;Object(R.b)(e,{geoJson:t,updatedAt:a});try{var n=JSON.stringify(t);console.debug("[Firebase] Saving document ".concat(e,"..."),t),this.saveToFirestore(e,n,a).then(function(){console.debug("[Firebase] Document ".concat(e," written successfully."))}).catch(function(t){console.debug("[Firestore] Failed saving full data, splitting in 2...");var r=n.slice(0,Math.ceil(n.length/2)),i=n.slice(Math.ceil(n.length/2));o.saveToFirestore(e,r,a,1).then(function(){console.debug("[Firebase] Document ".concat(e,"1 written successfully."))}).catch(function(e){console.error("[Firebase] Error adding document: ",e)}),o.saveToFirestore(e,i,a,2).then(function(){console.debug("[Firebase] Document ".concat(e,"2 written successfully."))}).catch(function(e){console.error("[Firebase] Error adding document: ",e)})})}catch(r){console.error(r)}}},{key:"getDataFromDB",value:function(e,t,a){var o=this;this.db.collection("cities").doc(e).get().then(function(n){if(n.exists){var r=n.data();if(console.debug("[Firebase] Document data:",r),1===r.part)return o.buffer=r.geoJson,o.getDataFromDB(e+"2",t,a);2===r.part&&(r.geoJson=o.buffer+r.geoJson),r.geoJson=JSON.parse(r.geoJson),r.updatedAt=r.updatedAt.toDate(),t(r)}else console.debug("[Firebase] No document for: ",e),t()}).catch(function(t){console.error("[Firebase] Error getting document: ".concat(e),t),a()})}},{key:"load",value:function(e){var t=this,a=le(e);return new Promise(function(e,o){t.getDataFromDB(a,e,o)})}}]),e}(),Oe=(a(284),function(e){var t=Object(m.d)(function(t){var a=t.forwardRef,o=Object(s.a)(t,["forwardRef"]);return n.a.createElement(e,Object.assign({ref:a},o))}),a=n.a.forwardRef(function(e,a){return n.a.createElement(t,Object.assign({},e,{forwardRef:a}))}),o=e.displayName||e.name;return a.displayName="withRouterAndRef(".concat(o,")"),a}(function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).updateData=a.updateData.bind(Object(u.a)(a)),a.onMapShowSatelliteChanged=a.onMapShowSatelliteChanged.bind(Object(u.a)(a)),a.onMapMoved=a.onMapMoved.bind(Object(u.a)(a)),a.onLayersChange=a.onLayersChange.bind(Object(u.a)(a)),a.downloadData=a.downloadData.bind(Object(u.a)(a)),a.forceUpdate=a.forceUpdate.bind(Object(u.a)(a)),a.updateLengths=a.updateLengths.bind(Object(u.a)(a));var o=a.getParamsFromURL();return a.state={geoJson:null,loading:!1,layers:me.getLayers(),mapStyle:"mapbox://styles/cmdalbem/ck14cy14g1vb81cp8hprnh4nx",showSatellite:!1,zoom:o.z||L,lengths:{},area:"",center:[parseFloat(o.lng)||M,parseFloat(o.lat)||D]},a.storage=new ke,a.state.area&&a.updateData(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"updateLengths",value:function(e){this.setState({lengths:e})}},{key:"getParamsFromURL",value:function(){var e=new URLSearchParams(this.props.location.search),t={};return["z","lat","lng"].forEach(function(a){var o=e.get(a);o&&(t[a]=o)}),t}},{key:"isDataFresh",value:function(e){return new Date-new Date(e.updatedAt)<6048e5}},{key:"forceUpdate",value:function(){this.updateData(!0)}},{key:"getDataFromOSM",value:function(e){var t=this;return me.getData({area:e}).then(function(a){var o=new Date;t.storage.save(e,a.geoJson,o),t.setState({geoJson:a.geoJson,dataUpdatedAt:o,loading:!1})}).catch(function(e){t.setState({error:!0})})}},{key:"updateData",value:function(e){var t=this;this.state.area?e?(this.setState({loading:!0}),this.getDataFromOSM(this.state.area)):"Bras\xedlia, Distrito Federal, Brazil"===this.state.area?this.setState({geoJson:"./ciclomapa-brasilia.geojson",dataUpdatedAt:new Date("Sun Sep 29 2019 19:04:25 GMT-0300 (Brasilia Standard Time)")}):this.storage.load(this.state.area,e).then(function(e){e&&t.isDataFresh(e)?(console.debug("Database data is fresh."),t.setState({geoJson:e.geoJson,dataUpdatedAt:new Date(e.updatedAt)})):(console.debug("Couldn't find data for area ".concat(t.state.area," or it isn't fresh, hitting OSM...")),t.setState({loading:!0}),t.getDataFromOSM(t.state.area))}).catch(function(e){y.a.error({message:"Erro",description:"Ocorreu um erro ao acessar o banco de dados."})}):this.setState({loading:!1})}},{key:"onMapShowSatelliteChanged",value:function(e){this.setState({showSatellite:e})}},{key:"onLayersChange",value:function(e,t){var a=Object.assign([],this.state.layers);a.filter(function(t){return t.id===e})[0].isActive=t,this.setState({layers:a})}},{key:"downloadData",value:function(){var e,t;e=this.state.geoJson,t=this.state.layers,e.features.forEach(function(e){ve&&console.debug("".concat(e.properties.id," (").concat(e.properties.name,")")),e.properties.type||t.forEach(function(t){var a=!1;t.filters.forEach(function(o){var n;n="object"===typeof o[0]?[!1,!1]:[!1],Object.keys(e.properties).forEach(function(t){"object"===typeof o[0]?(t===o[0][0]&&e.properties[t]===o[0][1]&&(n[0]=!0),t===o[1][0]&&e.properties[t]===o[1][1]&&(n[1]=!0)):t===o[0]&&e.properties[t]===o[1]&&(n[0]=!0)}),("object"===typeof o[0]&&n[0]&&n[1]||n[0])&&(e.properties.type=t.name,a=!0)}),ve&&console.debug(".  ".concat(t.name," ").concat(a?"\ud83d\udc4d":""))})}),function(e){e.features.forEach(function(e){Object.keys(e.properties).forEach(function(t){"id"!==t&&"name"!==t&&"type"!==t&&delete e.properties[t]})})}(this.state.geoJson),function(e,t){var a=new Blob([JSON.stringify(e)],{type:"application/json",name:t});Object(ce.saveAs)(a,t)}(this.state.geoJson,"ciclomapa-".concat(this.state.area))}},{key:"componentDidUpdate",value:function(e,t){if(this.props.location!==e.location&&this.onRouteChanged(),this.state.area!==t.area&&(console.debug("Changed area from ".concat(t.area," to ").concat(this.state.area)),this.updateData()),this.state.geoJson!==t.geoJson&&(!this.state.geoJson||this.state.geoJson.features&&0===this.state.geoJson.features.length)&&y.a.warning({message:"Ops",description:"N\xe3o h\xe1 dados ciclovi\xe1rios para esta cidade."}),this.state.zoom!==t.zoom||this.state.lat!==t.lat||this.state.lng!==t.lng){var a="?";a+="lat=".concat(this.state.lat.toFixed(7)),a+="&lng=".concat(this.state.lng.toFixed(7)),a+="&z=".concat(this.state.zoom.toFixed(2)),this.props.history.push({search:a})}}},{key:"onRouteChanged",value:function(){}},{key:"onMapMoved",value:function(e){this.setState(e)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(Y,{title:this.state.area,lastUpdate:this.state.dataUpdatedAt,downloadData:this.downloadData,onMapMoved:this.onMapMoved,forceUpdate:this.forceUpdate}),n.a.createElement(P,null),n.a.createElement(J,{ref:function(e){window.map=e},data:this.state.geoJson,layers:this.state.layers,style:this.state.mapStyle,zoom:this.state.zoom,center:this.state.center,showSatellite:this.state.showSatellite,updateData:this.updateData,onMapMoved:this.onMapMoved,updateLengths:this.updateLengths}),n.a.createElement(ee,{onMapShowSatelliteChanged:this.onMapShowSatelliteChanged}),n.a.createElement(oe,{layers:this.state.layers,lengths:this.state.lengths,onLayersChange:this.onLayersChange}),this.state.loading&&n.a.createElement(z,{area:this.state.area,error:this.state.error}))}}]),t}(o.Component)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=a(93);i.a.render(n.a.createElement(Se.a,null,n.a.createElement(Oe,{ref:function(e){window.ciclomapa=e}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e){e.exports=[{name:"Ciclovia",description:"Vias segregadas exclusivas para fluxo de bicicletas.",filters:[["highway","cycleway"],["cycleway","track"],["cycleway:left","track"],["cycleway:right","track"],["cycleway","opposite_track"],["cycleway:left","opposite_track"],["cycleway:right","opposite_track"]],style:{lineColor:"#65df97",lineWidth:6,borderColor:"#4ba96e",borderStyle:"solid"}},{name:"Ciclofaixa",description:"Vias sem segrega\xe7\xe3o f\xedsica destinadas exclusivamente \xe0 circula\xe7\xe3o de bicicletas delineadas por elementos delimitadores.",filters:[["cycleway","lane"],["cycleway:left","lane"],["cycleway:right","lane"],["cycleway:both","lane"],["cycleway","opposite_lane"],["cycleway:right","opposite_lane"],["cycleway:left","opposite_lane"]],style:{lineColor:"#b4fad0",lineWidth:5,borderColor:"#f0763a",borderStyle:"dashed"}},{name:"Ciclorota",description:"Vias com sinaliza\xe7\xe3o para o tr\xe1fego compartilhado com v\xe9iculos motorizados, com prefer\xeancia para bicicletas.",filters:[["cycleway","buffered_lane"],["cycleway:left","buffered_lane"],["cycleway:right","buffered_lane"],["cycleway","shared_lane"],["cycleway:left","shared_lane"],["cycleway:right","shared_lane"],["cycleway","share_busway"],["cycleway:left","share_busway"],["cycleway:right","share_busway"],["cycleway","opposite_share_busway"]],style:{lineColor:"#f8c9ae",lineWidth:4,borderColor:"#f0763a",borderStyle:"dashed",borderWidth:2}},{name:"Cal\xe7ada compartilhada",description:"Cal\xe7adas com sinaliza\xe7\xe3o para circula\xe7\xe3o compartilhada de bicicletas em que pedestres possuem a prioridade.",filters:[[["highway","footway"],["bicycle","designated"]],[["highway","pedestrian"],["bicycle","designated"]],[["highway","pedestrian"],["bicycle","yes"]],["cycleway","sidepath"],["cycleway:left","sidepath"],["cycleway:right","sidepath"]],style:{lineColor:"#f8c9ae",lineWidth:4,borderColor:"#f0763a",borderWidth:2}},{name:"Baixa velocidade",description:"Vias com limite de velocidade regulamentado de at\xe9 30km/h.",isActive:!1,filters:[["maxspeed","30"],["maxspeed","20"],[["highway","living_street"],["bicycle","yes"]]],style:{lineColor:"orange",lineWidth:2,lineStyle:"dashed"}},{name:"Trilha",description:"Caminhos geralmente n\xe3o pavimentados com acesso permitido ou destinado a bicicleta.",isActive:!1,filters:[[["highway","track"],["bicycle","designated"]],[["highway","track"],["bicycle","yes"]],[["highway","path"],["bicycle","designated"]],[["highway","path"],["bicycle","yes"]]],style:{lineColor:"#996633",lineWidth:2,lineStyle:"dashed"}},{name:"Proibido",description:"Vias onde \xe9 proibido pedalar em cima da bicicleta, mas voc\xea pode desmontar e passar empurrando ela.",isActive:!1,filters:[["bicycle","no"],["bicycle","dismount"]],style:{lineColor:"#F5222D",lineWidth:2,lineStyle:"dashed"}}]}},[[155,1,2]]]);
//# sourceMappingURL=main.b48b360a.chunk.js.map