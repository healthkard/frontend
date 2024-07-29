import React from 'react'
import Button from './component/Button'
import UserCard from './component/Usercard';
function App() {
  const userData = {
    image: 'https://via.placeholder.com/150',
    healthId: '123-456-789',
    name: 'John Doe',
    gender: 'Male',
    email: 'john.doe@example.com',
    age: 30,
    mobileNumber: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    validityDate: '12/31/2024',
    city : 'Guntur',
    pincode: '522304'
  };
  const handleClick = () =>{
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

    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <UserCard 
        image={userData.image}
        healthId={userData.healthId}
        name={userData.name}
        gender={userData.gender}
        email={userData.email}
        age={userData.age}
        mobileNumber={userData.mobileNumber}
        address={userData.address}
        validityDate={userData.validityDate}
        city = {userData.city}
        pincode = {userData.pincode}
      />
    </div>
      

    </div>
  )
}

export default App
