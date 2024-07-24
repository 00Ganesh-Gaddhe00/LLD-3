import React from 'react'




function Moviecard({
    posterpath,
    movietitle,
    movieid,
    handleaddtoWL,
    handleremovefromWL,
    watchlist,
    movie
}) {

  function iscontain(id){
    for(let i=0; i<watchlist.length; i++){
      if (watchlist[i].id===id) return true
    }
    return false
  }

  return (
    <div className=" h-[20rem] hover:scale-[1.05] shadow-lg shadow-gray-500 hover:shadow-xl hover:shadow-gray-700 duration-300 w-[200px] rounded-2xl overflow-hidden flex flex-col justify-between items-end bg-cover"
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${posterpath})`}}
    >
      { iscontain(movieid)?
      <div onClick={()=>handleremovefromWL(movieid)} className='select-none bg-gray-800/50 m-2 text-md rotate-90 px-1.5 py-0.5 rounded-lg cursor-pointer'>&#10060;</div> :
      <div onClick={()=>handleaddtoWL(movie)} className='select-none bg-gray-800/50 m-2 text-xl px-1 rounded-lg cursor-pointer'>&#128525;</div>
}
    <div className=" text-slate-300	 text-lg bg-gray-800/50	w-full text-center p-2"	>{movietitle}</div>
</div>
  )
}

export default Moviecard