import React, { useEffect } from 'react';
import { useState } from 'react';

function Myeff() {
    let [val, setVal] = useState(1);
    let [name, setName] = useState(" Neelam ");
    useEffect(function () {
        window.alert("your first change");
    }, []);
    return (
        <div>
            <table align='center'>
                <tr align='center'><td>
            {val} <input type="number" value={val} onChange={(e) =>{ setVal(e.target.value);
            
            }} /></td></tr>
           
          <tr> <td>     
           {name} <input type="text" value={name} onChange={(e) =>{ setName(e.target.value);
            
                }} /></td></tr>
                </table>
            {/* <b> i am effect</b> */}
        </div>
    );
}

export default Myeff;