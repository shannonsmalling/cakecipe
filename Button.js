//Import useState
import React, { useState } from 'react';
import "./Button.css"; // add import statement to link to css stylesheet file for component

const Button = () => {
  
  // use state
  const [counterValue, setCounterValue] = useState(0);

  // Add onclick function to console log message onClick
  const clicked = () => {
    console.log("You clicked me!")

    //Use states 
    console.log(counterValue)
    setCounterValue(counterValue + 1)
  }

  return (
    // Add onClick event attribute to call onclick function 'clicked'
    <button className="button" type="button" onClick={clicked}>
      <h2 className='button__text'>

        {/* Add state to button text: display counterValue that increments on click */}
        {counterValue}
      </h2>
    </button>
  );
}

export default Button;