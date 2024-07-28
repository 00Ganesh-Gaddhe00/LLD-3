import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'Products',
    initialState: {
        data: [],
        status:'success'
    },
    reducers:{
        setProducts(state, action){
            return {...state, data : action.payload}
        },
        setStatus(state, action){
            return{...state, status:action.payload}
        }
    }
})



export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer

export function fetchproducts(){
 return async function(dispatch){
   dispatch(setStatus('...loading'))
       
   try {
    const res =  await fetch('https://fakestoreapi.com/products')
    const json = await res.json()
    dispatch(setProducts(json))
    dispatch(setStatus('success'))

   }catch(err){
    dispatch(setStatus('error'))
   }
       


    }
}

