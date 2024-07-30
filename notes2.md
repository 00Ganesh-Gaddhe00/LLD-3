* Props : the data is passed from parent component to child components in the name of props similiarly to the function passing an argument and receing and parameter enabling the components to more reuable and modular. 
 - Immutable:
   - Props are read-only. Once a parent component passes props to a child component, the child component cannot modify them. This ensures a one-way data flow, which is a core concept in React

* 
------------------------------------------

* state : Basically it represnts the current state of a changing data of the component which maintains the state of local valiables or also called local state variables, where holding the current state, tracking the changes and updating  which is done by using useState Hook where the variable are declared using the hook

* state represnts the data of the component that can change over time, where data is mainted by holding the current value, managing the changes and updating of the variables , where the local variables are maintained tracked and updated, which are hence also called as local state variables, the state mangemnet is used inorder to maintain constistancy across the data flow whenever changes happen and updated the Dom accordinly, which is done by using useState hook in function components or state object in class objects, allowing components to be dynamic and interactive

* state represent management local variable or data of that component

* Declarative API: The useState hook offers a simple and declarative API for managing state. It improves the readability and maintainability of the code.

---------------------------------------------

* list the steps that the React takes to converts JSX into the actual output for the browser, ignoring all the internal optimization steps
- 

n React JS, the main difference between props and state is that the props are a way to pass the data or properties from one component to other components while the state is the real-time data available to use within that only component.

------------------------------------------------------------------------------------------

what are hooks: Hooks are functions/methods that allow us to use React features (component instances features) in functional components, like maintining the state or accessing the phases of components lifecycle etc.
 - Hooks provide a more direct API to the React concepts you already know, such as state, lifecycle, context, refs, and more.

* rules of react hooks
1. Only Call Hooks at the Top Level:
  1. Consistent Hook Call Order
    notconditionally
    manage state and lifecycle hooks 
   This ensures that hooks are called in the same order each time a component renders. Conditional or nested hooks can break this order and lead to issues.
2. Only Call Hooks from React Functions
     because these hooks are individual and different initialized for the component instances
    - State Management : React keeps track of the state internally and associates it with the component instance


3. Custom Hook Naming Convention
   Start Custom Hook Names with "use" : This naming convention also helps identify custom hooks and ensures they are used correctly.

 *  Why thes rules : 
     because the hooks functionality will be based on the component instances and their side effects, state and data


* useStranstion : when two states are causing renders at same event and one is heavytime to update by using transition hook we ca
  useTransition helps in managing transitions by allowing you to mark certain state updates as transitions. This way, React can prioritize urgent updates (like user input) and handle non-urgent updates (like data fetching or rendering complex lists) in the background.


* useref : youtube video ; https://www.youtube.com/watch?v=yviJikU4gwk
  - it can store the reference to real DOM element and can manuplate the dom if we have the reference with js like vanella js but does cause the rerender.
  - 

 * usememo :  The useMemo hook in React is used to optimize the performance of your application by memoizing the result of a computation. This means that useMemo will only recompute the memoized value when one of its dependencies has changed. If the dependencies do not change, useMemo will return the cached value from the previous render, avoiding unnecessary recalculations.
  When to Use useMemo:
  - Expensive Calculations: 
  - Referential Equality: Consider a scenario where you pass an object to a child component, and you want to avoid re-renders of the child component when the object hasn't changed.

* memoization : Memoization is a performance optimization technique used to improve the efficiency of function calls by caching the results of expensive function computations and reusing those cached results when the same inputs occur again
  -  How Memoization Works
     1. Store Results: When a function is called with certain inputs, the result of the computation is stored in a cache (usually an object  or a map) using the inputs as the key.
     2. Check Cache: On subsequent calls with the same inputs, the function first checks the cache to see if the result for those inputs is already stored.
     3. Return Cached Result: If the result is found in the cache, it is returned immediately without re-executing the computation.
     4. Compute and Cache: If the result is not found in the cache, the function computes the result, stores it in the cache, and then returns it.
  
  -  Differences in Usage
     - useMemo: Primarily used for memoizing any computed value, including objects, arrays, or primitive values.
     - useCallback: Specifically used for memoizing functions.

      

   . Internal Implementation
     Internally, both useMemo and useCallback work similarly:

     * useMemo: 
              - Takes a function that returns a value and a list of dependencies.
              - Caches the result of the function.
              -  Returns the cached result unless the dependencies change.
    
    * useCallback:
              - Takes a function and a list of dependencies.
              - Returns a memoized version of the function that only changes if one of the dependencies has changed.
  -----------------------------------------------------------------------------------------------------------------------

 * debouncing : debouncing is a technique used to control the frequency of function execution, particularly in response to user events such as keystrokes, mouse movements, or resizing. By delaying the execution of a function until a certain amount of time has passed since the last event, debouncing helps in optimizing performance and improving user experience.

 whenever there is an lot of event call happening like typing and scrolling where each event should triggered heavy action 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Using React hooks comes with a set of rules that are essential to follow to ensure that hooks work correctly. These rules are necessary because hooks rely on the order in which they are called to keep track of state and other React features. Breaking these rules can lead to unexpected behavior and bugs.

### Rules for Using React Hooks

1. **Only Call Hooks at the Top Level**
   - **Do Not Call Hooks Inside Loops, Conditions, or Nested Functions**: Hooks should be called at the top level of your React function component. This ensures that hooks are called in the same order each time a component renders. Conditional or nested hooks can break this order and lead to issues.
   ```javascript
   // Correct
   function MyComponent() {
     const [count, setCount] = useState(0);
     if (count > 0) {
       // do something
     }
   }

   // Incorrect
   function MyComponent() {
     if (someCondition) {
       const [count, setCount] = useState(0); // This will break the rules of hooks
     }
   }
   ```

2. **Only Call Hooks from React Functions**
   - **Do Not Call Hooks from Regular JavaScript Functions**: Hooks should only be called from React function components or custom hooks. Calling hooks from non-React functions can lead to errors.
   ```javascript
   // Correct
   function MyComponent() {
     const [count, setCount] = useState(0);
   }

   function useCustomHook() {
     const [state, setState] = useState(null);
   }

   // Incorrect
   function myRegularFunction() {
     const [count, setCount] = useState(0); // This is incorrect
   }
   ```

3. **Custom Hook Naming Convention**
   - **Start Custom Hook Names with "use"**: Custom hooks should start with "use" to indicate that they follow the rules of hooks. This naming convention also helps identify custom hooks and ensures they are used correctly.
   ```javascript
   // Correct
   function useCustomHook() {
     const [state, setState] = useState(null);
   }

   // Incorrect
   function customHook() { // This doesn't follow the naming convention
     const [state, setState] = useState(null);
   }
   ```

### Why These Rules Are Important

1. **Consistency and Predictability**
   - Hooks rely on the order in which they are called. When hooks are called in a consistent order, React can correctly associate the state and side effects with each component instance. Deviating from this order can cause React to lose track of which state or effect belongs to which hook.

2. **Maintaining State Across Renders**
   - React uses the order of hook calls to maintain the state across renders. If hooks are called conditionally or within loops, React cannot guarantee that the order remains the same between renders, leading to broken state management.

3. **Ensuring Proper Cleanup**
   - Hooks like `useEffect` can return a cleanup function that React will call to clean up the effect. If the order of hook calls changes, React might call the wrong cleanup function, causing memory leaks or other bugs.

4. **Debugging and Readability**
   - Following these rules makes it easier to understand and debug React components. When hooks are always called at the top level and follow a consistent naming convention, the flow of logic is more transparent and predictable.

5. **Avoiding Errors**
   - Breaking these rules can lead to runtime errors and unpredictable behavior. Ensuring that hooks are called correctly helps prevent such issues and ensures the stability of your application.

### Summary

By adhering to these rules, you ensure that React can correctly manage the state and side effects within your components. This results in more predictable, maintainable, and bug-free code.

















































------------------------------------------------------------------------------------------------------------------------------------------








props: 
In React, "props" (short for "properties") are used to pass data from one component to another. Props allow you to pass information and configuration to child components, enabling them to be more reusable and modular. Here are some key points about props in React:

1. **Immutable**:
   - Props are read-only. Once a parent component passes props to a child component, the child component cannot modify them. This ensures a one-way data flow, which is a core concept in React.

2. **Passing Data**:
   - Props are passed from a parent component to a child component as attributes in JSX. For example:

     ```jsx
     function ParentComponent() {
       return <ChildComponent message="Hello, World!" />;
     }

     function ChildComponent(props) {
       return <h1>{props.message}</h1>;
     }
     ```

     In this example, `message="Hello, World!"` is passed as a prop to `ChildComponent`.

3. **Prop Types**:
   - You can specify the type of props a component should receive using `propTypes`. This helps with debugging and ensuring that the components receive the correct data types. For example:

     ```jsx
     import PropTypes from 'prop-types';

     function ChildComponent(props) {
       return <h1>{props.message}</h1>;
     }

     ChildComponent.propTypes = {
       message: PropTypes.string.isRequired,
     };
     ```

4. **Default Props**:
   - You can define default values for props using `defaultProps`. If a prop is not passed, the default value will be used. For example:

     ```jsx
     function ChildComponent(props) {
       return <h1>{props.message}</h1>;
     }

     ChildComponent.defaultProps = {
       message: 'Default Message',
     };
     ```

5. **Destructuring Props**:
   - For cleaner and more readable code, you can destructure props directly in the function signature or within the function body. For example:

     ```jsx
     function ChildComponent({ message }) {
       return <h1>{message}</h1>;
     }
     ```

     Or within the function body:

     ```jsx
     function ChildComponent(props) {
       const { message } = props;
       return <h1>{message}</h1>;
     }
     ```

6. **Functional vs. Class Components**:
   - Both functional and class components can receive props. With functional components, you simply pass props as a parameter. With class components, you access props via `this.props`. For example:

     ```jsx
     class ChildComponent extends React.Component {
       render() {
         return <h1>{this.props.message}</h1>;
       }
     }
     ```

Props are a fundamental concept in React, enabling component reusability and a clear data flow architecture.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////