import { useEffect, useState } from "react";


const UseEffectApiAsyncAwait = () => {

    let [data, setData]= useState();

    useEffect(()=>{

        (async ()=>{

            const response = await fetch('https://dummyjson.com/products/1');
            const json = await response.json()
            setData(json)
        })()

    }, [])


    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default UseEffectApiAsyncAwait;