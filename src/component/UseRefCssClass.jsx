import { useRef } from "react";


const UseRefCssClass = () => {
    let hedding =useRef()
    const change=()=>{
        // hedding.current.className="text-danger";
        hedding.current.classList.remove('text-success')
        hedding.current.classList.add('text-danger')
  
      }
    return (
        <div>
            <h1 ref={hedding} className='text-success'>This is ahedding tag use in bootstrap css</h1>
            <button onClick={change}>Click Me</button>
        </div>
    );
};

export default UseRefCssClass;