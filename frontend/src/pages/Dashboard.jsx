import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogOut } from "../api/auth";
import { shortCode } from "../utils/shortCode";

function Dashboard() {
  const navigate = useNavigate();


  //generate and save shortcode

  const [url, Seturl] = useState("")
  const [code, Setcode] = useState("")
  const [success, Setsuccess] = useState()

  const handleOnChange = (e) => {
    Seturl(e.target.value)
  }

  const handleToShort = async (e) => {
    e.preventDefault()


    try {
      const data = await shortCode(url)
      if (data.theCode) {
        Setcode(`http://localhost:5173/${data.theCode}`)
        Setsuccess(`Link Shorted Successfully`)
      }
      else {
        Setsuccess(`Something went wrong ! Please refresh the page`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  //logout user
  const handleOnClick = async (e) => {
    e.preventDefault();

    try {
      const data = await userLogOut();
      console.log(data.message);
      if (data.message) {
        navigate("/login");
      } else {
        alert(data);
      }
    } catch (error) {
      console.log(`Error in dashboard logout ${error}`);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-r from-yellow-400 to-orange-500 p-10">
      {/* Dashboard Container */}
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Shorten Your URL
        </h2>

        {/* URL Input Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="text"
            onChange={handleOnChange}
            placeholder="Enter your long URL"
          />
          <input
            className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-gray-100"
            type="text"
            readOnly
            value={code}
            placeholder="Shortened URL will appear here"
          />
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-all cursor-pointer" onClick={handleToShort}>
            Shorten URL
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all cursor-pointer"
            onClick={handleOnClick}
          >
            Log Out
          </button>
        </div>
        <div>
          <p>{success}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
