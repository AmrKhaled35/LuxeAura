import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ProductDetails from './Pages/ProductDetails';
import Header from './layout/Header';
import SideBar from './layout/SideBar';
import Footer from './layout/Footer';
import SignUpForm from './components/Login'
import ContactUs from "./components/ContactUs"
import Gallery from './Pages/Gallery';
import Sales from './Pages/Sales';
const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/sale' element={<Sales />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/Login' element = {<SignUpForm/>}></Route>
          <Route path='/Contact' element ={<ContactUs/>}></Route>
        </Routes>
        <SideBar></SideBar>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
