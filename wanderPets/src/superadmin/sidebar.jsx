import React from "react";
import logo from "./../assets/images/logoWhite.png"


const Sidebar = () => {
  const sections = [
    "Dashboard",
    "Inquiry",
    "Missing",
    "Wandering",
    "Found",
    "Adoption",
    "Adoption Application",
    "Rescue",
    "History",
    "Profile",
    "Log Out",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-green-500 to-green-700 text-white p-6 flex flex-col items-center">
        <img
          src={logo}
          alt="WanderPets Logo"
          className="w-20 h-20 rounded-full mb-4"
        />
        <h2 className="text-2xl mb-6">WanderPets</h2>
        <ul className="space-y-4 w-full">
          {sections.map((section, index) => (
            <li
              key={index}
              className="hover:bg-green-400 px-4 py-2 rounded cursor-pointer"
            >
              {section}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content dito pwede lagay iba pang component para ung superadmin may parang eto na buong file.*/}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome to WanderPets</h1>
        <p className="mt-4 text-gray-600">
          Select a section from the sidebar to begin navigating through the platform.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
