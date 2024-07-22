import React from 'react'
import Button from './component/Button'
import Checkbox from './component/Checkbox'

function App() {
  const handleClick = () =>{
    console.log("click is handled")
  }
  const handleCheckbox = () =>{
    console.log("click is handled")
  }
  return (
    <div>
      This is healthkard application. <br />
      {/* <Button
        color="blue"
        onClick={handleClick}
        label="Click hi Me"   
      /> */}
      <Checkbox 
      label ="Accept Terms and Conditions"
      onChange={handleCheckbox}
      />
    </div>
  )
}

export default App
