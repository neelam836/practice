import React, { useEffect, useState } from 'react';

function Fromdata(props) {
    let [info, setInfo] = useState({ id :props.id,name:'',course:'',fees:'' })
    let valuesetter = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
        // console.log(e.target.name);
        // console.log(e.target.value);
        console.log(info);
    }
    useEffect(() => {
        fetch("http://localhost:3000/students/"+props.id).then(r => r.json()).then(fr => {
            // console.log(fr);
            setInfo(fr);
        })
    }, [props]);
    let save = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/students/" + props.id, {
            method: 'put',
           
             headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
        }).then(r => console.log("updated"))
            props.prox("");
    }
        
    
    return (
        <div>
            <form>
                <input type="text" defaultValue={info.name} onChange={valuesetter} name='name'/>
                <input type="text" defaultValue={info.course}  onChange={valuesetter} name='course'/>
                <input type="number" defaultValue={info.fees} onChange={valuesetter} name='fees' />
                <button onClick={save}>Update</button>
                </form>
        </div>
    );
}

export default Fromdata;