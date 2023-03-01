import React from 'react'
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                   <FaInstagram size={60} />
                <p className='text-2xl font-bold'>97K</p>
                <p className='text-gray-600'>IG Followers</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                   <FaYoutube size={60} />
                <p className='text-2xl font-bold'>1.4M </p>
                <p className='text-gray-600'>Youtube Subscribers</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+11%</span>
            </p>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                  <FaTiktok size={60} />
                <p className='text-2xl font-bold'>11,437K </p>
                <p className='text-gray-600'>Tik Tok Followers</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+17%</span>
            </p>
        </div>
    </div>
  )
}

export default TopCards