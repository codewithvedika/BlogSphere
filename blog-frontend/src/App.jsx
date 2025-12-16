import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import Addblog from './screens/Addblog'
import Updateblog from './screens/Updateblog'
import Home from './screens/Home'
import Blogs from './screens/Blogs'
import Blog from './screens/Blog'
import About from './screens/About'
import Service from './screens/Service'
import Login from './screens/Login'
import Register from './screens/Register'
import Protectedroute from './component/Protectedroute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Blog-Frontend/'>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blogs' element={<Service />} />
          <Route path='read-blog' element={<Blog />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          <Route path='' element={<Protectedroute />}>
            <Route path='add-blog' element={<Addblog />} />
            <Route path='update-blog' element={<Updateblog />} />
            <Route path='my-blogs' element={<Blogs />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
