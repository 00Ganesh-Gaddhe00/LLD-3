import { useState } from 'react'
import image from './logo2.png'





const Navbar = ({restList, setFilteredList})=>{

    const[searchTxt, setsearchTxt] = useState('')

    function searchfxn(){
        const filarr = restList.filter((rest)=>{
            return rest.name.includes(searchTxt)
        })
        setFilteredList(filarr)
    }


    

    return(
        <div className='nav'>
            <div className='nav-logo'>
                <a href='/'>
                <img className="nav-logo" alt='logo' src={image}/>
                </a>
            </div>
            <div className='nav-items'>
            <div className='nav-search'>
                <input  value={searchTxt} type='text' placeholder='search' onChange={function(e){
                        // Filterrest(e);
                        setsearchTxt(e.target.value)

                }}/>
                <button onClick={()=>searchfxn()}>Q</button>

            </div>
                <div>Sign In [o]</div>
                <div>Cart \-/</div>
            </div>
        </div>
    )
}

export default Navbar