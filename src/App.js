import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import SignUpForm from './components/Login'
import ContactUs from "./components/ContactUs"
const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
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
