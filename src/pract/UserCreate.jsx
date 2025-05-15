import React, { useState } from 'react';

function UserCreate(props) {
    let [info, setInfo] = useState({ name: '', course: '', fees: '' })
    let valuesetter = (e) => {
        setInfo({...info,[e.target.name]:e.target.value})
    }

    let save = (e) => {
        e.preventDefault(); 
        console.log(info);
         fetch("http://localhost:3000/students/", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then(r => {
            props.prox("");
            console.log("Saved")
    })
    }
    return (
        <div>
            <form>
                <input type="text" defaultValue={info.name} onChange={valuesetter} name='name'/>
                <input type="text" defaultValue={info.course}  onChange={valuesetter} name='course'/>
                <input type="number" defaultValue={info.fees} onChange={valuesetter} name='fees' />
                <button onClick={save}>Save</button>
                </form>
        </div>
    );
}

export default UserCreate;