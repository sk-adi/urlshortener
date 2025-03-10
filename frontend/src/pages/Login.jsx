import React, { useState } from "react";
import { userLogin } from "../api/auth";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [LoginData, SetLoginData] = useState({ email: "", password: "" });
    const [message, Setmessage] = useState();

    const handleOnChange = (e) => {
        SetLoginData({ ...LoginData, [e.target.name]: e.target.value });
    };

    const handleOnLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await userLogin(LoginData);
            if (data.redirectUrl) {
                localStorage.setItem("token",data.token)
                console.log(data)
                navigate(data.redirectUrl);
            } else {
                Setmessage(data.message);
            }
        } catch (error) {
            console.log(`handleOnLogin Error ! ${error}`);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 bg-gray-800 text-white shadow-lg rounded-xl p-10">
                {/* Left Section - Login Form */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold">Welcome Back!</h2>
                    {message && <p className="text-red-500 font-medium">{message}</p>}
                    <form
                        method="post"
                        onSubmit={handleOnLogin}
                        className="flex flex-col gap-4"
                    >
                        <input
                            className="w-full border border-gray-700 bg-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={handleOnChange}
                            name="email"
                            type="email"
                            required
                            placeholder="Email"
                        />
                        <input
                            className="w-full border border-gray-700 bg-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={handleOnChange}
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                        />
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all cursor-pointer">
                            Login
                        </button>
                    </form>
                    <p>
                        Don't have an account? {' '}
                        <NavLink to="/register" className="text-blue-400 hover:underline">
                            Sign Up
                        </NavLink>
                    </p>
                </div>

                {/* Right Section - Call-to-Action */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-6">
                    <h1 className="text-3xl font-bold">Track & Manage Your Short Links</h1>
                    <p className="text-gray-300 mt-3">
                        Login to access your shortened URLs and analytics.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
