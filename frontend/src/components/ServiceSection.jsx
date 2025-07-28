import React from 'react'
import Button from '../components/Button'
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "App Promotion", desc: "Is a set of digital marketing strategies and tools...", bg: "bg-white", text: "text-black" },
  { title: "Brand Strategy", desc: "Is a detailed plan for promoting your brand...", bg: "bg-orange-500", text: "text-white" },
  { title: "Media Strategy", desc: "Is a comprehensive action plan to achieve marketing goals...", bg: "bg-white", text: "text-black" },
  { title: "Social Media Marketing", desc: "Full brand support in social media: content, analytics, comments...", bg: "bg-white", text: "text-black" },
  { title: "Communication", desc: "Defines how and through which channels to deliver your message...", bg: "bg-black", text: "text-white" },
  { title: "Ad Accounts Audit", desc: "Comprehensive analysis of campaign settings and budget...", bg: "bg-white", text: "text-black" }
];

const ServiceSection = () => {

  return (
    <div className="max-w-7xl mx-auto p-3 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Section */}
      <div className="md:col-span-1  gap-5 justify-between space-y-6">
        <div className='flex flex-col item-center gap-5'>
          <h1 className="text-3xl md:text-5xl text-center md:text-start mt-3 md:mt-0 font-medium">
            <span className="text-orange-500">Marketing</span> that<br /> simply works
          </h1>
          <p className=" text-gray-600 text-sm md:text-medium text-center md:text-start">
            We drive long-term, predictable growth using tailored<br /> digital marketing tools and strategies.
          </p>
          <div className='flex item-center justify-center'>
          <Button content={"View all services"} /></div>
        </div>
      </div>

      {/* Right Section (Cards) */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {services.map((service, index) => (
          <div key={index} className={`rounded-xl p-6 relative ${service.bg} ${service.text}`}>
            <div className="absolute top-4 right-4 bg-black text-white rounded-full p-2">
              <ArrowUpRight size={18} />
            </div>
            <div className='mt-40'>
              <h3 className="font-bold text-lg mb-2 ">{service.title}</h3>
              <p className="text-xs opacity-80">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSection