(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var a,i=n(0),r=n.n(i),c=n(17),o=n.n(c),d=n(5),l=n(11),u=n(4),s=n(9),m=n(13),f={border:"1px dashed gray",backgroundColor:"white",padding:"0.5rem 1rem",marginRight:"1.5rem",marginBottom:"1.5rem"},p=function(e){var t=e.id,n=e.name,a=e.type,c=e.accept,o=e.onChange,l=e.children,p=e.selectedCount,g={id:t,type:a,name:n,accept:c},b=Object(i.useRef)(null),y=Object(s.c)({item:g,end:function(e,t){t.didDrop()||"function"===typeof o&&o({dragSource:g})},canDrag:function(e){return p>0},collect:function(e){return{opacity:e.isDragging()?.4:1}}}),O=Object(u.a)(y,3),h=O[0].opacity,v=O[1],j=O[2],k=Object(s.e)({accept:c,drop:function(e,t){"function"===typeof o&&o({dragSource:e,dropTarget:g})},canDrop:function(e,t){return g.id!==e.id},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),x=Object(u.a)(k,2),E=x[0],w=E.isOver,D=E.canDrop;return v((0,x[1])(b)),Object(i.useEffect)(function(){j(Object(m.b)(),{captureDraggingState:!0})},[]),r.a.createElement("div",{ref:b,style:Object(d.a)({},f,{opacity:h,position:"relative",backgroundColor:w&&D?"cornflowerblue":D?"skyblue":"white"})},r.a.createElement("div",null,n,r.a.createElement("span",{style:{padding:"3px",width:"1em",height:"1em",textAlign:"center",display:"inline-block",marginLeft:"3px",visibility:p>0?"visible":"hidden",border:"1px solid darkgrey"}},p)),l)};!function(e){e.BOX="BOX"}(a||(a={}));var g=n(8),b=function(e){var t=e.selectionData,n=e.list,a=e.setSelectionData;return r.a.createElement(r.a.Fragment,null,n.map(function(e,n){return r.a.createElement("label",{key:n,style:{backgroundColor:!0===t[n]?"salmon":"white",margin:"3px",padding:"3px",display:"block"}},r.a.createElement("input",{checked:!0===t[n],onChange:function(e){return function(e,n){a(Object(d.a)({},t,Object(g.a)({},e,n.target.checked)))}(n,e)},style:{marginRight:"6px"},type:"checkbox"}),e.name)}))},y={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function O(e,t,n){if(!e||!t||!n)return{display:"none"};var a={x:n.x+10,y:n.y+10},i=a.y,r="translate(".concat(a.x,"px, ").concat(i,"px)");return{transform:r,WebkitTransform:r}}var h=function(e){var t=Object(s.d)(function(e){return{item:e.getItem(),itemType:e.getItemType(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging(),clientOffset:e.getClientOffset()}}),n=(t.isDragging,t.itemType,t.item),i=t.initialOffset,c=t.currentOffset,o=t.clientOffset;return(n&&n.type)!==a.BOX?null:r.a.createElement("div",{style:y},r.a.createElement("div",{style:Object(d.a)({display:"inline-block"},O(i,c,o),{backgroundColor:"blueviolet",color:"whitesmoke",padding:"10px"})},r.a.createElement("div",null,"My drag layer: ",n&&n.name)))},v=function(e){return e.sort(function(e,t){return e.name[0]>t.name[0]?1:-1})},j={id:-1,data:{}},k=[{id:100,name:"Boxy 1",data:v([{name:"Popescu"},{name:"Ionescu"},{name:"Petrescu"}])},{id:200,name:"Boxy 2",data:v([{name:"Constantinescu"},{name:"Eminescu"}])},{id:300,name:"Boxy 3",data:v([{name:"Hutinescu"},{name:"Adamescu"},{name:"Iliescu"},{name:"Klaus"}])}],x=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(k),f=Object(u.a)(o,2),g=f[0],y=f[1],O=Object(i.useState)(j),x=Object(u.a)(O,2),E=x[0],w=x[1],D=function(e){var t=e.dragSource,a=e.dropTarget;if(null!=a){var i=g.filter(function(e){return e.id===t.id})[0].data.filter(function(e,t){return!0===E.data[t]});y(g.map(function(e){return e.id===a.id?Object(d.a)({},e,{id:e.id,data:v([].concat(Object(l.a)(e.data),Object(l.a)(i)))}):e.id===t.id?Object(d.a)({},e,{id:e.id,data:e.data.filter(function(e,t){return!0!==E.data[t]})}):e})),w(j),c([].concat(Object(l.a)(n),["dropped ".concat(t.name," on ").concat(a.name)]))}else c([].concat(Object(l.a)(n),["did not drop ".concat(t.name," on any target")]))};return r.a.createElement(s.b,{backend:m.a},r.a.createElement(h,null),r.a.createElement("div",{style:{display:"flex"}},g.map(function(e,t){return r.a.createElement(p,{key:t,id:e.id,onChange:D,accept:[a.BOX],type:a.BOX,name:e.name,selectedCount:E.id===e.id?Object.keys(E.data).filter(function(e){return!0===E.data[e]}).length:0},r.a.createElement(b,{list:e.data,selectionData:E.id===e.id?E.data:{},setSelectionData:function(t){return w({id:e.id,data:t})}}))})),r.a.createElement("div",{style:{clear:"both"}},n.map(function(e,t){return r.a.createElement("div",{key:t,style:{padding:"5px 0"}},e)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.234ed598.chunk.js.map