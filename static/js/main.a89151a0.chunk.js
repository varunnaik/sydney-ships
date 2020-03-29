(this["webpackJsonpshippix-viewer-next"]=this["webpackJsonpshippix-viewer-next"]||[]).push([[0],{118:function(n,e,t){n.exports=t(204)},123:function(n,e,t){},204:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(16),o=t.n(i),c=(t(123),t(76)),l=t.n(c),u=t(18),s=t(9),d=t(7),f=t(48),p=t(111),h=t(77),m=t(30),b=t.n(m),g=(t(126),function(n){return n.substring(0,9)}),x=function(n){return n.substring(9)},v=function(n){return n.captures.reduce((function(n,e){var t=g(e),a=x(e),r=b.a.unix(a),i=r.tz("Australia/Sydney").format("YYYY-MM-DD"),o=r.tz("Australia/Sydney").format("ll"),c=r.tz("Australia/Sydney").format("hh:mm:ss a");return Object(h.a)({},n,Object(f.a)({},i,[].concat(Object(p.a)(n[i]||[]),[{dateLabel:o,time:c,mmsi:t,capture:e,captureDate:r}])))}),{})},w=t(94),E=t.n(w),j=t(49),O=(t(129),"https://s3-ap-southeast-2.amazonaws.com/shippix/"),y="captures.json",k=function(n){var e=new RegExp("".concat(n,"=([^&]*)")),t=window.location.hash.match(e);return t&&t.pop()},S=function(n,e){var t=window.location.hash,a=new RegExp("".concat(n,"=([^&]*)")),r=window.location.hash.match(a);r&&r.length>1?window.location.hash=t.replace(r.pop(),e):window.location.hash=window.location.hash+"&".concat(n,"=").concat(e)},z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(n){var e=new RegExp("[&]*".concat(n,"=[^&]*"));return window.location.hash=window.location.hash.replace(e,"")}window.location.hash=""};function I(){var n=Object(s.a)(["\n  border: 0;\n  width: 400px;\n  height: 100%;\n\n  @media screen and (max-width: 600px) {\n    width: 100%;\n    min-height: 100%;\n  }\n"]);return I=function(){return n},n}function L(){var n=Object(s.a)(["\n  display: none;\n  @media screen and (max-width: 600px) {\n    display: inline;\n  }\n"]);return L=function(){return n},n}function C(){var n=Object(s.a)(["\n  display: inline-block;\n"]);return C=function(){return n},n}function D(){var n=Object(s.a)(["\n  display: border-box;\n  padding-left: 8px;\n  color: #666;\n"]);return D=function(){return n},n}function P(){var n=Object(s.a)(["\n  display: border-box;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  padding-left: 8px;\n  @media screen and (max-width: 600px) {\n  }\n"]);return P=function(){return n},n}function R(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  margin-right: 1px;\n  margin-bottom: 1px;\n  border: 1px solid #eee;\n  display: flex;\n  flex-direction: column;\n  min-height: 266px;\n  background: white;\n\n  :hover {\n    background: rgba(187, 239, 253, 0.3);\n    border-color: #888;\n    cursor: pointer;\n    * > div {\n      color: black;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    margin-bottom: 6px;\n    margin-right: 0;\n    min-height: 220px;\n    border-right: 0;\n    border-left: 0;\n  }\n\n  // Fix for react-lazy-image-load component\n  .lazy-load-image-background {\n    flex-grow: 1 !important;\n  }\n"]);return R=function(){return n},n}var A=d.default.div(R()),_=d.default.div(P()),M=d.default.div(D()),Y=d.default.div(C()),T=d.default.div(L()),N=Object(d.default)(j.LazyLoadImage)(I()),V=Object(a.memo)((function(n){var e=n.item,t=n.shipInfo,i=n.scrollPosition,o=t.description,c=t.name,l=Object(a.createRef)();return r.a.createElement(A,{onClick:function(){return S("capture",e.capture)}},r.a.createElement(M,null,r.a.createElement(T,null,e.dateLabel,"\xa0"),r.a.createElement(Y,null,e.time)),r.a.createElement(N,{ref:l,effect:"blur",scrollPosition:i,src:"".concat(O).concat("thumb/").concat(e.capture,".jpg"),placeholderSrc:"".concat(O).concat("thumb/").concat("placeholder.jpg")}),r.a.createElement(_,null,c," (",function(n){return"Not available (default)"===n?"Not Available":n.split(" ")[0].replace(/,$/,"")}(o),")"))}),(function(n,e){return n.shipInfo.name===e.shipInfo.name&&n.item.capture===e.item.capture}));function B(){var n=Object(s.a)(["\n  transform: rotate(270deg);\n  width: 200px;\n  line-height: 1em;\n  margin-left: -1px;\n  @media screen and (max-width: 600px) {\n    transform: rotate(0deg);\n    width: auto;\n    line-height: auto;\n    margin-top: 1px;\n  }\n"]);return B=function(){return n},n}function W(){var n=Object(s.a)(["\n  font-weight: bold;\n  max-width: 1.2em;\n  font-size: 13px;\n  text-align: center;\n  box-sizing: border-box;\n  background: #dd8888;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0;\n\n  @media screen and (max-width: 600px) {\n    max-width: 100%;\n    border-right: 0;\n    background: #deebff;\n    order: 1; /* Move title to top instead of bottom */\n  }\n"]);return W=function(){return n},n}function F(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1px;\n  @media screen and (max-width: 600px) {\n    flex-direction: column-reverse;\n  }\n"]);return F=function(){return n},n}var U=d.default.div(F()),G=d.default.h6(W()),H=d.default.div(B()),J=function(n){var e=n.title,t=n.items,a=n.shipInfo,i=n.scrollIntoViewRef,o=n.scrollPosition;return r.a.createElement(U,{ref:i},r.a.createElement(G,null,r.a.createElement(H,null,e)),t.map((function(n){return r.a.createElement(V,{item:n,shipInfo:a[n.mmsi],key:n.capture,scrollPosition:o})})))};function $(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  padding-top: ","px;\n  background: white;\n  @media screen and (max-width: 600px) {\n    overflow-x: hidden;\n  }\n"]);return $=function(){return n},n}var K=d.default.div($(),43),q=function(n){var e=k("day");return e?!n.length||n.indexOf(e)>-1?e:n[E.a.findBestMatch(e,n).bestMatchIndex]:null},Q=Object(j.trackWindowScroll)((function(n){var e=n.rows,t=n.shipInfo,i=n.scrollPosition,o=Object.keys(e).sort().reverse(),c=Object(a.useState)(q(o)),l=Object(u.a)(c,2),s=l[0],d=l[1],f=Object(a.useRef)(null);return Object(a.useLayoutEffect)((function(){s&&f.current&&window.scrollTo(0,f.current.offsetTop-43);var n=function(){d((function(){return q(o)}))};return window.addEventListener("hashchange",n),function(){window.removeEventListener("hashchange",n)}})),r.a.createElement(K,null,o.map((function(n){return r.a.createElement(J,{scrollIntoViewRef:s===n?f:void 0,title:n,scrollPosition:i,items:e[n],shipInfo:t,key:"capture-row-".concat(n)})})))})),X=t(97),Z=t(218),nn=t(220);function en(){var n=Object(s.a)(["\n  color: #888;\n  font-size: 10px;\n  display: inline-block;\n  width: 100%;\n  text-align: right;\n  @media screen and (max-width: 600px) {\n    padding-right: 4px;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n  padding: 10px;\n  @media screen and (max-width: 600px) {\n    padding: 0;\n  }\n"]);return tn=function(){return n},n}function an(){var n=Object(s.a)(["\n  padding-right: 5px;\n  margin-right: 5px;\n  border-right: 2px solid #ccc;\n\n  & :last-child {\n    border: 0;\n  }\n"]);return an=function(){return n},n}function rn(){var n=Object(s.a)(["\n  margin: 5px 0 5px 0;\n"]);return rn=function(){return n},n}function on(){var n=Object(s.a)(["\n  margin-bottom: 2px;\n"]);return on=function(){return n},n}function cn(){var n=Object(s.a)(["\n  @media screen and (max-width: 600px) {\n    padding-left: 4px;\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(s.a)(["\n  display: block;\n  width: 100%;\n  margin-top: 20px;\n  text-align: center;\n  color: blue;\n"]);return ln=function(){return n},n}var un=d.default.div(ln()),sn=d.default.div(cn()),dn=d.default.h4(on()),fn=d.default.div(rn()),pn=d.default.span(an()),hn=d.default.div(tn()),mn=d.default.span(en()),bn=function(n,e){var t=function(){var n=window.location.hash.match(/capture=([^&]*)/);return n&&n.pop()}();return n(t?function(n,e){var t=g(n),a=x(n);return Object(h.a)({capture:n,mmsi:t,timeLabel:b.a.unix(a).tz("Australia/Sydney").format("LLLL z")},e[t])}(t,e):null)},gn=function(n){var e=n.shipInfo,t=Object(a.useState)(null),i=Object(u.a)(t,2),o=i[0],c=i[1];return Object(a.useLayoutEffect)((function(){var n=function(){return bn(c,e)};return window.addEventListener("hashchange",n),function(){window.removeEventListener("hashchange",n)}})),Object(a.useLayoutEffect)((function(){bn(c,e)}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(X.b,null,o&&r.a.createElement(Z.a,{width:"large",onClose:function(){return z("capture")},components:{Body:r.a.forwardRef((function(n,e){return r.a.createElement(hn,{ref:e},n.children)}))}},r.a.createElement(sn,null,r.a.createElement(dn,null,o.name||"unknown")),r.a.createElement("video",{width:"100%",controls:!0},r.a.createElement("source",{src:"".concat(O).concat("video/").concat(o.capture,".mp4"),type:"video/webm"})),r.a.createElement(sn,null,o.timeLabel,r.a.createElement(fn,null,r.a.createElement(pn,null,"Type: ",o.description||"Unknown class"),r.a.createElement(pn,null,"MMSI: ",o.mmsi||"Unknown"),r.a.createElement(pn,null,"Size: ",o.size||"Unknown"))),r.a.createElement(un,null,r.a.createElement(nn.a,{onClick:function(){return z("capture")}},"Close")),r.a.createElement(mn,null,"\xa9 2020 Varun Naik"),r.a.createElement("br",null))))},xn=t(107),vn=t.n(xn),wn=t(110),En=t.n(wn),jn=t(219);function On(){var n=Object(s.a)(["\n  padding: 10px;\n  padding-top: 0;\n"]);return On=function(){return n},n}function yn(){var n=Object(s.a)(["\n  display: inline-block;\n  width: 100%;\n  margin-top: 5px;\n  text-align: center;\n  font-size: 15px;\n"]);return yn=function(){return n},n}var kn=d.default.div(yn()),Sn=d.default.div(On()),zn=function(n){var e=n.onClose;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.b,null,r.a.createElement(Z.a,{width:"large",onClose:e,components:{Body:r.a.forwardRef((function(n,t){return r.a.createElement(Sn,{ref:t,onClick:e},n.children)}))}},r.a.createElement("h2",null,"Sydney Ships Viewer "),r.a.createElement("p",null,"This uses a Raspberry Pi with a Pi Camera and an RTL-SDR receiver to capture videos of ships transiting the Sydney Harbour."),r.a.createElement("p",null,"It determines the ship's location based on its AIS broadcasts and triggers a timelapse capture of the ship if it is in view of the camera."),r.a.createElement("p",null,"Project in detail:",r.a.createElement("a",{href:"https://blog.vnaik.com/posts/photographing-ships.html"},"Photographing ships with SDR")),r.a.createElement("p",null,"Project on Github: ",r.a.createElement("a",{href:"https://github.com/varunnaik/shippix"},"Sydney Ships")),r.a.createElement("ul",null,r.a.createElement("li",null,"This photographs mostly cruise ships and their refuelling tankers (and sometimes freighters) because they are the only ships large enough to show up well on the Pi camera."),r.a.createElement("li",null,"While the setup captures most ships, it sometimes misses ships either because the ships have their AIS transponders switched off, or because the capture setup was down.")),r.a.createElement("p",null,r.a.createElement("small",null,"\xa9 2020 Varun Naik")),r.a.createElement(kn,null,r.a.createElement(nn.a,{onClick:e},"Close")),r.a.createElement("br",null))))};t(148);function In(){var n=Object(s.a)([""]);return In=function(){return n},n}function Ln(){var n=Object(s.a)(["\n  text-transform: capitalize;\n  min-width: 190px;\n  margin: 0 5px 0 0;\n\n  @media screen and (max-width: 600px) {\n    min-width: 120px;\n  }\n\n  // Hacks around react-select not allowing its height to be set\n  .react-select__placeholder {\n    color: rgb(66, 82, 110) !important;\n    top: 45%;\n  }\n\n  .react-select__indicators,\n  .react-select__indicator {\n    padding-right: 0; // Allow about button to fit in header on mobile\n    padding-left: 0;\n  }\n\n  .react-select__value-container {\n    padding-right: 0;\n  }\n\n  .react-select__dropdown-indicator {\n    padding-top: 4px !important;\n  }\n  .react-select__control {\n    max-height: 36px;\n    min-height: 36px;\n  }\n  * > * {\n    text-transform: capitalize;\n    max-height: 36px;\n  }\n"]);return Ln=function(){return n},n}function Cn(){var n=Object(s.a)(["\n  @media screen and (max-width: 600px) {\n    display: none;\n  }\n"]);return Cn=function(){return n},n}function Dn(){var n=Object(s.a)(["\n  margin-top: -6px;\n"]);return Dn=function(){return n},n}function Pn(){var n=Object(s.a)(["\n  margin: 0;\n  padding: 0;\n  margin-left: 10px;\n\n  padding-left: 10px;\n  height: 20px;\n  margin-right: 5px;\n\n  @media screen and (max-width: 600px) {\n    margin: 0 5px 0 5px;\n    padding-left: 0px;\n    max-width: 100px;\n\n    button {\n      padding-left: 0 !important;\n    }\n  }\n"]);return Pn=function(){return n},n}function Rn(){var n=Object(s.a)(["\n  font-weight: 400;\n  font-size: 16px;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n\n  @media screen and (max-width: 600px) {\n    max-width: 100px;\n  }\n"]);return Rn=function(){return n},n}function An(){var n=Object(s.a)(["\n  background: #fff;\n  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0),\n    0 1px 1px rgba(16, 22, 26, 0.2);\n  width: 100%;\n  padding: 0 8px;\n  height: ","px;\n  margin-bottom: 1px;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  z-index: 490; /* Keep it below the Atlassian Modal dialog */\n"]);return An=function(){return n},n}var _n=d.default.div(An(),43),Mn=d.default.h1(Rn()),Yn=d.default.div(Pn()),Tn=Object(d.default)(nn.a)(Dn()),Nn=d.default.span(Cn()),Vn=Object(d.default)(jn.a)(Ln()),Bn=Object(d.default)(nn.a)(In()),Wn=function(n){var e=n.dates,t=(n.highlights,n.shipInfo),i=n.onShipSelect,o=k("day"),c=Object(a.useState)(o?new Date(o):new Date),l=Object(u.a)(c,2),s=l[0],d=l[1],f=Object(a.useState)(),p=Object(u.a)(f,2),h=p[0],m=p[1],g=Object(a.useState)(!1),x=Object(u.a)(g,2),v=x[0],w=x[1],E=Object.entries(t).map((function(n){var e=Object(u.a)(n,2),t=e[0];return{label:e[1].name.toLowerCase(),value:t}})).filter((function(n){return""!==n.label})).sort((function(n,e){return n.label>e.label}));return E.splice(0,0,{label:"All",value:""}),Object(a.useEffect)((function(){var n=k("filter");if(n){var e=E.find((function(e){return e.value===n}));e&&i(e),m(e)}}),[i,E,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(_n,null,r.a.createElement(Mn,null,"Sydney Ships"),r.a.createElement(vn.a,{includeDates:e.map((function(n){return new Date(n)})),customInput:r.a.createElement(Yn,null,r.a.createElement(Tn,{iconAfter:r.a.createElement(En.a,null)},r.a.createElement(Nn,null,"Go To Date"))),onChange:function(n){var e=b()(n);S("day",e.format("YYYY-MM-DD")),d(e.toDate())},selected:s}),r.a.createElement(Vn,{className:"single-select",classNamePrefix:"react-select",placeholder:"View Ship",options:E,onChange:function(n){n.value?S("filter",n.value):z("filter"),m(n),i(n)},value:h}),r.a.createElement(Bn,{onClick:function(){return w(!0)}},"About"),v&&r.a.createElement(zn,{onClose:function(){return w(!1)}})))};function Fn(){var n=Object(s.a)(["\n  position: fixed;\n  z-index: -2;\n  height: 50px;\n  width: 100%;\n  font-size: 16px;\n  margin: 50px 0 0 10px;\n  ::before {\n    content: 'Loading...';\n  }\n"]);return Fn=function(){return n},n}function Un(){var n=Object(s.a)(["\n  @import url('https://use.typekit.net/hkh4msx.css');\n  font-family: fira-sans, sans-serif;\n"]);return Un=function(){return n},n}var Gn=d.default.section(Un()),Hn=d.default.div(Fn()),Jn=function(n,e,t){var a=n.value;z("day"),t(function(n,e){var t=e.filter((function(e){return e.startsWith(n)}));return v({captures:t})}(a,e))};var $n=function(){var n=Object(a.useState)({}),e=Object(u.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)({info:{},highlights:{},captures:{}}),c=Object(u.a)(o,2),s=c[0],d=c[1];return Object(a.useEffect)((function(){!function(){var n;l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(fetch("".concat(O).concat(y)).then((function(n){return n.json()})));case 2:n=e.sent,d(n),i(v(n));case 5:case"end":return e.stop()}}))}()}),[]),r.a.createElement(Gn,null,r.a.createElement(Wn,{dates:Object.keys(t),highlights:s.highlights,shipInfo:s.info,onShipSelect:function(n){return Jn(n,s.captures,i)}}),r.a.createElement(Hn,null),r.a.createElement(gn,{shipInfo:s.info}),r.a.createElement(Q,{rows:t,shipInfo:s.info}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement($n,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[118,1,2]]]);
//# sourceMappingURL=main.a89151a0.chunk.js.map