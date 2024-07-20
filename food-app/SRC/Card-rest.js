import React from 'react'
let image = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG'


function Cardrest() {
  return (
    <div className='main-restCard'>
        <img alt='image' src={image}></img>
        <h3>KFC</h3>
        <div>4 stars</div>
        <div>Burgers, FastFood</div>

    </div>

  )
}

export default Cardrest