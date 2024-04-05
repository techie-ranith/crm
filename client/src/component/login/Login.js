'use client'
import React, { useState } from 'react';
import img2 from './2.png';
import img3 from './3.png';
import img1 from './1.png';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const loginData = {
        username: username,
        password: password
      };
  
      try {
        const response = await fetch('api/userAuth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        const data = await response.json();
        if (data.success) {
          alert(data.message); // Display success message
          window.location.href = 'http://localhost:3000/adduser'; // Redirect user on success
        } else {
          setErrorMessage(data.message); // Set error message
        }
      } catch (error) {
        console.error('Login error:', error.message);
        setErrorMessage('Something went wrong. Please try again later.');
      }
    };
  
  return (
    <div className='flex '>
      {/* Background images */}
      <div className="relative h-screen">
        <img src={img2} alt="" className="absolute z-30 w-full h-full" />
        <img src={img3} alt="" className="relative z-40 w-full h-full -ml-8" />
      </div>

      {/* Login form */}
      <div className="flex flex-col items-center justify-center p-4 ml-80">
        <img className="w-40 h-32" src={img1} alt="" />
        <button className="h-16 my-4 font-semibold text-white bg-teal-800 w-96 rounded-3xl focus:outline-none hover:bg-teal-600">
             Login
        </button>

        <form className="w-full mt-16 space-y-4">
        <div className="relative">
            <input
                type="text"
                placeholder="Username"
                className="block w-full h-16 p-2 pl-10 mb-8 text-xl font-bold placeholder-black placeholder-opacity-50 border-none rounded-xl bg-gradient-to-r from-teal-400 to-gray-200"
            />
            <FaUser className="absolute mt-2 text-gray-400 left-3 top-4" />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="block w-full h-16 p-2 pl-10 mb-8 text-xl font-bold placeholder-black placeholder-opacity-50 border-none rounded-xl bg-gradient-to-r from-teal-400 to-gray-200"
          />
          <RiLockPasswordFill className="absolute mt-2 text-gray-400 left-3 top-4" />
        </div>

          {/* Remember Me and Forgot Password */}
          <div className='flex items-center'>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mr-2 form-checkbox" />
              <span>Remember Me</span>
            </label>

            <label className="flex ml-auto cursor-pointer hover:text-blue ">
              <span>Forgot Password</span>
            </label>
          </div>

          {/* Log in button */}
          <div className="flex items-center justify-center">
            <button className="p-2 mt-4 bg-teal-800 border border-gray-300 hover:bg-teal-600 hover:text-black w-36 h-14 rounded-xl">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
