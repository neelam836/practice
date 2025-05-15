import React, { useEffect, useState } from 'react';
import UserCreate from './UserCreate';
import Fromdata from './Fromdata';

function UserList(props) {
    let [data, setData] = useState([]);
    let [id, setId] = useState(1);
    let [whattoshow, changeshow] = useState("");
    useEffect(() => {
        fetch("http://localhost:3000/students/").then(r => r.json()).then(fr => {
            // console.log(fr);
            setData(fr);
        });
    }, [whattoshow]);
    let deleterecord = (id) => {
        fetch("http://localhost:3000/students/" + id, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
        }).then(r => {
            if (whattoshow == "")
                changeshow("deleted");
            else
                changeshow("");
                    console.log("delete")
            
        });
    }
    return (
        <div>
            {
                (whattoshow==''|| whattoshow=='deleted')? "":(whattoshow=='create')?<UserCreate prox={changeshow}></UserCreate>:<Fromdata id={id} prox={changeshow}></Fromdata>
            }
            <a href='#' onClick={() => {
                changeshow('create');
            }}>Create</a>
            <table border={"1px"} align='center'>
                <thead><tr><th colSpan={6}>Student List</th></tr>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Fees</th>
                        <th>Edit</th>
                        <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map(info => 
                            <tr>
                                <td>{info.id}</td>
                                <td>{info.name}</td>
                                <td>{info.course}</td>
                                <td>{info.fees}</td>
                                <td><button onClick={() => {
                                        changeshow('edit');
                                        setId(info.id);

                                    }}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        deleterecord(info.id);
                                       

                                    }}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserList;