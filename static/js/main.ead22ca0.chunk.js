(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){e.exports=a(253)},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},242:function(e,t,a){},250:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);var n,o,i,r=a(1),s=a.n(r),c=a(4),l=a.n(c),d=a(13),u=a(14),p=a(21),h=a(20),y=a(26),m=a(22),b=a(36),g=a(93),f=a(259),v=(a(140),a(76)),w=a(100),C=a(37),j=a.n(C),k=(a(141),a(123)),O=a.n(k),S=(a(169),a(124)),E=a.n(S),M="pk.eyJ1IjoiY21kYWxiZW0iLCJhIjoiY2pnbXhjZnplMDJ6MjMzbnk0OGthZGE1ayJ9.n1flNO8ndRYKQcR9wNIT9w",x=-43.109811,D=-22.8948963,A=(a(183),E()({accessToken:M})),L=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onMapMoved=a.onMapMoved.bind(Object(y.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"showPopup",value:function(e){console.debug(e.features[0]);var t=e.lngLat,a=e.features[0].properties,i=this.props.layers.find(function(t){return t.id===e.features[0].layer.id.split("--")[0]}),r="";a.name?r+="<h2>".concat(a.name,"</h2>"):r+="<i>Sem nome</i>",r+="<p>Tipo: <b>".concat(i.name,"</b></p>"),r+=JSON.stringify(a,null,2).replace(/(?:\r\n|\r|\n)/g,"<br/>").replace(/"|,|\{|\}/g,""),r+='\n            <br>\n            <a\n                target="_BLANK"\n                rel="noopener"\n                href="https://www.openstreetmap.org/'.concat(a.id,'"\n            >\n                Editar no OSM\n            </a>\n    '),o.setLngLat(t).setHTML(r).addTo(n)}},{key:"hidePopup",value:function(){o.remove()}},{key:"getCurrentBBox",value:function(){if(n){var e=n.getBounds().getSouthWest(),t=n.getBounds().getNorthEast();return"".concat(e.lat,",").concat(e.lng,",").concat(t.lat,",").concat(t.lng)}return"-23.036345361742164,-43.270405878917785,-22.915284125684607,-43.1111041211104"}},{key:"onMapMoved",value:function(){var e=this,t=n.getCenter().lat,a=n.getCenter().lng,o=n.getZoom();A.reverseGeocode({query:[a,t],types:["place"],limit:1}).send().then(function(n){var i=n.body,r={lat:t,lng:a,zoom:o};console.debug("onMapMoved",i.features),i.features&&i.features[0]&&(r.area=i.features[0].place_name),e.props.onMapMoved(r)}).catch(function(e){console.error(e.message)})}},{key:"addDynamicLayer",value:function(e){var t=this,a=["any"].concat(Object(w.a)(e.filters.map(function(e){return"string"===typeof e[0]?["==",["get",e[0]],e[1]]:["all"].concat(Object(w.a)(e.map(function(e){return["==",["get",e[0]],e[1]]})))})));e.style.borderColor?(n.addLayer({id:e.id+"--border",type:"line",source:"osm",name:e.name,description:e.description,paint:Object(v.a)({"line-color":e.style.borderColor,"line-width":["case",["boolean",["feature-state","highlight"],!1],12,e.style.lineWidth]},"dashed"===e.style.borderStyle&&{"line-dasharray":[1,.6]}),filter:a}),n.addLayer({id:e.id,type:"line",source:"osm",name:e.name,description:e.description,paint:Object(v.a)({"line-color":e.style.lineColor,"line-width":["case",["boolean",["feature-state","highlight"],!1],12,e.style.lineWidth-e.style.borderWidth]},"dashed"===e.style.lineStyle&&{"line-dasharray":[1,.6]}),filter:a})):n.addLayer({id:e.id,type:"line",source:"osm",name:e.name,description:e.description,paint:Object(v.a)({"line-color":e.style.lineColor,"line-width":["case",["boolean",["feature-state","highlight"],!1],12,e.style.lineWidth]},"dashed"===e.style.lineStyle&&{"line-dasharray":[1,.6]}),filter:a});var o=e.style.borderColor?e.id+"--border":e.id;n.on("mouseenter",o,function(e){e.features.length>0&&(n.getCanvas().style.cursor="pointer")}),n.on("mouseleave",o,function(e){n.getCanvas().style.cursor=""}),n.on("click",o,function(e){e.features.length>0&&(i&&n.setFeatureState({source:"osm",id:i},{highlight:!1}),i=e.features[0].id,n.setFeatureState({source:"osm",id:i},{highlight:!0}),t.showPopup(e))})}},{key:"initLayers",value:function(){var e=this;n.addSource("osm",{type:"geojson",data:this.props.data||{type:"FeatureCollection",features:[]},generateId:!0}),this.props.layers.slice().reverse().forEach(function(t){e.addDynamicLayer(t)})}},{key:"componentDidUpdate",value:function(e){n&&n.getSource("osm")&&(this.props.data!==e.data&&n.getSource("osm").setData(this.props.data),this.props.style!==e.style&&n.setStyle(this.props.style),this.props.center!==e.center&&n.setCenter(this.props.center),this.props.layers.map(function(e){return e.isActive}).join()===e.layers.map(function(e){return e.isActive}).join()&&this.props.layers.forEach(function(e){n.setLayoutProperty(e.id,"visibility",e.isActive?"visible":"none"),e.style.borderColor&&n.setLayoutProperty(e.id+"--border","visibility",e.isActive?"visible":"none")}))}},{key:"componentDidMount",value:function(){var e=this;j.a.accessToken=M,(n=new j.a.Map({container:this.mapContainer,style:this.props.style,center:this.props.center,zoom:this.props.zoom})).addControl(new j.a.NavigationControl({showCompass:!1}),"bottom-right"),n.addControl(new j.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}),"bottom-right"),n.addControl(new O.a({accessToken:j.a.accessToken,mapboxgl:j.a,countries:"br",language:"pt-br"}),"top-left"),n.on("load",function(){e.initLayers(),e.onMapMoved(),n.on("moveend",e.onMapMoved),n.on("style.load",function(){e.initLayers(),e.onMapMoved()})}),(o=new j.a.Popup({closeOnClick:!1})).on("close",function(e){i&&n.setFeatureState({source:"osm",id:i},{highlight:!1}),i=null})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{ref:function(t){return e.mapContainer=t}})}}]),t}(r.Component),z=(a(184),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"spinner",className:"loader-container"},s.a.createElement("div",{className:"loader"},s.a.createElement("svg",{className:"spinnersvg",viewBox:"25 25 50 50"},s.a.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"6",strokeMiterlimit:"10"})),s.a.createElement("div",{className:"content"},s.a.createElement("h2",null,"Carregando mapa ciclovi\xe1rio de ",s.a.createElement("b",null,this.props.area)),s.a.createElement("div",null,"Como \xe9 a primeira vez que voc\xea carrega esta \xe1rea do OSM pode demorar um pouquinho :)"))))}}]),t}(r.Component)),W=a(257),N=a(59),_=a(254),J=(a(185),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"info",value:function(){W.a.info({title:"Sobre",content:s.a.createElement("p",null,"A plataforma BICIMAPA \xe9 uma ferramenta que buscar ampliar a visibilidade das infraestruturas ciclovi\xe1rias mapeadas no OpenStreetMap e engajar uma comunidade de mapeadores para atualiza\xe7\xe3o colaborativa de dados e incid\xeancia em pol\xedticas p\xfablicas de mobilidade urbana."),onOk:function(){}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"topbar",style:{height:64}},s.a.createElement("div",null,s.a.createElement("h1",null,"BICIMAPA")),s.a.createElement("h2",{className:"title"},this.props.title),s.a.createElement("div",null,s.a.createElement(N.a,{type:"link",onClick:this.info},"Sobre"),s.a.createElement(_.a,{type:"vertical"}),s.a.createElement(N.a,{type:"link",onClick:this.props.downloadData},"Baixar dados"))))}}]),t}(r.Component)),I=a(256),P=I.a.Option,B=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e){this.props.onMapStyleChange(e)}},{key:"render",value:function(){return s.a.createElement(I.a,{defaultValue:"Mapa light",optionFilterProp:"children",onChange:this.onChange.bind(this),style:{position:"fixed",bottom:"32px",right:"50px",width:"160px"}},s.a.createElement(P,{value:"mapbox://styles/cmdalbem/cjxseldep7c0a1doc7ezn6aeb"},"Mapa light"),s.a.createElement(P,{value:"mapbox://styles/mapbox/streets-v11"},"Mapa normal"),s.a.createElement(P,{value:"mapbox://styles/cmdalbem/cjgmxgkbw000n2rqtucat5zjz"},"Dorsia"),s.a.createElement(P,{value:"mapbox://styles/cmdalbem/cjxsdwb907bfi1cqevxio2bst"},"Mapa com sat\xe9lite"))}}]),t}(r.Component),R=a(258),F=a(255),T=(a(242),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e,t){this.props.onLayersChange(e,t)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"layers-panel"},this.props.layers&&this.props.layers.map(function(t){return s.a.createElement("div",{key:t.name,className:"layer-row",onClick:e.onChange.bind(e,t.id,!t.isActive)},s.a.createElement(R.a,{placement:"left",title:t.description,arrowPointAtCenter:!0},s.a.createElement("span",{className:"layer-miniature",style:{height:2*t.style.lineWidth,background:"solid"===t.style.lineStyle?t.style.lineColor:"repeating-linear-gradient(90deg, ".concat(t.style.lineColor,", ").concat(t.style.lineColor," 3px, white 3px, white 6px)"),borderColor:t.style.borderColor,borderStyle:t.style.borderStyle,borderWidth:t.style.borderWidth?t.style.borderWidth/2:"0",borderLeft:"none",borderRight:"none"}}),s.a.createElement("span",{className:"layer-name"},t.name)),s.a.createElement(F.a,{size:"small",checked:t.isActive}))}))}}]),t}(r.Component)),U=a(132),q=a.n(U),V=a(96),G=a.n(V);var Y=a(75),Z=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,null,[{key:"getQuery",value:function(e){var t=e.bbox,a=e.areaId,n=Y.map(function(e){return e.filters.map(function(e){return"way"+("string"===typeof e[0]?'["'.concat(e[0],'"="').concat(e[1],'"]'):e.map(function(e){return'["'.concat(e[0],'"="').concat(e[1],'"]')}).join(""))+(t?"(".concat(t,");\n"):"(area.a);\n")}).join("")}).join("");return"\n            [out:json][timeout:500];\n            ".concat(!t&&"area(".concat(a,")->.a;"),"\n            (\n                ").concat(n,"\n            );\n            out body geom;\n        ")}},{key:"massageLayersData",value:function(){return Y.forEach(function(e){e.style.lineStyle=e.style.lineStyle||"solid",e.isActive=void 0===e.isActive||e.isActive,e.style.borderColor&&(e.style.borderStyle=e.style.borderStyle||"solid",e.style.borderWidth=e.style.borderWidth||3),e.id=function(e){var t="\xe0\xe1\xe4\xe2\xe3\xe5\u0103\xe6\xe7\xe8\xe9\xeb\xea\u01f5\u1e27\xec\xed\xef\xee\u1e3f\u0144\u01f9\xf1\xf2\xf3\xf6\xf4\u0153\xf8\u1e55\u0155\xdf\u015b\u0219\u021b\xf9\xfa\xfc\xfb\u01d8\u1e83\u1e8d\xff\u017a\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,function(e){return"aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------".charAt(t.indexOf(e))}).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}(e.name)}),Y}},{key:"getLayers",value:function(){return this.massageLayersData()}},{key:"getData",value:function(t){return new Promise(function(a,n){var o;G.a.getJSON("https://nominatim.openstreetmap.org/search?format=json&q=".concat(encodeURI(t.area)),function(t){console.debug("nominatimData",t);var i=36e8+t[0].osm_id,r=e.getQuery({areaId:i});console.debug("generated query: ",r);var s=encodeURI(r);G.a.getJSON("https://overpass.kumi.systems/api/interpreter?data=".concat(s),function(e){console.debug("osm data: ",e),o=q()(e,{flatProperties:!0}),console.debug("converted to geoJSON: ",o),a({geoJson:o})}).fail(function(e){console.error("Deu erro! Saca s\xf3:",e),f.a.error({message:"Erro",description:"Ops, erro na API do Overpass. Abra o console para ver mais detalhes."}),n()})}).fail(function(e){console.error("Deu erro! Saca s\xf3:",e),f.a.error({message:"Erro",description:"Ops, erro na API do Nominatim. Abra o console para ver mais detalhes."}),n()})})}}]),e}(),Q=(a(250),function(e){function t(e){var a;Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).updateData=a.updateData.bind(Object(y.a)(a)),a.onMapStyleChange=a.onMapStyleChange.bind(Object(y.a)(a)),a.onMapMoved=a.onMapMoved.bind(Object(y.a)(a)),a.onLayersChange=a.onLayersChange.bind(Object(y.a)(a)),a.downloadData=a.downloadData.bind(Object(y.a)(a));var n=a.getParamsFromURL();return a.state={geoJson:null,loading:!1,layers:Z.getLayers(),mapStyle:"mapbox://styles/cmdalbem/cjxseldep7c0a1doc7ezn6aeb",zoom:n.z||13,area:"Niter\xf3i, Rio De Janeiro, Brazil",center:[n.lng||x,n.lat||D]},a.state.area&&a.updateData(),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"getParamsFromURL",value:function(){var e=new URLSearchParams(this.props.location.search),t={};return["z","lat","lng"].forEach(function(a){var n=e.get(a);n&&(t[a]=n)}),t}},{key:"isDataFresh",value:function(e){return new Date-new Date(e.updatedAt)<6048e5}},{key:"updateData",value:function(){var e=this;this.state.zoom>10&&this.state.area?Object(g.a)(this.state.area).then(function(t){console.debug("IndexedDB result:",t),t&&e.isDataFresh(t)?(console.debug("IndexedDB data is fresh."),e.setState({geoJson:t.geoJson})):(console.debug("Couldn't find data for area ".concat(e.state.area," or it isn't fresh, hitting OSM...")),e.setState({loading:!0}),Z.getData({area:e.state.area}).then(function(t){Object(g.b)(e.state.area,{geoJson:t.geoJson,updatedAt:new Date}),e.setState({geoJson:t.geoJson,loading:!1})}))}).catch(function(e){f.a.error({message:"Erro",description:"Ocorreu um erro ao tentar recuperar os dados salvos no IndexedDB."})}):this.setState({loading:!1})}},{key:"onMapStyleChange",value:function(e){this.setState({mapStyle:e})}},{key:"onLayersChange",value:function(e,t){var a=Object.assign([],this.state.layers);a.filter(function(t){return t.id===e})[0].isActive=t,this.setState({layers:a})}},{key:"downloadData",value:function(){!function(e,t){var a="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),n=document.createElement("a");n.setAttribute("href",a),n.setAttribute("download",t+".json"),document.body.appendChild(n),n.click(),n.remove()}(this.props.geoJson,"mapa-cicloviario-".concat(this.state.area))}},{key:"componentDidUpdate",value:function(e,t){if(this.props.location!==e.location&&this.onRouteChanged(),this.state.area!==t.area&&(console.debug("Changed area from ".concat(t.area," to ").concat(this.state.area)),this.updateData()),this.state.zoom!==t.zoom||this.state.lat!==t.lat||this.state.lng!==t.lng){var a="?";a+="lat=".concat(this.state.lat.toFixed(7)),a+="&lng=".concat(this.state.lng.toFixed(7)),a+="&z=".concat(this.state.zoom.toFixed(2)),this.props.history.push({search:a})}}},{key:"onRouteChanged",value:function(){}},{key:"onMapMoved",value:function(e){this.setState(e)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(J,{title:this.state.area,downloadData:this.downloadData}),s.a.createElement(L,{data:this.state.geoJson,layers:this.state.layers,style:this.state.mapStyle,zoom:this.state.zoom,center:this.state.center,updateData:this.updateData,onMapMoved:this.onMapMoved}),s.a.createElement(B,{onMapStyleChange:this.onMapStyleChange}),s.a.createElement(T,{layers:this.state.layers,onLayersChange:this.onLayersChange}),this.state.loading&&s.a.createElement(z,{area:this.state.area}))}}]),t}(r.Component)),H=Object(b.d)(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(92);l.a.render(s.a.createElement(K.a,null,s.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e){e.exports=[{name:"Ciclovia",description:"\xc9 um espa\xe7o segregado para fluxo de bicicletas.",filters:[["highway","cycleway"],["cycleway","track"],["cycleway:left","track"],["cycleway:right","track"],["cycleway","opposite_track"],["cycleway:left","opposite_track"],["cycleway:right","opposite_track"]],style:{lineColor:"#65df97",lineWidth:6,borderColor:"#4ba96e",borderStyle:"solid"}},{name:"Ciclofaixa",description:"A ciclofaixa \xe9 o espa\xe7o na pista destinado exclusivamente \xe0 circula\xe7\xe3o de bicicletas. A ciclofaixa n\xe3o \xe9 segregada fisicamente.",filters:[["cycleway","lane"],["cycleway:left","lane"],["cycleway:right","lane"],["cycleway:both","lane"],["cycleway","opposite_lane"],["cycleway:right","opposite_lane"],["cycleway:left","opposite_lane"]],style:{lineColor:"#b4fad0",lineWidth:5,borderColor:"#69b991",borderStyle:"solid"}},{name:"Ciclorota",description:"Via com sinaliza\xe7\xe3o para o tr\xe1fego compartilhado, com prefer\xeancia para bicicletas.",filters:[["cycleway","buffered_lane"],["cycleway:left","buffered_lane"],["cycleway:right","buffered_lane"],["cycleway","shared_lane"],["cycleway:left","shared_lane"],["cycleway:right","shared_lane"],["cycleway","share_busway"],["cycleway:left","share_busway"],["cycleway:right","share_busway"],["cycleway","opposite_share_busway"]],style:{lineColor:"#f8c9ae",lineWidth:4,borderColor:"#398371",borderWidth:2}},{name:"Cal\xe7ada compartilhada",description:"Cal\xe7ada com sinaliza\xe7\xe3o para circula\xe7\xe3o de bicicletas, compartilhando o mesmo espa\xe7o com pedestres.",filters:[[["highway","footway"],["bicycle","designated"]],[["highway","pedestrian"],["bicycle","designated"]],[["highway","pedestrian"],["bicycle","yes"]],["cycleway","sidepath"],["cycleway:left","sidepath"],["cycleway:right","sidepath"],["bicycle","use_sidepath"]],style:{lineColor:"#f8c9ae",lineWidth:4,borderColor:"#f0763a",borderWidth:2}},{name:"Baixa velocidade",description:"Vias com limite de velocidade regulamentada de at\xe9 30km/h.",isActive:!1,filters:[["maxspeed","30"],[["highway","living_street"],["bicycle","yes"]],[["highway","unclassified"],["bicycle","yes"]]],style:{lineColor:"orange",lineWidth:2,lineStyle:"dashed"}},{name:"Trilha",description:"Vias n\xe3o pavimentadas, normalmente em \xe1reas rurais, acess\xedveis de bicicleta.",isActive:!1,filters:[[["highway","track"],["bicycle","designated"]],[["highway","track"],["bicycle","yes"]],[["highway","path"],["bicycle","designated"]],[["highway","path"],["bicycle","yes"]]],style:{lineColor:"#996633",lineWidth:2,lineStyle:"dashed"}},{name:"Proibido",description:"Vias onde expressamente n\xe3o \xe9 permitido passar de bicicleta.",isActive:!1,filters:[["bicycle","no"],["bicycle","dismount"]],style:{lineColor:"red",lineWidth:2,lineStyle:"dashed"}}]}},[[135,1,2]]]);
//# sourceMappingURL=main.ead22ca0.chunk.js.map