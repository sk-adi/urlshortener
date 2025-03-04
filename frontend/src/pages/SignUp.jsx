import React, { useState } from "react";
import { userRegister } from "../api/auth";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [message, Setmessage] = useState();
  const [validCheck, SetvalidCheck] = useState();
  const [user, Setuser] = useState({ name: "", email: "", password: "" });

  const handleOnChange = (e) => {
    Setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnRegister = async (e) => {
    e.preventDefault();
    try {
      if(!(user.name && user.email && user.password)){
        return SetvalidCheck(`Name,Email and Password are required`)
      }
      SetvalidCheck('')
      const data = await userRegister(user);
      Setmessage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="max-w-4xl w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-800 p-10 rounded-xl shadow-lg">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Join Us Today!
            <br />
            <span className="text-blue-400">Create Your Free Account</span>
          </h1>
          <p className="text-gray-300">Sign up now to manage and track your shortened links efficiently.</p>
          <NavLink to="/api/login">
            <p className="text-blue-400 hover:underline">Already have an account? Login here.</p>
          </NavLink>
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-4">
          {message && <p className="text-green-400 font-medium">{message}</p>}
          {validCheck && <p className="text-red-400 font-medium">{validCheck}</p>}
          <form onSubmit={handleOnRegister} className="flex flex-col gap-4">
            <input
              className="border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
              onChange={handleOnChange}
              name="name"
              type="text"
              
              placeholder="Full Name"
            />
            <input
              className="border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
              onChange={handleOnChange}
              name="email"
              type="email"
              
              placeholder="Email"
            />
            <input
              className="border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
              onChange={handleOnChange}
              name="password"
              type="password"
              
              placeholder="Password"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all cursor-pointer">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
