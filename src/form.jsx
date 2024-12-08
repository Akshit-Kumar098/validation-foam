import React, { useState, useEffect } from 'react';
import './form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameErr] = useState('');
  const [ageError, setAgeErr] = useState('');
  const [emailError, setEmailErr] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const submit = () => {
    let isValid = true;

    if (!name) {
      setNameErr('Please enter the name');
      isValid = false;
    }
    if (!age) {
      setAgeErr('Please enter the age');
      isValid = false;
    }
    if (!email) {
      setEmailErr('Please enter the email');
      isValid = false;
    }

    if (isValid) {
      // Append new data to submittedData array
      setSubmittedData((prevData) => [...prevData, { name, age, email }]);

      // Clear fields after submission
      setName('');
      setAge('');
      setEmail('');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNameErr('');
      setAgeErr('');
      setEmailErr('');
    }, 7000);

    return () => clearTimeout(timer);
  }, [nameError, ageError, emailError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <>
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h1>Validation Form</h1>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            placeholder='Enter full name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>{nameError}</p>
        </div>
        <div className='field'>
          <label>Age</label>
          <input
            type='text'
            placeholder='Enter age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <p>{ageError}</p>
        </div>
        <div className='field'>
          <label>E-mail</label>
          <input
            type='email'
            placeholder='Enter e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{emailError}</p>
        </div>
        <button type='submit'>Submit</button>
      </form>

     
    </div>
    <div className='cards'>
        {submittedData.map((data, index) => (
          <div className='card' key={index}>
            <h2>Submitted Data {index + 1}</h2>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Age:</strong> {data.age}</p>
            <p><strong>Email:</strong> {data.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;