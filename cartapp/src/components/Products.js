import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addtocart } from '../store/cartSlice'
import { useSelector } from 'react-redux'
import { setProducts, setStatus, fetchproducts } from '../store/productSlice'


export default function Product(){

//   const [products, setproducts] = useState([])
const productObj = useSelector((state)=>state.products)
const products = productObj.data
const dispatch = useDispatch()



  
  useEffect(()=>{
     dispatch(fetchproducts())
  },[])

  console.log(products)

  function handleaddtocart(product){
    dispatch(addtocart(product))
  }



    // const product = {id:1,
    //                  title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //                  price:109.95,
    //                  description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //                  category:"men's clothing",
    //                  image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //                  rating:{"rate":3.9,"count":120}}
    
    
                     return(
        <div className="productsWrapper">
           {products.map((product)=>{
            return <div key={product.id} className="card">
            <img src={product.image} alt="product"/>
            <h6>{product.title}</h6>
            <h5>{product.price}</h5>
            <button onClick={()=>handleaddtocart(product)} className="btn">Add to Cart</button>
        </div>
           })}
        
        

        </div>
    )
}