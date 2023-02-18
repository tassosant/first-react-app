import React, { Component } from "react";

export class ClassClick extends Component{
    
    clickHandler(){
        console.log("Button from class component clicked")
    }
    
    
    render(){


        return(
            <div>
                <button onClick={this.clickHandler}>Click with a class component</button>
            </div>
        )
    }
}

export default ClassClick