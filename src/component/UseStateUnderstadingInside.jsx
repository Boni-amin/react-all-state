import { useState } from "react";


const UseStateUnderstadingInside = () => {
    let [numbar, setNumbar] = useState(0);
    const changeNumbar =()=>{
        setNumbar(numbar+1)
    }
    return (
        <div>
            <h4>Numbar: {numbar}</h4>
            {/* <button onClick={()=>setNumbar(numbar+1)}>Click me</button> */}
            <button onClick={changeNumbar}>Click me</button>
        </div>
    );
};

export default UseStateUnderstadingInside;