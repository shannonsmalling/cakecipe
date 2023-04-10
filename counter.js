import React, { useState } from 'react';
// import "./counter.css"; 



function Counter() {
// call use state and pass default state to useState function
// useState always returns an array with two values: 
// current state at each iteration of render function (count) and function to update current state (updateCount)
   const [currentCount, updateCount] = useState(10)
    
   // function to decrement count
   function decreaseCount() {
    // function to update previous count with decremented value
    updateCount(previousCount => previousCount -1)
   }
    // function to increment count
    function increaseCount() {
        // function to update previous count with incremented value
        updateCount(previousCount => previousCount +1)
    }
    return(
        <>
        {/* Minus Button*/}
        <button className="counter__button" onClick={decreaseCount}>
            <h2 className='counter__button__text'>-</h2>
            </button>
        {/* current count rendered by useState on counter */}
        <span className='counter__value'>{currentCount}</span>
        
        {/* Plus Button*/}
        <button className="counter__button" onClick={increaseCount}>
            <h2 className='counter__button__text'>+</h2>
            </button>
        </>
    )
}

export default Counter;