(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(8),r=n.n(o),s=n(0),u=n(6),i=n(5),l=n.n(i),b=n(3),j=n.n(b),d=n(11),p=function(e){return new Promise((function(t){return setTimeout(t,e)}))},h=Object(u.b)({key:"allQuotes",get:function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,p(1e3);case 8:return e.abrupt("return",n.quotes);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),f=n(2);function x(){var e=Object(u.c)(h),t=Object(c.useCallback)((function(){var t=Math.floor(Math.random()*e.length);return e[t]}),[e]),n=Object(c.useState)(t()),a=Object(s.a)(n,2),o=a[0],r=a[1],i=Object(c.useCallback)((function(){r(t())}),[r,t]);return Object(f.jsxs)("div",{className:l.a.quoteBody,children:[Object(f.jsxs)("div",{className:l.a.quoteText,children:[o.quote,Object(f.jsxs)("div",{children:["- ",o.author]})]}),Object(f.jsxs)("div",{className:l.a.buttonContainer,children:[Object(f.jsx)("button",{onClick:function(){console.log("Did the Tweet")},children:"Tweet"}),Object(f.jsx)("button",{onClick:i,children:"New Quote"})]})]})}var O=function(){return Object(f.jsxs)("div",{className:l.a.quoteContainer,children:[Object(f.jsx)("span",{className:l.a.title,children:"Random Quote Machine"}),Object(f.jsx)(c.Suspense,{fallback:Object(f.jsx)("span",{className:l.a.loading,children:"Loading..."}),children:Object(f.jsx)(x,{})})]})};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)(O,{})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={quoteContainer:"app_quoteContainer__2sO-I",title:"app_title__1tfK9",loading:"app_loading__2vWBs",fadeIn:"app_fadeIn__F1Y0H",quoteBody:"app_quoteBody__23e37",quoteText:"app_quoteText__tVvQi",buttonContainer:"app_buttonContainer__26AGL"}}},[[19,1,2]]]);
//# sourceMappingURL=main.331ff91b.chunk.js.map