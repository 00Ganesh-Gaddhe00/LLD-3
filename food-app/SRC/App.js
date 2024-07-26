import React from 'react'
import ReactDOM from 'react-dom/client'
import image from './logo2.png'
import Navbar from './navBar'
import Main from './main'
import { useState } from 'react'

// const heading = React.createElement('h1', {id:'1'}, 'heading one');

const restaurant = [
    {

        "id": "788303",
        "name": "Wow! Momo",
        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        "locality": "Near Shanti Nagar Bus Stop",
        "areaName": "Shantinagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Tibetan",
            "Healthy Food",
            "Asian",
        ],
        "avgRating": 4.3,
    },
    {

        "id": "440123",
        "name": "Great Indian Khichdi by EatFit",
        "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
        "locality": "Cunnigham road",
        "areaName": "Vasanth Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
        ],
        "avgRating": 4.5,
    },
    {

        "id": "534235",
        "name": "Cheesecake & Co.",
        "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Bakery"
        ],
        "avgRating": 4.6,
    },
    {

        "id": "622202",
        "name": "MOJO Pizza - 2X Toppings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG",
        "locality": "Langford Road",
        "areaName": "Shantinagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Fast Food",
        ],
        "avgRating": 4.5,
    },
    {

        "id": "750396",
        "name": "Daily Kitchen - Homely Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
        "locality": "Lakshmi Road",
        "areaName": "Langford Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
        ],
        "avgRating": 4.4,
    }

]





const Footer = () => {
    return (
        <div></div>
    )
}


const App = () => {
    const [restList, setrestList] = useState([])
    const [filteredList, setFilteredList] = useState([...restList])



    return (
        <>
            <Navbar restList={restList} setFilteredList={setFilteredList} ></Navbar>
            <Main restaurant={filteredList} setrestList={setrestList} setFilteredList={setFilteredList}></Main>
            <Footer></Footer>
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(functionalElement())
root.render(<App></App>)

