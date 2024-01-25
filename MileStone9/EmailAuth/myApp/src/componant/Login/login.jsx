import { createUserWithEmailAndPassword,sendPasswordResetEmail  } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/fire.int';
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useRef } from 'react';


const Login = () => {
  const[loginmasse,setloginmasse]= useState('')
  const[loginsucuse,setlognsucuse]= useState('')
  const[passwordShows,setpasswordShows]= useState(false)
  const emailRef = useRef(null)

  const handle = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('Form submitted!',email,password);
    


    // reset error
    setloginmasse('')
    setlognsucuse('')
    


    //cheak password length
    
    if (password.length < 6) {
      setloginmasse('Password should be at least 6 characters');
    }
     else if (!/[a-zA-Z]/.test(password)) {
      setloginmasse('Your password must contain at least one letter.');
      return ;
    }
     else if (!/\d/.test(password)) {
      setloginmasse('Your password must contain at least one digit.');
      return;
    } 
    
    
  
    createUserWithEmailAndPassword(auth,email,password)
    .then((result)=>{
      const user = result.user
      setlognsucuse('Your ACount Is Submiteed')
      console.log(user)
    })
    .catch((error) => {
  
      const errorMessage = error.message;
      setloginmasse(errorMessage)
      console.log(errorMessage)
  
    });
  }

  // rest passwoord
const handlereset = ()=>{
  const email = emailRef.current.value;
  if (!email) {
    setloginmasse('Provide a valid email');
    return;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setloginmasse('Provide a valid email');
    return;
  }


  sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('Password reset email sent. Check your inbox.');
  })
  .catch((error) => {
    setloginmasse(error.message);
  });
}  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">


<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<h2 className='text-3xl'>Login</h2>
<form className="card-body" onSubmit={handle}>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input name="password"
     type={ passwordShows ? 'text' : 'password'}
   
      placeholder="password" 
      className="input input-bordered"
       required
      />

      <span onClick={()=> setpasswordShows(!passwordShows)}>{passwordShows ? <FaEye /> : <IoEyeOff /> }</span>
    <label className="label">
      <a onClick={handlereset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
    </label>
  </div>
  <div className="form-control mt-6">
    <button className="btn btn-primary">Login</button>
  </div>
</form>
{
  loginmasse && <p className='text-red-800'>{loginmasse}</p>
}
{
  loginsucuse && <p className='text-green-800'>{loginsucuse}</p>
}
<p>New to This Website ?  <Link to='/Register'>Please Register</Link> </p>
</div>
</div>
</div>
      
    </div>
  );
};

export default Login;