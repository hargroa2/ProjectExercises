# Movie App - React Refresher

## Notes

- React is a frontend javascript library for building user interfaces
- It uses a virtual dom which is a javascript object that is a lightweight representation of the DOM that is faster and updates a section of the page
- When something changes in a component, we get a new react element. React will then compare this element and the children of that element with the previous one and it figures out what has changed. It will then update a part of the real dom to keep it in sync with the virtual dom
- React is a component-based frontend library which means that all parts of a web application are divided into small pieces of the UI. Every react.js application is a tree of components that lets you split the UI into independent reusable parts
- We need to import react to be able to use the entirety of its library
- JSX is used in React to describe what the user interface should look like, and is a template language with the full power of javascript. It is NOT HTML
- Node.js is a JavaScript runtime environment that allows you to execute js code on the server level
- Inside package.json, you can see all the dependencies or packages that your application has installed currently
- Within index.html, there is a single div with an id of root, where all of our react components are going to get injected inside of

### useState:

- useState is a JavaScript object to represent a piece of information about the component's current situation
- The useState hook has a const and then uses the concept of array destructuring, which will have the name of that state (counter) and the setter function (setCounter), and then in the useState you provide the initial value that it will be set to (0 for a counter)

### useEffect:

- useEffect allows us to do something on some kind of an effect or some kind of event
- without dependency array: will occur every time the page loads
- with empty dependency array: will occur only at the initial loading of the page
- with dependency array: will occur every time the variable inside changes
