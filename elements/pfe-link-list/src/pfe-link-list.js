import PFElement from "../pfelement/pfelement.js";

class PfeLinkList extends PFElement {
  static get tag() {
    return "pfe-link-list";
  }

  get schemaUrl() {
    return "pfe-link-list.json";
  }

  get templateUrl() {
    return "pfe-link-list.html";
  }

  get styleUrl() {
    return "pfe-link-list.scss";
  }

  // static get observedAttributes() {
  //   return [];
  // }

  // Declare the type of this component
  static get PfeType() {
    return PFElement.PfeTypes.Content;
  }

  constructor() {
    super(PfeLinkList, { type: PfeLinkList.PfeType });
  }
  connectedCallback() {
    super.connectedCallback();

    // Define the name of the slots
    const slots = {
      "[slot=\"pfe-link-list--header\"]": "[pfe-id=\"pfe-link-list--header\"]",
      "[slot=\"pfe-link-list--list\"]": "[pfe-id=\"pfe-link-list--list\"]",
    };

    // Move the content from the main and utility slots into the shadowDOM
    this._pfeClass.moveToShadowDOM(slots, this);
  }

  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}
}

PFElement.create(PfeLinkList);

export default PfeLinkList;
