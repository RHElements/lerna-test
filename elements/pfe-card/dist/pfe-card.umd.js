(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../../pfelement/dist/pfelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../../pfelement/dist/pfelement.umd'], factory) :
  (global = global || self, global.PfeCard = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && Object.prototype.hasOwnProperty.call(PFElement, 'default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*!
   * PatternFly Elements: PfeCard 1.8.0
   * @license
   * Copyright 2021 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  var PfeCard = function (_PFElement) {
    inherits(PfeCard, _PFElement);
    createClass(PfeCard, [{
      key: "html",


      // Injected at build-time
      get: function get() {
        return "\n<style>@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([color=accent]),:host([color=base]),:host([color=complement]),:host([color=darker]),:host([color=darkest]),:host([color=lighter]),:host([color=lightest]){background-color:#fff!important;color:#151515!important}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{color:#151515!important}}:host{--context:var(--pfe-card--context, var(--pfe-theme--color--surface--base--context, light));display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justify-items:flex-start;-webkit-align-self:stretch;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;padding:calc(1rem * 2) calc(1rem * 2) calc(1rem * 2) calc(1rem * 2);padding:var(--pfe-card--Padding,var(--pfe-card--PaddingTop,calc(var(--pfe-theme--container-spacer,1rem) * 2)) var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2)) var(--pfe-card--PaddingBottom,calc(var(--pfe-theme--container-spacer,1rem) * 2)) var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2)));border:0 solid #d2d2d2;border:var(--pfe-card--Border,var(--pfe-card--BorderWidth,0) var(--pfe-card--BorderStyle,solid) var(--pfe-card--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2)));border-radius:3px;border-radius:var(--pfe-card--BorderRadius,var(--pfe-theme--surface--border-radius,3px));overflow:hidden;background-color:#f0f0f0;background-color:var(--pfe-card--BackgroundColor,var(--pfe-theme--color--surface--base,#f0f0f0));background-position:center center;background-position:var(--pfe-card--BackgroundPosition,center center);color:#3c3f42;color:var(--pfe-broadcasted--text,#3c3f42)}@media print{:host{background-color:#fff!important;background-image:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}}@media print{:host{border-radius:3px;border:1px solid #d2d2d2}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{background-color:#fff!important;background-color:var(--pfe-theme--color--surface--lightest,#fff)!important;color:#151515!important;color:var(--pfe-theme--color--text,#151515)!important;background-image:none!important;border-radius:3px;border:1px solid #d2d2d2;padding:1rem;padding:var(--pfe-theme--container-spacer,1rem)}}:host([color=darker]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--darker, #3c3f42);--pfe-card--context:var(--pfe-theme--color--surface--darker--context, dark)}:host([color=darkest]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--darkest, #151515);--pfe-card--context:var(--pfe-theme--color--surface--darkest--context, dark)}:host([color=base]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--base, #f0f0f0);--pfe-card--context:var(--pfe-theme--color--surface--base--context, light)}:host([color=lighter]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--lighter, #f0f0f0);--pfe-card--context:var(--pfe-theme--color--surface--lighter--context, light)}:host([color=lightest]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-card--context:var(--pfe-theme--color--surface--lightest--context, light)}:host([color=accent]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--accent, #004080);--pfe-card--context:var(--pfe-theme--color--surface--accent--context, saturated)}:host([color=complement]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--complement, #002952);--pfe-card--context:var(--pfe-theme--color--surface--complement--context, saturated)}:host([on=dark]){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}:host([on=saturated]){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-saturated, #fff);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-saturated, #fafafa);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-saturated, #fafafa);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-saturated, #d2d2d2);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-saturated, underline);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-saturated, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-saturated, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-saturated, underline)}:host([on=light]){--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}:host([size=small]){--pfe-card--PaddingTop:var(--pfe-theme--container-spacer, 1rem);--pfe-card--PaddingRight:var(--pfe-theme--container-spacer, 1rem);--pfe-card--PaddingBottom:var(--pfe-theme--container-spacer, 1rem);--pfe-card--PaddingLeft:var(--pfe-theme--container-spacer, 1rem)}:host([border]:not([border=false])){--pfe-card--BorderWidth:1px}.pfe-card__body ::slotted([overflow~=top]),.pfe-card__body ::slotted([pfe-overflow~=top]),.pfe-card__footer ::slotted([overflow~=top]),.pfe-card__footer ::slotted([pfe-overflow~=top]),.pfe-card__header ::slotted([overflow~=top]),.pfe-card__header ::slotted([pfe-overflow~=top]){z-index:1;margin-top:-2rem;margin-top:calc(-1 * calc(1rem * 2))!important;margin-top:calc(-1 * var(--pfe-card--PaddingTop,calc(var(--pfe-theme--container-spacer,1rem) * 2)))!important}:host([has_header]) .pfe-card__body ::slotted([overflow~=top]),:host([has_header]) .pfe-card__body ::slotted([pfe-overflow~=top]),:host([has_header]) .pfe-card__footer ::slotted([overflow~=top]),:host([has_header]) .pfe-card__footer ::slotted([pfe-overflow~=top]),:host([has_header]) .pfe-card__header ::slotted([overflow~=top]),:host([has_header]) .pfe-card__header ::slotted([pfe-overflow~=top]){padding-top:1rem;padding-top:var(--pfe-card--spacing,var(--pfe-theme--container-spacer,1rem))}.pfe-card__body ::slotted([overflow~=right]),.pfe-card__body ::slotted([pfe-overflow~=right]),.pfe-card__footer ::slotted([overflow~=right]),.pfe-card__footer ::slotted([pfe-overflow~=right]),.pfe-card__header ::slotted([overflow~=right]),.pfe-card__header ::slotted([pfe-overflow~=right]){margin-right:-2rem;margin-right:calc(-1 * calc(1rem * 2));margin-right:calc(-1 * var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2)))}.pfe-card__body ::slotted([overflow~=bottom]),.pfe-card__body ::slotted([pfe-overflow~=bottom]),.pfe-card__footer ::slotted([overflow~=bottom]),.pfe-card__footer ::slotted([pfe-overflow~=bottom]),.pfe-card__header ::slotted([overflow~=bottom]),.pfe-card__header ::slotted([pfe-overflow~=bottom]){margin-bottom:-2rem;margin-bottom:calc(-1 * calc(calc(1rem * 2) + 3px));margin-bottom:calc(-1 * calc(var(--pfe-card--PaddingBottom,calc(var(--pfe-theme--container-spacer,1rem) * 2)) + var(--pfe-card--BorderRadius,var(--pfe-theme--surface--border-radius,3px))));-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}.pfe-card__body ::slotted([overflow~=left]),.pfe-card__body ::slotted([pfe-overflow~=left]),.pfe-card__footer ::slotted([overflow~=left]),.pfe-card__footer ::slotted([pfe-overflow~=left]),.pfe-card__header ::slotted([overflow~=left]),.pfe-card__header ::slotted([pfe-overflow~=left]){margin-left:-2rem;margin-left:calc(-1 * calc(1rem * 2));margin-left:calc(-1 * var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2)))}.pfe-card__body ::slotted(img),.pfe-card__footer ::slotted(img),.pfe-card__header ::slotted(img){max-width:100%!important;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-o-object-fit:cover;object-fit:cover}.pfe-card__body ::slotted(img:not[overflow]),.pfe-card__body ::slotted(img:not[pfe-overflow]),.pfe-card__footer ::slotted(img:not[overflow]),.pfe-card__footer ::slotted(img:not[pfe-overflow]),.pfe-card__header ::slotted(img:not[overflow]),.pfe-card__header ::slotted(img:not[pfe-overflow]){-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.pfe-card__body ::slotted(img[overflow]),.pfe-card__body ::slotted(img[pfe-overflow]),.pfe-card__footer ::slotted(img[overflow]),.pfe-card__footer ::slotted(img[pfe-overflow]),.pfe-card__header ::slotted(img[overflow]),.pfe-card__header ::slotted(img[pfe-overflow]){max-width:unset!important}.pfe-card__body ::slotted(img[overflow~=right]),.pfe-card__body ::slotted(img[pfe-overflow~=right]),.pfe-card__footer ::slotted(img[overflow~=right]),.pfe-card__footer ::slotted(img[pfe-overflow~=right]),.pfe-card__header ::slotted(img[overflow~=right]),.pfe-card__header ::slotted(img[pfe-overflow~=right]){width:calc(100% + 2rem)!important;width:calc(100% + calc(1rem * 2))!important;width:calc(100% + var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2)))!important}.pfe-card__body ::slotted(img[overflow~=left]),.pfe-card__body ::slotted(img[pfe-overflow~=left]),.pfe-card__footer ::slotted(img[overflow~=left]),.pfe-card__footer ::slotted(img[pfe-overflow~=left]),.pfe-card__header ::slotted(img[overflow~=left]),.pfe-card__header ::slotted(img[pfe-overflow~=left]){width:calc(100% + 2rem)!important;width:calc(100% + calc(1rem * 2))!important;width:calc(100% + var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2)))!important}.pfe-card__body ::slotted(img[overflow~=right][overflow~=left]),.pfe-card__body ::slotted(img[pfe-overflow~=right][pfe-overflow~=left]),.pfe-card__footer ::slotted(img[overflow~=right][overflow~=left]),.pfe-card__footer ::slotted(img[pfe-overflow~=right][pfe-overflow~=left]),.pfe-card__header ::slotted(img[overflow~=right][overflow~=left]),.pfe-card__header ::slotted(img[pfe-overflow~=right][pfe-overflow~=left]){width:calc(100% + 4rem)!important;width:calc(100% + calc(1rem * 2) + calc(1rem * 2))!important;width:calc(100% + var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2)) + var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2)))!important}.pfe-card__header{z-index:2;background-color:rgba(0,0,0,.09);background-color:var(--pfe-card__header--BackgroundColor,rgba(0,0,0,var(--pfe-theme--opacity,.09)));color:#3c3f42;color:var(--pfe-card__header--Color,var(--pfe-broadcasted--text,#3c3f42));margin-top:calc(calc(1rem * 2) * -1)!important;margin-top:calc(var(--pfe-card--PaddingTop,calc(var(--pfe-theme--container-spacer,1rem) * 2)) * -1)!important;margin-right:calc(calc(1rem * 2) * -1);margin-right:calc(var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2)) * -1);margin-bottom:1rem;margin-bottom:var(--pfe-card--spacing--vertical,var(--pfe-card--spacing,var(--pfe-theme--container-spacer,1rem)));margin-left:calc(calc(1rem * 2) * -1);margin-left:calc(var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2)) * -1);padding-top:1rem;padding-top:var(--pfe-card--spacing--vertical,var(--pfe-card--spacing,var(--pfe-theme--container-spacer,1rem)));padding-right:calc(1rem * 2);padding-right:var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2));padding-left:calc(1rem * 2);padding-left:var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2));padding-bottom:1rem;padding-bottom:var(--pfe-card--spacing--vertical,var(--pfe-card--spacing,var(--pfe-theme--container-spacer,1rem)))}:host([on=dark]) .pfe-card__header{background-color:rgba(255,255,255,.09);background-color:var(--pfe-card__header--BackgroundColor--dark,rgba(255,255,255,var(--pfe-theme--opacity,.09)))}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pfe-card__header{background-color:#fff!important;color:#151515!important}}:host(:not([has_body]):not([has_footer])) .pfe-card__header{margin-bottom:calc(1rem * 2);margin-bottom:var(--pfe-card--PaddingBottom,calc(var(--pfe-theme--container-spacer,1rem) * 2))}.pfe-card__header ::slotted([overflow~=top]),.pfe-card__header ::slotted([pfe-overflow~=top]){--pfe-card__overflow--MarginTop:calc(var(--pfe-card--PaddingTop, calc(var(--pfe-theme--container-spacer, 1rem) * 2)) * -1)}:host(:not([has_header])) .pfe-card__header{display:none}:host([has_body],[has_footer]) .pfe-card__header ::slotted([overflow~=bottom]),:host([has_body],[has_footer]) .pfe-card__header ::slotted([pfe-overflow~=bottom]){--pfe-card__overflow--MarginBottom:calc(var(--pfe-card--spacing--vertical, var(--pfe-card--spacing, var(--pfe-theme--container-spacer, 1rem))) * -1)}.pfe-card__header ::slotted([overflow~=bottom]),.pfe-card__header ::slotted([pfe-overflow~=bottom]){--pfe-card__overflow--MarginBottom:calc(var(--pfe-card--PaddingBottom, calc(var(--pfe-theme--container-spacer, 1rem) * 2)) * -1)}.pfe-card__header ::slotted(h1){margin-bottom:0}.pfe-card__header ::slotted(h2){margin-bottom:0}.pfe-card__header ::slotted(h3){margin-bottom:0}.pfe-card__header ::slotted(h4){margin-bottom:0}.pfe-card__header ::slotted(h5){margin-bottom:0}.pfe-card__header ::slotted(h6){margin-bottom:0}:host(:not([has_header])) .pfe-card__body ::slotted([overflow~=top]),:host(:not([has_header])) .pfe-card__body ::slotted([pfe-overflow~=top]){--pfe-card__overflow--MarginTop:calc(var(--pfe-card--PaddingTop, calc(var(--pfe-theme--container-spacer, 1rem) * 2)) * -1)}.pfe-card__body ::slotted([overflow~=top]),.pfe-card__body ::slotted([pfe-overflow~=top]){z-index:1;--pfe-card__overflow--MarginTop:calc(var(--pfe-card--spacing--vertical, var(--pfe-card--spacing, var(--pfe-theme--container-spacer, 1rem))) * -1)}.pfe-card__body ::slotted([overflow~=bottom]),.pfe-card__body ::slotted([pfe-overflow~=bottom]){--pfe-card__overflow--MarginBottom:calc(var(--pfe-card--PaddingBottom, calc(var(--pfe-theme--container-spacer, 1rem) * 2)) * -1)}:host([has_footer]) .pfe-card__body ::slotted([overflow~=bottom]),:host([has_footer]) .pfe-card__body ::slotted([pfe-overflow~=bottom]){--pfe-card__overflow--MarginBottom:calc(var(--pfe-card--spacing--vertical, var(--pfe-card--spacing, var(--pfe-theme--container-spacer, 1rem))) * -1)}:host(:not([has_footer])) .pfe-card__body{margin-bottom:0}.pfe-card__footer{margin-top:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;flex-direction:var(--pfe-card__footer--Row,row);-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-wrap:var(--pfe-card__footer--Wrap,wrap);-ms-flex-wrap:var(--pfe-card__footer--Wrap,wrap);flex-wrap:var(--pfe-card__footer--Wrap,wrap);-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-align:var(--pfe-card__footer--AlignItems,baseline);-webkit-align-items:var(--pfe-card__footer--AlignItems,baseline);-ms-flex-align:var(--pfe-card__footer--AlignItems,baseline);align-items:var(--pfe-card__footer--AlignItems,baseline)}.pfe-card__footer ::slotted([overflow~=bottom]),.pfe-card__footer ::slotted([pfe-overflow~=bottom]){--pfe-card__overflow--MarginBottom:calc(var(--pfe-card--PaddingBottom, calc(var(--pfe-theme--container-spacer, 1rem) * 2)) * -1)}:host(:not([has_footer])) .pfe-card__footer{display:none}.pfe-card__body,.pfe-card__header{margin-bottom:1rem;margin-bottom:var(--pfe-card--spacing--vertical,var(--pfe-card--spacing,var(--pfe-theme--container-spacer,1rem)))}.pfe-card__body ::slotted(p:first-child),.pfe-card__header ::slotted(p:first-child){margin-top:0}.pfe-card__body ::slotted(h1:first-child),.pfe-card__header ::slotted(h1:first-child){margin-top:0}.pfe-card__body ::slotted(h2:first-child),.pfe-card__header ::slotted(h2:first-child){margin-top:0}.pfe-card__body ::slotted(h3:first-child),.pfe-card__header ::slotted(h3:first-child){margin-top:0}.pfe-card__body ::slotted(h4:first-child),.pfe-card__header ::slotted(h4:first-child){margin-top:0}.pfe-card__body ::slotted(h5:first-child),.pfe-card__header ::slotted(h5:first-child){margin-top:0}.pfe-card__body ::slotted(h6:first-child),.pfe-card__header ::slotted(h6:first-child){margin-top:0} /*# sourceMappingURL=pfe-card.min.css.map */</style>\n<div class=\"pfe-card__header\">\n  <slot name=\"pfe-card--header\"></slot>\n</div>\n<div class=\"pfe-card__body\">\n  <slot></slot>\n</div>\n<div class=\"pfe-card__footer\">\n  <slot name=\"pfe-card--footer\"></slot>\n</div>";
      }
    }, {
      key: "templateUrl",
      get: function get() {
        return "pfe-card.html";
      }
    }, {
      key: "styleUrl",
      get: function get() {
        return "pfe-card.scss";
      }

      // @TODO: How do we handle attributes for slotted content?

    }], [{
      key: "version",


      // Injected at build-time
      get: function get() {
        return "1.8.0";
      }
    }, {
      key: "tag",
      get: function get() {
        return "pfe-card";
      }
    }, {
      key: "meta",
      get: function get() {
        return {
          title: "Card",
          description: "This element creates a header, body, and footer region in which to place content or other components."
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          color: {
            title: "Background color",
            type: String,
            values: ["lightest", "base", "darker", "darkest", "complement", "accent"],
            default: "base",
            observer: "_colorChanged"
          },
          // @TODO: Deprecate property in 1.0
          oldColor: {
            type: String,
            prefix: false,
            alias: "color",
            attr: "pfe-color"
          },
          imgSrc: {
            title: "Background image",
            type: String,
            observer: "_imageSrcChanged"
          },
          // @TODO: Deprecate property in 1.0
          pfeImgSrc: {
            type: String,
            prefix: false,
            alias: "imgSrc"
          },
          size: {
            title: "Padding size",
            type: String,
            values: ["small"]
          },
          // @TODO: Deprecate property in 1.0
          pfeSize: {
            type: String,
            values: ["small"],
            prefix: false,
            alias: "size"
          },
          border: {
            title: "Border",
            type: Boolean
          },
          // @TODO: Deprecate property in 1.0
          oldBorder: {
            alias: "border",
            attr: "pfe-border"
          }
        };
      }
    }, {
      key: "slots",
      get: function get() {
        return {
          header: {
            title: "Header",
            type: "array",
            namedSlot: true,
            maxItems: 3,
            items: {
              $ref: "raw"
            }
          },
          body: {
            title: "Body",
            type: "array",
            namedSlot: false,
            items: {
              $ref: "raw"
            }
          },
          footer: {
            title: "Footer",
            type: "array",
            namedSlot: true,
            maxItems: 3,
            items: {
              oneOf: [{
                $ref: "pfe-cta"
              }, {
                $ref: "raw"
              }]
            }
          }
        };
      }

      // Declare the type of this component

    }, {
      key: "PfeType",
      get: function get() {
        return PFElement.PfeTypes.Container;
      }
    }]);

    function PfeCard() {
      classCallCheck(this, PfeCard);
      return possibleConstructorReturn(this, (PfeCard.__proto__ || Object.getPrototypeOf(PfeCard)).call(this, PfeCard, { type: PfeCard.PfeType }));
    }

    // If the color changes, update the context


    createClass(PfeCard, [{
      key: "_colorChanged",
      value: function _colorChanged() {
        // Update the context
        this.resetContext();
      }

      // Update the background image

    }, {
      key: "_imageSrcChanged",
      value: function _imageSrcChanged(oldValue, newValue) {
        // Set the image as the background image
        this.style.backgroundImage = newValue ? "url('" + newValue + "')" : "";
      }
    }]);
    return PfeCard;
  }(PFElement);

  PFElement.create(PfeCard);

  return PfeCard;

})));
//# sourceMappingURL=pfe-card.umd.js.map
