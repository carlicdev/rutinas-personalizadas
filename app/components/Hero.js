import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen h-[700px] w-full bg-cover bg-center bg-opacity-100' style={{backgroundImage: 'url(/fitness-3502830_1280.jpg)', height: '700px'}}>
        <div className='bg-black bg-opacity-50 h-[700px] py-20 flex flex-col items-center justify-start gap-7'>
            <h4 className='text-6xl font-black text-yellow-400 uppercase'>From long-form <span className='text-white'>to short-form</span></h4>
            <p className='text-white text-3xl font-bold'>
                Maximize Your Reach and Engagement with Our Short-Form Content Offer
            </p>
            <div className='flex gap-7 mt-5'>
                <button className='px-5 py-2 bg-yellow-400 text-black rounded-full tracking-wider'>
                    Get Started
                </button>
                <button className='px-5 py-2 bg-black border border-slate-300 text-white rounded-full tracking-wider'>
                    View Our Work
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero