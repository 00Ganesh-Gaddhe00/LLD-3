import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex py-2'>
    <img className='size-10 ml-5 mr-3' alt='logo' src='https://github.com/MrLaGa/Movies-App/blob/master/src/components/movieicon.png?raw=true'></img>
    <Link to='/' className='text-3xl font-bold text-sky-600 mx-2'>Movies</Link>
    <Link to='/watchlist' className='text-3xl font-bold text-sky-600 mx-2'>watchlist</Link>
    </div>
  )
}

export default Navbar