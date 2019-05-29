import { configure } from "@storybook/polymer";
import { setOptions } from "@storybook/addon-options";

import "./test-theme.css";

const req = require.context("../elements", true, /\.story\.js$/);

setOptions({
  name: "PatternFly Elements",
  url: "/",
  addonPanelInRight: true
});

function loadStories() {
  req.keys().forEach(filename => {
    if (filename.includes("node_modules")) {
      return;
    }

    return req(filename);
  });
}

configure(loadStories, module);
