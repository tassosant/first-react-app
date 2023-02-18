import React, { Component } from "react";

class EventBind extends Component{
    constructor(props){
        super(props)

        this.state = {
            message:"Hello from this state"
        }

        //3rd approach way
        //bind the event handler in the constructor as opposed to binding in the render method     
        // this.clickHandler = this.clickHandler.bind(this)
    }
    //approach 1,2,3
    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye'
    //     })
    //      console.log(this)
    // }


    //aproach 4
    clickHandler = () =>{
        this.setState({
            message:'Goodbye'
        })
    }

    render(){

    return(
        <div>
            <div>{this.state.message}</div>
            {/* similar approaches below*/}
            {/*may lower performance in large apps*/}
            {/* <button onClick={this.clickHandler.bind(this)}>Event binding button</button> */} 
            {/*may lower performance in large apps*/}
            {/* <button onClick={()=>this.clickHandler()}>Event button with callback function</button> */}
            {/* 3rd approach(best option), the binding is used in the constructor */}
            {/* <button onClick={this.clickHandler}>Event binding button</button> */}
            {/* Final approach, use the arrow function as a class property */}
            <button onClick={this.clickHandler}>Event binding button</button>

        </div>
    )}
}

export default EventBind