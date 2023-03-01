"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';



export function Carousel() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,     
      autoplaySpeed: 5000,
      cssEase: "linear"
      
    };
    return (
      <Slider {...settings}>
        <div className="relative  border border-gray-200 rounded-md overflow-hidden">
        <Image
      src="https://res.cloudinary.com/dnjadkrvy/image/upload/c_scale,w_700/v1674835457/slot_2_image-51B_r7rtrp.jpg"
      alt="Alt text for the picture"
      width="750"
      height="600"
         />
        </div>
        <div className="relative  border border-gray-200 rounded-md overflow-hidden">
        <video      
      autoPlay
      muted
      loop
      width="700"
      height="300"
      src="https://res.cloudinary.com/dnjadkrvy/video/upload/c_scale,h_620,w_412/v1674920948/122071740_868803004172062_5868572058008806050_n_azew1n.mp4"
    ></video>
        </div>
        <div className="relative  border border-gray-200 rounded-md overflow-hidden">
        <Image
      src="https://res.cloudinary.com/dnjadkrvy/image/upload/c_scale,w_700/v1674835457/slot_2_image-51B_r7rtrp.jpg"
      alt="Alt text for the picture"
      width="750"
      height="600"    
       />
        </div>
        <div className="relative  border border-gray-200 rounded-md overflow-hidden">
        <Image
      src="https://res.cloudinary.com/dnjadkrvy/image/upload/c_scale,w_700/v1674835457/slot_2_image-51B_r7rtrp.jpg"
      alt="Alt text for the picture"
      width="750"
      height="600"    
       />
        </div>
        <div className="relative  border border-gray-200 rounded-md overflow-hidden">
        <Image
      src="https://res.cloudinary.com/dnjadkrvy/image/upload/c_scale,w_700/v1674835457/slot_2_image-51B_r7rtrp.jpg"
      alt="Alt text for the picture"
      width="750"
      height="600"    
       />
        </div>
        <div className="relative  border border-gray-200 rounded-md overflow-hidden">
        <Image
      src="https://res.cloudinary.com/dnjadkrvy/image/upload/c_scale,w_700/v1674835457/slot_2_image-51B_r7rtrp.jpg"
      alt="Alt text for the picture"
      width="750"
      height="600"    
       />
        </div>
      </Slider>
    );
  }