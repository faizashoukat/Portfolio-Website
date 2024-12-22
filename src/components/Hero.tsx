import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-cover bg-[#dbd9ba]'
    style={{backgroundSize :"30%" , backgroundPosition:"left 120px top 170px"}} >
      
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div>
          <p className='text-[40px] sm:text-[80px] font-bold leading-tight flex justify-center items-center mr-20 mt-40'data-aos="zoom-in-up">I'm Faiza Shoukat </p>
          <p className='text-[10px] sm:text-[30px] font-bold leading-tight flex justify-center items-center mt-20 mr-20' data-aos="zoom-in-up"> Web Developer From Pakistan </p>
        </div>
        </div>
      </div>
    
  )
}

export default Hero
