//write your code here...

//child component
const ChildComponent = (props) => {
    return (
        <div>
            <p>Props: {props.message}</p>
        </div>
    )
}

//parent component
import react, { Children, startTransition, useState } from 'react'
const ParentComponent = () => {
    const [message, setMessage] = useState("Hello, Wordl!");

    return (
        <ChildComponent message={message} />
    )
}

//////////////////////////////////////////////////////////////////////////////
// Q2

//write code for function render() for a HTML Tree in JSON given below as obj, to render it into HTML

const obj = {

    type: 'div',
    props: {
        children: [{ type: 'h1', props: { children: 'this is' } },
        {
            type: 'p', props: {
                class: 'paragraph', children: ['a', {
                    type: (props) => ({
                        type: 'button', props: { children: props.counter + 'clicks' }
                    }), props: { counter: 1 }
                },
                    'from'
                ]
            }
        }
        ]
    }
}


function render(obj) {

}

<div>
    <h1>this is</h1>
    <p class='paragraph'>
        a
        <button></button>
    </p>

</div>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const UserProfile = ({userId})=>{
    const fetchDataCallback  = useCallback(()=>{

        //Fetch user data from API using userId
        fetchDataCallback(userId)
        .then((data)=>{
            //Handle the fetched data
            handleData(data);
        })
        .catch((error)=>{
            //Handle API error
            handleError(error);
        })
    }, [userId])
  //Render user profile and trigger data fetching with the memoized callback
    return(
        <div>
            <h1>User Profile</h1>
            <button onClick={fetchDataCallback}>Fetch Data</button>
            {/* Additional profile sections   */}
        </div>
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react';

const ItemsList = ({items, itemsPerPage})=>{

    const[currentPage, setCurrentPage] = useState(2);
    
    const pageitems = []
     const startindex = currentPage*itemsPerPage - itemsPerPage
     const endindex = startindex+itemsPerPage

    for(let start=0; i<end ; i++){
        pageitemsitems.push(items)

    }


        
       
    //TODP: Add pagination logic here
    return(
        <div>
       {/* Display the current page of items */}
       {/* Pagination controls */}
       </div>
    )
}

export default ItemsList;

//Also you get items array like this :
//const items = [
//  {id:1, name:'items'}
//  {id:1, name:'items'}
//  {id:1, name:'items'}
//  {id:1, name:'items'}
//  .....more items
//];




