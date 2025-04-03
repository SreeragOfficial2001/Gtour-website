import React from 'react'
import Hero from '../components/Sections/Hero'
import PopularDestinations from '../components/Sections/PopularDestinations'
import BestValueTrips from '../components/Sections/BestValueTrips'
import WhyChooseUs from '../components/Sections/WhyChooseUs'
import ArticleCard from '../components/Sections/ArticleCard'
import tokyoImage from "../assets/tokyo.jpg";
import Paris from "../assets/paris.jpg";
import London from "../assets/london.jpg";
import Seoul from "../assets/seoul1.jpg";



const Home = () => {
   const destinations = [
        { name: "Home", image: tokyoImage },
        { name: "Seoul", image: Seoul },
        { name: "Paris", image: Paris },
        { name: "London", image: London },
      ];
  return (
    <div className='w-full '>
       
       <Hero/>
       <PopularDestinations data={destinations}/>
       <BestValueTrips/>
       <WhyChooseUs/>
       <ArticleCard/>
      
       
   
    </div>
  )
}

export default Home