// export default Axixa = () => {
//     return <h1> hi iam axixa</h1>
// }
// let Axixa = () => {
//     return <h1>axixa is best</h1>
// }

import { useState } from "react"

// export default Axixa;
// const Axixa = (props)=>
//  {
// //     let [x, setx] = useState(props.start)
// //     return <h1> Axixa is best{x}
// //         <button onClick={() =>
//     //             setx(x + 1)}>+</button></h1>
    

// }
const Axixa = () => {
    let [x, setx] = useState(1);
    return <div>
        <button onClick={() => {
            setx(x - 1)
        }}
        >-</button>
        <b>{x}</b>
         <button onClick={() => {
            setx(x + 1)
        }}
        >+</button>
    </div>
}
export default Axixa;