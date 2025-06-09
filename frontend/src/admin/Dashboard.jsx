import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../public/logo.webp";
import toast from 'react-hot-toast';
import axios from 'axios';
import { BACKEND_URL } from '../utils/utils';

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/admin/logout`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      localStorage.removeItem("admin");
    } catch (error) {
      console.log("Error in logging out ", error);
      toast.error(error.response?.data?.errors || "Error in logging out");
    }
  };

  return (
    <div className="flex h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-gray-900 to-gray-700 text-white p-6 shadow-lg">
        <div className="flex flex-col items-center mb-10">
          <img src={logo} alt="Profile" className="rounded-full h-24 w-24 shadow-md" />
          <h2 className="text-xl font-bold mt-4 tracking-wide">Admin Panel</h2>
          <p className="text-gray-300 text-sm mt-1">Welcome back!</p>
        </div>

        <nav className="flex flex-col space-y-4">
          <Link to="/admin/our-courses">
            <button className="w-full bg-blue-600 hover:bg-blue-500 transition py-2 px-4 rounded-lg shadow-md">
              📚 Our Courses
            </button>
          </Link>

          <Link to="/admin/create-course">
            <button className="w-full bg-green-600 hover:bg-green-500 transition py-2 px-4 rounded-lg shadow-md">
              ➕ Create Course
            </button>
          </Link>

          <Link to="/">
            <button className="w-full bg-orange-500 hover:bg-orange-400 transition py-2 px-4 rounded-lg shadow-md">
              🏠 Home
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-500 transition py-2 px-4 rounded-lg shadow-md"
          >
            🚪 Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 drop-shadow-lg">
          Welcome to <span className="text-orange-500">CourseHaven Admin</span> Dashboard!
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
