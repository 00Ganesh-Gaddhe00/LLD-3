import React from 'react'

const genreName = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
}

function Watchlist({
  watchlist,
  handleremovefromWL,
}) 
{
  return (
    <>
     <div className="flex mt-5 justify-center">
      <div  className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center">All Genre</div>
      <div  className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center">All Genre</div>
      <div  className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center">All Genre</div>
      <div  className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center">All Genre</div>
      <div  className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center">All Genre</div>
     </div>

     <div className="flex justify-center my-5">
      <input placeholder='Search Movies' className="h-[2.5rem] w-[16rem] bg-gray-100 border-2 border-gray-300 outline-none px-4 text-lg"></input>
     </div>
     <table className="p-4 w-full text-center">
      <thead className=" bg-gray-100 h-[2rem]">
        <tr>
          <th>Movie</th>
          <th>
          <span><i className="fa-solid fa-arrow-up"></i></span>
          <span className="mx-2">Ratings</span>
          <span><i className="fa-solid fa-arrow-down"></i></span>
          </th>

          <th>Popularity</th>
          <th>Genre</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>

        {watchlist.map((movie)=>{
          return <tr key={movie.id} className=" border-b-2">
          <td className="flex items-center mx-4 py-4"><img className=" rounded-[6rem] rem] w-[6rem]" alt='poster' src={"https://image.tmdb.org/t/p/original/"+ movie.poster_path}></img></td>
          <td>{movie.vote_average}</td>
          <td>{movie.popularity}</td>
          <td>{genreName[movie.genre_ids[0]]}</td>
          <td onClick={()=>handleremovefromWL(movie.id)} className=" text-red-400 "><i className="fa-solid fa-trash-can cursor-pointer"></i></td>
        </tr>
        })}
          
      </tbody>
     </table>
    </>
  )
}

export default Watchlist