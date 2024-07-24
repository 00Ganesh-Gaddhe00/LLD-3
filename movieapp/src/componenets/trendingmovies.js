import React, { useEffect } from 'react'
import Moviecard from './moviecard'
import { useState } from 'react'
import axios from 'axios'
import Pagination from './pagination'
import Watchlist from './watchlist'



function Trendingmovies({
  watchlist,
  setwatchlist,
  handleremovefromWL
}) {
    //  const [watchlist, setwatchlist] = useState([])

    const [movies , setMovies] = useState([])
    const [pageNo, setPageno] = useState(1)

    console.log(watchlist)

    useEffect(()=>{
     axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce&page=${pageNo}`) 
     .then((response)=>{
        const moviearr = response.data.results
        setMovies(moviearr)
     })   
 
    },[pageNo])

    // useEffect(()=>{
    //   const WatchlistfromLS = JSON.parse(localStorage.getItem('watchlist'))
    //   if(WatchlistfromLS===null) return
    //   setwatchlist(WatchlistfromLS);
    // },[])

   function handleaddtoWL(movie){
    const newarr = [...watchlist]
    newarr.push(movie)
    localStorage.setItem('watchlist', JSON.stringify(newarr))
    setwatchlist(newarr)
   }

  //  function handleremovefromWL(id){
  //     const newarr = watchlist.filter((movie)=> movie.id!==id)
  //     localStorage.setItem('watchlist', JSON.stringify(newarr))
      
  //     setwatchlist(newarr)

  //  }


    function handlenext(){
       setPageno(pageNo+1)
    }

    function handleprev(){
        if (pageNo>1){
            setPageno(pageNo-1)

        }
    }
    console.log(watchlist)

// console.log(movies)

  return (
    <>
    <div className="text-center font-bold text-2xl	 mt-7 ">Trending Movies</div>
 
    <div className="flex flex-wrap	p-4 gap-6 justify-around" >
         {
             movies.map((movie)=>{
                return <Moviecard   
                  key={movie.id}
                  movieid = {movie.id}
                  posterpath={movie.poster_path}
                  movietitle={movie.title}
                  handleaddtoWL = {handleaddtoWL}
                  handleremovefromWL = {handleremovefromWL}
                  watchlist = {watchlist}
                  movie={movie}
                
                />
             })
         }
 

    </div>
    <Pagination
      pageNo = {pageNo}
      handlenext = {handlenext}
      handleprev = {handleprev}

    ></Pagination>
</>
)
}

export default Trendingmovies