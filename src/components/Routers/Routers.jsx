import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../Pages/About'
import CarListing from '../Pages/CarListing'
import CarDetails from '../Pages/CarDetails'
import Blog from '../Pages/Blog'
import BlogDetails from '../Pages/BlogDetails'
import NotFound from '../Pages/NotFound'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routers