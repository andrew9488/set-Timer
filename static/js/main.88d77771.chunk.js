(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),u=a.n(c),l=a(4),i=a.n(l),s=(a(10),a(2));a(11);function r(e){return Object(n.jsxs)("div",{children:[e.title," ",Object(n.jsx)("input",{type:"number",value:e.value,onChange:function(t){var a=Number(t.currentTarget.value);e.update(a)}})]})}function o(e){return Object(n.jsxs)("div",{className:"scoreboard",children:[Object(n.jsx)(r,{title:" maximum value: ",value:e.maxValue,update:e.updateMaxValue}),Object(n.jsx)(r,{title:" starting value: ",value:e.value,update:e.updateValue})]})}function j(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"button",children:Object(n.jsx)("button",{onClick:function(){e.install()},children:e.title})})})}a(12);function d(e){return Object(n.jsxs)("div",{className:"setTimerValue",children:[Object(n.jsx)(o,{value:e.value,maxValue:e.maxValue,updateValue:e.updateValue,updateMaxValue:e.updateMaxValue}),Object(n.jsx)(j,{title:"set",value:e.value,install:e.install})]})}function b(e){var t=e.count===e.maxValue?"red":"";return Object(n.jsx)("div",{className:"scoreboard",children:Object(n.jsx)("h3",{className:t,children:e.count})})}function x(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"button",children:Object(n.jsx)("button",{onClick:e.onClick,disabled:e.count===e.disabled,children:e.title})})})}function O(e){return Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(x,{title:"inc",onClick:function(){return e.increase()},disabled:e.maxValue,count:e.count}),Object(n.jsx)(x,{title:"reset",onClick:function(){return e.reset()},disabled:e.value,count:e.count})]})}a(13);function v(e){return Object(n.jsxs)("div",{className:"timerValue",children:[Object(n.jsx)(b,{count:e.count,value:e.value,maxValue:e.maxValue}),Object(n.jsx)(O,{increase:e.increase,reset:e.reset,count:e.count,maxValue:e.maxValue,value:e.value})]})}var f=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),a=t[0],u=t[1],l=Object(c.useState)(0),i=Object(s.a)(l,2),r=i[0],o=i[1];Object(c.useEffect)((function(){var e=localStorage.getItem("Value");if(e){var t=JSON.parse(e);u(t)}}),[]),Object(c.useEffect)((function(){var e=localStorage.getItem("MaxValue");if(e){var t=JSON.parse(e);o(t)}}),[]);var j=Object(c.useState)(a),b=Object(s.a)(j,2),x=b[0],O=b[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("Count");if(e){var t=JSON.parse(e);O(t)}}),[]),Object(c.useEffect)((function(){localStorage.setItem("Count",JSON.stringify(a))}),[a]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h3",{children:"set-timer"}),Object(n.jsx)("div",{className:"setTimer",children:Object(n.jsx)(d,{value:a,maxValue:r,install:function(){localStorage.setItem("Value",JSON.stringify(a)),localStorage.setItem("MaxValue",JSON.stringify(r))},updateValue:function(e){u(e)},updateMaxValue:function(e){o(e)}})}),Object(n.jsx)("div",{className:"timer",children:Object(n.jsx)(v,{count:x,increase:function(){O(x+1)},reset:function(){O(a)},value:a,maxValue:r})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,u=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),u(e),l(e)}))};i.a.render(Object(n.jsx)(u.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),m()}],[[14,1,2]]]);
//# sourceMappingURL=main.88d77771.chunk.js.map