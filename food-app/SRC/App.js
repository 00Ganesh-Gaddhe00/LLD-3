import React from 'react'
import ReactDOM from 'react-dom/client'
import image from './logo2.png'
import Navbar from './navBar'
import Main from './main'

// const heading = React.createElement('h1', {id:'1'}, 'heading one');




const Footer = ()=>{
    return(
        <div></div>
    )
}


const App = ()=>{
    return(
        <>
        <Navbar></Navbar>
        <Main></Main>
        <Footer></Footer>
        </>
    )
}






const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(functionalElement())
root.render(<App></App>)

