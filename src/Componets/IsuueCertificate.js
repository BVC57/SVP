import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import './Issue.css';
import Progressbar from './Prohressbar';

const IsuueCertificate = () => {
    const options = [
        { value: 'Employment', label: 'Employment' },
        { value: 'Eduction', label: 'Eduction' },
      ];
      const options1 = [
        { value: 'Offer Latter', label: 'Offer Latter' },
        { value: 'Reward', label: 'Reward' },
        { value: 'Exit Latter', label: 'Exit Letter' },
        { value: 'Salary Slip', label: 'Salary Slip' },
        { value: 'Degree', label: 'Degree' },
        { value: 'Certificate', label: 'Certificate' },
        { value: 'Mark Sheet', label: 'Mark Sheet' },
        { value: 'Others', label: 'others' },
      ];
    
      const [selectedOption, setSelectedOption] = useState(null);
      const [selectedOption1, setSelectedOption1] = useState(null);
    
      const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log('Category:', selectedOption.value);
      };
      const handleChange1 = (selectedOption1) => {
        setSelectedOption1(selectedOption1);
        console.log('Sub Category:', selectedOption1.value);
      };
const customStyles = {
        // Example styles, you can customize them according to your needs
        control: (provided, state) => ({
          ...provided,
          border: '1px solid silver',
          width:'200px',
          marginleft:'20px',
          boxShadow: state.isFocused ? 'none' : 'none',
        }),
        menu: (provided) => ({
          ...provided,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }),
        option: (provided, state) => ({
          ...provided,
        //   borderbottom: '1px solid #ccc', // Add a border to each option
          color: state.isSelected ? '#2684FF' : 'black', // Change text color when selected
          background: state.isFocused ? '#f0f0f0' : 'white', // Change background color when focused
        }),
        indicatorSeparator: () => ({}), // Remove the default indicator separator
        dropdownIndicator: (provided, state) => ({
          ...provided,
          transition: 'transform 0.3s', // Add a transition for a smooth rotation effect
          transform: state.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)', // Rotate the arrow based on menu state
        }),
      };    
  return (
    <body>
    {/* code for dropdownlist */}
    <div className='cpage'>
        <h3>Issue Certificate</h3>
        <div className='csd'>
        <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Category"
            styles={customStyles}
          />
          <Select
            options={options1}
            value={selectedOption1}
            onChange={handleChange1}
            placeholder="Sub Category"
            styles={customStyles}
          />
        </div>
    </div>
    {/* code for progress bar display */}
    <div className='mipage'>
      <div className='pb'>
        <Progressbar/>
      </div>
      <div className='sc'>

      </div>
    </div>
  </body>
  )
}

export default IsuueCertificate