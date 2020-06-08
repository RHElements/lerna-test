# PatternFly Element | Jump links element


## Usage
This component is focused on reading content inside the <pfe-jump-links-panel> and updating a sidebar or horizontal nav with to indicate the section of the document currently being viewed. As a developer, you have the choice of whether you bring your own markup to the nav, or have the nav build a DOM tree for you. Please note the shape of the DOM tree below. In order to support sub-section highlighting jump links must be very opinionated about the DOM tree.

Inside of <pfe-jump-links-panel> add the class .pfe-jump-links-panel__section to tell the component to watch for when that section crosses the scroll threshold. If this section has sub-sections you add the class .has-sub-section to the section parent (i.e. section 8) and add .sub-section to the child sections (i.e. 8.1). Make sure to add an id to each section, this id will match to the href attribute of the corresponding <a> tag.

## Wiring up the nav
The panel and nav are wired up by a scrolltarget and id. On the panel add an attribute scrolltarget="foo". This will correspond to the nav's #id. Add the corresponding id to your nav like so id="foo". The last step is to match the <a> tag's href attribute to specific sections (just like we would with same page anchor links). See below for a simple example with three sections where section two has two sub-sections:

```html
<pfe-jump-links-nav id="jumplinks1" default>
    <h4 slot="pfe-jump-links-nav--heading">Jump to section</h4>
    <ul>
        <li>
            <a href="#section1">Section 1</a>
        </li>
        <li>
            <a href="#section2">Section 2</a>
            <ul>
                <li>
                    <a href="#section2.1">Section 2.1</a>
                </li>
                <li>
                <a href="#section2.2">Section 2.2</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#section3">Section 3</a>
        </li>
    </ul>
</pfe-jump-links-nav>
...
<pfe-jump-links-panel>
    <h2 class="pfe-jump-links-panel__section" id="section1">Section 1</h2>
    <p>Some content...</p>
    <h2 class="pfe-jump-links-panel__section has-sub-section" id="section2">Section 2</h2>
    <p>Some content...</p>
    <h2 class="pfe-jump-links-panel__section sub-section" id="section2">Section 2.1</h2>
    <p>Some content...</p>
    <h2 class="pfe-jump-links-panel__section sub-section" id="section2">Section 2.2</h2>
    <p>Some content...</p>
    <h2 class="pfe-jump-links-panel__section" id="section2">Section 2</h2>
    <p>Some content...</p>
</pfe-jump-links-panel>
```

### Accessibility
The template and DOM structure of this component are as follows:
```html
<nav>
  <h2 hidden>Page navigation</h2> // this is visually hidden
  <h4>Slotted content</h4>
  <ul>
    <li><a>Regular list item</a></li>
    <li><a>List item with sub sections</a></li>
    <li>
        <ul>
            <li><a>Nested sub section</a></li>
        </ul>
    </li>
  </ul>
</nav>
```

No extra roles or aria labels are required because we're using standard html tags in their prescribed uses.

## Slots

- `namedSlot`: The only slot this component has is the heading. The rest of the component works by creating a mirror shadowRoot based on the Light DOM markup. 

## Attributes

- `attr`: autobuild Flips the switch on the component to create its own markup for the navigation. If you use this attribute, then no experience is given for non-JS runtimes and the component will crawl the associated panel to come up with its own list of links.

## Events
This component fires an event when a link is made active.


## Dependencies
Describe any dependent elements or libraries here too.

## Dev

    `npm start`

## Test

    `npm run test`

## Build

    `npm run build`

## Demo

From the PFElements root directory, run:

    `npm run demo`

## Code style

Jump links (and all PFElements) use [Prettier][prettier] to auto-format JS and JSON. The style rules get applied when you commit a change. If you choose to, you can [integrate your editor][prettier-ed] with Prettier to have the style rules applied on every save.

[prettier]: https://github.com/prettier/prettier/
[prettier-ed]: https://prettier.io/docs/en/editors.html
[web-component-tester]: https://github.com/Polymer/web-component-tester
