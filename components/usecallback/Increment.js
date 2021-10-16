import React from 'react'
const Increment = ({ incHandler }) => {
    console.log('INCREMENT COMPONENT RENDER')
    return (
        <button onClick={e => incHandler()}>Increment</button>
    )
}

export default React.memo(Increment)