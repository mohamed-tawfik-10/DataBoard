import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  async function getUserInfo(id) {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUser(response?.data);
    return response.data;
  }

  useEffect(() => {
    getUserInfo(id);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 pt-8 pb-10 sm:pt-12 md:pt-16 lg:pt-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-800 shadow-lg rounded-2xl p-10 md:p-14 
                      transition-all duration-300 
                      hover:shadow-2xl hover:scale-[1.02] 
                      hover:bg-blue-50/60 dark:hover:bg-gray-700/70">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 border-b border-gray-300 dark:border-gray-600 pb-4">
          👤 User Details
        </h2>

        {/* User Info */}
        <div className="space-y-3 text-gray-700 dark:text-gray-300 text-lg group">
          <p className="transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-300">
            <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Name:</span> {user?.name}
          </p>
          <p className="transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-300">
            <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Username:</span> {user?.username}
          </p>
          <p className="transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-300">
            <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Email:</span>{" "}
            <a href={`mailto:${user?.email}`} className="text-blue-600 hover:underline dark:text-blue-400">
              {user?.email}
            </a>
          </p>
          <p className="transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-300">
            <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Phone:</span> {user?.phone}
          </p>
          <p className="transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-300">
            <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Website:</span>{" "}
            <a href={`http://${user?.website}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
              {user?.website}
            </a>
          </p>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-600" />

        {/* Address */}
        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-lg group">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">📍 Address</h3>
          <p className="hover:text-blue-700 dark:hover:text-blue-300 transition-all">{user?.address?.street}, {user?.address?.suite}</p>
          <p className="hover:text-blue-700 dark:hover:text-blue-300 transition-all">{user?.address?.city}, {user?.address?.zipcode}</p>
          <p className="hover:text-blue-700 dark:hover:text-blue-300 transition-all">
            <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Geo:</span> {user?.address?.geo?.lat}, {user?.address?.geo?.lng}
          </p>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-600" />

        {/* Company */}
        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-lg group">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">🏢 Company</h3>
          <p className="hover:text-blue-700 dark:hover:text-blue-300 transition-all">
            <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Name:</span> {user?.company?.name}
          </p>
          <p className="hover:text-blue-700 dark:hover:text-blue-300 transition-all">
            <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Catchphrase:</span> {user?.company?.catchPhrase}
          </p>
          <p className="hover:text-blue-700 dark:hover:text-blue-300 transition-all">
            <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">BS:</span> {user?.company?.bs}
          </p>
        </div>
      </div>
    </div>
  );
}
