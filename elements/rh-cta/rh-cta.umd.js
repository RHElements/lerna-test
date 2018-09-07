!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("../rhelement/rhelement.umd.js")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd.js"],t):r.RhCta=t(r.RHElement)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var o=function(){function o(r,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}return function(r,t,e){return t&&o(r.prototype,t),e&&o(r,e),r}}(),r=function(r){function t(){return function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?r:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t))}return function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}(t,e),o(t,[{key:"html",get:function(){return'\n<style>\n:host {\n  --rh-cta--main:                     var(--rh-theme--color--ui-link, #06c);\n  --rh-cta--main--hover:              var(--rh-theme--color--ui-link--hover, #003366);\n  --rh-cta--main--focus:              var(--rh-theme--color--ui-link--focus, #003366);\n  --rh-cta--main--visited:            var(--rh-theme--color--ui-link--visited, rebeccapurple);\n  --rh-cta--aux:                      transparent;\n  --rh-cta--aux--hover:               transparent;\n  display: inline-block;\n  font-weight: bold; }\n  :host ::slotted(a) {\n    line-height: inherit;\n    color: var(--rh-cta--main); }\n    :host ::slotted(a)::after {\n      display: block;\n      margin-left: 0.25rem;\n      vertical-align: middle;\n      border-style: solid;\n      border-width: 0.313em 0.313em 0;\n      border-color: transparent;\n      border-top-color: var(--rh-cta--main);\n      transform: rotate(-90deg);\n      display: inline-block;\n      content: ""; }\n  :host ::slotted(a:hover) {\n    color: var(--rh-cta--main--hover); }\n    :host ::slotted(a:hover)::after {\n      border-top-color: var(--rh-cta--main--hover); }\n  :host ::slotted(a:focus) {\n    color: var(--rh-cta--main--focus); }\n    :host ::slotted(a:focus)::after {\n      border-top-color: var(--rh-cta--main--focus); }\n\n:host([priority="primary"]) {\n  --rh-cta--main:          var(--rh-theme--color--ui-accent, #fe460d);\n  --rh-cta--main--hover:   var(--rh-theme--color--ui-accent--hover, #a42701);\n  --rh-cta--aux:           var(--rh-theme--color--ui-accent--text, #fff);\n  --rh-cta--aux--hover:    var(--rh-theme--color--ui-accent--text--hover, #fff); }\n  :host([priority="primary"]) ::slotted(a) {\n    display: inline-block;\n    padding: 8px 32px;\n    border-radius: 5em;\n    border: 1px solid transparent;\n    text-decoration: none;\n    line-height: 1.2;\n    border-color: var(--rh-cta--main);\n    background: var(--rh-cta--main);\n    color: var(--rh-cta--aux); }\n    :host([priority="primary"]) ::slotted(a)::after {\n      display: none; }\n  :host([priority="primary"]) ::slotted(a:hover),\n  :host([priority="primary"]) ::slotted(a:focus) {\n    border-color: var(--rh-cta--main--hover);\n    background: var(--rh-cta--main--hover);\n    color: var(--rh-cta--aux--hover); }\n\n:host([priority="secondary"]) {\n  --rh-cta--main:          var(--rh-theme--color--ui-base, #0477a4);\n  --rh-cta--main--hover:   var(--rh-theme--color--ui-base--hover, #022f40);\n  --rh-cta--aux:           var(--rh-theme--color--ui-base--text, #fff);\n  --rh-cta--aux--hover:    var(--rh-theme--color--ui-base--text--hover, #fff); }\n  :host([priority="secondary"]) ::slotted(a) {\n    display: inline-block;\n    padding: 8px 32px;\n    border-radius: 5em;\n    border: 1px solid var(--rh-cta--main);\n    text-decoration: none;\n    line-height: 1.2;\n    border-color: var(--rh-cta--main);\n    background: var(--rh-cta--aux);\n    color: var(--rh-cta--main); }\n    :host([priority="secondary"]) ::slotted(a)::after {\n      display: none; }\n  :host([priority="secondary"]) ::slotted(a:hover),\n  :host([priority="secondary"]) ::slotted(a:focus) {\n    border-color: var(--rh-cta--main--hover);\n    background: var(--rh-cta--main--hover);\n    color: var(--rh-cta--aux--hover); }\n\n:host([on="dark"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-accent--text, #fff);\n  --rh-cta--main--hover: var(--rh-theme--color--ui-link--on-dark--hover, #cce6ff);\n  --rh-cta--aux:         var(--rh-theme--color--ui-link--on-dark, #99ccff);\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-accent--text--hover, #fff); }\n\n:host([on="dark"][priority="primary"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-accent--text, #fff);\n  --rh-cta--main--hover: var(--rh-theme--color--ui-accent--text--hover, #fff);\n  --rh-cta--aux:         var(--rh-theme--color--ui-accent, #fe460d);\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-accent--hover, #a42701); }\n\n:host([on="dark"][priority="secondary"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-base--text, #fff);\n  --rh-cta--main--hover: var(--rh-theme--color--ui-base--text--hover, #fff);\n  --rh-cta--aux:         transparent;\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-base--hover, #022f40); }\n\n:host([color="base"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-base, #0477a4) !important;\n  --rh-cta--main--hover: var(--rh-theme--color--ui-base--hover, #022f40) !important;\n  --rh-cta--aux:         var(--rh-theme--color--ui-base--text, #fff) !important;\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-base--text--hover, #fff) !important; }\n\n:host([color="complement"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-complement, #464646) !important;\n  --rh-cta--main--hover: var(--rh-theme--color--ui-complement--hover, #131313) !important;\n  --rh-cta--aux:         var(--rh-theme--color--ui-complement--text, #fff) !important;\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-complement--text--hover, #fff) !important; }\n\n:host([color="accent"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-accent, #fe460d) !important;\n  --rh-cta--main--hover: var(--rh-theme--color--ui-accent--hover, #a42701) !important;\n  --rh-cta--aux:         var(--rh-theme--color--ui-accent--text, #fff) !important;\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-accent--text--hover, #fff) !important; }\n</style>\n<slot></slot>'}},{key:"styleUrl",get:function(){return"rh-cta.scss"}},{key:"templateUrl",get:function(){return"rh-cta.html"}}],[{key:"tag",get:function(){return"rh-cta"}}]),o(t,[{key:"connectedCallback",value:function(){(function r(t,e,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:r(a,e,o)}if("value"in n)return n.value;var c=n.get;return void 0!==c?c.call(o):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var r=this.children[0];r?r&&"a"!==r.tagName.toLowerCase()?console.warn("The first child in the light DOM must be an anchor tag (<a>)"):this.link=this.querySelector("a"):console.warn("The first child in the light DOM must be an anchor tag (<a>)")}},{key:"disconnectedCallback",value:function(){}}]),t}();return e.create(r),r});
//# sourceMappingURL=rh-cta.umd.js.map
