import React from 'react'

function Button({ color, onClick, label, width='10%'  }) {
    
  const baseClasses = 'px-4 py-2 font-semibold rounded-md shadow-md';
  return (
    
      <button

        onClick={onClick}
        style={{width}}
        className={`${color} ${baseClasses}`}
      
      >{label}</button>
    
  )
}

export default Button
