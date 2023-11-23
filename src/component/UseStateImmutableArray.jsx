import { useState } from "react";


const UseStateImmutableArray = () => {

    let [list, setList]= useState([]);
    let [item, setItem]= useState("");

    const addToList =()=>{
        list.push(item)
        setList([...list])
    }

    // Remove Item function 
    const removeItem =(index)=>{
        // alert(index)
        list.splice(index, 1 ) // Here 1 holo 1 delete kota 
        setList([...list])
    }

    return (
        <div>
            {/* <p>{list.length}</p> */}

            <ul>
                {
                    list.length!==0?(
                        list.map((element, index)=>{
                            return(
                                <li>{element} <button onClick={()=>{removeItem(index)}}>Remove</button> </li> 
                            )
                        })
                    ):(<li>No Data</li>)
                }
            </ul>

            <input onChange={(e)=>setItem(e.target.value)} type="text" placeholder="item" />
            <button onClick={addToList}>Add</button>
        </div>
    );
};

export default UseStateImmutableArray;