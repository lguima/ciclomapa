(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,a){e.exports=a(247)},177:function(e,t,a){},178:function(e,t,a){},235:function(e,t,a){},244:function(e,t,a){},247:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(4),r=a.n(i),s=a(13),c=a(14),l=a(22),d=a(21),u=a(30),y=a(23),h=a(34),p=a(87),m=a(69),g=a(94),b=a(35),f=a.n(b),v=(a(135),a(117)),w=a.n(v),C=(a(163),a(118)),j=a.n(C);var k,O,S,x="pk.eyJ1IjoiY21kYWxiZW0iLCJhIjoiY2pnbXhjZnplMDJ6MjMzbnk0OGthZGE1ayJ9.n1flNO8ndRYKQcR9wNIT9w",M=-43.109811,E=-22.8948963,_=(a(177),j()({accessToken:x})),D=function(){function e(t){var a=t.className,n=void 0===a?"":a,o=t.title,i=void 0===o?"":o,r=t.eventHandler,c=void 0===r?null:r;Object(s.a)(this,e),this._className=n,this._title=i,this._eventHandler=c}return Object(c.a)(e,[{key:"onAdd",value:function(e){return this._btn=document.createElement("button"),this._btn.className="mapboxgl-ctrl-icon "+this._className,this._btn.type="button",this._btn.title=this._title,this._btn.onclick=this._eventHandler,this._container=document.createElement("div"),this._container.className="mapboxgl-ctrl-group mapboxgl-ctrl",this._container.appendChild(this._btn),this._container}},{key:"onRemove",value:function(){this._container.parentNode.removeChild(this._container),this._map=void 0}}]),e}(),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).onMapMoved=a.onMapMoved.bind(Object(u.a)(a)),a}return Object(y.a)(t,e),Object(c.a)(t,[{key:"showPopup",value:function(e){console.debug(e.features[0]);var t=e.lngLat,a=e.features[0].properties,n=this.props.layers.find(function(t){return t.id===e.features[0].layer.id.split("--")[0]}),o="";a.name?o+="<h2>".concat(a.name,"</h2>"):o+="<i>Sem nome</i>",o+="<p>Tipo: <b>".concat(n.name,"</b></p>"),o+=JSON.stringify(a,null,2).replace(/(?:\r\n|\r|\n)/g,"<br/>").replace(/"|,|\{|\}/g,""),o+='\n            <br>\n            <a\n                target="_BLANK"\n                rel="noopener"\n                href="https://www.openstreetmap.org/'.concat(a.id,'"\n            >\n                Editar no OSM\n            </a>\n    '),O.setLngLat(t).setHTML(o).addTo(k)}},{key:"hidePopup",value:function(){O.remove()}},{key:"getCurrentBBox",value:function(){if(k){var e=k.getBounds().getSouthWest(),t=k.getBounds().getNorthEast();return"".concat(e.lat,",").concat(e.lng,",").concat(t.lat,",").concat(t.lng)}return"-23.036345361742164,-43.270405878917785,-22.915284125684607,-43.1111041211104"}},{key:"onMapMoved",value:function(){var e=this,t=k.getCenter().lat,a=k.getCenter().lng,n=k.getZoom();_.reverseGeocode({query:[a,t],types:["place"],limit:1}).send().then(function(o){var i=o.body,r={lat:t,lng:a,zoom:n};console.debug("onMapMoved",i.features),i.features&&i.features[0]&&(r.area=i.features[0].place_name),e.props.onMapMoved(r)}).catch(function(e){console.error(e.message)})}},{key:"addDynamicLayer",value:function(e){var t=this,a=["any"].concat(Object(g.a)(e.filters.map(function(e){return"string"===typeof e[0]?["==",["get",e[0]],e[1]]:["all"].concat(Object(g.a)(e.map(function(e){return["==",["get",e[0]],e[1]]})))})));e.style.borderColor?(k.addLayer({id:e.id+"--border",type:"line",source:"osm",name:e.name,description:e.description,paint:Object(m.a)({"line-color":e.style.borderColor,"line-width":["case",["boolean",["feature-state","highlight"],!1],12,e.style.lineWidth]},"dashed"===e.style.borderStyle&&{"line-dasharray":[1,.6]}),filter:a}),k.addLayer({id:e.id,type:"line",source:"osm",name:e.name,description:e.description,paint:Object(m.a)({"line-color":e.style.lineColor,"line-width":["case",["boolean",["feature-state","highlight"],!1],12,e.style.lineWidth-e.style.borderWidth]},"dashed"===e.style.lineStyle&&{"line-dasharray":[1,.6]}),filter:a})):k.addLayer({id:e.id,type:"line",source:"osm",name:e.name,description:e.description,paint:Object(m.a)({"line-color":e.style.lineColor,"line-width":["case",["boolean",["feature-state","highlight"],!1],12,e.style.lineWidth]},"dashed"===e.style.lineStyle&&{"line-dasharray":[1,.6]}),filter:a});var n=e.style.borderColor?e.id+"--border":e.id;k.on("mouseenter",n,function(e){e.features.length>0&&(k.getCanvas().style.cursor="pointer")}),k.on("mouseleave",n,function(e){k.getCanvas().style.cursor=""}),k.on("click",n,function(e){e.features.length>0&&(S&&k.setFeatureState({source:"osm",id:S},{highlight:!1}),S=e.features[0].id,k.setFeatureState({source:"osm",id:S},{highlight:!0}),t.showPopup(e))})}},{key:"initLayers",value:function(){var e=this;k.addSource("osm",{type:"geojson",data:this.props.data||{type:"FeatureCollection",features:[]},generateId:!0}),this.props.layers.slice().reverse().forEach(function(t){e.addDynamicLayer(t)})}},{key:"componentDidUpdate",value:function(e){k&&k.getSource("osm")&&(this.props.data!==e.data&&k.getSource("osm").setData(this.props.data),this.props.style!==e.style&&k.setStyle(this.props.style),this.props.center!==e.center&&k.setCenter(this.props.center),this.props.layers.map(function(e){return e.isActive}).join()===e.layers.map(function(e){return e.isActive}).join()&&this.props.layers.forEach(function(e){k.setLayoutProperty(e.id,"visibility",e.isActive?"visible":"none"),e.style.borderColor&&k.setLayoutProperty(e.id+"--border","visibility",e.isActive?"visible":"none")}))}},{key:"componentDidMount",value:function(){var e=this;f.a.accessToken=x,(k=new f.a.Map({container:this.mapContainer,style:this.props.style,center:this.props.center,zoom:this.props.zoom})).addControl(new f.a.NavigationControl({showCompass:!1}),"bottom-right"),k.addControl(new f.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}),"bottom-right"),k.addControl(new w.a({accessToken:f.a.accessToken,mapboxgl:f.a}),"top-left"),k.addControl(new D({className:"mapbox-gl-download-btn",title:"Download",eventHandler:function(t){!function(e,t){var a="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),n=document.createElement("a");n.setAttribute("href",a),n.setAttribute("download",t+".json"),document.body.appendChild(n),n.click(),n.remove()}(e.props.data,"mapa-cicloviario-".concat(void 0))}}),"bottom-right"),k.on("load",function(){e.initLayers(),e.onMapMoved(),k.on("moveend",e.onMapMoved),k.on("style.load",function(){e.initLayers(),e.onMapMoved()})}),(O=new f.a.Popup({closeOnClick:!1})).on("close",function(e){S&&k.setFeatureState({source:"osm",id:S},{highlight:!1}),S=null})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{ref:function(t){return e.mapContainer=t}})}}]),t}(n.Component),N=(a(178),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"spinner",className:"loader-container"},o.a.createElement("div",{className:"loader"},o.a.createElement("svg",{className:"circular",viewBox:"25 25 50 50"},o.a.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"6",strokeMiterlimit:"10"}))))}}]),t}(n.Component)),A=a(248),z=A.a.Option,W=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.props.onMapStyleChange(e)}},{key:"render",value:function(){return o.a.createElement(A.a,{defaultValue:"Mapa light",optionFilterProp:"children",onChange:this.onChange.bind(this),style:{position:"fixed",top:"10px",right:"10px",width:"200px"}},o.a.createElement(z,{value:"mapbox://styles/cmdalbem/cjxseldep7c0a1doc7ezn6aeb"},"Mapa light"),o.a.createElement(z,{value:"mapbox://styles/mapbox/streets-v11"},"Mapa normal"),o.a.createElement(z,{value:"mapbox://styles/cmdalbem/cjgmxgkbw000n2rqtucat5zjz"},"Dorsia"),o.a.createElement(z,{value:"mapbox://styles/cmdalbem/cjxsdwb907bfi1cqevxio2bst"},"Mapa com sat\xe9lite"))}}]),t}(n.Component),J=a(249),I=a(18),P=a(251),R=(a(235),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e,t){this.props.onLayersChange(e,t)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"layers-panel"},this.props.layers&&this.props.layers.map(function(t){return o.a.createElement("div",{key:t.name,className:"layer-row",onClick:e.onChange.bind(e,t.id,!t.isActive)},o.a.createElement("div",null,o.a.createElement("span",{className:"layer-miniature",style:{height:2*t.style.lineWidth,background:"solid"===t.style.lineStyle?t.style.lineColor:"repeating-linear-gradient(90deg, ".concat(t.style.lineColor,", ").concat(t.style.lineColor," 3px, white 3px, white 6px)"),borderColor:t.style.borderColor,borderStyle:t.style.borderStyle,borderWidth:t.style.borderWidth?t.style.borderWidth/2:"0",borderLeft:"none",borderRight:"none"}}),o.a.createElement("span",{className:"layer-name"},t.name)),o.a.createElement("div",null,t.description&&o.a.createElement("div",{style:{marginRight:"6px"}},o.a.createElement(J.a,{placement:"left",title:t.description},o.a.createElement(I.a,{type:"question-circle",style:{opacity:".5"}}))),o.a.createElement(P.a,{size:"small",checked:t.isActive})))}))}}]),t}(n.Component)),q=a(127),B=a.n(q),F=a(90),U=a.n(F),T=a(250),H=a(68),Z=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"getQuery",value:function(e){var t=e.bbox,a=e.areaId,n=H.map(function(e){return e.filters.map(function(e){return"way"+("string"===typeof e[0]?'["'.concat(e[0],'"="').concat(e[1],'"]'):e.map(function(e){return'["'.concat(e[0],'"="').concat(e[1],'"]')}).join(""))+(t?"(".concat(t,");\n"):"(area.a);\n")}).join("")}).join("");return"\n            [out:json][timeout:100];\n            ".concat(!t&&"area(".concat(a,")->.a;"),"\n            (\n                ").concat(n,"\n            );\n            out body geom;\n        ")}},{key:"massageLayersData",value:function(){return H.forEach(function(e){e.style.lineStyle=e.style.lineStyle||"solid",e.isActive=void 0===e.isActive||e.isActive,e.style.borderColor&&(e.style.borderStyle=e.style.borderStyle||"solid",e.style.borderWidth=3),e.id=function(e){var t="\xe0\xe1\xe4\xe2\xe3\xe5\u0103\xe6\xe7\xe8\xe9\xeb\xea\u01f5\u1e27\xec\xed\xef\xee\u1e3f\u0144\u01f9\xf1\xf2\xf3\xf6\xf4\u0153\xf8\u1e55\u0155\xdf\u015b\u0219\u021b\xf9\xfa\xfc\xfb\u01d8\u1e83\u1e8d\xff\u017a\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,function(e){return"aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------".charAt(t.indexOf(e))}).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}(e.name)}),H}},{key:"getLayers",value:function(){return this.massageLayersData()}},{key:"getData",value:function(t){return new Promise(function(a,n){var o;U.a.getJSON("https://nominatim.openstreetmap.org/search?format=json&q=".concat(encodeURI(t.area)),function(t){console.debug("nominatimData",t);var i=36e8+t[0].osm_id,r=e.getQuery({areaId:i});console.debug("generated query: ",r);var s=encodeURI(r);U.a.getJSON("https://overpass.kumi.systems/api/interpreter?data=".concat(s),function(e){console.debug("osm data: ",e),o=B()(e,{flatProperties:!0}),console.debug("converted to geoJSON: ",o),a({geoJson:o})}).fail(function(e){console.error("Deu erro! Saca s\xf3:",e),T.a.error({message:"Erro",description:"Ops, erro na API do Overpass. Abra o console para ver mais detalhes."}),n()})}).fail(function(e){console.error("Deu erro! Saca s\xf3:",e),T.a.error({message:"Erro",description:"Ops, erro na API do Nominatim. Abra o console para ver mais detalhes."}),n()})})}}]),e}(),G=(a(243),a(244),function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).updateData=a.updateData.bind(Object(u.a)(a)),a.onMapStyleChange=a.onMapStyleChange.bind(Object(u.a)(a)),a.onMapMoved=a.onMapMoved.bind(Object(u.a)(a)),a.onLayersChange=a.onLayersChange.bind(Object(u.a)(a));var n=a.getParamsFromURL();return a.state={geoJson:null,loading:!1,layers:Z.getLayers(),mapStyle:"mapbox://styles/cmdalbem/cjxseldep7c0a1doc7ezn6aeb",zoom:n.z||13,area:"Niter\xf3i, Rio De Janeiro, Brazil",center:[n.lng||M,n.lat||E]},a.state.area&&a.updateData(),a}return Object(y.a)(t,e),Object(c.a)(t,[{key:"getParamsFromURL",value:function(){var e=new URLSearchParams(this.props.location.search),t={};return["z","lat","lng"].forEach(function(a){var n=e.get(a);n&&(t[a]=n)}),t}},{key:"isDataFresh",value:function(e){return new Date-new Date(e.updatedAt)<6048e5}},{key:"updateData",value:function(){var e=this;this.state.zoom>10&&this.state.area?Object(p.a)(this.state.area).then(function(t){console.debug("IndexedDB result:",t),t&&e.isDataFresh(t)?(console.debug("IndexedDB data is fresh."),e.setState({geoJson:t.geoJson})):(console.debug("Couldn't find data for area ".concat(e.state.area," or it isn't fresh, hitting OSM...")),e.setState({loading:!0}),Z.getData({area:e.state.area}).then(function(t){Object(p.b)(e.state.area,{geoJson:t.geoJson,updatedAt:new Date}),e.setState({geoJson:t.geoJson,loading:!1})}))}).catch(function(e){T.a.error({message:"Erro",description:"Ocorreu um erro ao tentar recuperar os dados salvos no IndexedDB."})}):this.setState({loading:!1})}},{key:"onMapStyleChange",value:function(e){this.setState({mapStyle:e})}},{key:"onLayersChange",value:function(e,t){var a=Object.assign([],this.state.layers);a.filter(function(t){return t.id===e})[0].isActive=t,this.setState({layers:a})}},{key:"componentDidUpdate",value:function(e,t){if(this.props.location!==e.location&&this.onRouteChanged(),this.state.area!==t.area&&(console.debug("Changed area from ".concat(t.area," to ").concat(this.state.area)),this.updateData()),this.state.zoom!==t.zoom||this.state.lat!==t.lat||this.state.lng!==t.lng){var a="?";a+="lat=".concat(this.state.lat.toFixed(7)),a+="&lng=".concat(this.state.lng.toFixed(7)),a+="&z=".concat(this.state.zoom.toFixed(2)),this.props.history.push({search:a})}}},{key:"onRouteChanged",value:function(){}},{key:"onMapMoved",value:function(e){this.setState(e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(L,{data:this.state.geoJson,layers:this.state.layers,style:this.state.mapStyle,zoom:this.state.zoom,center:this.state.center,updateData:this.updateData,onMapMoved:this.onMapMoved}),o.a.createElement("h1",{className:"areaName"},this.state.area),o.a.createElement(W,{onMapStyleChange:this.onMapStyleChange}),o.a.createElement(R,{layers:this.state.layers,onLayersChange:this.onLayersChange}),this.state.loading&&o.a.createElement(N,null))}}]),t}(n.Component)),V=Object(h.d)(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(86);r.a.render(o.a.createElement(Y.a,null,o.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e){e.exports=[{name:"Cyclestreets",description:"Estradas ou ruas exclusivas para bicicletas.",filters:[["cycleway","cyclestreet"],["bicycle_road","yes"],["cyclestreet","yes"]],style:{lineColor:"#57c8b1",lineWidth:6,borderColor:"#347c6d",borderStyle:"solid"}},{name:"Ciclovia",description:"\xc9 um espa\xe7o segregado para fluxo de bicicletas. Isso significa que h\xe1 uma separa\xe7\xe3o f\xedsica isolando os ciclistas dos demais ve\xedculos. A maioria das ciclovias de orla de praia s\xe3o exemplos de vias segregadas.",filters:[["highway","cycleway"],["cycleway","track"],["cycleway:left","track"],["cycleway:right","track"],["cycleway","opposite_track"],["cycleway:left","opposite_track"],["cycleway:right","opposite_track"],[["highway","path"],["bicycle","designated"]],[["highway","path"],["bicycle","yes"]],[["highway","footway"],["bicycle","designated"]],[["highway","footway"],["bicycle","yes"]],[["highway","pedestrian"],["bicycle","designated"]],[["highway","pedestrian"],["bicycle","yes"]],[["highway","steps"],["bicycle","designated"]],[["highway","steps"],["bicycle","yes"]]],style:{lineColor:"#65df97",lineWidth:6,borderColor:"#4ba96e",borderStyle:"solid"}},{name:"Ciclofaixa",description:"\xc9 quando h\xe1 apenas uma faixa pintada no ch\xe3o, sem separa\xe7\xe3o f\xedsica de qualquer tipo (inclusive cones ou cavaletes). Pode haver \u201colhos de gato\u201d ou no m\xe1ximo os tach\xf5es do tipo \u201ctartaruga\u201d, como os que separam as faixas de \xf4nibus.",filters:[["cycleway","lane"],["cycleway:left","lane"],["cycleway:right","lane"],["cycleway:both","lane"],["cycleway","opposite_lane"],["cycleway:right","opposite_lane"],["cycleway:left","opposite_lane"]],style:{lineColor:"#b4fad0",lineWidth:5,borderColor:"#69b991",borderStyle:"solid"}},{name:"Ciclorota",description:"O conceito original de ciclorrota (ou ciclo-rota) \xe9 o um caminho, sinalizado ou n\xe3o, que representa a rota recomendada para o ciclista, seja para chegar a um destino ou para fazer um circuito tur\xedstico ou esportivo. Representa efetivamente um trajeto, n\xe3o uma faixa da via, um trecho segregado ou uma zona de seguran\xe7a (embora uma ciclorrota possa se utilizar parcial ou totalmente desses recursos, ou at\xe9 mesmo de ciclovias).",filters:[["cycleway","sidepath"],["cycleway:left","sidepath"],["cycleway:right","sidepath"],["cycleway","buffered_lane"],["cycleway:left","buffered_lane"],["cycleway:right","buffered_lane"],["cycleway","shared_lane"],["cycleway:left","shared_lane"],["cycleway:right","shared_lane"],["cycleway","share_busway"],["cycleway:left","share_busway"],["cycleway:right","share_busway"],["cycleway","opposite_share_busway"]],style:{lineColor:"orange",lineWidth:3}},{name:"Zona 30",description:"Vias com limite de velocidade de 30km/h",isActive:!1,filters:[["maxspeed","30"],[["highway","living_street"],["bicycle","yes"]],[["highway","unclassified"],["bicycle","yes"]]],style:{lineColor:"orange",lineWidth:2,lineStyle:"dashed"}},{name:"Off road",description:"Vias n\xe3o pavimentadas, normalmente em \xe1reas rurais, acess\xedveis de bicicleta.",isActive:!1,filters:[[["highway","track"],["bicycle","designated"]],[["highway","track"],["bicycle","yes"]]],style:{lineColor:"#996633",lineWidth:3,lineStyle:"dashed"}},{name:"Proibido",description:"Vias onde expressamente n\xe3o \xe9 permitido passar de bicicleta.",isActive:!1,filters:[["bicycle","no"],["bicycle","dismount"],["bicycle","use_sidepath"]],style:{lineColor:"gray",lineWidth:2,lineStyle:"dashed"}}]}},[[130,1,2]]]);
//# sourceMappingURL=main.e6abd8fa.chunk.js.map