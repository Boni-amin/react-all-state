import { useRef } from "react";


const UseRefInputValue = () => {

    // Aki line a variable nile input er value arry function diye dorte hobe. 
    let fristName,lastName = useRef();

    const change=()=>{

        let fName = fristName.value;
        let lName = lastName.value;

        alert(fName + " " + lName);
  
      }
    return (
        <div>
            <input ref={(fn)=>fristName=fn} placeholder="Frist Name" type="text" />
            <input ref={(ln)=>lastName=ln} placeholder="Last Name" type="text" />
            <button onClick={change}>Click Me</button>
        </div>
    );
};

export default UseRefInputValue;