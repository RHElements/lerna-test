# PatternFly Element | Readtime element
This component takes in the word count of a given section and does a calculation on that number to return an estimated read time based on language.  The words-per-minute values were sourced from [this article](https://irisreading.com/average-reading-speed-in-various-languages) with the data originating from [this research](https://iovs.arvojournals.org/article.aspx?articleid=2166061).  For more information, see the [Readtime calculation information](https://github.com/patternfly/patternfly-elements/blob/d6dcd30dd5398acb01bef7ca304b2bec7faf673e/elements/pfe-readtime/README.md#readtime-calculation-information) below.

## Usage

```html
    <!-- Default slot -->
    <pfe-readtime for="readtime1" hidden>
      <span slot="read-string">%t-minute readtime</span>
      <span slot="read-string-less">less than 1-minute readtime</span>
    </pfe-readtime>
```

### Accessibility
The default markup should have semantic markup if the component can't load, once it loads the component the appropriate markup for assistive tech is handled for you.

## Slots

- `namedSlot`: There are 2 slots available `read-string` and `read-string-less`. `read-string` will show for all values equal or above 1 and `read-string-less` will show "less than 1 minute read" for andything below 1.

## Attributes

- `word-count`:  Is the data-attribute you will leverage for readtime. Example: word-count="2500" will let the component know that there is 2500 words in that section and it will do it's calculations based on that number. If you don't want to/have a data-attribute to leverage you can use id="readtime1" and it will get the word count for you.

-`wpm`: Is the attribute used to store the average words per minute readtime for each supported country. For more information on these you can read https://irisreading.com/average-reading-speed-in-various-languages and https://iovs.arvojournals.org/article.aspx?articleid=216606.

## Events
Describe any events that are accessible external to the web component. There is no need to describe all the internal-only functions.

## Readtime calculation information

Average read time by country: https://irisreading.com/average-reading-speed-in-various-languages

Korean read time research:
https://files.osf.io/v1/resources/xynwg/providers/osfstorage/5cb0b53ff2be3c0016ffe637?action=download&version=1&direct&format=pdf

TLDR:
For Korean, we were able to locate 7 studies in five articles: 5 with silent reading and 2 with reading aloud. Silent reading rate was 226 wpm, reading aloud 133 wpm.

## Dependencies
There are no dependencies for this web component.

## Dev

    `npm start`

## Test

    `npm run dev pfe-readtime`

## Build

    `npm run build`

## Demo

From the PFElements root directory, run:

    `npm run demo`

## Code style

Readtime (and all PFElements) use [Prettier][prettier] to auto-format JS and JSON. The style rules get applied when you commit a change. If you choose to, you can [integrate your editor][prettier-ed] with Prettier to have the style rules applied on every save.

[prettier]: https://github.com/prettier/prettier/
[prettier-ed]: https://prettier.io/docs/en/editors.html
[web-component-tester]: https://github.com/Polymer/web-component-tester