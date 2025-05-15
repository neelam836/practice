import React from 'react';
import { useState } from 'react';

function Myeff2() {
    let [obj, setObj] = useState({ name: '', age: '', city: '' });
     let hChange = (e) => {
    let { name, value } = e.target;
      setObj((prevData) => ({
          ...prevData, [name]: value
    }));
  };
return (
        <div>
            <table align='center'>
                <tr>
                    <td>Name: <input type="text" name='name' value={obj.name} onChange={hChange} /></td>
                </tr>
                <tr>
                    <td>Age: <input type="number" name='age' value={obj.age} onChange={hChange} /></td>
                </tr>
                <tr>
                    <td>City: <input type="text"  name='city' value={obj.city} onChange={hChange} /></td>
                </tr>
            </table>
         <p><b>Output:</b></p>
        <p>Name: {obj.name}</p>
        <p>Age: {obj.age}</p>
        <p>City: {obj.city}</p>
        </div>
    );
    }
export default Myeff2;