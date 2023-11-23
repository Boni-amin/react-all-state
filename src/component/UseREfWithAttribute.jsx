import { useRef } from "react";


const UseREfWithAttribute = () => {
    let myImages =useRef();
    
    const change=()=>{

      myImages.current.src="https://loremflickr.com/640/360";
      myImages.current.setAttribute("width", "300px")
      myImages.current.setAttribute("height","300px")

    }

    return (
        <div>
            <img ref={myImages} src="http://via.placeholder.com/640x360"></img>
            <button onClick={change}>Click Me</button>
        </div>
    );
};

export default UseREfWithAttribute;