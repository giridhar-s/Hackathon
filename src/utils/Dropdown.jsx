import PropTypes from "prop-types";
import { useState } from "react";

const STATUS_OPTIONS = ["All", "Active", "Upcoming", "Past"];
const LEVEL_OPTIONS = ["Easy", "Medium", "Hard"];

const Dropdown = ({ onFilterChange }) => {
 const [isOpen, setIsOpen] = useState(false);
 const [selectedOptions, setSelectedOptions] = useState([]);

 const toggleDropdown = () => {
  setIsOpen((prevIsOpen) => !prevIsOpen);
 };

 const handleCheckboxChange = (event) => {
  const { value, checked } = event.target;
  const newSelectedOptions = checked
   ? [...selectedOptions, value]
   : selectedOptions.filter((option) => option !== value);

  setSelectedOptions(newSelectedOptions);
  onFilterChange(newSelectedOptions);
 };

 return (
  <div className="relative w-[16vw]">
   <button
    type="button"
    onClick={toggleDropdown}
    className="bg-white py-3 px-4 rounded-lg text-[#666666] w-full border border-gray-300">
    Filter
   </button>
   {isOpen && (
    <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-h-[300px] overflow-y-auto">
     <div className="p-4">
      <p className="text-[#666666] text-md my-2">Status</p>
      {STATUS_OPTIONS.map((option) => (
       <label key={option} className="block mb-2">
        <input
         type="checkbox"
         value={option}
         checked={selectedOptions.includes(option)}
         onChange={handleCheckboxChange}
         className="mr-2 text-[#858585]"
        />
        {option}
       </label>
      ))}
      <p className="text-[#666666] text-md my-2">Level</p>
      {LEVEL_OPTIONS.map((option) => (
       <label key={option} className="block mb-2">
        <input
         type="checkbox"
         value={option}
         checked={selectedOptions.includes(option)}
         onChange={handleCheckboxChange}
         className="mr-2 text-[#858585]"
        />
        {option}
       </label>
      ))}
     </div>
    </div>
   )}
  </div>
 );
};

Dropdown.propTypes = {
 onFilterChange: PropTypes.func.isRequired,
};

export default Dropdown;
