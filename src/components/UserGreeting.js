import React, { Component } from "react";

class UserGreeting extends Component{
    
    constructor(){
        super()
        this.state={
            isLoggedIn:true
        }
    }

    render(){
        return this.state.isLoggedIn && <div>Hello from user Greeting Class component, you are seeing this because you are logged in</div>

        // return this.state.isLoggedIn?(
        //     <div>Hello from user Greeting Class component, you are seeing this because you are logged in</div>
        // ):(
        //     <div>Welcome guest</div>
        // )

        // let msg
        // if(this.state.isLoggedIn){
        //     msg = <div>Hello from user Greeting Class component, you are seeing this because you are logged in</div>
        // }else{
        //     <div>Welcome guest</div>
        // }
        // return (<div>

        //     {msg}
        // </div>)
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Hello from user Greeting Class component, you are seeing this because you are logged in
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             Welcome guest
        //         </div>
        //     )
        // }


        // return(
        //     <div>
        //     <div>Welcome guest</div>
        //     <div>
        //         Hello from user Greeting Class component, you are seeing this because you are logged in
        //     </div>
        //     </div>
        // )
    }
}

export default UserGreeting