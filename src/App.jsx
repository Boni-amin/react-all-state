
import UseEffectApiAsyncAwait from "./component/UseEffectApiAsyncAwait";
import UseEffectCallApi from "./component/UseEffectCallApi";
import UseREfWithAttribute from "./component/UseREfWithAttribute";
import UseRefApiCall from "./component/UseRefApiCall";
import UseRefCountNumbar from "./component/UseRefCountNumbar";
import UseRefCssClass from "./component/UseRefCssClass";
import UseRefInnerTextHtml from "./component/UseRefInnerTextHtml";
import UseRefInputValue from "./component/UseRefInputValue";
import UseStateImmutableArray from "./component/UseStateImmutableArray";
import UseStateImmutableObject from "./component/UseStateImmutableObject";
import UseStateManagingForm from "./component/UseStateManagingForm ";
import UseStateUnderstadingInside from "./component/UseStateUnderstadingInside";


const App = () => {
  return (
    <div>
        <UseRefInnerTextHtml></UseRefInnerTextHtml> <br></br> <hr></hr>
        <UseREfWithAttribute></UseREfWithAttribute>  <br></br> <hr></hr>
        <UseRefInputValue></UseRefInputValue>  <br></br> <hr></hr>
        <UseRefCssClass></UseRefCssClass> <br></br> <hr></hr>
        <UseRefCountNumbar></UseRefCountNumbar> <br></br> <hr></hr> 
        <UseRefApiCall></UseRefApiCall> <br></br> <hr></hr> 
        <UseStateUnderstadingInside></UseStateUnderstadingInside>   <br></br> <hr></hr> 
        <UseStateImmutableObject></UseStateImmutableObject> <br></br> <hr></hr> 
        <UseStateImmutableArray> </UseStateImmutableArray> <br></br> <hr></hr> 
        <UseStateManagingForm></UseStateManagingForm> <br></br> <hr></hr> 
        <UseEffectCallApi></UseEffectCallApi> <br></br> <hr></hr>  
        <UseEffectApiAsyncAwait></UseEffectApiAsyncAwait>  <br></br> <hr></hr> 
    </div>
  );
};

export default App;