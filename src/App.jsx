import React from 'react'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Sections/NavBar'
import Footer from './components/Sections/Footer'


const App = () => {
  return (
    <>
   <div>
     <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/destinations" element={<Destination/>}></Route>
    </Routes>
   </div>
   <Footer/>
    </>
   

  
  )
}

export default App