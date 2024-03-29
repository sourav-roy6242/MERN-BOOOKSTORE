import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';
import { FaStar } from 'react-icons/fa6';

// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';

import { Avatar } from 'flowbite-react';
import propic from "../assets/banner-books/profile.jpg"

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customer</h2>
        <div>
        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        pagination={true}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide data-history="1" className='shadow-2xl  bg-white py-8 px-4  md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta,
                         libero amet tempora eligendi numquam. Veniam,
                         est! Aliquid nam tempore fugit quaerat sed porro quo, 
                         totam optio dignissimos enim cupiditate?
                    </p>
                    <Avatar
                    alt="avatar of jese"
                    img={propic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide data-history="1" className='shadow-2xl  bg-white py-8 px-4  md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta,
                         libero amet tempora eligendi numquam. Veniam,
                         est! Aliquid nam tempore fugit quaerat sed porro quo, 
                         totam optio dignissimos enim cupiditate?
                    </p>
                    <Avatar
                    alt="avatar of jese"
                    img={propic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide data-history="1" className='shadow-2xl  bg-white py-8 px-4  md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta,
                         libero amet tempora eligendi numquam. Veniam,
                         est! Aliquid nam tempore fugit quaerat sed porro quo, 
                         totam optio dignissimos enim cupiditate?
                    </p>
                    <Avatar
                    alt="avatar of jese"
                    img={propic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide data-history="1" className='shadow-2xl  bg-white py-8 px-4  md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta,
                         libero amet tempora eligendi numquam. Veniam,
                         est! Aliquid nam tempore fugit quaerat sed porro quo, 
                         totam optio dignissimos enim cupiditate?
                    </p>
                    <Avatar
                    alt="avatar of jese"
                    img={propic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide data-history="1" className='shadow-2xl  bg-white py-8 px-4  md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta,
                         libero amet tempora eligendi numquam. Veniam,
                         est! Aliquid nam tempore fugit quaerat sed porro quo, 
                         totam optio dignissimos enim cupiditate?
                    </p>
                    <Avatar
                    alt="avatar of jese"
                    img={propic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide data-history="1" className='shadow-2xl  bg-white py-8 px-4  md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta,
                         libero amet tempora eligendi numquam. Veniam,
                         est! Aliquid nam tempore fugit quaerat sed porro quo, 
                         totam optio dignissimos enim cupiditate?
                    </p>
                    <Avatar
                    alt="avatar of jese"
                    img={propic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    
                </div>
            </div>
        </SwiperSlide>

        
       
      </Swiper>
        </div>
    </div>
  )
}

export default Review