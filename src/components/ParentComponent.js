import React, { Component } from "react";
import ChildComponent from "./ChildComponent";


class ParentComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            parentName:'Parent'
        }
        //in this.greetParent.bind(this) the bind(this) refers to whoever called the method greetParent(NOT the expression at the left)
        this.greetParent = this.greetParent.bind(this)
        console.log(this)
    }
    // greetParent(){
    //  alert(`Hello from parent component, I am displaying the state of this component: ${this.state.parentName}`)
    // }


    greetParent(childName){
        alert(`Hello from parent component, I am displaying the state of this component: ${this.state.parentName} from ${childName}`)
    }

    render(){
        return(
        <div>
            <ChildComponent greetHandler = {this.greetParent}/>
        </div>

        )
    }
}

export default ParentComponent