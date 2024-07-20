import React from 'react'
import Button from './component/Button'

function App() {
  const handleClick = () =>{
    console.log("click is handled")
  }
  return (
    <div>
      This is healthkard application. <br />
      <Button
        color="blue"
        onClick={handleClick}
        label="Click hi Me"
        
      />
    </div>
  )
}

export default App
