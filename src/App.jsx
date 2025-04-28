import { useState } from 'react'
import './App.css'
import { Home } from './Components/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Notfound from './Components/Notfound/Notfound'
import Posts from './Components/Posts/Posts'
import Albums from './Components/Albums/albums'
import Todos from './Components/Todos/todos'
import Users from './Components/Users/users'
import UserContextProvider, { UserContext } from './Components/Context/UserContext'
import PostsContextProvider, { PostsContext } from './Components/Context/PostsContext'
import AlbumsContextProvider from './Components/Context/AlbumsContect'
import TodoContextProvider from './Components/Context/TodoContext'
import Photos from './Components/photos/photos'
import PhotosContextProvider from './Components/Context/PhotosContect'
import UserDetails from './Components/UserDetails/UserDetails'
import { SearchProvider } from './Components/Context/SearchContext'
import TextSequence from './Components/TextSequence/TextSequence'


let x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'users', element: <Users /> },
      { path: 'posts', element: <Posts /> },
      { path: 'albums', element: <Albums /> },
      { path: 'todos', element: <Todos /> },
      { path: 'photos', element: <Photos /> },
      { path: 'textSequence', element: <TextSequence /> },
      { path: 'UserDetails/:id', element: <UserDetails /> },

      { path: '*', element: <Notfound /> },]
  }
])
// createBrowserRouter([
//   {path:'Home',element:<Home/>},
//   {path:'Perent',element:<Perent/>},
//   {path:'About',element:<About/>},
//   {path:'Contact',element:<Contact/>}
// ])
function App() {
  const [Count, SetCount] = useState(1900);

  return (
    <>  <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">

      <SearchProvider>
        <PhotosContextProvider>
          <TodoContextProvider>
            <AlbumsContextProvider>
              <PostsContextProvider>
                <UserContextProvider>


                  <RouterProvider router={x}></RouterProvider>


                </UserContextProvider>
              </PostsContextProvider>
            </AlbumsContextProvider>
          </TodoContextProvider>
        </PhotosContextProvider>
      </SearchProvider>
    </div>

    </>
  )
}

export default App
