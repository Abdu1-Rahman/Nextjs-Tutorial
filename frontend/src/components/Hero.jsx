import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { IoArrowUpCircleSharp } from "react-icons/io5";
import Featurecard from '../components/Featurecard'



const Hero = () => {
    return (
        <div className='hero p-3 max-w-7xl mx-auto relative'>
            <div className='hero1 flex gap-7 mb-5'>
                <div className='heading'>
                    <h1 className='text-7xl font-medium flex flex-col'>Affecting advertising <h1>with<span className='text-orange-400'> measurable results</span></h1></h1>
                    <div className='flex gap-3 justify-center'>
                        <Image src="/images/profile1.webp" width={50} height={50} alt="Picture" className='rounded-full object-cover mt-4 w-[50px] h-[50px]' />
                        <Image src="/images/profile1.webp" width={50} height={50} alt="Picture" className='rounded-full object-cover mt-4 w-[50px] h-[50px]' />
                        <Image src="/images/profile1.webp" width={50} height={50} alt="Picture" className='rounded-full object-cover mt-4 w-[50px] h-[50px]' />
                        <h1 className='text-7xl font-semibold font-medium'>in only 7 days</h1>
                    </div>
                </div>
                <div className='flex item-center justify-center gap-20'>
                <div className='flex flex-col justify-center item-center gap-5'>
                    <h4 className='text-gray-500 text-xs font-medium'>We take care of the entire launch - from analytics <h1>to launch. You just get a ready result in 7 days.</h1> </h4>
                    <Button content={'Order a consultation'} />
                </div>
                
        <div className='absolute right-0 z-50 shadow-xl rounded-2xl overflow-hidden w-60 top-5 scale-75'>
      <div className='bg-orange-500 overflow-hidden flex items-ends justify-end p-4 h-50 relative'>
        <Image
          src="/images/lookthat.png"
          width={250}
          height={250}
          alt="Look that"
          className=" w-full h-full object-cover absolute left-10 " 
        />
        <IoArrowUpCircleSharp className="text-4xl text-white rotate-45 top-2" />
      </div>

      {/* Bottom Section: Text */}
      <div className='bg-white px-4 py-2 h-30'>
        <h1 className='font-semibold text-lg mb-2'>Customer Satisfied!</h1>
        <p className='text-gray-500 text-sm'>
          100+ big companies believe in your skills. So what are you waiting for?
        </p>
      </div>
    </div>
                </div>
            </div>
            <div className='banner w-full'>
              <Image src="/images/dna.jpg" width={150} height={150} className='w-full h-100 object-cover rounded-2xl'/>
            </div>
            <Featurecard buttonhref={"/#"} description={"title"} title={"Hai"} learnmore={"/#"}/>
                        <Featurecard buttonhref={"/#"} description={"title"} title={"Hai"} learnmore={"/#"}/>

            <Featurecard buttonhref={"/#"} description={"title"} title={"Hai"} learnmore={"/#"}/>


        </div>
    )
}

export default Hero