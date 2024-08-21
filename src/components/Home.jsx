import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
const banners = [
    {
      id: 1,
      image: 'https://xshrutix.github.io/images/banner.jpg',
      title: 'Banner 1',
      description: 'This is the first banner',
    },
    {
      id: 2,
      image: 'https://xshrutix.github.io/images/banner.jpg',
      title: 'Banner 2',
      description: 'This is the second banner',
    },
    {
      id: 3,
      image: 'https://xshrutix.github.io/images/banner.jpg',
      title: 'Banner 3',
      description: 'This is the third banner',
    },
  ];

const Home = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
      }, 3000); // Change banner every 3 seconds
      return () => clearInterval(interval);
    }, []);
  
  return (
   <>
    <div className="relative w-full h-96">
    <AnimatePresence>
      <motion.div
        key={banners[current].id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <img
          src={banners[current].image}
          alt={banners[current].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-2xl text-white">{banners[current].title}</h2>
          <p className="text-white">{banners[current].description}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
  <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-[#f06e11] uppercase">
            What We Do
          </h2>
          <p className="mt-2 text-xl leading-8 font-bold tracking-tight text-[#173664] sm:text-xl">
          We're helping those who can't help themselves.
          </p>
          <p className="mt-4 max-w-4xl text-md text-gray-500 lg:mx-auto">
          Feral animals are ubiquitous and somewhat helpless and feeble, and whether we're enlightened or not, play a humongous role is one's life and in environment as a whole. Once a legand said- "The greatness of a nation can be judged by the way its animals are treated."
God has made us human,"The most intelligent and capable creature of earth",so it's our duty to serve the needy ones with our kindness. And this is what we are doing through our organisation.
<br />
<br />
This is where our love for less fortunate feral animals comes into picture, We as an organization provide these animals with a gift of life. We try to enrich their lives as humanely possible.


          </p>
        </div>

      
      </div>
    </div>
   </>
  )
}

export default Home