(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/IMG_7847.911ad5e6.PNG"},13:function(e,t,n){e.exports=n(21)},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(8),c=n.n(o),l=(n(18),n(6)),i=n(12),u=n(5),s=n(3),m=n(4),f=n(0),p=function(e){var t=e.color,n=e.text,r=e.onClick;return a.a.createElement("button",{onClick:r,style:{backgroundColor:t},className:"btn"},n)};p.defaultProps={color:"steelblue"};var h=p,d=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,o=Object(f.e)();return a.a.createElement("header",{className:"header"},a.a.createElement("h1",{className:"logo"},t),"/"===o.pathname&&a.a.createElement(h,{color:r?"red":"black",text:r?"Close":"Add",onClick:n}))};d.defaultProps={title:"Shooting Stars Garden"};var v=d,E=n(9),y=n.n(E),g=function(){return a.a.createElement("div",{className:"centered"},a.a.createElement("div",{className:"palnet"},a.a.createElement("img",{src:y.a,alt:"",className:"image"})))},b=n(10),w=n.n(b),x=function(){return a.a.createElement("div",{className:"centered"},a.a.createElement("div",{className:"palnet"},a.a.createElement("img",{src:w.a,alt:"",className:"image"})))},N=function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"p p-1"}),a.a.createElement("div",{className:"p p-2"}),a.a.createElement("div",{className:"p p-3"}),a.a.createElement("div",{className:"p p-4"}),a.a.createElement("div",{className:"p p-5"}),a.a.createElement("div",{className:"p p-6"}),a.a.createElement("div",{className:"p p-7"}),a.a.createElement("div",{className:"p p-8"}),a.a.createElement("div",{className:"p p-9"}),a.a.createElement("div",{className:"p p-11"}),a.a.createElement("div",{className:"p p-21"}),a.a.createElement("div",{className:"p p-31"}),a.a.createElement("div",{className:"p p-41"}),a.a.createElement("div",{className:"p p-51"}),a.a.createElement("div",{className:"p p-61"}),a.a.createElement("div",{className:"p p-71"}),a.a.createElement("div",{className:"p p-81"}),a.a.createElement("div",{className:"p p-91"}))},k=function(){return a.a.createElement("footer",null,a.a.createElement("p",null,"blind0ne \xa9 2022"),a.a.createElement(m.b,{to:"/about"},"About"),a.a.createElement(g,null),a.a.createElement(x,null),a.a.createElement(N,null))},j=n(11),O=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return a.a.createElement("div",{className:"task ".concat(t.reminder&&"reminder"),onDoubleClick:function(){return r(t.id)}},a.a.createElement("h3",null,t.text," ",a.a.createElement(j.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})),a.a.createElement("p",null,t.day))},L=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return a.a.createElement(a.a.Fragment,null,t.map(function(e,t){return a.a.createElement(O,{key:t,task:e,onDelete:n,onToggle:r})}))},T=function(e){var t=e.onAdd,n=Object(r.useState)(""),o=Object(s.a)(n,2),c=o[0],l=o[1],i=Object(r.useState)(""),u=Object(s.a)(i,2),m=u[0],f=u[1],p=Object(r.useState)(!1),h=Object(s.a)(p,2),d=h[0],v=h[1];return a.a.createElement("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),c?(t({text:c,day:m,reminder:d}),l(""),f(""),v(!1)):alert("Please add a task")}},a.a.createElement("div",{className:"form-control"},a.a.createElement("label",null,"Task"),a.a.createElement("input",{type:"text",placeholder:"Add Task",value:c,onChange:function(e){return l(e.target.value)}})),a.a.createElement("div",{className:"form-control"},a.a.createElement("label",null,"Day & Time"),a.a.createElement("input",{type:"text",placeholder:"Add Day & Time",value:m,onChange:function(e){return f(e.target.value)}})),a.a.createElement("div",{className:"form-control form-control-check"},a.a.createElement("label",null,"Set Reminder"),a.a.createElement("input",{type:"checkbox",checked:d,value:d,onChange:function(e){return v(e.currentTarget.checked)}})),a.a.createElement("input",{type:"submit",value:"Save Task",className:"btn btn-block"}))},S=function(){return a.a.createElement("div",null,a.a.createElement("h4",null,"Version 1.0.2"),a.a.createElement("h6",null,"Forked by partlyBlind0ne"),a.a.createElement(m.b,{to:"/"},"Go Back"))},_=function(){return a.a.createElement("div",{className:"centered"},a.a.createElement("div",{className:"moon"},a.a.createElement("ul",null,a.a.createElement("li",null),a.a.createElement("li",null),a.a.createElement("li",null),a.a.createElement("li",null),a.a.createElement("li",null),a.a.createElement("li",null),a.a.createElement("li",null))))},C=function(){return a.a.createElement("div",{className:"background-fullviewport"},a.a.createElement("div",{className:"sun"}))},P=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{role:"navigation"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"#"},"Blog")),a.a.createElement("li",null,a.a.createElement("a",{href:"#"},"Magic"),a.a.createElement("ul",{class:"dropdown"},a.a.createElement("li",null,a.a.createElement("a",{href:"#"},"Tarot")),a.a.createElement("li",null,a.a.createElement("a",{href:"#"},"Astrology")))))))};function G(){G=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(O){l=function(e,t,n){return e[t]=n}}function i(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new N(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var l=b(c,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var i=u(e,t,n);if("normal"===i.type){if(r=n.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r="completed",n.method="throw",n.arg=i.arg)}}}(e,n,c),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=i;var s={};function m(){}function f(){}function p(){}var h={};l(h,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(k([])));v&&v!==t&&n.call(v,a)&&(h=v);var E=p.prototype=m.prototype=Object.create(h);function y(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function g(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,l){var i=u(e[a],e,o);if("throw"!==i.type){var s=i.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,l)},function(e){r("throw",e,c,l)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return r("throw",e,c,l)})}l(i.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,l(E,"constructor",p),l(p,"constructor",f),f.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},y(g.prototype),l(g.prototype,o,function(){return this}),e.AsyncIterator=g,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new g(i(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(E),l(E,c,"Generator"),l(E,a,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),i=n.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var A=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)([]),p=Object(s.a)(c,2),h=p[0],d=p[1];Object(r.useEffect)(function(){!function(){var e=Object(u.a)(G().mark(function e(){var t;return G().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var E=function(){var e=Object(u.a)(G().mark(function e(){var t,n;return G().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(G().mark(function e(t){var n,r;return G().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(G().mark(function e(t){var n,r;return G().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,d([].concat(Object(i.a)(h),[r]));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(G().mark(function e(t){return G().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:200===e.sent.status?d(h.filter(function(e){return e.id!==t})):alert("Error Deleting This Task");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(G().mark(function e(t){var n,r,a,o;return G().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return n=e.sent,r=Object(l.a)({},n,{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return a=e.sent,e.next=9,a.json();case 9:o=e.sent,d(h.map(function(e){return e.id===t?Object(l.a)({},e,{reminder:o.reminder}):e}));case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(m.a,null,a.a.createElement("div",null,a.a.createElement(P,null),a.a.createElement(C,null),a.a.createElement("div",{className:"container"},a.a.createElement(_,null),a.a.createElement(v,{onAdd:function(){return o(!n)},showAdd:n}),a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",element:a.a.createElement(a.a.Fragment,null,n&&a.a.createElement(T,{onAdd:g}),h.length>0?a.a.createElement(L,{tasks:h,onDelete:b,onToggle:w}):"No Tasks To Show")}),a.a.createElement(f.a,{path:"/about",element:a.a.createElement(S,null)})),a.a.createElement(k,null))))},F=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,22)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(A,null)),document.getElementById("root")),F()},9:function(e,t,n){e.exports=n.p+"static/media/IMG_7848.ee14e111.PNG"}},[[13,3,2]]]);
//# sourceMappingURL=main.6ff4094c.chunk.js.map