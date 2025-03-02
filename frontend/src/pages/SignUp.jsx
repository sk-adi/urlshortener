import React, { useState } from "react";
import { userRegister } from "../api/auth";

function SignUp() {
  const [message, Setmessage] = useState();
  const [user, Setuser] = useState({ name: "", email: "", password: "" });

  const handleOnChange = (e) => {
    Setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnRegister = async (e) => {
    e.preventDefault();

    try {
      const data = await userRegister(user);
      Setmessage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-600 p-6">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 bg-white shadow-lg rounded-xl p-10">
        {/* Left Section - Registration Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Create an Account</h2>
          {message && <p className="text-green-600 font-medium">{message}</p>}
          <form
            method="post"
            onSubmit={handleOnRegister}
            className="flex flex-col gap-4"
          >
            <input
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
              name="name"
              type="text"
              required
              placeholder="Full Name"
            />
            <input
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
              name="email"
              type="email"
              required
              placeholder="Email"
            />
            <input
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
              name="password"
              type="password"
              required
              placeholder="Password"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all cursor-pointer">
              Sign Up
            </button>
          </form>
        </div>

        {/* Right Section - Call-to-Action */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Track & Manage Your Short Links
          </h1>
          <p className="text-gray-600 mt-3">
            Register now and start keeping a history of all your shortened URLs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
