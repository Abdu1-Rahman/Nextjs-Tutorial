import React from 'react'
import Featurecard from '../components/Featurecard'
import { IoArrowUpCircleSharp } from "react-icons/io5";



const Featuresection = () => {
  return (
    <div className='max-w-7xl mx-auto mt-10'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-30'>
            <div className='flex justify-center items-center '><h2 className='text-4xl md:text-6xl font-medium'>Your <span className='text-orange-500'>important goals</span><br/><span className='md:ml-30'>define our strategy</span></h2></div>
            <div>
                <h6 className='text-gray-500 text-sm md:text-md flex item-center justify-center '>No water and no delays. Everything is strictly on time,<br/> with garanteed result and transparant report</h6>
                <div className='flex'>
                  <button className='hidden md:block'><IoArrowUpCircleSharp className={`text-4xl rotate-270 top-2`} /></button>
                  <button className='hidden md:block'><IoArrowUpCircleSharp className={`text-4xl rotate-90 top-2`} /></button>
                </div>
            </div> 
        </div>  
       
        <div className='w-full flex justify-center items-center gap-5 overflow-hidden'>
            <Featurecard buttonclassname={"text-white"} className={"bg-orange-400 text-white"} title={"We Are Trusted By Brands"} description={"Over 90% of our clients come back to us with new projects - we work transparently, report accurately, andde ver what we promise"} buttonhref={'/#'} learnmore={'/#'} />
            <Featurecard buttonclassname={"text-black"} className={"bg-white"} title={"We Are Trusted By Brands"} description={"Over 90% of our clients come back to us with new projects - we work transparently, report accurately, andde ver what we promise"} buttonhref={'/#'} learnmore={'/#'} />
            <Featurecard buttonclassname={"text-white"} className={"bg-black text-white"} title={"We Are Trusted By Brands"} description={"Over 90% of our clients come back to us with new projects - we work transparently, report accurately, andde ver what we promise"} buttonhref={'/#'} learnmore={'/#'}/>
            <Featurecard buttonclassname={"text-white"} className={"bg-black text-white"} title={"We Are Trusted By Brands"} description={"Over 90% of our clients come back to us with new projects - we work transparently, report accurately, andde ver what we promise"} buttonhref={'/#'} learnmore={'/#'}/>
        </div>
    </div>
  )
}

export default Featuresection