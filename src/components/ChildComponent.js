import React from "react";


function ChildComponent(props){

    return(

        <div>
            {/* <button onClick={props.greetHandler}>Call the parent</button> */}
            <button onClick={()=>props.greetHandler('child')}>Call the parent</button>
        </div>
    )
}

export default ChildComponent