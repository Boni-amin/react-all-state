import { useState } from "react";


const UseStateManagingForm  = () => {
    let [FormObj, SetFormObj]=useState({
        fName: "",
        lName: "",
        city: "",
        gender: ""
    });

const InputOnChange =(proparty, value)=>{
    SetFormObj(
        prevObj=>({
            ...prevObj,
            [proparty]:value
        })
    )
};

//submit
const formSubmit=(e)=>{
    e.preventDefault()
    console.log(FormObj);

    alert(JSON.stringify(FormObj))
}

    return (
        <div className="container border">
            <form onClick={()=>formSubmit()}>
                <input onChange={(e)=>{InputOnChange("fName", e.target.value)}} value={FormObj.fName} placeholder="Frist Name" type="text"></input>
                <input onChange={(e)=>{InputOnChange("lName", e.target.value)}} value={FormObj.lName} placeholder="Last Name" type="text"></input>

                <select onChange={(e)=>{InputOnChange("city", e.target.value)}} value={FormObj.city}>
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Dhaka">Sylhet</option>
                </select>

                <br></br>

                <input onChange={()=>{InputOnChange("gender", "Male")}} checked={FormObj.gender=="Male"} type="radio" name="gender" /> <span>Male</span> <span></span>
                <input onChange={()=>{InputOnChange("gender", "Female")}} checked={FormObj.gender=="Female"} type="radio" name="gender" /> <span>Female</span>
                <br />
                <button onClick={formSubmit} type="submit">Submit</button>

            </form>
        </div>
    );
};

export default UseStateManagingForm ;