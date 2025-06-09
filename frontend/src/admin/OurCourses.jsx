import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../utils/utils';

const OurCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem('admin'));
  const token = admin?.token;

  if (!token) {
    toast.error('Please login to admin');
    navigate('/admin/login');
  }

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/course/courses`, {
          withCredentials: true,
        });
        setCourses(response.data.courses);
        setLoading(false);
      } catch (error) {
        console.log('error in fetchCourses ', error);
      }
    };
    fetchCourses();
  }, []);

  // Delete course
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4001/api/v1/course/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      const updatedCourses = courses.filter((course) => course._id !== id);
      setCourses(updatedCourses);
    } catch (error) {
      console.log('Error in deleting course ', error);
      toast.error(error.response?.data?.errors || 'Error in deleting course');
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6 sm:p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Our Courses</h1>
        <Link
          className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-md shadow transition"
          to="/admin/dashboard"
        >
          Go to dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image Container */}
            <div className="w-full h-48 bg-white flex items-center justify-center">
              <img
                src={course?.image?.url}
                alt={course.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Course Info */}
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
              <p className="text-gray-600 text-sm">
                {course.description.length > 120
                  ? `${course.description.slice(0, 120)}...`
                  : course.description}
              </p>

              <div className="flex items-center justify-between text-gray-800 font-semibold mt-2">
                <div>
                  ₹{course.price}{' '}
                  <span className="line-through text-gray-400 ml-2">₹300</span>
                </div>
                <div className="text-green-600 text-sm font-medium">10% off</div>
              </div>

              <div className="flex justify-between pt-3">
                <Link
                  to={`/admin/update-course/${course._id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow transition"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCourses;

