<<<<<<< HEAD
!function(e,t){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.umd.js","../rh-dropdown-button/rh-dropdown-button.umd.js","../rh-dropdown-menu/rh-dropdown-menu.umd.js"],t);else if("undefined"!=typeof exports)t(require("../rhelement/rhelement.umd.js"),require("../rh-dropdown-button/rh-dropdown-button.umd.js"),require("../rh-dropdown-menu/rh-dropdown-menu.umd.js"));else{t(e.RHElement,e.rhDropdownButtonRhDropdownButtonUmdJs,e.rhDropdownMenuRhDropdownMenuUmdJs),e.RHElement=e.RHElement||{},e.RHElement.RhDropdown={}}}(this,function(e){"use strict";var t,n=(t=e)&&t.__esModule?t:{default:t};var o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],o=0;o<n;){var i=t[o];if(e.call(r,i,o,t))return o;o++}return-1}});var i=Date.now(),r=function(e){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r.tag))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,n.default),o(r,[{key:"html",get:function(){return"\n<style>\n:host {\n  position: relative; }\n</style>\n<slot></slot>"}},{key:"styleUrl",get:function(){return"rh-dropdown.scss"}},{key:"templateUrl",get:function(){return"rh-dropdown.html"}}],[{key:"tag",get:function(){return"rh-dropdown"}}]),o(r,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.setAttribute("defined","");var t=this._thisButton(),n=this._thisMenu();customElements.whenDefined("rh-dropdown-button").then(function(){var e=t.shadowRoot.querySelector("button");e.setAttribute("aria-controls","rh-dropdown-"+i),e.setAttribute("id","rh-dropdown-button-"+i)}),customElements.whenDefined("rh-dropdown-menu").then(function(){var e=n.shadowRoot.querySelector("ul");e.setAttribute("id","rh-dropdown-"+i),e.setAttribute("aria-labelledby","rh-dropdown-button-"+i)}),this.addEventListener("rh-dropdown-change",this._changeHandler),this.addEventListener("rh-dropdown-close",this._closeHandler),this.addEventListener("keydown",this._keydownHandler),this.addEventListener("click",this._clickHandler)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("rh-dropdown-change",this._changeHandler),this.removeEventListener("rh-dropdown-close",this._closeHandler),this.removeEventListener("keydown",this._keydownHandler),this.removeEventListener("click",this._clickHandler)}},{key:"_changeHandler",value:function(e){var t=this._thisButton(),n=this._thisMenu();e.detail.expanded?this._expandMenu(t,n):(this._collapseMenu(t,n),this._focusOnButton(t))}},{key:"_closeHandler",value:function(e){var t=this._thisButton(),n=this._thisMenu();this._collapseMenu(t,n)}},{key:"_clickHandler",value:function(e){var t=this._thisButton(),n=this._thisMenu();"A"==e.composedPath()[0].nodeName&&this._collapseMenu(t,n)}},{key:"_expandMenu",value:function(e,t){var n=t.shadowRoot.querySelector("ul");e.expanded=!0,n.removeAttribute("hidden"),n.querySelector("li:first-child > a").focus()}},{key:"_collapseMenu",value:function(e,t){e.expanded=!1,t.shadowRoot.querySelector("ul").setAttribute("hidden","hidden")}},{key:"_focusOnButton",value:function(e){e.shadowRoot.querySelector("button").focus()}},{key:"_thisButton",value:function(){return this.querySelector("rh-dropdown-button")}},{key:"_thisMenu",value:function(){return this.querySelector("rh-dropdown-menu")}},{key:"_keydownHandler",value:function(e){var t=this._thisButton(),n=void 0,r=!1,o=e.key,i=t.shadowRoot.activeElement;if(e.shiftKey)this._isPrintableCharacter(o)&&(n=this._getLinkByFirstCharacter(o));else if(this._isPrintableCharacter(o))n=this._getLinkByFirstCharacter(o);else{switch(o){case"ArrowDown":case"Down":n=this._nextLink(),r=!0;break;case"ArrowUp":case"Up":n=this._previousLink(),r=!0;break;case"Home":case"PageUp":n=this._firstLink(),r=!0;break;case"End":case"PageDown":n=this._lastLink(),r=!0;break;case" ":i||(r=!0);break;case"Tab":this.dispatchEvent(new CustomEvent("rh-dropdown-close",{detail:{expanded:!1}}));break;case"Escape":return r=!0,void this.dispatchEvent(new CustomEvent("rh-dropdown-change",{detail:{expanded:!1}}));default:return}r&&(event.stopPropagation(),event.preventDefault())}n&&-1!=n&&n.querySelector("a").focus()}},{key:"_allLinks",value:function(){var e=this._thisMenu();return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.shadowRoot.querySelectorAll("li")))}},{key:"_isPrintableCharacter",value:function(e){return 1===e.length&&e.match(/\S/)}},{key:"_getIndexFirstChars",value:function(e,t){for(var n=this._allLinks(),r=e;r<n.length;r++){if(t===n[r].querySelector("a").innerText.charAt(0).toLowerCase())return r}return-1}},{key:"_getLinkByFirstCharacter",value:function(e){if(!this._thisButton().shadowRoot.activeElement){var t=e.toLowerCase(),n=this._allLinks(),r=this._thisMenu().shadowRoot.activeElement,o=n.findIndex(function(e){return e===r.parentElement})+1,i=void 0;return o===n.length&&(o=0),-1===(i=this._getIndexFirstChars(o,t))&&(i=this._getIndexFirstChars(0,t)),-1<i?n[i]:-1}}},{key:"_previousLink",value:function(){var e=this._allLinks(),t=this._thisMenu(),n=this._thisButton(),r=t.shadowRoot.activeElement,o=n.shadowRoot.activeElement,i=void 0;return i=!r&&o?e.length-1:e.findIndex(function(e){return e===r.parentElement})-1,e[(i+e.length)%e.length]}},{key:"_nextLink",value:function(){var e=this._allLinks(),t=this._thisMenu(),n=this._thisButton(),r=t.shadowRoot.activeElement,o=n.shadowRoot.activeElement,i=void 0;return i=!r&&o?0:e.findIndex(function(e){return e===r.parentElement})+1,e[i%e.length]}},{key:"_firstLink",value:function(){return this._allLinks()[0]}},{key:"_lastLink",value:function(){var e=this._allLinks();return e[e.length-1]}}]),r}();n.default.create(r)});
=======
!function(e,t){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.umd.js","../rh-dropdown-button/rh-dropdown-button.umd.js","../rh-dropdown-menu/rh-dropdown-menu.umd.js"],t);else if("undefined"!=typeof exports)t(require("../rhelement/rhelement.umd.js"),require("../rh-dropdown-button/rh-dropdown-button.umd.js"),require("../rh-dropdown-menu/rh-dropdown-menu.umd.js"));else{t(e.rhelementUmd,e.rhDropdownButtonUmd,e.rhDropdownMenuUmd),e.rhDropdown={}}}(this,function(e){"use strict";var t,n=(t=e)&&t.__esModule?t:{default:t};var o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],o=0;o<n;){var i=t[o];if(e.call(r,i,o,t))return o;o++}return-1}});var i=Date.now(),r=function(e){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r.tag))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,n.default),o(r,[{key:"html",get:function(){return"\n<style>\n:host {\n  position: relative; }\n</style>\n<slot></slot>"}},{key:"styleUrl",get:function(){return"rh-dropdown.scss"}},{key:"templateUrl",get:function(){return"rh-dropdown.html"}}],[{key:"tag",get:function(){return"rh-dropdown"}}]),o(r,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.setAttribute("defined","");var t=this._thisButton(),n=this._thisMenu();customElements.whenDefined("rh-dropdown-button").then(function(){var e=t.shadowRoot.querySelector("button");e.setAttribute("aria-controls","rh-dropdown-"+i),e.setAttribute("id","rh-dropdown-button-"+i)}),customElements.whenDefined("rh-dropdown-menu").then(function(){var e=n.shadowRoot.querySelector("ul");e.setAttribute("id","rh-dropdown-"+i),e.setAttribute("aria-labelledby","rh-dropdown-button-"+i)}),this.addEventListener("rh-dropdown-change",this._changeHandler),this.addEventListener("rh-dropdown-close",this._closeHandler),this.addEventListener("keydown",this._keydownHandler),this.addEventListener("click",this._clickHandler)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("rh-dropdown-change",this._changeHandler),this.removeEventListener("rh-dropdown-close",this._closeHandler),this.removeEventListener("keydown",this._keydownHandler),this.removeEventListener("click",this._clickHandler)}},{key:"_changeHandler",value:function(e){var t=this._thisButton(),n=this._thisMenu();e.detail.expanded?this._expandMenu(t,n):(this._collapseMenu(t,n),this._focusOnButton(t))}},{key:"_closeHandler",value:function(e){var t=this._thisButton(),n=this._thisMenu();this._collapseMenu(t,n)}},{key:"_clickHandler",value:function(e){var t=this._thisButton(),n=this._thisMenu();"A"==e.composedPath()[0].nodeName&&this._collapseMenu(t,n)}},{key:"_expandMenu",value:function(e,t){var n=t.shadowRoot.querySelector("ul");e.expanded=!0,n.removeAttribute("hidden"),n.querySelector("li:first-child > a").focus()}},{key:"_collapseMenu",value:function(e,t){e.expanded=!1,t.shadowRoot.querySelector("ul").setAttribute("hidden","hidden")}},{key:"_focusOnButton",value:function(e){e.shadowRoot.querySelector("button").focus()}},{key:"_thisButton",value:function(){return this.querySelector("rh-dropdown-button")}},{key:"_thisMenu",value:function(){return this.querySelector("rh-dropdown-menu")}},{key:"_keydownHandler",value:function(e){var t=this._thisButton(),n=void 0,r=!1,o=e.key,i=t.shadowRoot.activeElement;if(e.shiftKey)this._isPrintableCharacter(o)&&(n=this._getLinkByFirstCharacter(o));else if(this._isPrintableCharacter(o))n=this._getLinkByFirstCharacter(o);else{switch(o){case"ArrowDown":case"Down":n=this._nextLink(),r=!0;break;case"ArrowUp":case"Up":n=this._previousLink(),r=!0;break;case"Home":case"PageUp":n=this._firstLink(),r=!0;break;case"End":case"PageDown":n=this._lastLink(),r=!0;break;case" ":i||(r=!0);break;case"Tab":this.dispatchEvent(new CustomEvent("rh-dropdown-close",{detail:{expanded:!1}}));break;case"Escape":return r=!0,void this.dispatchEvent(new CustomEvent("rh-dropdown-change",{detail:{expanded:!1}}));default:return}r&&(event.stopPropagation(),event.preventDefault())}n&&-1!=n&&n.querySelector("a").focus()}},{key:"_allLinks",value:function(){var e=this._thisMenu();return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.shadowRoot.querySelectorAll("li")))}},{key:"_isPrintableCharacter",value:function(e){return 1===e.length&&e.match(/\S/)}},{key:"_getIndexFirstChars",value:function(e,t){for(var n=this._allLinks(),r=e;r<n.length;r++){if(t===n[r].querySelector("a").innerText.charAt(0).toLowerCase())return r}return-1}},{key:"_getLinkByFirstCharacter",value:function(e){if(!this._thisButton().shadowRoot.activeElement){var t=e.toLowerCase(),n=this._allLinks(),r=this._thisMenu().shadowRoot.activeElement,o=n.findIndex(function(e){return e===r.parentElement})+1,i=void 0;return o===n.length&&(o=0),-1===(i=this._getIndexFirstChars(o,t))&&(i=this._getIndexFirstChars(0,t)),-1<i?n[i]:-1}}},{key:"_previousLink",value:function(){var e=this._allLinks(),t=this._thisMenu(),n=this._thisButton(),r=t.shadowRoot.activeElement,o=n.shadowRoot.activeElement,i=void 0;return i=!r&&o?e.length-1:e.findIndex(function(e){return e===r.parentElement})-1,e[(i+e.length)%e.length]}},{key:"_nextLink",value:function(){var e=this._allLinks(),t=this._thisMenu(),n=this._thisButton(),r=t.shadowRoot.activeElement,o=n.shadowRoot.activeElement,i=void 0;return i=!r&&o?0:e.findIndex(function(e){return e===r.parentElement})+1,e[i%e.length]}},{key:"_firstLink",value:function(){return this._allLinks()[0]}},{key:"_lastLink",value:function(){var e=this._allLinks();return e[e.length-1]}}]),r}();n.default.create(r)});
>>>>>>> master
