import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootapp.css';

import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Foooter from './UI/footer/Foooter';

import Headerr from './UI/header/Headerr';

import About from "./components/about/About";
import Home from './components/home/Home';
import Index from './components/products/Index';

 
function BootApp(props) {
    return (
      <>
        <BrowserRouter>
          <div className="wrapper">
            <Headerr></Headerr>
            <div className="bg-ligntgray">
              <Container className="border content cbody bg-white">
                <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/about" element={<About></About>}></Route>
                  <Route
                    path="/products/:item?" element={<Index></Index>}
                  ></Route>
                </Routes>
              </Container>
            </div>
            <Foooter></Foooter>
          </div>
        </BrowserRouter>
      </>
    );
}

export default BootApp;