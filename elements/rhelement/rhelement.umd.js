!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.RHElement=t()}(this,function(){"use strict";function e(){console.log("[reveal] web components ready"),console.log("[reveal] elements ready, revealing the body"),window.document.body.removeAttribute("unresolved")}var t,n,o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=function(e){function u(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.type,o=void 0===n?null:n,r=t.delayRender,i=void 0!==r&&r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return a._rhClass=e,a.tag=e.tag,a._queue=[],a.template=document.createElement("template"),a.attachShadow({mode:"open"}),o&&a._queueAction({type:"setProperty",data:{name:"rhType",value:o}}),i||a.render(),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,HTMLElement),o(u,[{key:"rhType",get:function(){return this.getAttribute("rh-type")},set:function(e){this.setAttribute("rh-type",e)}}],[{key:"create",value:function(e){window.customElements.define(e.tag,e)}},{key:"RhTypes",get:function(){return{Container:"container",Content:"content",Pattern:"pattern"}}}]),o(u,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._queue.length&&this._processQueue()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this._rhClass.cascadingAttributes){var o=this._rhClass.cascadingAttributes[e];o&&this._copyAttribute(e,o)}}},{key:"_copyAttribute",value:function(e,t){var n=this.shadowRoot.querySelectorAll(t),o=this.getAttribute(e),r=null==o?"removeAttribute":"setAttribute",i=!0,a=!1,u=void 0;try{for(var l,s=n[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){l.value[r](e,o)}}catch(e){a=!0,u=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw u}}}},{key:"_queueAction",value:function(e){this._queue.push(e)}},{key:"_processQueue",value:function(){var t=this;this._queue.forEach(function(e){t["_"+e.type](e.data)}),this._queue=[]}},{key:"_setProperty",value:function(e){var t=e.name,n=e.value;this[t]=n}},{key:"render",value:function(){this.shadowRoot.innerHTML="",this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}]),u}();return t=window.WebComponents,n=t&&window.WebComponents.ready,!t||n?e():window.addEventListener("WebComponentsReady",e),r});
//# sourceMappingURL=rhelement.umd.js.map
