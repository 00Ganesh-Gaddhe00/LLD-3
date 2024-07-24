import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Banner() {
const [movieObj, setmovieObj] = useState(null)

useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce')
    .then((response)=>{
        let movies = response.data.results
        let movie = movies[Math.floor(Math.random()*18)]
        setmovieObj(movie)
    })
},[])

if(movieObj===null){
  return <h1>...loading</h1>
}

  return (
    <div className="flex bg-slate-800 shadow-lg shadow-gray-400 justify-center items-end h-[70vh] bg-cover bg-repeat	"
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}}>
    
        <div className=" text-slate-300	 text-lg bg-gray-800/50	w-full text-center p-2"	>{movieObj.title}</div>
    </div>
  )
}

export default Banner