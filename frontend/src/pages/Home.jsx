import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { shortCode } from "../utils/shortCode";
import { Copy } from "lucide-react"; // Clipboard Icon

function Home() {
    const [url, Seturl] = useState("");
    const [code, Setcode] = useState("");
    const [success, Setsuccess] = useState("");

    const handleOnChange = (e) => {
        Seturl(e.target.value);
    };

    const handleOnClick = async (e) => {
        e.preventDefault();
        try {
            const data = await shortCode(url);
            if (data.theCode) {
                Setcode(`https://url-one-flax.vercel.app/${data.theCode}`);
                Setsuccess("Link shortened successfully!");
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    const handleToCopy = () => {
        const outputArea = document.getElementById("outputArea");
        outputArea.select();
        navigator.clipboard.writeText(outputArea.value);
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
            <div className="max-w-4xl w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* Left Section */}
                <div className="md:w-1/2 space-y-6 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Simplify Your Links!
                        <br />
                        <span className="text-blue-400">Shorten URLs Instantly.</span>
                    </h1>
                    <NavLink to="register">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all">
                            Get Started
                        </button>
                    </NavLink>
                </div>
                
                {/* Right Section */}
                <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col gap-4">
                    
                    {/* Input Field */}
                    <input
                        className="border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                        type="text"
                        placeholder="Enter long link here..."
                        onChange={handleOnChange}
                    />
                    
                    {/* Shortened Link Output */}
                    <div className="relative">
                        <input
                            className="border border-gray-700 rounded-lg px-4 py-3 bg-gray-700 text-gray-300 w-full pr-12"
                            type="text"
                            placeholder="Shortened link will appear here..."
                            readOnly
                            value={code}
                            id="outputArea"
                        />
                        {/* Copy Button */}
                        {code && (
                            <button 
                                className="absolute right-3 top-2.5 text-gray-300 hover:text-white transition-all"
                                onClick={handleToCopy}
                            >
                                <Copy size={22} />
                            </button>
                        )}
                    </div>
                    
                    {/* Shorten Button */}
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all shadow-md"
                        onClick={handleOnClick}
                    >
                        Shorten URL
                    </button>

                    {/* Success Message */}
                    {success && <p className="text-green-400 font-medium">{success}</p>}
                </div>
            </div>
        </div>
    );
}

export default Home;
