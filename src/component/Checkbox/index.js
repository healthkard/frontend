import React, { useState } from 'react';
import { TiInputCheckedOutline } from 'react-icons/ti';
import { TiInputChecked } from "react-icons/ti";
import { MdRadioButtonChecked } from "react-icons/md";
function Checkbox({ label, onChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange(event);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden"
        id="custom-checkbox"
      />
      <label htmlFor="custom-checkbox" className="flex items-center cursor-pointer">
        <div className={`w-6  h-6 flex items-center justify-center border-2 rounded ${checked ? 'green' : 'border-gray-300'}`}>
          {checked && <MdRadioButtonChecked className="text-white" />}
        </div>
        <span className="ml-2 ">{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
