(this["webpackJsonproller-coin"]=this["webpackJsonproller-coin"]||[]).push([[0],{39:function(e,c,t){},50:function(e,c,t){},52:function(e,c,t){},72:function(e,c,t){},73:function(e,c,t){},74:function(e,c,t){},75:function(e,c,t){},82:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),r=t(28),s=t.n(r),l=(t(39),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,83)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,r=c.getLCP,s=c.getTTFB;t(e),n(e),a(e),r(e),s(e)}))}),i=t(33),o=t(2),j=t(4),d=t(29),m=t.n(d),b=t(30),u=(t(50),t(0));function h(e){var c=e.coins,t=Object(n.useState)(!1),r=Object(j.a)(t,2),s=r[0],l=r[1],i=Object(n.useState)(0),o=Object(j.a)(i,2),d=o[0],h=o[1],x=Object(n.useState)(!1),O=Object(j.a)(x,2),A=O[0],v=O[1];return Object(n.useEffect)((function(){setTimeout((function(){v(!1)}),2e3)}),[A]),Object(u.jsx)(a.a.Fragment,{children:Object(u.jsxs)("header",{className:"header-container",children:[Object(u.jsxs)("div",{className:"header-start",children:[Object(u.jsx)("img",{className:"header-avatar",src:"https://www.peterbe.com/avatar.random.png",alt:"avatar"}),Object(u.jsx)("h1",{className:"header-tittle",children:"Hello Roller"})]}),Object(u.jsxs)("div",{className:"header-wallet",children:[Object(u.jsx)("h3",{role:"button",onClick:function(){return l(!s)&&v(!1)&&h(0)},className:"wallet-tittle",children:"Support Me"}),s&&Object(u.jsxs)("div",{className:"wallet-address",children:[Object(u.jsxs)("div",{className:"address-tittle",children:[Object(u.jsx)("h3",{children:c[d].name}),Object(u.jsx)("img",{className:"image-coin",src:c[d].img,alt:"icon"})]}),Object(u.jsx)("div",{className:"qr-wallet",children:Object(u.jsx)(m.a,{className:"qr-wallet",value:c[d].address,renderAs:"canvas",size:256,level:"H"})}),Object(u.jsx)("button",{type:"button",className:"change-coin",onClick:function(){h(3===d?0:d+1),v(!1)},children:">"}),A&&Object(u.jsx)("span",{className:"copied",children:"Copied!"}),Object(u.jsxs)("div",{className:"address-link",children:[Object(u.jsx)("br",{}),Object(u.jsx)(b.CopyToClipboard,{text:c[d].address,onCopy:function(){return v(!0)},className:"link",children:Object(u.jsxs)("p",{className:"link",children:["Click to copy address:",Object(u.jsx)("br",{}),c[d].address]})})]})]})]})]})})}t(52);var x=t.p+"static/media/w460h60.014ef3be.gif";function O(){return Object(u.jsx)(a.a.Fragment,{children:Object(u.jsxs)("footer",{className:"footer-container",children:[Object(u.jsxs)("h2",{className:"footer-tittle",children:["By",Object(u.jsx)("a",{className:"logo-container",target:"_blank",rel:"noreferrer",href:"https://rollercoin.com/?r=kc041d0j",children:Object(u.jsx)("img",{className:"logo-nick",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnMAAADiCAMAAAASy7HzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFAJOl3fH0qdPaq8fMc6WuzeLmu9neIKCxAKe8AIqkAHqKAGp3TYyXAIafAK7EAGd4AJquQq29vNfccrO+AYKQhL3IzOfrzdzfXqq23u/yAKO8vNXavNLWRp6ra8vbAJ+3ldjju9/mu+XtFneEAJu2zenvhrS9IZytAKzBu93jbr7MAKK3ALLKu9zh7vX2u9PXE3qHzezyAJq4VMXYAJStqc3Tl8bPmL/GK5WlV77OG3N+l8nT3evtPbTGcLfDAH6VAISW7/j6AJ6zALfNc663AGl+cLvIbsPSl8PL3unrNLvOYJqkAHSLuuTrAFJjM4qYgc7cqdrjQ6i2zd7hAG2DWrfHSZuocrC6AI6lS5KebcfXc6u0bcLQldLcAKK+F6a3AF1uAHqOAJOwmLm/h6+1ltTeAIygqd3nBa2+AJKnNr7SCH2LmbvCgNLfAG6APrLCAFtpl83XSZejALPHAKvEAJ28g8rXAIealtDaNn+KAHeKAIacg8HNAIKY3uzvNIOPAIWVbcnZAI+hAGN2/2YAbsXUAJetObjLWrPAzOjtRqCvTI+aAE9eAGFw/7N+/9q//404AImnAIupAFRnAE1eAFZqAFFkAEpbAFltAFtwAIakAE9iAIShvdDUAEBQAEJTAEVWAJCvAEdZAGyEAG6HAGmCAIKdAGd/AHGKAGJ5AF5yAGB1AGV8AH+aAH2YAHSNAHuVAHaPAJKyAHiSAJS1//Xv/3EAAI2sAJa3/8af/+3f/+PP/6Fd/3oL/4QkAJe4/5dL/6tu/72O/9Cv7vP0uuHou+Pq7vb37/T1u+Dn7vb4AIST7vf4vNTYu9bbAIeXDH6MvNjd7/f5vNHVAImZAIKaAIqbAI2dcq22u+LpAJap3ujqmMHJdKGq7vf5AH2SAH+Uc6mxAHKHAGV6mL3Ep9/pAHKBAI+rl9Xhl8DHlsjRAHmQg8bSqdfgAIydzOTpl8zVAFZnX6OvALHEAE1bKJmpvNTZAJuyYpehuuTsu9rfAImgFqi6l8/Y7/P0////r/TfawAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAABhySURBVHja7J0JuBxVlcezECckLJEthOURwjIQkkcWdpIMSYCAICBhF8KqyBIGkB1km0YRpKsAQZYAwgAOCCOD6U56pd97AZIQkMUogswMMhIFFZwZx5EZremu5dzt3Krqfp3Xb8L//318vL51tnvqV7eqq7s6QzwIGlgNQQsgMAeBOQgCcxCYgyAwB4E5CAJzEJiDwBwEgTkIzEEQmIPAHASBOQjMQWAOgsAcBOYgCMxBYA6CwBwE5iAwB0FgDgJzEATmIDAHQWAOAnMQBOYgMAeBOQgCcxCYgyAwB4E5CAJzEJiDwBwEgTkIzEEQmIPAHASBOQjMQWAOgsAcBOYgCMxBYA6CwBwE5iAIzEFgDgJzEATmIDAHQWAOAnMQBOYgMAeBOQgCcxCYgyAwB4E5CAJzEJiDwBwEDTrmpk5fu9XMntDVNamh6V0TZq+dFNOntrPchV1z69XO7Vo4YeD6NnV817lRk4aupf1w6dBBw9yE585NNnouktgPUyeFmh67Yy55TtYlDB7To0AMOXMn6VnGM2knXZoMXVdUwqRmyu2a2va+GRq6cK6S9LkF5/7SrIwa8cuknAvJdKjagHMHD3NLlyYXszTSBNkvkHUnzh6/YKmpS8ZrZpPM2NQn8iKqupi0k5YmQ9eVXG4XW+7C2e3tmx5mLpN06aXT9UWJaluQuJ7xlvXh2YOGucWLFyc2b3GkCYqfL9tO7Jq2mNcClbpJZmw9xeLFCykqk7YeYVoSdF0J5b4+3VbutK7Z7eyborMXLLbpXJW68bTh7PiUwnC8Ptw1WJj707N1fS7B6NlIf1L9GtrI0s1n7bpkJ8lyIzN2eMROI4e5NHgDk7YRIQm6G+LLPWpaTLnTbmhj3+Sz6kbPps4qmrFRfErq+wJjeNrsQcLc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",alt:"logo-nick"})})]}),Object(u.jsxs)("ul",{className:"social-container",children:[Object(u.jsx)("li",{className:"icons-container",children:Object(u.jsx)("a",{className:"icons",target:"_blank",rel:"noreferrer",href:"https://twitter.com/nickingnova",children:"Twitter"})}),Object(u.jsx)("li",{className:"icons-container",children:Object(u.jsx)("a",{className:"icons",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/nicolas-fernandez-6b4b23b1/",children:"Linkedin"})}),Object(u.jsx)("li",{className:"icons-container",children:Object(u.jsx)("a",{className:"icons",target:"_blank",rel:"noreferrer",href:"https://github.com/nickingnova",children:"GitHub"})})]}),Object(u.jsx)("a",{className:"promo-container",target:"blank",href:"https://rollercoin.com/?r=kc041d0j",children:Object(u.jsx)("img",{className:"promo",src:x,alt:"RollerPromo"})})]})})}function A(e){return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)(h,{coins:e.coins}),e.children,Object(u.jsx)(O,{})]})}var v=t(13),p=t.n(v),f=t(31),N=t(32),g=t.n(N);t(72);var z=function(e){return Object(u.jsx)(a.a.Fragment,{children:Object(u.jsx)("div",{className:"container",children:e.coins.map((function(e,c){return Object(u.jsxs)("div",{className:"info-container",index:c,children:[Object(u.jsxs)("h2",{className:"tittle-coin",children:[Object(u.jsx)("span",{className:"image-coin",children:Object(u.jsx)("img",{src:e.img,alt:"".concat(e.name,"-icon")})}),e.name]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Price: "}),"$",e.price]}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"Change last 24hr:"})}),Object(u.jsxs)("p",{className:e.change24>=0?"green":"red",children:[" ",e.change24.toFixed(2),"%"]})]},c)}))})})},T=(t(73),function(e){var c=e.perBLock,t=e.perHour,n=e.perDay,a=e.perWeek,r=e.perMonth,s=e.coinsAdd,l=e.coinsChange;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("table",{className:"table-container",children:[Object(u.jsx)("thead",{className:"col-container",children:Object(u.jsxs)("tr",{className:"col",children:[Object(u.jsx)("td",{children:Object(u.jsx)("h2",{className:"table-tittles",children:"Rewards"})}),Object(u.jsx)("td",{children:Object(u.jsx)("h2",{className:"table-tittles",children:"Value*"})}),Object(u.jsx)("td",{children:Object(u.jsxs)("h2",{className:"table-tittles",children:["Price in ",s[l].name]})})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{className:"row",children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Per block: "})}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{children:[c," "]})}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{children:["$","BTC"===s[l].name?(s[l].price/1e8*c).toFixed(2):(s[l].price*c).toFixed(2)," "]})})]}),Object(u.jsxs)("tr",{className:"row",children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Per hour: "})}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{children:[t," "]})}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{children:["$","BTC"===s[l].name?(s[l].price/1e8*t).toFixed(2):(s[l].price*t).toFixed(2)," "]})})]}),Object(u.jsxs)("tr",{className:"row",children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Per day: "})}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{children:[n," "]})}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{children:["$","BTC"===s[l].name?(s[l].price/1e8*n).toFixed(2):(s[l].price*n).toFixed(2)," "]})})]}),Object(u.jsxs)("tr",{className:"row",children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Per week:  "})}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{children:[a," "]})}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{children:["$","BTC"===s[l].name?(s[l].price/1e8*a).toFixed(2):(s[l].price*a).toFixed(2)," "]})})]}),Object(u.jsxs)("tr",{className:"row",children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Per Month:"})}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{children:[r," "]})}),Object(u.jsx)("td",{children:Object(u.jsxs)("p",{children:["$","BTC"===s[l].name?(s[l].price/1e8*r).toFixed(2):(s[l].price*r).toFixed(2)," "]})})]})]})]}),Object(u.jsx)("h2",{className:"info",children:"These value are not officially*"})]})}),k=(t(74),function(e){var c=e.coins,t=e.coinsChange,n=e.coinChange,a=e.onSubmit,r=e.powerNet,s=e.setPowerNet,l=e.setRewardBlock,i=e.rewardBlock,o=e.yourPower,j=e.hashChange,d=e.hashes,m=e.setYourPower;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{className:"form-container form",onSubmit:a,children:[Object(u.jsx)("h1",{className:"form-title",children:"Calculator"}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("h2",{className:"form-subTitle",children:["Block Reward in",Object(u.jsx)("select",{className:"selector",name:"coins",onChange:n,children:c.map((function(e){return Object(u.jsx)("option",{value:e.value,children:e.name},e.value)}))}),"is",Object(u.jsx)("input",{onChange:function(e){return l(e.target.value)},value:i,className:"form-control reward",type:"number",name:"powerNet",placeholder:c[t].value,required:!0})," ( 10 min now ) "]})}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsxs)("label",{className:"label",children:["Power Network in ",c[t].name,": "]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{onChange:function(e){return s(e.target.value)},value:r,className:"form-control",type:"number",name:"powerNet",required:!0}),Object(u.jsx)("label",{className:"label right",children:"(EH/s)"})]})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsxs)("label",{className:"label",children:["Your Power in ",c[t].name,": "]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{onChange:function(e){return m(e.target.value)},value:o,className:"form-control",type:"number",name:"yourPower",required:!0}),Object(u.jsx)("select",{name:"hashes",className:"selector",onChange:j,children:d.map((function(e){return Object(u.jsx)("option",{value:e.value,children:e.name},e.value)}))})]})]}),Object(u.jsx)("button",{type:"submit",className:"btn",children:"Calculate"})]})})}),F=(t(75),t.p+"static/media/rlt.237e8ace.svg"),q=[{value:"30000",name:"BTC",price:0,img:"",change24:0,address:"14kjB9EJamPEZrTNU8AfYzBaNJAdDuQZnq"},{value:"0.005",name:"ETH",price:0,img:"",change24:0,address:"0xfc932c099e7367f3fde62b62e05d1590e725a1c8"},{value:"20",name:"DOGE",price:0,img:"",change24:0,address:"D9X9aRC2azGsLLp2it9Ct9hhxzvBqq8dvB"},{value:"0.012",name:"BNB",price:0,img:"",change24:0,address:"0xAbAd1451af0F94f0e96d634DC68B008f8EBC4ADc"},{value:"30",name:"RTL",price:1,img:F,change24:0,address:""}],y=[{value:"1000000000",name:"GH/s"},{value:"1000000000000",name:"TH/s"},{value:"1000000000000000",name:"PH/s"},{value:"1000000000000000000",name:"EH/s"}];function H(){var e=a.a.useState(q),c=Object(j.a)(e,2),t=c[0],r=c[1],s=a.a.useState(!1),l=Object(j.a)(s,2),i=l[0],o=l[1],d=function(e){for(var c=[].concat(q),t=function(t){var n=e.find((function(e){return e.symbol===q[t].name.toLowerCase()}));c[t].price=n.current_price,c[t].img=n.image,c[t].change24=n.price_change_percentage_24h},n=0;n<4;n++)t(n);r(c),o(!0)};Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var c,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=20&page=1");case 3:return c=e.sent,e.next=6,c.data;case 6:return t=e.sent,e.next=9,d(t);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=a.a.useState(0),b=Object(j.a)(m,2),h=b[0],x=b[1],O=a.a.useState(0),A=Object(j.a)(O,2),v=A[0],N=A[1],F=a.a.useState(0),H=Object(j.a)(F,2),L=H[0],M=H[1],P=a.a.useState(""),Z=Object(j.a)(P,2),C=Z[0],I=Z[1],w=a.a.useState(""),B=Object(j.a)(w,2),S=B[0],V=B[1],X=a.a.useState(""),W=Object(j.a)(X,2),D=W[0],E=W[1],R=a.a.useState(0),Y=Object(j.a)(R,2),K=Y[0],J=Y[1],G=a.a.useState(0),U=Object(j.a)(G,2),Q=U[0],_=U[1],$=a.a.useState(0),ee=Object(j.a)($,2),ce=ee[0],te=ee[1],ne=a.a.useState(0),ae=Object(j.a)(ne,2),re=ae[0],se=ae[1];return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsxs)("div",{className:"global-container",children:[Object(u.jsx)("div",{className:"mid-form",children:Object(u.jsx)(k,{coins:q,coinsChange:h,coinChange:function(e){var c=e.target.value,t=q.findIndex((function(e){return e.value===c}));x(t)},onSubmit:function(e){e.preventDefault();var c=C*parseInt(y[3].value);console.log(c);var n=S*parseInt(y[v].value);console.log(n);var a=parseFloat(D)*(n/c);console.log(a),isNaN(a)?(M(0),J(0),_(0),te(0),se(0)):"BTC"===t[h].name?(M(a.toFixed(8)),J((6*a).toFixed(7)),_((144*a).toFixed(6)),te((1008*a).toFixed(5)),se((4320*a).toFixed(4))):(M(a.toFixed(8)),J((6*a).toFixed(8)),_((144*a).toFixed(8)),te((1008*a).toFixed(8)),se((4320*a).toFixed(8)))},setRewardBlock:E,rewardBlock:D,powerNet:C,setPowerNet:I,yourPower:S,hashChange:function(e){var c=e.target.value,t=y.findIndex((function(e){return e.value===c}));N(t)},hashes:y,setYourPower:V})}),Object(u.jsx)("div",{className:"mid-table",children:Object(u.jsx)(T,{perBLock:L,perHour:K,perDay:Q,perWeek:ce,perMonth:re,coinsAdd:t,coinsChange:h})})]}),Object(u.jsx)("hr",{}),!0===i&&Object(u.jsx)("div",{className:"mid-widget",children:Object(u.jsx)(z,{coins:t},t.name)})]})}var L=function(){return Object(u.jsx)(i.a,{children:Object(u.jsx)(A,{coins:q,children:Object(u.jsx)(o.c,{children:Object(u.jsx)(o.a,{path:"/roller-coin-calculator/",component:H})})})})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),l()}},[[82,1,2]]]);
//# sourceMappingURL=main.7e36d6a7.chunk.js.map