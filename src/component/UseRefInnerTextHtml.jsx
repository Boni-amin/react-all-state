import { useRef } from "react";


const UseRefInnerTextHtml = () => {
    let myHeadLine = useRef()
    
    const change=()=>{
        // myHeadLine.current.innerText="Hellow UseRef"
        // myHeadLine.current.innerHTML="<ul><li>Chane-1</li><li>Chane-2</li><li>Chane-3</li></ul>";

        myHeadLine.innerHTML="<ul><li>Chane-1</li><li>Chane-2</li><li>Chane-3</li></ul>";
    }

    return (
        <div>
            {/* <h1 ref={myHeadLine}>Click The Button for change the text</h1> */}

            <h1 ref={(h1)=>myHeadLine=h1}>Click The Button for change the text</h1>
            <button onClick={change}>Click Me</button>
        </div>
    );

};

export default UseRefInnerTextHtml;