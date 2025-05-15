import React, { Component } from 'react'

 class Classcomp extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props.data, val: 0 };
        
        console.log("i will mount only once");
   // console.log(props.data.product);
     }
     static  getDerivedStateFromProps(props, state) {
         console.log(props);
         console.log(state);
         
         
     }
     componentDidMount() {
         console.log("i am did mount");
        
     }
     shouldComponentUpdate() {
         if (this.state.val < this.state.limit)
             return true;
         window.alert("limit over");
         return false;
     }
    render() {
      
        console.log("i am rendering");
        return (
            <div>
                {this.state.product} {this.state.price} {this.state.val}
                <button onClick={() => {
                    this.setState({ val: this.state.val + 1 })
                }}> Go</button>
            </div>
        );
     }
     componentDidUpdate() {
         // window.alert( this.state.limit-this.state.val);
         console.log("data is updated");
     }
}
export default Classcomp;

