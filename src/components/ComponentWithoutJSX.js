import React from "react";

const ComponentWithoutJSX = () =>{
    // return(
    //     <div id="hello" className="dummyClass">
    //         <h1>Here is the component with JSX</h1>
    //     </div>
    // )
    return React.createElement('div', {id:"hello", className:"dummyClass"}, React.createElement('h1',null,'This is component without JSX'));
}

export default ComponentWithoutJSX;