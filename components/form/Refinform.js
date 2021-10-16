import React, { useRef } from 'react'

const Refinform = () => {
    const firstName = useRef();
    const lastName = useRef();

    const formHandler = (e) =>{
        e.preventDefault();
        const first = firstName.current.value;  
        const last = lastName.current.value; 
        console.log({
            first,
            last
        })
    }
    console.log("render");

    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="firstName" name="firstname" ref={firstName} /><br/>
                <input type="lastName" name="lastname" ref={lastName} /><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default Refinform;