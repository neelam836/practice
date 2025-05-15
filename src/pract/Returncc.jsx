import React from "react";
function Returncc(props) {
    // return [
    // <h1>neelam joshi</h1>,
    // <h2>9358468856</h2>
    // ]

    // return <>
    //     <h1>neelam joshi</h1>
    //     <h2>9358468856</h2>
    // </>
    // let dosti = ['a', 'b', 'c', 'd', 'e', 'f'];
    // return [
    //     dosti.map(va => {
    //         return <h2>{va}</h2>
    //     })
    // ]

    //     let employee = [
    //         { name: "Neelam", gender: "female" },
    //         { name: "Nisha", gender: "female" },
    //         { name: "Nitesh", gender: "male" },
    //         { name: "Naresh", gender: "female" },
    //         { name: "Neel", gender: "male" }
                                        
        
        
    //     ];
    //     return [
    //         employee.map(va => {
    //             if (va.gender == 'female')
    //                 return <h2>hello {va.name} mam</h2>
    //             return <h2>hello {va.name} sir</h2>
    //         })
    //     ]

    // }
    let age = 6;
    let name = "Suresh";
    return <div>
        hello {name}
        {
            (age > 60) ? <b> You are Retired person</b> :<> You have {60 - age} years in service</>
        
        }
    </div>




}
    export default Returncc;