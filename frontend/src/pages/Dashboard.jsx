import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogOut } from "../api/auth";
import { shortCode } from "../utils/shortCode";

function Dashboard() {
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState("");

  const handleOnChange = (e) => setUrl(e.target.value);

  const handleToShort = async (e) => {
    e.preventDefault();
    try {
      const data = await shortCode(url);
      if (data.theCode) {
        setCode(`https://url-one-flax.vercel.app/${data.theCode}`);
        setSuccess("Link shortened successfully!");
      } else {
        setSuccess("Something went wrong! Please refresh the page.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  

  //copy the shortened link

  const handleToCopy=()=>{
    const outputArea=document.getElementById("outputArea")
    outputArea.select();
    navigator.clipboard.writeText(outputArea.value)
  }









  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-6">
      <div className="max-w-2xl w-full bg-gray-900 shadow-xl rounded-lg p-8 text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Shorten Your URL</h2>

        <div className="flex flex-col gap-4">
          <input
            className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            onChange={handleOnChange}
            placeholder="Enter your long URL"
          />
          <input
            className="w-full bg-gray-700 border border-gray-600 text-gray-300 px-4 py-3 rounded-lg"
            type="text"
            readOnly
            value={code}
            placeholder="Shortened URL will appear here"
            id="outputArea"
          />
          
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            onClick={handleToShort}
          >
            Shorten URL
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            onClick={handleToCopy}
          >
            Copy
          </button>
        </div>

        {success && <p className="text-green-400 text-center mt-4">{success}</p>}
        <NavLink to="/user/routesHistory">History</NavLink>
      </div>
    </div>
  );
}

export default Dashboard;
