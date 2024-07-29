import React from 'react';

const UserCard = ({ 
  image, 
  healthId, 
  name, 
  gender, 
  email, 
  age, 
  mobileNumber, 
  address, 
  validityDate,
  city,pincode 
}) => {
  return (
    <div className='w-full min-h-screen flex flex-col gap-4 p-4'>
    <div className='flex lg:flex-row flex-col w-full lg:w-1/2 border-2 border-gray-200 p-5 lg:items-start items-center justify-center lg:justify-around light-green rounded-md'>
        <div className='flex flex-col items-center'>
            <div className='h-[220px] w-[230px] rounded-lg border profile' style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className='font-bold pt-3 text-blue-900 text-lg'>{healthId}</div>
        </div>
    
        <div className='flex flex-col gap-3 w-2/3 md:p-3 pt-6 pl-5 md:pl-8'>
            <div className=''><span className='font-semibold'>Name : </span>{name}</div>
            <div className=''><span className='font-semibold'>Gender : </span>{gender}, {age}</div>
            <div className=''><span className='font-semibold'>Number : </span>{mobileNumber}</div>
            <div className=''><span className='font-semibold'>Email : </span>{email}</div>
            <div className=''><span className='font-semibold'>Address : </span>{address}, {city}, {pincode}</div>
            <div className=''><span className='font-semibold'>Validity till : </span>{validityDate}</div>
        </div>
    </div>
</div>

  );
};

export default UserCard;
