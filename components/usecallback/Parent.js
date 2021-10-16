import React, { useState, useCallback } from 'react'
import Increment from './Increment';
import Decrement from './Decrement';

const Parent = () => {
    const [count, setCount] = useState(0);
    const [firstName, setFirstName] = useState("");

    const incHandler = useCallback(() => {
        setCount(preCnt => preCnt + 1)
    }, [])
    const decHandler = useCallback(() => {
        setCount(preCnt => preCnt - 1)
    }, [])

    return (
        <div>
            <h2>Count : {count}</h2>
            <input 
                type="text" 
                name="firstName" 
                value={firstName} 
                onChange={e => setFirstName(e.target.value)} />
            <Increment incHandler={incHandler} />
            <Decrement decHandler={decHandler} />
        </div>
    )
}
export default Parent;