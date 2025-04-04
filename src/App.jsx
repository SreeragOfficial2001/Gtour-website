import React from 'react'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Sections/NavBar'
import Footer from './components/Sections/Footer'
import AboutUs from './Pages/AboutUs'
import Packages from './Pages/Packages'
import Blog from './Pages/Blog'
import ContactUs from './Pages/ContactUs'


const App = () => {
  return (
    <>
   <div>
     <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/destinations" element={<Destination/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/packages" element={<Packages/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
    </Routes>
   </div>
   <Footer/>
    </>
   

  
  )
}

export default App