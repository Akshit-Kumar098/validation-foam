import React, { useEffect } from 'react';
import "./form.css";
import { useState } from 'react';


const Form = () => {
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  const[email,setEmail]=useState("")
  const[nameError,setNameErr]=useState("")
  const[ageError,setAgeErr]=useState("")
  const[emailError,setEmailErr]=useState("")
  const submit=()=>{
    if(!name){
      setNameErr("Please enter the name")
    }
    if(!age){
      setAgeErr("Please enter the age")
    }
    if(!email){
      setEmailErr("Please enter the email")
    }

  }
  useEffect(
    ()=>{
      setTimeout(() => {
        setNameErr('');
        setAgeErr('');
        setEmailErr('');
        
      }, [7000]);
    },[nameError,ageError,emailError]
  )

  function handleSubmit(e){
    console.log(name,age,email)
    e.preventDefault()
  }
  return (
    <div className='form'>
      <h3 style={{color:'black'}}>Name:{name}</h3>
      <h3 style={{color:'black'}}>Age:{age}</h3>
      <h3 style={{color:'black'}}>E-mail: {email}</h3>
      <form onSubmit={handleSubmit}>
      <h1>Validation Form</h1>
      <div className='field'>
        <label>Name</label>
        <input type='text' placeholder='Enter full name' onChange={(e)=>setName(e.target.value)}/>
        <p>{nameError}</p>
      </div>
      <div className='field'>
        <label>Age</label>
        <input type='text' placeholder='Enter age' onChange={(e)=>setAge(e.target.value)}/>
        <p>{ageError}</p>
      </div>
      <div className='field'>
        <label>E-mail</label>
        <input type='email' placeholder='Enter e-mail' onChange={(e)=>setEmail(e.target.value)}/>
        <p>{emailError}</p>
      </div>
      <button type='submit' onClick={()=>submit()}>Submit</button>
      </form>
    </div>
  )
}

export default Form;
