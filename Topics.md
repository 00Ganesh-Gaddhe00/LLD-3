
* Event propogation
* Event Bubling
* Event capturing
* npx = npm run
* useeffect is called after the component is rendered
* first rendering is called mount/mountinf. after subsequent render is called updating
* why custom hooks- reusable, redable, more testable, maintable, debuggable, modularity
* lazy loading, chunking, code splitting, dynamic import, on demand loading
* 
////react
* congif driven UI - UI gets renders based on the data fetched
 state variable - if a variable is changed by other component since we are use function components functions only work when we called, the vraiable in other component might not work
--------------------------------------------------------

* the DOM object provides the modules or API that can be accessed using javascript to manupilate Document dynamically 
* Yes, the Document Object Model (DOM) is a programming interface provided by web browsers that allows programs and scripts to dynamically access and update the content, structure, and style of a web document. It represents the document as a tree of nodes, where each node is an object representing part of the document.
* Async and differ - Resource Chatgpt




//////////////////////////////////////////////////////////////////////////////////////////////////////////

In a production web application, the package.json file and the node_modules directory are not shipped to the client's browser. Instead, the process typically involves the following steps:

Development Environment:

You install npm packages locally using npm install or yarn install.
You write your application code using these packages.
Build Process:

A build tool (like Webpack, Vite, Parcel, Rollup, etc.) bundles your application code along with the necessary npm packages into static files (e.g., JavaScript, CSS, HTML).
The build tool may also perform tasks such as transpiling, minifying, and optimizing the code.
Deployment:

You deploy the bundled and optimized files to a web server or a content delivery network (CDN).
The deployment typically includes files such as index.html, bundle.js, styles.css, and other static assets.
The package.json and node_modules directory are not included in the deployment package sent to the client.
Client-Side:

When a user accesses your web application, the browser downloads the bundled static files (e.g., bundle.js, styles.css) from the server.
The browser executes the downloaded JavaScript files to render the web application.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Yes, when using a bundler like Parcel, only the code that is actually used from the node_modules directory is included in the final bundle that gets shipped to the server or browser. The entire node_modules directory is not included. Here’s how this works in detail:

How Parcel Bundles Your Application
Entry Point:

Parcel starts from one or more entry points (e.g., your main JavaScript file).
Dependency Graph:

It analyzes the dependency graph, following import and require statements to include only the code that is actually used in your application.
Tree Shaking:

Parcel performs tree shaking, which is a process of removing unused code. This helps in including only the necessary parts of the libraries you are using.
Bundling:

The used code, including dependencies from node_modules, is bundled into one or more output files (e.g., bundle.js for JavaScript, bundle.css for CSS).
Optimization:

During the build process, Parcel also performs optimizations like minification, code splitting, and more to ensure the final bundle is as efficient as possible.

////////////////////////////////////////////////////////////////////////////
`componentDidMount` and `componentDidUpdate` are both lifecycle methods in React class components, but they serve different purposes and are called at different times during the component's lifecycle.

### `componentDidMount`

- **When it is called**: Once, immediately after the component is initially rendered (mounted) to the DOM.
- **Primary Use Cases**:
  - Fetching data from an API to populate the component.
  - Setting up subscriptions, event listeners, or timers.
  - Performing initial DOM manipulations or measurements.
- **Key Characteristics**:
  - It runs only once, when the component is first mounted.
  - It's used for initial setup tasks that need to happen once.

### `componentDidUpdate`

- **When it is called**: After every update to the component (i.e., after re-rendering due to changes in props or state).
- **Primary Use Cases**:
  - Performing operations based on prop or state changes.
  - Fetching data in response to prop changes.
  - Updating the DOM in response to state changes.
- **Key Characteristics**:
  - It runs after every update, providing a place to act on prop or state changes.
  - It's used for tasks that need to be performed every time the component updates.

### Example to Illustrate the Differences

Consider a component that fetches data when it is first mounted and also fetches new data whenever a prop (e.g., `userId`) changes.

```javascript
import React, { Component } from 'react';

class UserProfile extends Component {
  state = {
    userData: null,
    loading: true,
  };

  componentDidMount() {
    // Initial data fetch when the component mounts
    this.fetchUserData(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    // Fetch new data when the userId prop changes
    if (this.props.userId !== prevProps.userId) {
      this.fetchUserData(this.props.userId);
    }
  }

  fetchUserData(userId) {
    this.setState({ loading: true });
    fetch(`https://api.example.com/user/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ userData: data, loading: false });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { userData, loading } = this.state;
    return (
      <div>
        {loading ? <p>Loading...</p> : <p>User: {userData.name}</p>}
      </div>
    );
  }
}

export default UserProfile;
```

### Functional Component Equivalent with `useEffect`

For functional components, you use the `useEffect` hook to achieve similar behavior:

```javascript
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.example.com/user/${userId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]); // Dependency array ensures this effect runs when `userId` changes

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>User: {userData.name}</p>}
    </div>
  );
};

export default UserProfile;
```

### Summary

- **`componentDidMount`**:
  - Called once after the initial render.
  - Used for initial data fetching, setting up subscriptions, and DOM manipulations.
  
- **`componentDidUpdate`**:
  - Called after every update (i.e., re-render).
  - Used for reacting to prop or state changes and performing side effects based on these changes.

Understanding the differences between these lifecycle methods helps you manage the component's behavior effectively, ensuring that your React components remain predictable and efficient.
