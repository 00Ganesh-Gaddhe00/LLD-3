import './App.css';
import Home from './componenets/home';
import Watchlist from './componenets/watchlist';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componenets/navbar'
import { useState, useEffect } from 'react';
import { movieContext } from './componenets/movieContex';


function App() {

  const [watchlist, setwatchlist] = useState([])
  const [pageNo, setPageno] = useState(1)


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

 function handlenext(){
  setPageno(pageNo+1)
}
function handleprev(){
  if (pageNo>1){
      setPageno(pageNo-1)

  }
}

  return (
      <BrowserRouter>
      <movieContext.Provider value={{watchlist, setwatchlist, handleremovefromWL, pageNo, setPageno, handleprev, handlenext}}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/watchlist' element={<Watchlist></Watchlist>}></Route>
       </Routes>
       </movieContext.Provider>
       </BrowserRouter>
  );
}

export default App;
