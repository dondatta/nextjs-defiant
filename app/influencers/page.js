"use client"
import { useSession } from "next-auth/react";
import Image from 'next/image'


import { Card } from "flowbite-react";
function Influ() {
  const { data, status } = useSession()
  console.log(data, status)
  return (
   <section className="overflow-hidden text-gray-700 ">
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/5">
        <div className="w-full p-1 md:p-2">
          <Image width={300} height={500} alt="gallery" className="block object-cover ring-2 hover:ring-4 object-center w-full h-full rounded"
            src="https://res.cloudinary.com/dnjadkrvy/image/upload/v1675052345/20221128_XLcSGKA7JLxle5_M_u74hgy.jpg"/>
            </div>
        <div className="block text-left font-medium">Christopher Michaels</div>    
      </div>
      <div className="flex flex-wrap w-1/5">
        <div className="w-full p-1 md:p-2">
          <Image width={300} height={500} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dnjadkrvy/image/upload/v1675052345/20221128_XLcSGKA7JLxle5_M_u74hgy.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/5">
        <div className="w-full p-1 md:p-2">
          <Image width={300} height={500} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dnjadkrvy/image/upload/v1675052345/20221128_XLcSGKA7JLxle5_M_u74hgy.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/5">
        <div className="w-full p-1 md:p-2">
          <Image width={300} height={500} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dnjadkrvy/image/upload/v1675052345/20221128_XLcSGKA7JLxle5_M_u74hgy.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/5">
        <div className="w-full p-1 md:p-2">
          <Image width={300} height={500} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dnjadkrvy/image/upload/v1675052345/20221128_XLcSGKA7JLxle5_M_u74hgy.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/5">
        <div className="w-full p-1 md:p-2">
          <Image width={300} height={500} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dnjadkrvy/image/upload/v1675052345/20221128_XLcSGKA7JLxle5_M_u74hgy.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
export default Influ;

