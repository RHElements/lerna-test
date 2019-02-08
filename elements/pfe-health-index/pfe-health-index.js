import e from "../pfelement/pfelement.js";
class n extends e {
  get html() {
    return '<style>:host {\n  display: inline-flex;\n  align-items: center; }\n\n:host([hidden]) {\n  display: none; }\n\n.box-container {\n  display: flex;\n  border: 1px solid var(--pfe-theme--color--surface--border, #dfdfdf);\n  margin-left: calc(var(--pfe-theme--container-spacer, 1rem) * 0.5); }\n  .box-container .box {\n    background: #fff;\n    width: 10px;\n    height: 20px;\n    border-right: 1px solid var(--pfe-theme--color--surface--border, #dfdfdf); }\n    .box-container .box:last-child {\n      border-right: 0; }\n    .box-container .box.active.a {\n      background-color: #3f9c35; }\n    .box-container .box.active.b {\n      background-color: #92d400; }\n    .box-container .box.active.c {\n      background-color: #efaa00; }\n    .box-container .box.active.d {\n      background-color: #ec7a08; }\n    .box-container .box.active.e {\n      background-color: #cc0000; }\n    .box-container .box.active.f {\n      background-color: #a30000; }</style>\n<div id="healthIndex"></div>\n<div class="box-container">\n  <div class="box a"></div>\n  <div class="box b"></div>\n  <div class="box c"></div>\n  <div class="box d"></div>\n  <div class="box e"></div>\n  <div class="box f"></div>\n</div>';
  }
  static get tag() {
    return "pfe-health-index";
  }
  get templateUrl() {
    return "pfe-health-index.html";
  }
  get styleUrl() {
    return "pfe-health-index.scss";
  }
  static get observedAttributes() {
    return ["health-index"];
  }
  constructor() {
    super(n.tag);
  }
  attributeChangedCallback(e, o, t) {
    const a = t.toLowerCase(),
      r = t.toUpperCase(),
      i = [...this.shadowRoot.querySelectorAll(".box")];
    (this.innerHTML = r),
      (this.shadowRoot.querySelector("#healthIndex").innerText = r),
      i.forEach(e => {
        e.classList.contains(a)
          ? e.classList.add("active")
          : e.classList.remove("active");
      }),
      this.shadowRoot.querySelector(".box.active") ||
        console.warn(
          `${
            n.tag
          }: a valid health-index was not provided. Please use A, B, C, D, E, or F`
        );
  }
}
e.create(n);
export default n;
//# sourceMappingURL=pfe-health-index.js.map
