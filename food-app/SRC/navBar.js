import { useState } from 'react'
import image from './logo2.png'







const Navbar = ()=>{

    const[searchTxt, setsearchTxt] = useState('')

    return(
        <div className='nav'>
            <div className='nav-logo'>
                <a href='/'>
                <img className="nav-logo" alt='logo' src={image}/>
                </a>
            </div>
            <div className='nav-items'>
            <div className='nav-search'>
                <input  type='text' placeholder='search' onChange={function(e){
                    setsearchTxt
                }}/>
                <button>Q</button>

            </div>
                <div>Sign In [o]</div>
                <div>Cart \-/</div>
            </div>
        </div>
    )
}

export default Navbar