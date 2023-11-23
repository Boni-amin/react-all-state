import { useState } from "react";


const UseStateImmutableObject = () => {
    let [myObject, setMyObject] = useState({
        key1: "value 1",
        key2: "value 2",
        key3: "value 3"
    });

    const changeObj =()=>{
        setMyObject(
            prevObj=>({
                ...prevObj,
                key1: "change value 1",
                key2: "change value 2"
            })
        )
    }
    return (
        <div>
            <p>{myObject.key1}</p>
            <p>{myObject.key2}</p>
            <p>{myObject.key3}</p>
            <button onClick={changeObj}>click here</button>
        </div>
    );
};

export default UseStateImmutableObject;