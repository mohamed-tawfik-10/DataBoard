import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import { useSearchContext } from '../Context/SearchContext';
import { Link } from 'react-router-dom';

export default function Users() {
  const { getUsers, users } = useContext(UserContext);
  const { searchQuery } = useSearchContext();

  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = users?.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="text-4xl font-bold py-20 m-0 text-gray-800 dark:bg-gray-800 dark:text-white">Users</h2>
      <div className="container mx-auto px-4 dark:bg-gray-800 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredUsers?.map((user, index) => (
            <div
              key={user.id}
              className="dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between
                         hover:shadow-lg hover:scale-105 
                         hover:bg-blue-50 dark:hover:bg-gray-700 
                         transition-all duration-300 ease-in-out animate-fadeUp"
              style={{
                '--animation-delay': `${index * 0.2}s`,
              }}
            >
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                  <i className="fas fa-user text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">{user.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm hover:text-blue-400 dark:hover:text-blue-300">{user.email}</p>
                  <div className="text-gray-600 dark:text-gray-300 text-xs mt-1 hover:text-blue-500 dark:hover:text-blue-300">
                    10 Posts | 10 Albums | 10
                  </div>
                </div>
              </div>
              <div className="flex sm:mt-auto mt-4 sm:ml-4">
                <Link to={`/UserDetails/${user.id}`} className="w-full sm:w-auto">
                  <button className="bg-gray-100 dark:bg-gray-700 text-sm px-4 py-1 rounded-lg 
                                     hover:bg-gray-200 dark:hover:bg-gray-600 
                                     hover:text-blue-600 dark:hover:text-blue-400 
                                     text-gray-700 dark:text-white w-full sm:w-auto">
                    View
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
