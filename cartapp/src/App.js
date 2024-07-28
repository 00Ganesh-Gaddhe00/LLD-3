import './App.css';
import Home from './Pages/home';
import Cart from './Pages/cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navBar';
import {Provider} from 'react-redux'
import store from './store/storeConfig';


function App() {
  return (
<>
<Provider store={store}>
<BrowserRouter>
<Navbar></Navbar>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/cart' element={<Cart></Cart>}></Route>

</Routes>
</BrowserRouter>
</Provider>
    </>
  );
}

export default App;
