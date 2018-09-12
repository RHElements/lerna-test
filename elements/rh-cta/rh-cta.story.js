import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, select } from "@storybook/addon-knobs/polymer";
import "./rh-cta";
// import cpTheme from '../../themes/cp-theme/cp-theme.js';

const stories = storiesOf("Call To Action", module);
stories.addDecorator(withKnobs);

stories.add("rh-cta", () => {
  const priorityType = "Priority";
  const colorType = "Color";

  const priorityOptions = {
    default: "default",
    primary: "primary",
    secondary: "secondary"
  };

  const colorOptions = {
    default: "default",
    base: "base",
    complement: "complement",
    accent: "accent"
  };

  const priorityDefault = "default";
  const colorDefault = "default";

  const value = select(priorityType, priorityOptions, priorityDefault);
  const colorValue = select(colorType, colorOptions, colorDefault);

  let valueAttr = value != "default" ? ` priority="${value}"` : "";
  let colorAttr = colorValue != "default" ? ` color="${colorValue}"` : "";

  return `
  <style>  
    div {
      margin-bottom: 40px;
    }

    rh-cta {
      margin-right: 10px;
    }
  </style>

  <section>
    <h2>Your RHElement</h2>
    <rh-cta${valueAttr}${colorAttr}><a href="#">Become a Member</a></rh-cta>
  </section>
  <section>
    <h2>Markup</h2>
    <pre><code>&lt;rh-cta${valueAttr}${colorAttr}&gt;Become a Member&lt;/rh-cta&gt;</code></pre>
  </section>
  <section>
    <h2>At a glance</h2>
    <div>
      <h3>Defaults</h3>
      <rh-cta><a href="#">Become a Member</a></rh-cta>
      <rh-cta priority="primary"><a href="#">Become a Member</a></rh-cta>
      <rh-cta priority="secondary"><a href="#">Become a Member</a></rh-cta>
    </div>
    <div>
      <h3>Color: Base</h3>
      <rh-cta color="base"><a href="#">Become a Member</a></rh-cta>
      <rh-cta priority="primary" color="base"><a href="#">Become a Member</a></rh-cta>
      <rh-cta priority="secondary" color="base"><a href="#">Become a Member</a></rh-cta>
    </div>
    <div>
      <h3>Color: Complement</h3>
      <rh-cta color="complement"><a href="#">Become a Member</a></rh-cta>
      <rh-cta priority="primary" color="complement"><a href="#">Become a Member</a></rh-cta>
      <rh-cta priority="secondary" color="complement"><a href="#">Become a Member</a></rh-cta>
    </div>
    <div>
      <h3>Color: Accent</h3>
      <rh-cta color="accent"><a href="#">Become a Member</a></rh-cta>
      <rh-cta priority="primary" color="accent"><a href="#">Become a Member</a></rh-cta>
      <rh-cta priority="secondary" color="accent"><a href="#">Become a Member</a></rh-cta>
    </div>
  </section>
  `;
});
