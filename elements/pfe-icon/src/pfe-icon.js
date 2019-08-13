import PFElement from "../pfelement/pfelement.js";
import PfeIconSet from "./pfe-icon-set.js";
import { addBuiltIns } from "./pfe-builtin-icon-sets.js";

/**
 * Sets the id attribute on the <filter> element and points the CSS `filter` at that id.
 */
function setRandomFilterId(el) {
  const randomId =
    "filter-" +
    Math.random()
      .toString()
      .slice(2, 10);

  // set the CSS filter property to point at the given id
  el.shadowRoot.querySelector("svg image").style.filter = `url(#${randomId})`;

  // set the id attribute on the SVG filter element to match
  el.shadowRoot.querySelector("svg filter").setAttribute("id", randomId);
}

function createIconSetHandler(el, setName) {
  return ev => {
    // if the set we're waiting for was added, run updateIcon again
    if (setName === ev.detail.set.name) {
      document.body.removeEventListener(
        PfeIcon.EVENTS.ADD_ICON_SET,
        el._handleAddIconSet
      );
      el.updateIcon();
    }
  };
}

function iconLoad(el) {
  el.image.classList.remove("load-failed");
}

function iconLoadError(el) {
  el.image.classList.add("load-failed");
}

class PfeIcon extends PFElement {
  static get tag() {
    return "pfe-icon";
  }

  get templateUrl() {
    return "pfe-icon.html";
  }

  get styleUrl() {
    return "pfe-icon.scss";
  }

  get schemaUrl() {
    return "pfe-icon.json";
  }

  static get observedAttributes() {
    return ["icon"];
  }

  constructor() {
    super(PfeIcon);

    this.image = this.shadowRoot.querySelector("svg image");
    this.image.addEventListener("load", () => iconLoad(this));
    this.image.addEventListener("error", () => iconLoadError(this));
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    super.attributeChangedCallback(...arguments);
    this.updateIcon(newValue);
  }

  updateIcon(iconName = this.getAttribute("icon")) {
    const { setName, set } = PfeIcon.getIconSet(iconName);

    if (set) {
      const { iconPath } = set.resolveIconName(iconName);
      this.image.setAttribute("xlink:href", iconPath);
      setRandomFilterId(this);
    } else {
      // the icon set we want doesn't exist (yet?) so start listening for new icon sets
      this._handleAddIconSet = this._createIconSetHandler(setName);

      document.body.addEventListener(
        PfeIcon.EVENTS.ADD_ICON_SET,
        this._handleAddIconSet
      );
    }
  }

  /**
   * Get an icon set by providing the set's name, _or_ the name of an icon from that set.
   *
   * @param {String} iconName the name of the set, or the name of an icon from that set.
   * @return {PfeIconSet} the icon set
   */
  static getIconSet(iconName) {
    const [setName] = iconName.split("-");
    const set = this._iconSets[setName];
    return { setName, set };
  }

  static addIconSet(name, path, resolveIconName) {
    if (this._iconSets[name]) {
      throw new Error(
        `can't add icon set ${name}; a set with that name already exists.`
      );
    }

    this._iconSets[name] = new PfeIconSet(name, path, resolveIconName);

    document.body.dispatchEvent(
      new CustomEvent(this.EVENTS.ADD_ICON_SET, {
        bubbles: false,
        detail: {
          set: this._iconSets[name]
        }
      })
    );
  }

  static get EVENTS() {
    return {
      ADD_ICON_SET: `${this.tag}:add-icon-set`
    };
  }
}

PfeIcon._iconSets = {};

addBuiltIns(PfeIcon);

PFElement.create(PfeIcon);

export default PfeIcon;
