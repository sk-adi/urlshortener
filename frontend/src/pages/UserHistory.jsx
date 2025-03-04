import React from 'react'

function UserHistory() {
    const demoRoutes = [
        { path: "/dashboard", time: "Today, 10:30 AM" },
        { path: "/profile", time: "Yesterday, 6:45 PM" },
        { path: "/settings", time: "2 days ago, 1:15 PM" },
        { path: "/support", time: "Last week, 4:20 PM" },
    ];

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
            <div className="max-w-4xl w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Section */}
                <div className="md:w-1/2 space-y-6 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Your Browsing History
                        <br />
                        <span className="text-blue-400">Track Visited Routes.</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Keep a record of your past navigation and revisit important pages easily.
                    </p>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col gap-4">
                    <div className="border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-white placeholder-gray-400 h-60 overflow-auto">
                        {demoRoutes.length > 0 ? (
                            demoRoutes.map((route, index) => (
                                <div key={index} className="py-2 px-4 border-b border-gray-700 last:border-none">
                                    <p className="text-blue-400 font-medium">{route.path}</p>
                                    <p className="text-gray-500 text-sm">{route.time}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400">Your recently visited routes will appear here...</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}


export default UserHistory