import React from 'react'
import friendifyLogo from '../../assets/logo/Friendify-media-logo.jpg'
import { homeData } from '../../data/phase1st/homeData'
import { NavLink } from 'react-router-dom'
import { BiArrowFromLeft } from 'react-icons/bi'
function HomePage() {
  return (
    <div className='flex flex-row relative h-[90%] w-screen z-0 overflow-y-hidden'>
      <div className='flex absolute rotate-45 h-full bg-green-500  w-[150%]  '></div>
      <div className='flex absolute rotate-45 h-[157%] bg-emerald-500  w-[100%] 
      translate-x-[-10rem] '></div>
      <div className='flex absolute rotate-45 h-[157%] bg-teal-500  w-[100%] translate-x-[-20rem] '></div>
      <section className="text-gray-600 body-font z-10">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center opacity-50 rounded-full" alt="hero" src={friendifyLogo} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        {homeData[0].title} 
      </h1>
      <p className="mb-8 leading-relaxed hidden md:inline-block">{homeData[0].description}</p>
      <div className="flex justify-center">
        <NavLink to={'/signup'}>
        <button className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg gap-4 hover:font-semibold min-w-fit"><span>Get Started</span> 
        <span className='flex translate-y-1 justify-center hover:delay-100]'><BiArrowFromLeft/></span></button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
        </NavLink>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default HomePage
