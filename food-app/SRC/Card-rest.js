import React from 'react'
let image = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'


function Cardrest({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
}) {
  return (
    <div className='main-restCard'>
        <img alt='image' src={image+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <div>{avgRating}</div>
        <div>{cuisines.join(', ')}</div>

    </div>

  )
}

export default Cardrest