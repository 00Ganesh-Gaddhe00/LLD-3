* Props : the data is passed from parent component to child components in the name of props similiarly to the function passing an argument and receing and parameter enabling the components to more reuable and modular. 
 - Immutable:
   - Props are read-only. Once a parent component passes props to a child component, the child component cannot modify them. This ensures a one-way data flow, which is a core concept in React

------------------------------------------

* state : Basically it represnts the current state of a changing data of the component which maintains the state of local valiables or also called local state variables, where holding the current state, tracking the changes and updating  which is done by using useState Hook where the variable are declared using the hook

* state represnts the data of the component that can change over time, where data is mainted by holding the current value, managing the changes and updating of the variables , where the local variables are maintained tracked and updated, which are hence also called as local state variables, the state mangemnet is used inorder to maintain constistancy across the data flow whenever changes happen and updated the Dom accordinly, which is done by using useState hook in function components or state object in class objects, allowing components to be dynamic and interactive

* state represent management local variable or data of that component

* Declarative API: The useState hook offers a simple and declarative API for managing state. It improves the readability and maintainability of the code.

---------------------------------------------

n React JS, the main difference between props and state is that the props are a way to pass the data or properties from one component to other components while the state is the real-time data available to use within that only component.













































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