# Calculator: HTML, CSS, JS

Created by Zell on Kevin Powell's YouTube channel, this basic calculator allows you to do standard operations.

## HTML & CSS

- HTML file structure: div container -> div calculator -> calculator display, calculator keys
- Inside of the calculator keys div, there are 17 buttons which have:
  - individual classes for numbers for their grid area locations (grid-template-areas and grid-area: name) and then have dataset attributes, mainly operator and number, for background colors and active effects. These number and operator classes are turned into dataset attributes for javascript DOM manipulation reasons
  - The calculator display is just a box with fixed width and padding with the zero inside text-aligned to the right
  - Note that the `:root` selector contains variables containing hexcodes for colors (`--grey-100: #e4e7eb;`) and are referenced via `var(--grey-100)` syntax.

## JS

### Dataset

The JavaScript aspect of this particular calculator utilizes `dataset`, which allows you to easily set or get the values of custom 'data-' prefixed HTML attributes on your elements. It works like a regular object and it gives you the power to do pretty interesting stuff with the components on the page. It returns a DOMStringMap object with the keys and values within that are converted to CamelCase from the "data-name" attributes that you make.

For example, a div containing the `data-abc-def` attribute within an HTML tag will convert to `dataset.abcDef`.

Another example:

```
calculator.dataset.previousKeyType = 'operator';

...

<body class="calculator" data-previous-key-type="operator"></body>
```

Then, in order to detect whether the previous key is the operator key, we can save that calculator's state using the `dataset` property and setting the value to 'selected' when an operator button is clicked. This is similar to the setState property in React.

- When you click a number for the first time, the calculator div will have `data-previous-key-type="number"`.
- When you click an operator like `+`, that then turns into `data-previous-key-type="operator"`, `data-first-number="7"` (if you clicked 7), and `data-operator="plus"`. In the calculator keys' div buttons, only the operator data types will be given a `data-state` attribute and the one that you clicked will say `data-state="selected"`.

### Closest method

`if (!event.target.closest('button')) return;`

The closest method traverses the element and its parents, heading towards the document root, until it finds a node that matches the specified CSS selector. It finds the closest ancestor with the button selector name, i this case.

The statement above says: If there is not a close ancestor with the css selector of button when a event.target occurs (clicking something within the calculator keys div), then do not return anything.

## MDN Links

- [Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [Closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
