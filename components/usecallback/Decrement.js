import React from 'react'

const Decrement = ({ decHandler }) => {
    console.log('DECREMENT COMPONENT RENDER')
    return (
        <button onClick={e => decHandler()}>Decrement</button>
    )
}
export default React.memo(Decrement)