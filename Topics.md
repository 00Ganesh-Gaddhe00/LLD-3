
* Event propogation
* Event Bubling
* Event capturing
* npx = npm run
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
