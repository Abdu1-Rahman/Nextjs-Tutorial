import React from 'react'
import Button from '../components/Button'

const ServiceHeader = () => {
  return (
    <div className='max-w-7xl mx-auto mt-10 flex flex-col justify-center item-center gap-8 md:p-30'>
        <h2 className='block text-3xl md:text-7xl font-medium w-full text-center'>Lets <span className='text-orange-500'>Begin Our</span><br/>Cooperation Today</h2>
        <h2 className='text-sm justify-center item-center text-center text-gray-500'>Leave your contact and we will offer a customized solution<br/> for your business. No templates - just an effective strategy<br/> tailored to your goals</h2>
        <div className='flex item-center justify-center'><Button content={"Contact us"}/></div>
    </div>
  )
}

export default ServiceHeader