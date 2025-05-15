import React, { useState } from 'react';

function Fromdatacurd(props) {
    let [info, setInfo] = useState({ name: '', age: '', city: '' })
    let valuesetter = (e) => {
        setInfo({...info,[e.target.name]:e.target.value})
        // console.log(e.target.name);
        // console.log(e.target.value);
        console.log(info);
        
    }
    return (
        <div>
            <form>
                <input type="text" defaultValue={info.name} onChange={valuesetter} name='name'/>
                <input type="number" defaultValue={info.age}  onChange={valuesetter} name='age'/>
                <input type="age" defaultValue={info.city}  onChange={valuesetter} name='city'/>
                </form>
        </div>
    );
}

export default Fromdatacurd;