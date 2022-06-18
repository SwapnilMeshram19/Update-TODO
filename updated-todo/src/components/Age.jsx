import React from "react";
const Age = (prop) => {
    var age=prop.age;
    
    var [age, setAge]=React.useState(age);

    const increase = () =>{
        setAge(age+1);
    }

    const decrease=()=>{
        setAge(age-1);
    }

    return (
        <>
         <h4>Age : {age}</h4>
         <button onClick={increase} className="age-button">INCREASE AGE</button>
         <button onClick={decrease} className="age-button">DECREASE AGE</button>
    
        </>
    )
}

export default Age;