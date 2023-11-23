import { useRef } from "react";


const UseRefCountNumbar = () => {

    let numbar = useRef()
    const change=()=>{

        numbar.current++;
        console.log(numbar.current)
  
      }
    return (
        <div>
            <button onClick={change}>Click Me</button>
        </div>
    );
};

export default UseRefCountNumbar;