!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../rhelement/rhelement.umd.js")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd.js"],e):t.RhAutocomplete=e(t.RHElement)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),u=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0},r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},l=13,c=40,h=38,d=27,a=!1,t=function(t){function a(){return n(this,a),s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,a))}return r(a,e),o(a,[{key:"html",get:function(){return'\n<style>\n:host {\n  display: block; }\n</style>\n<rh-search-box id="input-box"></rh-search-box>\n<rh-search-droplist id="dropdown"></rh-search-droplist>'}},{key:"templateUrl",get:function(){return"rh-autocomplete.html"}},{key:"styleUrl",get:function(){return"rh-autocomplete.scss"}}],[{key:"tag",get:function(){return"rh-autocomplete"}}]),o(a,[{key:"connectedCallback",value:function(){u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.loading=!1,this.debounce=this.debounce||300,this._inputBox=this.shadowRoot.querySelector("#input-box"),this._inputBox.debounce=this.debounce,this._dropdown=this.shadowRoot.querySelector("#dropdown"),this.addEventListener("rh-search-event",this._updateInputBox.bind(this)),this._dropdown.data=[],this.activeIndex=null,this.addEventListener("rh-input-change-event",this._autocomplete.bind(this)),this.addEventListener("rh-input-blur",this._closeDroplist.bind(this)),this.addEventListener("keyup",this._inputKeyUp.bind(this)),this.addEventListener("rh-search-event",this._closeDroplist.bind(this)),this.addEventListener("rh-option-selected",this._optionSelected.bind(this))}},{key:"disconnectedCallback",value:function(){this.removeEventListener("rh-search-event",this._updateInputBox.bind(this)),this.removeEventListener("rh-input-change-event",this._autocomplete.bind(this)),this.removeEventListener("rh-input-blur",this._closeDroplist.bind(this)),this.removeEventListener("keyup",this._inputKeyUp.bind(this)),this.removeEventListener("rh-search-event",this._closeDroplist),this.removeEventListener("rh-option-selected",this._optionSelected.bind(this))}},{key:"attributeChangedCallback",value:function(t,e,n){u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"attributeChangedCallback",this).call(this);var i=this.shadowRoot.querySelector("rh-search-box").shadowRoot;switch(t){case"loading":this.loading&&""!==this._inputBox.shadowRoot.querySelector("input").value?i.querySelector(".loading").removeAttribute("hidden"):i.querySelector(".loading").setAttribute("hidden","");break;case"is-disabled":this.isDisabled?(i.querySelectorAll("button").forEach(function(t){t.setAttribute("disabled","")}),i.querySelector("input").setAttribute("disabled","")):(i.querySelectorAll("button").forEach(function(t){t.removeAttribute("disabled")}),i.querySelector("input").removeAttribute("disabled"));break;case"init-value":if(this["init-value"]!==n){var o=this.shadowRoot.querySelector("#input-box").shadowRoot,r=o.querySelector("button.search-button"),s=o.querySelector("button.clear-search");""!==(o.querySelector("input").value=n)?(r.removeAttribute("disabled"),s.removeAttribute("hidden")):(r.setAttribute("disabled",""),s.setAttribute("hidden",""))}}}},{key:"_updateInputBox",value:function(t){this._inputBox.shadowRoot.querySelector("input").value=t.detail.searchValue,this._reset()}},{key:"_closeDroplist",value:function(){this._dropdown.open=null,this._dropdown.removeAttribute("active-index"),this._inputBox.removeAttribute("active-index")}},{key:"_openDroplist",value:function(){this._dropdown.setAttribute("open",!0),this._dropdown.setAttribute("active-index",null),this._inputBox.setAttribute("active-index",null)}},{key:"_optionSelected",value:function(t){var e=t.detail.optionValue;this._reset(e),this._dispatchSearchEvent(e)}},{key:"_dispatchSearchEvent",value:function(t){this.dispatchEvent(new CustomEvent("rh-search-event",{detail:{searchValue:t},bubbles:!0,composed:!0}))}},{key:"_autocomplete",value:function(t){var e=t.detail.inputValue;this._sendAutocompleteRequest(e)}},{key:"_sendAutocompleteRequest",value:function(t){this.autocompleteRequest&&this.autocompleteRequest({query:t},this._autocompleteCallback.bind(this))}},{key:"_autocompleteCallback",value:function(t){this._dropdown.data=t,this._dropdown.reflow=!0,0!==t.length?this._openDroplist():this._closeDroplist()}},{key:"_reset",value:function(){this._dropdown.activeIndex=null,this._dropdown.data=[],this._closeDroplist()}},{key:"_activeOption",value:function(t){if(null!==t&&"null"!==t)return this._dropdown.shadowRoot.querySelector("li:nth-child("+(parseInt(t,10)+1)+")").innerHTML}},{key:"_inputKeyUp",value:function(t){var e=t.keyCode;if(0!==this._dropdown.data.length||e===c||e===h||e===l||e===d){var n=this._dropdown.activeIndex,i=this._dropdown.data.length;if(e==d)this._closeDroplist();else if(e===h)n=null===n||"null"===n?i:parseInt(n,10),(n-=1)<0&&(n=i-1),this._inputBox.shadowRoot.querySelector("input").value=this._activeOption(n);else if(e===c)n=null===n||"null"===n?-1:parseInt(n,10),i-1<(n+=1)&&(n=0),this._inputBox.shadowRoot.querySelector("input").value=this._activeOption(n);else if(e===l){var o=this._inputBox.shadowRoot.querySelector("input").value;return this._reset(),void this._dispatchSearchEvent(o)}this._dropdown.activeIndex=n,this._inputBox.activeIndex=n}}},{key:"isDisabled",set:function(t){t?this.setAttribute("is-disabled",""):this.removeAttribute("is-disabled")},get:function(){return this.hasAttribute("is-disabled")}},{key:"loading",set:function(t){Boolean(t)?this.setAttribute("loading",""):this.removeAttribute("loading")},get:function(){return this.hasAttribute("loading")}},{key:"initValue",get:function(){return this.getAttribute("init-value")},set:function(t){this.setAttribute("init-value",t)}},{key:"debounce",get:function(){return this.getAttribute("debounce")},set:function(t){this.setAttribute("debounce",t)}}],[{key:"observedAttributes",get:function(){return["init-value","loading","is-disabled"]}}]),a}(),i=function(t){function i(){return n(this,i),s(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i))}return r(i,e),o(i,[{key:"html",get:function(){return'\n<style>\n:host {\n  position: relative;\n  display: flex; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\ninput {\n  width: 100%;\n  flex: 1;\n  box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075) !important;\n  padding-left: 10px;\n  padding-right: 30px;\n  border-radius: 0;\n  background-color: #fff;\n  border: 1px solid var(--rh-theme--color--surface--border, #dfdfdf);\n  font-size: 16px;\n  \n  height: 40px;\n  transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;\n  opacity: 1; }\n\ninput:disabled,\nbutton:disabled {\n  cursor: not-allowed;\n  background-color: transparent;\n  color: #ccc;\n  opacity: 0.5; }\n\ninput:focus,\ninput:focus ~ button.search-button {\n  border-color: #66afe9;\n  outline: 0; }\n\ninput[type="search"],\nbutton {\n  -webkit-appearance: none; }\n\ninput[type="search"]::-ms-clear {\n  display: none; }\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nbutton {\n  color: #cccccc;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  padding: 0px;\n  margin: 0px;\n  cursor: pointer; }\n\nbutton.clear-search {\n  right: 31px;\n  width: 20px;\n  margin-right: 5px; }\n\nbutton.clear-search svg {\n  width: 12px;\n  stroke: #ccc; }\n\nbutton.clear-search:hover svg,\nbutton.clear-search:focus svg {\n  opacity: 1;\n  stroke: #06c; }\n\nbutton.search-button {\n  right: 1px;\n  width: 30px; }\n\nbutton.search-button svg {\n  fill: #06c;\n  width: 16px; }\n\nbutton.search-button:hover svg,\nbutton.search-button:focus svg {\n  fill: #004080; }\n\nbutton.clear-search:hover {\n  color: #ccc; }\n\nbutton.search-button:disabled svg {\n  fill: #ccc; }\n\n.loading {\n  position: absolute;\n  width: 25px;\n  right: 45px;\n  top: 62%;\n  transform: translate(-50%, -50%); }\n</style>\n<input placeholder="Enter Your Search Term"\n  role="combobox"\n  aria-label="Search"\n  aria-autocomplete="both"\n  aria-haspopup="true"\n  type="search"\n  autocomplete="off"\n  autocorrect="off"\n  autocapitalize="off"\n  spellcheck="false"\n  class="form-control"/>\n\n<span class="loading" aria-hidden="true" hidden>\n  <svg viewBox="0 0 40 40" enable-background="new 0 0 40 40">\n    <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>\n    <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n    C22.32,8.481,24.301,9.057,26.013,10.047z">\n    <animateTransform attributeType="xml"\n      attributeName="transform"\n      type="rotate"\n      from="0 20 20"\n      to="360 20 20"\n      dur="0.5s"\n      repeatCount="indefinite"/>\n    </path>\n  </svg>\n</span>\n\n<button type="button" class="clear-search" aria-label="clear search query" hidden>\n  <svg viewBox="0 0 40 40" enable-background="new 0 0 40 40">\n    <line x1="5" y1="5" x2="35" y2="35" stroke-width="10" stroke-linecap="round" stroke-miterlimit="10"></line>\n    <line x1="35" y1="5" x2="5" y2="35" stroke-width="10" stroke-linecap="round" stroke-miterlimit="10"></line>\n  </svg>\n</button>\n<button class="search-button" type="button" aria-label="Search" disabled>\n  <svg viewBox="0 0 512 512">\n    <path d="M256.233,5.756c-71.07,15.793-141.44,87.863-155.834,159.233c-11.495,57.076,0.3,111.153,27.688,154.335L6.339,441.172\n  c-8.596,8.596-8.596,22.391,0,30.987l33.286,33.286c8.596,8.596,22.391,8.596,30.987,0L192.26,383.796\n  c43.282,27.688,97.559,39.683,154.734,28.188c79.167-15.893,142.04-77.067,159.632-155.934\n  C540.212,104.314,407.968-27.93,256.233,5.756z M435.857,208.37c0,72.869-59.075,131.944-131.944,131.944\n  S171.969,281.239,171.969,208.37S231.043,76.426,303.913,76.426S435.857,135.501,435.857,208.37z"/>\n  </svg>\n</button>'}},{key:"templateUrl",get:function(){return"rh-search-box.html"}},{key:"styleUrl",get:function(){return"rh-search-box.scss"}}],[{key:"tag",get:function(){return"rh-search-box"}}]),o(i,[{key:"connectedCallback",value:function(){u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._input=this.shadowRoot.querySelector("input"),this._input.addEventListener("input",this._inputChanged.bind(this)),this._input.addEventListener("blur",this._inputBlured.bind(this)),this._clearBtn=this.shadowRoot.querySelector(".clear-search"),this._clearBtn.addEventListener("click",this._clear.bind(this)),this._searchBtn=this.shadowRoot.querySelector(".search-button"),this._searchBtn.addEventListener("click",this._search.bind(this))}},{key:"disconnectedCallback",value:function(){this._input.removeEventListener("input",this._inputChanged),this._input.removeEventListener("blur",this._inputBlured),this._clearBtn.removeEventListener("click",this._clear),this._searchBtn.removeEventListener("click",this._search)}},{key:"attributeChangedCallback",value:function(t,e,n){u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this),"active-index"===t&&(n?this._input.setAttribute("aria-activedescendant","option-"+n):this._input.setAttribute("aria-activedescendant",""))}},{key:"_inputBlured",value:function(){this.dispatchEvent(new CustomEvent("rh-input-blur",{bubbles:!0,composed:!0}))}},{key:"_inputChanged",value:function(){var t=this;""===this._input.value?(this._searchBtn.setAttribute("disabled",!0),this._clearBtn.setAttribute("hidden",!0)):(this._input.hasAttribute("disabled")||this._searchBtn.removeAttribute("disabled"),this._clearBtn.removeAttribute("hidden")),!1===a&&(a=!0,window.setTimeout(function(){t.dispatchEvent(new CustomEvent("rh-input-change-event",{detail:{inputValue:t._input.value},bubbles:!0,composed:!0})),a=!1},this.debounce))}},{key:"_clear",value:function(){this._input.value="",this._clearBtn.setAttribute("hidden",!0),this._searchBtn.setAttribute("disabled",!0),this._input.focus()}},{key:"_search",value:function(t){this.dispatchEvent(new CustomEvent("rh-search-event",{detail:{searchValue:this._input.value},bubbles:!0,composed:!0}))}},{key:"activeIndex",get:function(){return this.getAttribute("active-index")||null},set:function(t){this.setAttribute("active-index",t)}},{key:"debounce",get:function(){return this.getAttribute("debounce")},set:function(t){this.setAttribute("debounce",t)}}],[{key:"observedAttributes",get:function(){return["active-index"]}}]),i}(),p=function(t){function i(){return n(this,i),s(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i))}return r(i,e),o(i,[{key:"html",get:function(){return'\n<style>\n:host {\n  position: relative;\n  display: none;\n  font-family: var(--rh-theme--font-family);\n  font-size: var(--rh-theme--font-size);\n  line-height: var(--rh-theme--line-height); }\n\n:host([open]) {\n  display: block; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.droplist {\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  right: 0px;\n  max-height: 250px;\n  z-index: 9999;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  border: 1px solid #ccc;\n  background-color: #fff; }\n\ninput {\n  font-family: var(--rh-theme--font-family);\n  font-size: var(--rh-theme--font-size);\n  line-height: var(--rh-theme--line-height); }\n\nul {\n  font-family: var(--rh-theme--font-family);\n  font-size: var(--rh-theme--font-size);\n  line-height: var(--rh-theme--line-height);\n  border-top: none;\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  cursor: pointer; }\n  ul li {\n    display: list-item;\n    cursor: pointer;\n    padding: 10px;\n    margin: 0px;\n     }\n    ul li.active {\n      background-color: var(--rh-theme--color--surface--lighter, #ececec); }\n</style>\n<div class="suggestions-aria-help sr-only" aria-hidden="false" role="status"></div>\n<div class="droplist">\n  <ul role="listbox" tabindex="-1">\n  </ul>\n</div>'}},{key:"templateUrl",get:function(){return"rh-search-droplist.html"}},{key:"styleUrl",get:function(){return"rh-search-droplist.scss"}}],[{key:"tag",get:function(){return"rh-search-droplist"}}]),o(i,[{key:"connectedCallback",value:function(){u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._ariaAnnounce=this.shadowRoot.querySelector(".suggestions-aria-help"),this.activeIndex=null,this._ul=this.shadowRoot.querySelector("ul"),this._ul.addEventListener("mousedown",this._optionSelected.bind(this))}},{key:"disconnectedCallback",value:function(){this._ul.removeEventListener("mousedown",this._optionSelected)}},{key:"_optionSelected",value:function(t){"LI"===t.target.tagName&&this.dispatchEvent(new CustomEvent("rh-option-selected",{detail:{optionValue:t.target.innerText},bubbles:!0,composed:!0}))}},{key:"_renderOptions",value:function(){this.reflow="";var t=this.data;this._ariaAnnounce.innerHTML="There are "+t.length+" suggestions. Use the up and down arrows to browse.",this._ariaAnnounce.setAttribute("aria-live","polite"),this._ul.innerHTML=""+t.map(function(t,e){return'<li id="option-'+e+'" role="option" tabindex="-1" value="'+t+'">'+t+"</li>"}).join("")}},{key:"attributeChangedCallback",value:function(t,e,n){u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this),this[name]!==n&&(this[name]=n),"active-index"===t&&e!==n&&this._activeIndexChanged(),"reflow"===t&&this._renderOptions()}},{key:"_activeIndexChanged",value:function(){if(this.data&&0!==this.data.length&&null!==this.activeIndex&&"null"!==this.activeIndex){this._ul.querySelector(".active")&&this._ul.querySelector(".active").classList.remove("active");var t=this._ul.querySelector("li:nth-child("+(parseInt(this.activeIndex,10)+1)+")");t.classList.add("active");var e=this.shadowRoot.querySelector(".droplist"),n=t.offsetHeight;n+=parseInt(window.getComputedStyle(t).getPropertyValue("margin-bottom"),10),e.scrollTop=t.offsetTop-e.offsetHeight+n}}},{key:"open",get:function(){return this.shadowRoot.hasAttribute("open")},set:function(t){(t=Boolean(t))?this.setAttribute("open",""):this.removeAttribute("open")}},{key:"activeIndex",get:function(){return this.getAttribute("active-index")},set:function(t){this.setAttribute("active-index",t)}},{key:"reflow",get:function(){return this.hasAttribute("reflow")},set:function(t){(t=Boolean(t))?this.setAttribute("reflow",""):this.removeAttribute("reflow")}}],[{key:"observedAttributes",get:function(){return["open","reflow","active-index"]}}]),i}();return e.create(i),e.create(p),e.create(t),t});
//# sourceMappingURL=rh-autocomplete.umd.js.map
