import React from 'react'
import Rome from "../assets/rome.jpg";
import SocialMedia from '../components/Sections/SocialMedia';
import ContactForm from '../components/Sections/ContactForm';


const ContactUs = () => {
  return (
    <div>
         <div className="relative">
                <img
                  src={Rome}
                  alt="Destination Banner"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
                  <p className="text-lg">This is sample of page tagline and you can set it up using page option</p>
                </div>
              </div>
        <SocialMedia/>
        <ContactForm/>
    </div>
  )
}

export default ContactUs