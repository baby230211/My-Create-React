(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(t,e,n){},39:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(30),i=n.n(c),s=(n(37),n(7)),r=n(8),l=n(10),u=n(9),d=n(17),p=n.n(d),j=n(31),b=(n(39),n(18)),h=n.n(b),m=n(1),v=function(t){return new Promise((function(e){setTimeout(e,t)}))},O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).doIt=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("load"),a.setState({loading:!0}),t.next=4,v(2e3);case 4:a.CallForLoad(a.props.num);case 5:case"end":return t.stop()}}),t)}))),a.CallApi=function(){var t=a.props.city?a.props.city:"",e="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/".concat(t,"?$top=30&$format=JSON");h.a.get(e,{"Access-Control-Allow-Origin":"*"}).then((function(t){console.log(t.data),a.setState({data:t.data})})).catch((function(t){console.log(t)}))},a.CallForLoad=function(t){var e=a.props.city?a.props.city:"";h.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/".concat(e),{params:{$top:"30",$format:"JSON",$skip:t}}).then((function(t){console.log(t.data);var e=a.state.data.concat(t.data);a.setState({data:e,loading:!1})})).catch((function(t){console.log(t)}))},a.state={arr:[1,2,3,4,5],data:[],loading:!1},a}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.props.num!==t.num&&this.doIt(),this.props.city!==t.city&&this.CallApi()}},{key:"componentDidMount",value:function(){this.CallApi()}},{key:"render",value:function(){var t;return this.state.loading&&(t=Object(m.jsx)("div",{className:"Loading",children:"loading"})),Object(m.jsxs)("div",{children:[t,Object(m.jsx)("div",{className:"contain",children:this.state.data.map((function(t){return Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("div",{className:"address",children:t.Address}),Object(m.jsx)("div",{className:"text",children:t.Description})]},t.ID)}))})]})}}]),n}(a.Component),g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).observe=function(){new IntersectionObserver((function(t){1===t[0].intersectionRatio&&(console.log(t),a.props.call())}),{threshold:[1]}).observe(document.querySelector(".bottom"))},a.state={numbers:0},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.observe()}},{key:"componentWillUnmount",value:function(){new IntersectionObserver((function(t){1===t[0].intersectionRatio&&console.log(t)}),{threshold:[1]}).unobserve(document.querySelector(".bottom"))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"bottom",children:"\u6211\u662f\u9801\u5c3e"})}}]),n}(a.Component),f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).Callprac=function(){console.log("callfromparent");var t=document.querySelectorAll(".item").length;console.log(t),a.setState({total:t})},a.state={total:0},a}return Object(r.a)(n,[{key:"render",value:function(){return console.log("render 1 time"),Object(m.jsxs)("div",{children:[this.props.match.params.city,Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{num:this.state.total,city:this.props.match.params.city}),Object(m.jsx)(g,{call:this.Callprac})]})]})}}]),n}(a.Component),x=n(12),y=n(2),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).Callprac=function(){console.log("callfromparent");var t=document.querySelectorAll(".item").length;console.log(t),a.setState({total:t})},a.state={total:0},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log(this.props.match.path),Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{num:this.state.total}),Object(m.jsx)(g,{call:this.Callprac})]})}}]),n}(a.Component),S=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log(this.props.match),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"ScenicSpot"}),Object(m.jsx)(x.a,{children:Object(m.jsx)(y.c,{children:Object(m.jsx)(y.a,{exact:!0,path:"/scenicSpot",component:C})})})]})}}]),n}(a.Component),N=["Taipei","NewTaipei","Taoyuan","Taichung","Tainan","Kaohsiung","Keelung","Hsinchu","HsinchuCounty","MiaoliCounty","ChanghuaCounty","NantouCounty","YunlinCounty","ChiayiCounty","Chiayi","PingtungCounty","YilanCounty","HualienCounty","TaitungCounty","KinmenCounty","PenghuCounty","LienchiangCounty"].map((function(t){return Object(m.jsx)(x.b,{className:"dropdown-item",to:"".concat("/scenicSpot","/").concat(t),children:t},t)})),k=function(){return Object(m.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:[Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarContent",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(x.b,{className:"nav-link",to:"/",children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(x.b,{className:"nav-link",to:"/scenicSpot",children:"\u6240\u6709\u57ce\u5e02"})}),Object(m.jsxs)("li",{className:"nav-item dropdown",children:[Object(m.jsx)("div",{className:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"\u9078\u64c7\u57ce\u5e02"}),Object(m.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:N})]})]})})]})},w=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).Callprac=function(){console.log("callfromparent");var t=document.querySelectorAll(".item").length;console.log(t),a.setState({total:t})},a.state={total:0},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log(this.props.value),Object(m.jsx)("div",{children:Object(m.jsxs)(x.a,{children:[Object(m.jsx)(k,{}),Object(m.jsxs)(y.c,{children:[Object(m.jsx)(y.a,{exact:!0,path:"/scenicSpot",component:S}),Object(m.jsx)(y.a,{path:"/scenicSpot/:city",component:f})]})]})})}}]),n}(a.Component),T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),o(t),c(t),i(t)}))};i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),T()}},[[64,1,2]]]);
//# sourceMappingURL=main.8813db48.chunk.js.map