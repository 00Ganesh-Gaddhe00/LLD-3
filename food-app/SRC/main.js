import React from "react"
import Cardrest from "./Card-rest"
import { useEffect } from "react"

// const restaurant = [
//     {

//                       "id": "788303",
//                       "name": "Wow! Momo",
//                       "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
//                       "locality": "Near Shanti Nagar Bus Stop",
//                       "areaName": "Shantinagar",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "Tibetan",
//                         "Healthy Food",
//                         "Asian",
//                       ],
//                       "avgRating": 4.3,
//     },
//     {

//         "id": "440123",
//         "name": "Great Indian Khichdi by EatFit",
//         "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
//         "locality": "Cunnigham road",
//         "areaName": "Vasanth Nagar",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Home Food",
//           "Indian",
//           "North Indian",
//         ],
//         "avgRating": 4.5,
//     },
//     {

//         "id": "534235",
//         "name": "Cheesecake & Co.",
//         "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
//         "locality": "Koramangala",
//         "areaName": "Koramangala",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Bakery"
//         ],
//         "avgRating": 4.6,
//     },
//     {

//         "id": "622202",
//         "name": "MOJO Pizza - 2X Toppings",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG",
//         "locality": "Langford Road",
//         "areaName": "Shantinagar",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Pizzas",
//           "Italian",
//           "Fast Food",
//                 ],
//         "avgRating": 4.5,
//     },
//     {

//         "id": "750396",
//         "name": "Daily Kitchen - Homely Meals",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
//         "locality": "Lakshmi Road",
//         "areaName": "Langford Road",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Home Food",
//           "Indian",
//           "North Indian",
//         ],
//         "avgRating": 4.4,
//     }

// ]





const Main = ({ restaurant,setrestList,setFilteredList }) => {


  
    useEffect(() => {
        // API call
        getRestaurants();
      }, []);

      async function getRestaurants() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json()
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        const list = await json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
       setrestList(list)
       setFilteredList(list)
      }
    

    return (
        <div className="main">
            {
                restaurant.map((rest) => {
                    return <Cardrest {...rest.info} key={rest.info.id} />
                })

            }

        </div>
    )
}

export default Main