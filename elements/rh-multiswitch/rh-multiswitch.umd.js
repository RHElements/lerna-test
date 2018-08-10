!function(t,e){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.umd.js"],e);else if("undefined"!=typeof exports)e(require("../rhelement/rhelement.umd.js"));else{e(t.RHElement),t.RHElement=t.RHElement||{},t.RHElement.RhMultiswitch={}}}(this,function(t){"use strict";var e,n=(e=t)&&e.__esModule?e:{default:e};var i=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();var l=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,e.tag));return t._slotChange=t._slotChange.bind(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n.default),i(e,[{key:"html",get:function(){return'\n<style>\n:host {\n  display: block; }\n\n::slotted(*) {\n  display: none; }\n\n.rh-multiswitch__fieldset {\n  border: 0;\n  padding: 0; }\n  .rh-multiswitch__fieldset *, .rh-multiswitch__fieldset *::before, .rh-multiswitch__fieldset *::after {\n    box-sizing: border-box; }\n  .rh-multiswitch__fieldset legend {\n    display: block;\n    margin-bottom: 10px;\n    font-weight: 600; }\n\n.rh-multiswitch__container {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  max-width: 50em;\n  line-height: 2em;\n  user-select: none;\n  background: #333;\n  color: #fff;\n  transition: background 0.1s ease-out;\n  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3); }\n  .rh-multiswitch__container input {\n    position: absolute;\n    left: -200vw; }\n    .rh-multiswitch__container input:checked ~ a {\n      left: 0;\n      box-shadow: 1px 0 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25); }\n    .rh-multiswitch__container input:not(:first-child):checked ~ a {\n      box-shadow: 1px 0 0 rgba(0, 0, 0, 0.2), -1px 0 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25); }\n    .rh-multiswitch__container input:focus ~ a {\n      outline: 2px solid #0088ce; }\n  .rh-multiswitch__container label {\n    width: 50%;\n    text-align: center;\n    padding-left: 1em;\n    padding-right: 1em;\n    z-index: 2;\n    cursor: pointer;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4); }\n    .rh-multiswitch__container label:nth-last-child(6),\n    .rh-multiswitch__container label:nth-last-child(6) ~ label,\n    .rh-multiswitch__container label:nth-last-child(6) ~ a {\n      width: 33.3334%; }\n    .rh-multiswitch__container label:nth-last-child(8),\n    .rh-multiswitch__container label:nth-last-child(8) ~ label,\n    .rh-multiswitch__container label:nth-last-child(8) ~ a {\n      width: 25%; }\n    .rh-multiswitch__container label:nth-last-child(10),\n    .rh-multiswitch__container label:nth-last-child(10) ~ label,\n    .rh-multiswitch__container label:nth-last-child(10) ~ a {\n      width: 20%; }\n    .rh-multiswitch__container label:nth-last-child(12),\n    .rh-multiswitch__container label:nth-last-child(12) ~ label,\n    .rh-multiswitch__container label:nth-last-child(12) ~ a {\n      width: 16.6667%; }\n    .rh-multiswitch__container label:nth-last-child(4) ~ input:nth-child(3):checked ~ a {\n      left: 50%; }\n    .rh-multiswitch__container label:nth-last-child(6) ~ input:nth-child(3):checked ~ a {\n      left: 33.3334%; }\n    .rh-multiswitch__container label:nth-last-child(6) ~ input:nth-child(5):checked ~ a {\n      left: 66.6667%; }\n    .rh-multiswitch__container label:nth-last-child(8) ~ input:nth-child(3):checked ~ a {\n      left: 25%; }\n    .rh-multiswitch__container label:nth-last-child(8) ~ input:nth-child(5):checked ~ a {\n      left: 50%; }\n    .rh-multiswitch__container label:nth-last-child(8) ~ input:nth-child(7):checked ~ a {\n      left: 75%; }\n    .rh-multiswitch__container label:nth-last-child(10) ~ input:nth-child(3):checked ~ a {\n      left: 20%; }\n    .rh-multiswitch__container label:nth-last-child(10) ~ input:nth-child(5):checked ~ a {\n      left: 40%; }\n    .rh-multiswitch__container label:nth-last-child(10) ~ input:nth-child(7):checked ~ a {\n      left: 60%; }\n    .rh-multiswitch__container label:nth-last-child(10) ~ input:nth-child(9):checked ~ a {\n      left: 80%; }\n    .rh-multiswitch__container label:nth-last-child(12) ~ input:nth-child(3):checked ~ a {\n      left: 16.6667%; }\n    .rh-multiswitch__container label:nth-last-child(12) ~ input:nth-child(5):checked ~ a {\n      left: 33.3334%; }\n    .rh-multiswitch__container label:nth-last-child(12) ~ input:nth-child(7):checked ~ a {\n      left: 50%; }\n    .rh-multiswitch__container label:nth-last-child(12) ~ input:nth-child(9):checked ~ a {\n      left: 66.6667%; }\n    .rh-multiswitch__container label:nth-last-child(12) ~ input:nth-child(11):checked ~ a {\n      left: 83.3334%; }\n    .rh-multiswitch__container label:nth-last-child(4) ~ input:nth-child(3):checked ~ a,\n    .rh-multiswitch__container label:nth-last-child(6) ~ input:nth-child(5):checked ~ a,\n    .rh-multiswitch__container label:nth-last-child(8) ~ input:nth-child(7):checked ~ a,\n    .rh-multiswitch__container label:nth-last-child(10) ~ input:nth-child(9):checked ~ a,\n    .rh-multiswitch__container label:nth-last-child(12) ~ input:nth-child(11):checked ~ a {\n      box-shadow: -1px 0 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25); }\n  .rh-multiswitch__container .rh-multiswitch__slide {\n    position: absolute;\n    left: 50%;\n    z-index: 1;\n    height: 100%;\n    width: 50%;\n    transition: left 0.1s ease-out;\n    box-shadow: 1px 0 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);\n    background: #0088ce;\n    border: 1px solid #005f90; }\n\n\n.multiswitch[data-theme="stoplight"] .slide-container > a {\n  background: #c00;\n  border-color: #8a0000; }\n\n.multiswitch[data-theme="stoplight"] input:not(:first-child):checked ~ a {\n  background: #ec7a08;\n  border-color: #bc6106; }\n\n.multiswitch[data-theme="stoplight"] label:nth-last-child(4) ~ input:nth-child(3):checked ~ a,\n.multiswitch[data-theme="stoplight"] label:nth-last-child(6) ~ input:nth-child(5):checked ~ a,\n.multiswitch[data-theme="stoplight"] label:nth-last-child(8) ~ input:nth-child(7):checked ~ a,\n.multiswitch[data-theme="stoplight"] label:nth-last-child(10) ~ input:nth-child(9):checked ~ a,\n.multiswitch[data-theme="stoplight"] label:nth-last-child(12) ~ input:nth-child(11):checked ~ a {\n  background: #3f9c35;\n  border-color: #307628; }\n</style>\n<slot></slot>'}},{key:"styleUrl",get:function(){return"rh-multiswitch.scss"}},{key:"templateUrl",get:function(){return"rh-multiswitch.html"}}],[{key:"tag",get:function(){return"rh-multiswitch"}}]),i(e,[{key:"connectedCallback",value:function(){(function t(e,n,i){null===e&&(e=Function.prototype);var l=Object.getOwnPropertyDescriptor(e,n);if(void 0===l){var h=Object.getPrototypeOf(e);return null===h?void 0:t(h,n,i)}if("value"in l)return l.value;var c=l.get;return void 0!==c?c.call(i):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.shadowRoot.querySelector("slot").addEventListener("slotchange",this._slotChange)}},{key:"disconnectedCallback",value:function(){}},{key:"_slotChange",value:function(t){var e=this.children[0];if(e)if(e&&"fieldset"!==e.tagName.toLowerCase())console.warn("The first child in the light DOM must be a fieldset (<fieldset>) with a legend");else{var n=this.querySelector("fieldset");n.classList.add("rh-multiswitch__fieldset");var i=document.createElement("div");for(i.classList.add("rh-multiswitch__container");0<n.childNodes.length;)i.appendChild(n.childNodes[0]);n.appendChild(i);var l=document.createElement("a");l.classList.add("rh-multiswitch__slide"),l.setAttribute("aria-hidden","true"),i.appendChild(l);var h=this.querySelector("legend");n.insertBefore(h,i);var c=n.cloneNode(!0);this.shadowRoot.appendChild(c)}else console.warn("The first child in the light DOM must be a fieldset (<fieldset>) with a legend")}}]),e}();n.default.create(l)});