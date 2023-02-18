import React from "react";

// function Greet(){
//     return <h1>Helloooooooo!!!!!!!!!!!!</h1>
// }

// const Greet = (props) => {
//     console.log(props);
// return (
//         <div>
//             <h1>Helloooooooo {props.name} a.k.a {props.heroName}
//             </h1>
//             {props.children}
//         </div>
// );


// }


//destructuring props

//1st way (destructuring in the parameter)
// const Greet = ({name, heroName}) => {
//     //console.log(props);
//     return (
//             <div>
//                 <h1>Helloooooooo {name} a.k.a {heroName}
//                 </h1>
            
//             </div>
//     );
// }

//2nd way destructuring in function body
const Greet = (props) => {
    const {name, heroName} = props
    //console.log(props);
    return (
            <div>
                <h1>Helloooooooo {name} a.k.a {heroName}
                </h1>
            
            </div>
    );
}
export default Greet