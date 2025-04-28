import React, { useContext, useEffect } from 'react';
import { AlbumsContext } from '../Context/AlbumsContect';
import { useSearchContext } from '../Context/SearchContext';
import { Link } from 'react-router-dom';

export default function Albums() {
  const { getAlbums, Albums } = useContext(AlbumsContext);
  const { searchQuery } = useSearchContext();

  useEffect(() => {
    getAlbums();
  }, [getAlbums]);

  // تصفية الألبومات بناءً على البحث
  const filteredAlbums = Albums?.filter(album =>
    album?.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="text-4xl font-bold py-20 m-0 text-gray-800 dark:bg-gray-800 dark:text-white">Albums</h2>
      <div className="container mx-auto px-4 dark:bg-gray-800">
        {filteredAlbums?.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No albums found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredAlbums?.map((album, index) => (
              <div
                key={album.id}
                className="dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col sm:flex-row items-center justify-between 
                           hover:shadow-lg hover:scale-105 
                           hover:bg-blue-50 dark:hover:bg-gray-700 
                           transition-all duration-300 ease-in-out animate-fadeUp"
                style={{
                  '--animation-delay': `${index * 0.2}s`,
                }}
              >
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <div className="w-20 h-20 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-1 text-gray-400 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">{album.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm hover:text-blue-400 dark:hover:text-blue-300">{album.id}</p>
                    <div className="text-gray-600 dark:text-gray-300 text-xs mt-1 hover:text-blue-500 dark:hover:text-blue-300">
                      10 Songs | 10 Tracks | 10
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:self-end w-full sm:w-auto">
                  <Link to={`/AlbumDetails/${album.id}`}>
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
        )}
      </div>
    </>
  );
}
