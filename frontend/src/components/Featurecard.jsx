import React from 'react'
import Link from 'next/link'
import { IoArrowUpCircleSharp } from "react-icons/io5";

const Featurecard = ({title,description,buttonhref,learnmore,className , buttonclassname}) => {
  return (

    <div className={`flex flex-col gap-40 flex-1 p-5 rounded-2xl mt-10 ${className}`}>
        <h1 className='text-xl'>
            {title}
        </h1>
        <div>
            <hr/>
            <div className=''><p>{description}</p></div>
            <div className='flex gap-60'>
            <Link href={buttonhref}><IoArrowUpCircleSharp className={`text-4xl rotate-45 top-2 ${buttonclassname}`} /></Link>
            <Link href={learnmore}><u>Learn more</u></Link></div>
        </div>
    </div>
  )
}

export default Featurecard