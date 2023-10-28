import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-black'>
        <div className='max-w-7xl w-full mx-auto py-5 flex'>
            <div className='ml-0 mr-auto'>
                <h4 className='text-4xl text-white font-bold'>Mis<span className='text-yellow-400'>R</span>utinas</h4>
            </div>
            <div className='flex gap-10 mr-0 ml-auto text-white items-center tracking-wider'>
                <p className='text-lg'>Home</p>
                <p className='text-lg'>About us</p>
                <p className='text-lg'>Projects</p>
                <p className='text-lg'>Services</p>
                <button className='bg-yellow-400 px-5 py-2 rounded-full text-black hover:scale-105'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar