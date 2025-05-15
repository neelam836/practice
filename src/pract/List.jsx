import React from 'react'

const data = [
    { id:1, username:'Neelam', password:'nj123'},
    { id:2, username:'Nisha', password: 'nw123' }, 
    { id:3, username:'Neekunj', password:'nq123'},
    { id:4, username:'Nitisha', password:'nr123'},
    { id:5, username:'Naman', password:'njy123'},
    { id:6, username:'Nehul', password:'njr123'},
];

function List(props) {
    return (
        <div>
            <table border={4} align='center'>
                <thead align='center' text-align='center' > User List
                    <tr>
                        <td>Id</td>
                        <td>UserName</td>
                        <td>Password</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(info => (
                            <tr>
                                <td>{info.id}</td>
                                <td>{info.username}</td>
                                <td>{info.password}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default List;
