https://javascript.info/bubbling-and-capturing#:~:text=The%20standard%20DOM%20Events%20describes,bubbles%20up%20from%20the%20element



* the browser traverse from the root of the tree to the target element that the event happend
to fill the properties or created obekect it traverse from root object to the target element, the object contains all these detials




In the backend of event propagation, several key processes occur within the browser's event handling system to manage and propagate events through the Document Object Model (DOM). Here's a detailed explanation of what happens under the hood:

1. **Event Creation**:
   - When a user interacts with a webpage (e.g., clicks a button, types in a text field), the browser detects this interaction and creates an event object. This object contains information about the event, such as its type (e.g., 'click', 'keydown'), the target element, and other relevant details (e.g., mouse coordinates, key pressed).

2. **Event Initialization**:
   - The event object is initialized with properties that describe the nature of the event. For example, a click event will have properties like `clientX`, `clientY` (coordinates), `button` (which mouse button was pressed), and more.

3. **Capturing Phase**:
   - The event propagation starts at the root of the DOM tree (usually the `document` object).
   - The browser traverses the DOM tree from the root towards the target element. During this traversal, it checks each element for any event listeners registered for the capturing phase (i.e., event listeners added with `useCapture` set to `true`).
   - If a capturing event listener is found, it is executed in the order of their registration.

4. **Target Phase**:
   - Once the event reaches the target element (the element where the interaction occurred), the browser executes any event listeners attached directly to this element. These listeners handle the event specifically for this element.

5. **Bubbling Phase**:
   - After the target element processes the event, the event starts to propagate back up the DOM tree.
   - The browser traverses the DOM tree in the reverse order, moving from the target element back towards the root.
   - During this traversal, it checks each element for any event listeners registered for the bubbling phase (default behavior for event listeners).
   - If a bubbling event listener is found, it is executed in the order of their registration.

6. **Event Propagation Control**:
   - The event object provides methods that allow developers to control the propagation process:
     - `stopPropagation()`: Prevents the event from continuing to propagate (neither capturing nor bubbling further).
     - `stopImmediatePropagation()`: Stops the event from propagating and prevents any other event listeners on the same element from being executed.
     - `preventDefault()`: Prevents the default action associated with the event (e.g., preventing a form submission or a link navigation).

7. **Event Listener Execution**:
   - Each time an event listener is executed, the browser passes the event object to the listener function. The listener can then access event properties and methods to handle the event accordingly.
   - Event listeners are executed synchronously, meaning the browser waits for each listener to complete before moving to the next one.

### Example of Event Propagation in JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Propagation Example</title>
</head>
<body>
  <div id="parent" style="padding: 20px; background-color: lightblue;">
    Parent Div
    <button id="child">Click Me!</button>
  </div>

  <script>
    // Event listener for capturing phase on the parent
    document.getElementById('parent').addEventListener('click', (event) => {
      console.log('Parent clicked (capturing phase)');
    }, true);

    // Event listener for the target element
    document.getElementById('child').addEventListener('click', (event) => {
      console.log('Child clicked (target phase)');
      // Uncomment the next line to stop propagation
      // event.stopPropagation();
    });

    // Event listener for bubbling phase on the parent
    document.getElementById('parent').addEventListener('click', (event) => {
      console.log('Parent clicked (bubbling phase)');
    });
  </script>
</body>
</html>
```

In this example, clicking the button will trigger the event listeners in the following order:
1. Capturing phase on the parent (`console.log('Parent clicked (capturing phase)')`).
2. Target phase on the button (`console.log('Child clicked (target phase)')`).
3. Bubbling phase on the parent (`console.log('Parent clicked (bubbling phase)')`).

If `event.stopPropagation()` is called in the target phase, the bubbling phase event listeners will not be executed. This mechanism allows for fine-grained control over how events are handled within the DOM.

