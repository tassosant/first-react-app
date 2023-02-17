import React, { Component } from "react";


class Message extends Component{
    constructor(){
        super()
        this.state ={
            message:'Here is the class component. We use it as an example for the states.Initial state'
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank you for subscribing"
        })
    }
    render(){
        return(<div>

            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message