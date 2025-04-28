import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { PostsContext } from '../Context/PostsContext';
import { TodoContext } from '../Context/TodoContext';
import { PhotosContext } from '../Context/PhotosContect';
import { Link } from 'react-router-dom';

export default function Information() {
  const { getUsers, users } = useContext(UserContext);
  const { getPosts, Posts } = useContext(PostsContext);
  const { getTodos, Todos } = useContext(TodoContext);
  const { getPhotos, Photos } = useContext(PhotosContext);

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    getUsers();
    getPosts();
    getTodos();
    getPhotos();

    const delays = [0, 300, 600, 900];
    delays.forEach((delay, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, delay);
    });
  }, []);

  const cards = [
    {
      to: '/users',
      icon: 'fas fa-user',
      count: users.length,
      label: 'Users',
      hoverBg: 'hover:bg-blue-200 dark:hover:bg-blue-700',
      hoverText: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      to: '/posts',
      icon: 'fas fa-file-alt',
      count: Posts.length,
      label: 'Posts',
      hoverBg: 'hover:bg-green-200 dark:hover:bg-green-700',
      hoverText: 'hover:text-green-600 dark:hover:text-green-400',
    },
    {
      to: '/Todos',
      icon: 'fas fa-check-square',
      count: Todos.length,
      label: 'Todos',
      hoverBg: 'hover:bg-yellow-200 dark:hover:bg-yellow-600',
      hoverText: 'hover:text-yellow-600 dark:hover:text-yellow-400',
    },
    {
      to: '/Photos',
      icon: 'fas fa-image',
      count: Photos.length,
      label: 'Photos',
      hoverBg: 'hover:bg-purple-200 dark:hover:bg-purple-700',
      hoverText: 'hover:text-purple-600 dark:hover:text-purple-400',
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          visibleCards.includes(index) && (
            <Link to={card.to} key={index} className="no-underline">
              <div
                className={` dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-xl shadow flex flex-col items-center transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-110 ${card.hoverBg}`}
              >
                <i className={`${card.icon} text-2xl mb-2 text-gray-600 dark:text-gray-300 ${card.hoverText}`}></i>
                <h2 className={`text-2xl font-bold ${card.hoverText}`}>{card.count}</h2>
                <p className={`text-gray-500 dark:text-gray-300 ${card.hoverText}`}>{card.label}</p>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
}
