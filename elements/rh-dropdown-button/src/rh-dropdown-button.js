import Rhelement from "../rhelement/rhelement.js";

class RhDropdownButton extends Rhelement {
  static get tag() {
    return "rh-dropdown-button";
  }

  get styleUrl() {
    return "rh-dropdown-button.scss";
  }

  get templateUrl() {
    return "rh-dropdown-button.html";
  }

  static get observedAttributes() {
    return ["no-aria-haspopup"];
  }

  constructor() {
    super(RhDropdownButton.tag);
    this.button = this.shadowRoot.querySelector("button");
    this._clickHandler = this._clickHandler.bind(this);
  }

  connectedCallback() {
    const child = this.children[0];
    let isHeadingTag = false;

    if (child) {
      switch (child.tagName) {
        case "H1":
        case "H2":
        case "H3":
        case "H4":
        case "H5":
        case "H6":
          isHeadingTag = true;
          break;
      }
      this.button.innerHTML = child.innerHTML;
    } else {
      this.button.innerHTML = this.textContent.trim();
    }

    if (!isHeadingTag) {
      console.warn(
        "The first child in the light DOM must be a heading level tag (h1, h2, h3, h4, h5, or h6)"
      );
    }

    if (!this.getAttribute("no-aria-haspopup")) {
      this.button.setAttribute("aria-haspopup", "true");
    }

    this.button.setAttribute("aria-expanded", "false");

    this.button.addEventListener("click", this._clickHandler);
  }

  disconnectedCallback() {
    this.button.removeEventListener("click", this._clickHandler);
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "no-aria-haspopup" && newVal === "true") {
      this.button.removeAttribute("aria-haspopup");
    } else {
      this.button.setAttribute("aria-haspopup", "true");
    }
  }

  get expanded() {
    return this.hasAttribute("data-expanded");
  }

  set expanded(val) {
    val = Boolean(val);

    if (val) {
      this.setAttribute("data-expanded", true);
      this.button.setAttribute("aria-expanded", true);
    } else {
      this.removeAttribute("data-expanded");
      this.button.setAttribute("aria-expanded", false);
    }
  }

  _clickHandler(event) {
    this.dispatchEvent(
      new CustomEvent("rh-dropdown-change", {
        detail: { expanded: !this.expanded },
        bubbles: true
      })
    );
  }
}

Rhelement.create(RhDropdownButton);
