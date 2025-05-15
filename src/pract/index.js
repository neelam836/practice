import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Axixa from './Axixa';
import Test from './pract/Test';
import Returncc from './pract/Returncc';
import List from './pract/List';

import Classcomp from './Classcomp';
import Myeff from './Myeff';
import MultiInputForm from './pract/MultiInputForm';
import Myeff2 from './Myeff2';
import Fromdata from './Fromdata';
import UserList from './pract/UserList';




const root = ReactDOM.createRoot(document.getElementById('root'));
const data = [
    { product: "vim", price: 50, limit: 3 },
    { product: "dove", price: 40, limit: 5 },
    { product: "lux", price: 60, limit: 10 },
    { product: "sunsilk", price: 90, limit: 7 },
    { product: "pantine", price: 20, limit: 8},
    { product: "loreal", price: 40, limit: 5},
    { product: "himalyaa", price: 80, limit: 12 }
                    
];
root.render(
    <>
        {/* {
        data.map(info => (
            <Classcomp data={info}></Classcomp>
        ))
 } */}
        {/* <Fromdata></Fromdata> */}
        <UserList></UserList>
        {/* <Myeff2></Myeff2> */}
    {/* <Myeff></Myeff> */}
  {/* <MultiInputForm></MultiInputForm> */}
    { /* <Axixa />
    
    <Axixa start={5}> </Axixa>
    <Axixa start={15}> </Axixa>
    <Axixa start={3}> </Axixa> */}
    
    {/* <Test></Test>
    <Axixa></Axixa>
   <Returncc></Returncc> */}
    {/* <List></List> */}
{/* <Classcomp></Classcomp> */}

</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
