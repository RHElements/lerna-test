import Rhelement from "../rhelement/rhelement.js";

/*
 * DO NOT EDIT. This will be autopopulated with the
 * html from rh-dropdown-menu.html and css from
 * rh-dropdown-menu.css
 */
const template = document.createElement("template");
template.innerHTML = `
<style>:host *, :host *::before, :host *::after {
  box-sizing: border-box; }

:host ul {
  position: absolute;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  border: 1px solid #ccc;
  background: #fff;
  width: 100%;
  min-width: 10em; }
  :host ul li {
    margin: 0;
    padding: 0; }
  :host ul a {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #333;
    line-height: 1.5; }
    :host ul a:hover, :host ul a:focus {
      background: #e7e7e7; }
    :host ul a:active {
      background: #06c;
      color: #fff; }</style>

`;
/* end DO NOT EDIT */

class RhDropdownMenu extends Rhelement {
  constructor() {
    super("rh-dropdown-menu", template);
  }

  connectedCallback() {
    const child = this.children[0];

    if (child && child.tagName == "UL") {
      this._assignMenuARIA(child);
      this.shadowRoot.appendChild(child);
    } else {
      console.warn(
        "The first child in the light DOM must be an unordered list"
      );
    }
  }

  disconnectedCallback() {}

  _assignMenuARIA(list) {
    list.setAttribute("role", "menu");
    list.setAttribute("hidden", "hidden");

    let listItems = list.childNodes;

    listItems.forEach(item => {
      if (item.nodeName == "LI") {
        item.setAttribute("role", "none");
        let achild = item.children[0];
        if (achild && achild.tagName == "A") {
          achild.setAttribute("role", "menuitem");
          achild.setAttribute("tabindex", "-1");
        }
      }
    });
  }
}

window.customElements.define("rh-dropdown-menu", RhDropdownMenu);
