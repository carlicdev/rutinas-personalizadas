import React from 'react'
import { BsTiktok } from 'react-icons/bs'

const ServicesSection = () => {
  return (
    <div className='w-full my-[100px]'>
        <div className='max-w-7xl w-full mx-auto flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col lg:pr-10'>
                    <h4 className='font-black text-6xl uppercase mb-5'>What we <span className='text-yellow-400'>do?</span></h4>
                    <p className='text-gray-700'>We help podcasts owners with less than 50k subscribers scale their audience.</p>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col gap-7'>
                    <div className='flex gap-7'>
                        <div>
                            <div className='bg-yellow-400 p-5 rounded-lg shadow-lg text-black'>
                                <span className='text-4xl'><BsTiktok /></span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-black text-2xl'>TikTok</h4>
                            <p className='text-gray-700'>We help podcasts owners with less than 50k subscribers scale their audience.We help podcasts owners with less than 50k subscribers scale their audience.</p>
                        </div>
                    </div>
                    <div className='flex gap-7'>
                        <div>
                            <div className='bg-yellow-400 p-5 rounded-lg shadow-lg text-black'>
                                <span className='text-4xl'><BsTiktok /></span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-black text-2xl'>TikTok</h4>
                            <p className='text-gray-700'>We help podcasts owners with less than 50k subscribers scale their audience.We help podcasts owners with less than 50k subscribers scale their audience.</p>
                        </div>
                    </div>
                    <div className='flex gap-7'>
                        <div>
                            <div className='bg-yellow-400 p-5 rounded-lg shadow-lg text-black'>
                                <span className='text-4xl'><BsTiktok /></span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-black text-2xl'>TikTok</h4>
                            <p className='text-gray-700'>We help podcasts owners with less than 50k subscribers scale their audience.We help podcasts owners with less than 50k subscribers scale their audience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesSection