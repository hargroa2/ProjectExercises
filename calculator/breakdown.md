# Calculator: HTML, CSS, JS

Created by Zell on Kevin Powell's YouTube, this basic calculator allows you to do standard operations.

This calculator has a setup using several structures and techniques:

## HTML & CSS

- HTML file structure: div container -> div calculator -> calculator display, calculator keys
- Inside of the calculator keys div, there are 17 buttons which have:
  - individual classes for numbers for their grid area locations (grid-template-areas and grid-area: name) and then have either two classes, operator and number, for background colors. These number and operator classes are turned into data-type for javascript reasons.
  - The calculator display is just a box with fixed width and padding with the zero inside text-aligned to the right

## JS

The JavaScript aspect of this particular calculator utilizes `dataset`, which allows you to easily set or get the values of custom '-data' prefixed HTML attributes on your elements. It works like a regular object and it gives you the power to do pretty interesting stuff with the components on the page. It returns a DOMStringMap object with the keys and values within.
