import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../Context/TodoContext';
import { useSearchContext } from '../Context/SearchContext';

export default function Todos() {
  const { getTodos, Todos } = useContext(TodoContext);
  const { searchQuery } = useSearchContext();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    getTodos();
  }, []);

  // فلترة التودوز
  const filteredTodos = Todos?.filter(todo => {
    if (filter === "Completed") return todo.completed === false;
    if (filter === "Pending") return todo.completed === true;
    return true; // All
  });

  const filteredSearch = filteredTodos?.filter(search =>
    search?.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-4 py-24 sm:px-8 md:px-24 lg:px-24 dark:bg-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Todos</h1>

      {/* الفلتر */}
      <div className="mb-4">
        <label htmlFor="filter" className="block text-sm font-medium text-black mb-1">Show:</label>
        <select
          id="filter"
          className="border border-gray-300 rounded-md bg-transparent p-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option className='dark:bg-gray-800'>All</option>
          <option className='dark:bg-gray-800'>Completed</option>
          <option className='dark:bg-gray-800'>Pending</option>
        </select>
      </div>

      {/* عرض التودوز */}
      <div className="space-y-3 dark:bg-gray-800">
        {filteredSearch?.map((Todo) => (
          <div key={Todo.id} className="flex items-center justify-between bg-transparent p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">
            <label className="flex items-center gap-3">
              {Todo.completed ? (
                <>
                  <input type="checkbox" className="w-5 h-5 text-blue-600 accent-blue-600 rounded border-gray-300 hover:cursor-pointer" />
                  <span className="text-gray-900 hover:text-blue-600 dark:text-white">{Todo.title}</span>
                </>
              ) : (
                <>
                  <input type="checkbox" disabled className="w-5 h-5 accent-red-600 border-red-400 rounded" />
                  <span className="text-gray-900 hover:text-blue-600 dark:bg-gray-800 dark:text-white">{Todo.title}</span>
                  <span className="text-red-600 text-sm">
                    <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </>
              )}
            </label>
            <span className="text-sm text-blue-600 font-medium">{Todo.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
