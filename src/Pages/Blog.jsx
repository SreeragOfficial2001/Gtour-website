import React from 'react'
import BlogLayout from '../components/Sections/BlogLayout'
import London from "../assets/london.jpg";



const Blog = () => {
  return (
    <div>
     
      <div className="relative">
        <img
          src={London}
          alt="Destination Banner"
          className="w-full h-[400px] object-cover" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold mb-2">LET THE ADVENTURE BEGIN</h1>
          <p className="text-lg">Explore the world with our tailored travel packages and exceptional services</p>
        </div>
      </div>

      <BlogLayout/>
      
      
    </div>
  )
}

export default Blog