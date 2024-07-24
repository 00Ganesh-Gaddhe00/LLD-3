import './App.css';
import Home from './componenets/home';
import Watchlist from './componenets/watchlist';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componenets/navbar'

function App() {
  return (
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/watchlist' element={<Watchlist></Watchlist>}></Route>
       </Routes>
       </BrowserRouter>
  );
}

export default App;
