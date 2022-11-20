import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/Cart';
import Products from './component/Products';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './component/Registration';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='/Products' element={<Products />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Registration' element={<Registration />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
