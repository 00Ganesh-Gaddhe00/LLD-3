import './App.css';
import Home from './componenets/home';
import Watchlist from './componenets/watchlist';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componenets/navbar'
import { useState, useEffect } from 'react';

function App() {
  const [watchlist, setwatchlist] = useState([])

  useEffect(()=>{
    const WatchlistfromLS = JSON.parse(localStorage.getItem('watchlist'))
    if(WatchlistfromLS===null) return
    setwatchlist(WatchlistfromLS);
  },[])

  function handleremovefromWL(id){
    const newarr = watchlist.filter((movie)=> movie.id!==id)
    localStorage.setItem('watchlist', JSON.stringify(newarr))
    
    setwatchlist(newarr)

 }

  return (
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home
           watchlist={watchlist}
           setwatchlist={setwatchlist}
           handleremovefromWL={handleremovefromWL}
        ></Home>} ></Route>
        <Route path='/watchlist' element={<Watchlist 
         watchlist={watchlist}
         handleremovefromWL={handleremovefromWL}
        ></Watchlist>}></Route>
       </Routes>
       </BrowserRouter>
  );
}

export default App;
