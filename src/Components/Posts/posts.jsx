import React, { useContext, useEffect } from 'react'
import { PostsContext } from '../Context/PostsContext';

export default function Posts() {
  let { getPosts, Posts } = useContext(PostsContext);

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen px-4 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 tracking-tight">
          📰 Latest Posts
        </h1>

        <div className="max-w-5xl mx-auto space-y-6">
          {Posts?.map((post) => (
            <div
              key={post.id}
              className="bg-transparent dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 flex flex-col md:flex-row md:items-start gap-6"
            >
              {/* Left: Icon */}
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 text-2xl shadow-inner hover:text-white hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300">
                📝
              </div>

              {/* Center: Content */}
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 dark:text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 110 4m0-4a2 2 0 100 4m-6-4h-1a1 1 0 00-1 1v4m0-4v-1a1 1 0 011-1h1"
                    />
                  </svg>
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed hover:text-gray-800 dark:hover:text-white">
                  {post.body}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9 9 0 1112 21a8.963 8.963 0 01-6.879-3.196z" />
                  </svg>
                  Post ID: {post.id}
                </div>
              </div>

              {/* Right: Button */}
              <div className="mt-4 md:mt-0 md:ml-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-sm hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
