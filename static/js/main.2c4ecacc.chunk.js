(this["webpackJsonpreact-for-masters"]=this["webpackJsonpreact-for-masters"]||[]).push([[0],{65:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),i=t(25),o=t.n(i),a=t(11),s=t(6),l=t(8),d=t(17),j=t(4),b="https://api.coinpaprika.com/v1";function u(){return fetch("".concat(b,"/coins")).then((function(n){return n.json()}))}var h,p,x,f,O,m,g,v=t(26),y=t(1),k=s.c.div(h||(h=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),w=s.c.header(p||(p=Object(l.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),C=s.c.ul(x||(x=Object(l.a)([""]))),L=s.c.li(f||(f=Object(l.a)(["\n  background-color: white;\n  font-weight: 600;\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a{\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n    display: block;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),I=s.c.h1(O||(O=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.textColor})),q=s.c.span(m||(m=Object(l.a)(["\n  text-align: center;\n"]))),S=s.c.img(g||(g=Object(l.a)(["\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n"])));var Q=function(){var n=Object(a.useQuery)("allCoins",u),e=n.isLoading,t=n.data;return Object(y.jsxs)(k,{children:[Object(y.jsx)(v.a,{children:Object(y.jsx)("title",{children:"\ucf54\uc778"})}),Object(y.jsx)(w,{children:Object(y.jsx)(I,{children:"Coin"})}),e?Object(y.jsx)(q,{children:"Loading..."}):Object(y.jsx)(C,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(y.jsx)(L,{children:Object(y.jsxs)(d.b,{to:"/react-for-beginners/".concat(n.id),state:{name:n.name},children:[Object(y.jsx)(S,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},z=t(44),F=t.n(z);var D,M,P=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(b,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,r=t.data;return Object(y.jsx)("div",{children:c?"Loading chart...":Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(F.a,{type:"candlestick",series:[{name:"Price",data:null===r||void 0===r?void 0:r.map((function(n){return[n.time_close,n.open,n.high,n.low,n.close]}))}],options:{theme:{mode:"dark"},chart:{height:300,width:600,toolbar:{show:!1},background:"transparent"},grid:{show:!0},stroke:{curve:"smooth",width:3},yaxis:{show:!0,labels:{formatter:function(n){return n.toFixed(0)}}},xaxis:{type:"datetime",categories:null===r||void 0===r?void 0:r.map((function(n){return n.time_close}))},fill:{type:"solid"},tooltip:{enabled:!1}}})})})},E=s.c.ul(D||(D=Object(l.a)([""]))),_=s.c.li(M||(M=Object(l.a)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 16px;\n"])));var A,T,B,H,J,R,N,U,$,G,K=function(n){var e=n.coinId,t=Object(a.useQuery)(["events",e],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n,"/events")).then((function(n){return n.json()}))}(e)})),c=t.isLoading,r=t.data;return Object(y.jsx)(y.Fragment,{children:c?"Loading Events...":Object(y.jsx)(E,{children:null===r||void 0===r?void 0:r.slice(-1).map((function(n){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(_,{children:["Date: ",n.date]},n.id),Object(y.jsxs)(_,{children:["Event Name: ",n.name]}),Object(y.jsxs)(_,{children:["Description: ",n.description]}),Object(y.jsxs)(_,{children:["Link: ",n.link]})]})}))})})},V=s.c.h1(A||(A=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),W=s.c.span(T||(T=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),X=s.c.div(B||(B=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),Y=s.c.header(H||(H=Object(l.a)(["\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Z=s.c.div(J||(J=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),nn=s.c.div(R||(R=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),en=s.c.p(N||(N=Object(l.a)(["\n  margin: 20px 0px;\n"]))),tn=s.c.div(U||(U=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),cn=s.c.span($||($=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),rn=s.c.button(G||(G=Object(l.a)(["\n  text-align: center;\n  color: ",";\n  background-color: ",";\n  border: 0;\n  border-radius: 5px;\n  width: 50px;\n  height: 30px;\n  margin: 15px 0px;\n  cursor: pointer;\n  &:hover {\n    color: #0be881\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor}));var on=function(){var n=Object(j.g)(),e=Object(j.h)().coinId,t=Object(j.e)().state,c=Object(j.f)("/react-for-beginners/:coinId/event"),r=Object(j.f)("/react-for-beginners/:coinId/chart"),i=Object(a.useQuery)(["info",e],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n)).then((function(n){return n.json()}))}(e)})),o=i.isLoading,s=i.data,l=Object(a.useQuery)(["tickers",e],(function(){return function(n){return fetch("".concat(b,"/tickers/").concat(n)).then((function(n){return n.json()}))}(e)}),{refetchInterval:5e3}),u=l.isLoading,h=l.data,p=o||u;return Object(y.jsxs)(X,{children:[Object(y.jsx)(v.a,{children:Object(y.jsx)("title",{children:(null===t||void 0===t?void 0:t.name)?t.name:p?"Loading...":null===s||void 0===s?void 0:s.name})}),Object(y.jsx)(rn,{onClick:function(){return n(-1)},children:"Back"}),Object(y.jsx)(Y,{children:Object(y.jsx)(V,{children:(null===t||void 0===t?void 0:t.name)?t.name:p?"Loading...":null===s||void 0===s?void 0:s.name})}),p?Object(y.jsx)(W,{children:"Loading..."}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(Z,{children:[Object(y.jsxs)(nn,{children:[Object(y.jsx)("span",{children:"Rank:"}),Object(y.jsx)("span",{children:null===s||void 0===s?void 0:s.rank})]}),Object(y.jsxs)(nn,{children:[Object(y.jsx)("span",{children:"Symbol:"}),Object(y.jsxs)("span",{children:["$",null===s||void 0===s?void 0:s.symbol]})]}),Object(y.jsxs)(nn,{children:[Object(y.jsx)("span",{children:"Price:"}),Object(y.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.price.toFixed(3)})]})]}),Object(y.jsx)(en,{children:null===s||void 0===s?void 0:s.description}),Object(y.jsxs)(Z,{children:[Object(y.jsxs)(nn,{children:[Object(y.jsx)("span",{children:"Total Suply:"}),Object(y.jsx)("span",{children:null===h||void 0===h?void 0:h.total_supply})]}),Object(y.jsxs)(nn,{children:[Object(y.jsx)("span",{children:"Max Supply:"}),Object(y.jsx)("span",{children:null===h||void 0===h?void 0:h.max_supply})]})]}),Object(y.jsxs)(tn,{children:[Object(y.jsx)(cn,{isActive:null!==r,children:Object(y.jsx)(d.b,{to:"/react-for-beginners/".concat(e,"/chart"),children:"Chart"})}),Object(y.jsx)(cn,{isActive:null!==c,children:Object(y.jsx)(d.b,{to:"/react-for-beginners/".concat(e,"/event"),children:"Event"})})]}),Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"event",element:Object(y.jsx)(K,{coinId:e})}),Object(y.jsx)(j.a,{path:"chart",element:Object(y.jsx)(P,{coinId:e})})]})]})]})};var an,sn=function(){return Object(y.jsx)(d.a,{children:Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"/react-for-beginners/:coinId/*",element:Object(y.jsx)(on,{})}),Object(y.jsx)(j.a,{path:"/react-for-beginners/",element:Object(y.jsx)(Q,{})})]})})},ln=t(45),dn=Object(s.b)(an||(an=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:","\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var jn=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(dn,{}),Object(y.jsx)(sn,{}),Object(y.jsx)(ln.ReactQueryDevtools,{initialIsOpen:!0})]})},bn=new a.QueryClient;o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(a.QueryClientProvider,{client:bn,children:Object(y.jsx)(s.a,{theme:{bgColor:"#636e72",textColor:"#ecf0f1",accentColor:"#0984e3"},children:Object(y.jsx)(jn,{})})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.2c4ecacc.chunk.js.map