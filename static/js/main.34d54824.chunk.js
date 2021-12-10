(this["webpackJsonpreact-for-masters"]=this["webpackJsonpreact-for-masters"]||[]).push([[0],{65:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(25),o=t.n(r),a=t(14),s=t(7),l=t(8),d=t(17),j=t(4),b="https://api.coinpaprika.com/v1";function h(){return fetch("".concat(b,"/coins")).then((function(n){return n.json()}))}var u,p,x,f,O,m,g,v=t(26),y=t(1),k=s.c.div(u||(u=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),w=s.c.header(p||(p=Object(l.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),C=s.c.ul(x||(x=Object(l.a)([""]))),L=s.c.li(f||(f=Object(l.a)(["\n  background-color: white;\n  font-weight: 600;\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a{\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n    display: block;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),q=s.c.h1(O||(O=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.textColor})),I=s.c.span(m||(m=Object(l.a)(["\n  text-align: center;\n"]))),S=s.c.img(g||(g=Object(l.a)(["\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n"])));var P=function(){var n=Object(a.useQuery)("allCoins",h),e=n.isLoading,t=n.data;return Object(y.jsxs)(k,{children:[Object(y.jsx)(v.a,{children:Object(y.jsx)("title",{children:"\ucf54\uc778"})}),Object(y.jsx)(w,{children:Object(y.jsx)(q,{children:"Coin"})}),e?Object(y.jsx)(I,{children:"Loading..."}):Object(y.jsx)(C,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(y.jsx)(L,{children:Object(y.jsxs)(d.b,{to:"/".concat(n.id),state:{name:n.name},children:[Object(y.jsx)(S,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},Q=t(44),z=t.n(Q);var M=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(b,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,i=t.data;return Object(y.jsx)("div",{children:c?"Loading chart...":Object(y.jsx)(z.a,{type:"line",series:[{name:"Price",data:null===i||void 0===i?void 0:i.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!0},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===i||void 0===i?void 0:i.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$ ".concat(n.toFixed(3))}}}}})})};var T,A,D,F,_,B,H,J,R,$=function(){return Object(y.jsx)("h1",{children:"Price"})},E=s.c.h1(T||(T=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),U=s.c.span(A||(A=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),G=s.c.div(D||(D=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),K=s.c.header(F||(F=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),N=s.c.div(_||(_=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),V=s.c.div(B||(B=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),W=s.c.p(H||(H=Object(l.a)(["\n  margin: 20px 0px;\n"]))),X=s.c.div(J||(J=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),Y=s.c.span(R||(R=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var Z=function(){var n=Object(j.h)().coinId,e=Object(j.e)().state,t=Object(j.f)("/:coinId/price"),c=Object(j.f)("/:coinId/chart"),i=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,o=i.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(b,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,h=s.data,u=r||l;return Object(y.jsxs)(G,{children:[Object(y.jsx)(v.a,{children:Object(y.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(y.jsx)(K,{children:Object(y.jsx)(E,{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})}),u?Object(y.jsx)(U,{children:"Loading..."}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(N,{children:[Object(y.jsxs)(V,{children:[Object(y.jsx)("span",{children:"Rank:"}),Object(y.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(y.jsxs)(V,{children:[Object(y.jsx)("span",{children:"Symbol:"}),Object(y.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(y.jsxs)(V,{children:[Object(y.jsx)("span",{children:"Price:"}),Object(y.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.price})]})]}),Object(y.jsx)(W,{children:null===o||void 0===o?void 0:o.description}),Object(y.jsxs)(N,{children:[Object(y.jsxs)(V,{children:[Object(y.jsx)("span",{children:"Total Suply:"}),Object(y.jsx)("span",{children:null===h||void 0===h?void 0:h.total_supply})]}),Object(y.jsxs)(V,{children:[Object(y.jsx)("span",{children:"Max Supply:"}),Object(y.jsx)("span",{children:null===h||void 0===h?void 0:h.max_supply})]})]}),Object(y.jsxs)(X,{children:[Object(y.jsx)(Y,{isActive:null!==c,children:Object(y.jsx)(d.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(y.jsx)(Y,{isActive:null!==t,children:Object(y.jsx)(d.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"price",element:Object(y.jsx)($,{})}),Object(y.jsx)(j.a,{path:"chart",element:Object(y.jsx)(M,{coinId:n})})]})]})]})};var nn,en=function(){return Object(y.jsx)(d.a,{children:Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"/:coinId/*",element:Object(y.jsx)(Z,{})}),Object(y.jsx)(j.a,{path:"/",element:Object(y.jsx)(P,{})})]})})},tn=t(45),cn=Object(s.b)(nn||(nn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:","\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var rn=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(cn,{}),Object(y.jsx)(en,{}),Object(y.jsx)(tn.ReactQueryDevtools,{initialIsOpen:!0})]})},on=new a.QueryClient;o.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(a.QueryClientProvider,{client:on,children:Object(y.jsx)(s.a,{theme:{bgColor:"#636e72",textColor:"#ecf0f1",accentColor:"#0984e3"},children:Object(y.jsx)(rn,{})})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.34d54824.chunk.js.map