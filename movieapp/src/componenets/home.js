import React from 'react'
import Banner from './banner'
import Trendingmovies from './trendingmovies'
function Home({
  watchlist,
  setwatchlist,
  handleremovefromWL
}) {
  return (
    <>
        <Banner></Banner>
      <Trendingmovies watchlist={watchlist} setwatchlist={setwatchlist} handleremovefromWL={handleremovefromWL}></Trendingmovies>
    </>
  )
}

export default Home