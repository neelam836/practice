import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Login from '../Login';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function LoadApp(props) {
    return (
       
        <Container>
            <BrowserRouter>
                <NavBar > </NavBar>
                
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                </Routes>
                    
        </BrowserRouter>
           
            
        </Container>
        
 
        
    );
}

export default LoadApp;