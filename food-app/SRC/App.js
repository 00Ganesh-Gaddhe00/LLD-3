import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1', {id:'1'}, 'heading one');


const FunctionalElement = ()=>{

    const heading = React.createElement('h1', {id:'1'}, 'i am a functional element or component');

    return React.createElement('div', {}, [heading])
}







const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(functionalElement())
root.render(<FunctionalElement></FunctionalElement>)

