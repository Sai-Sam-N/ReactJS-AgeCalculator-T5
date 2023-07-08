import React, { useState } from 'react';
import './App.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const currentDate = new Date();
    const inputDate = new Date(birthDate);

    if (inputDate > currentDate) {
      alert('Invalid date of birth');
      return;
    }

    let years = currentDate.getFullYear() - inputDate.getFullYear();
    const months = currentDate.getMonth() - inputDate.getMonth();
    const days = currentDate.getDate() - inputDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
    }

    setAge(years);
  };

  return (
    <div className='AgeCalc'>
      <div className="header">
      <h1>Age Calculator</h1>
      </div>
      <div className="normal">
      <h4>Enter your date of birth:</h4>
      </div>
      <div className="normal">
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      </div>
      <div className="normal">
      <button
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      </div>
      <div className="text">
      {age !== '' && <h1>You are {age} years old</h1>}
      </div>
    </div>
  );
};

export default AgeCalculator;
