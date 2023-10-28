import React from 'react'

const About = () => {
  return (
    <div className='w-full bg-black py-20'>
        <div className='max-w-7xl mx-auto w-full '>
            <h4 className='text-6xl text-white font-black text-center uppercase'>Cómo empezó <span className='text-yellow-400'>todo?</span></h4>
            <div className='max-w-5xl mx-auto w-full my-10'>
                <p className='text-white text-justify mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illum voluptatibus quae deleniti perspiciatis voluptatum, nobis provident! Officia labore atque reprehenderit molestiae asperiores corrupti, dolorem quasi animi cumque, aliquid tempora.</p>
                <p className='text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illum voluptatibus quae deleniti perspiciatis voluptatum, nobis provident! Officia labore atque reprehenderit molestiae asperiores corrupti, dolorem quasi animi cumque, aliquid tempora.</p>
            </div>
        </div>
            <div className='w-full flex overflow-hidden'>
                <img src='./crunch.jpg' alt='ejercicio' className='w-[330px] h-[220px]' />
                <img src='./manplank.jpg' alt='ejercicio' className='w-[330px] h-[220px]' />
                <img src='./bothplank.jpg' alt='ejercicio' className='w-[330px] h-[220px]' />
                <img src='./plank.jpg' alt='ejercicio' className='w-[330px] h-[220px]' />
                <img src='./fitness1.jpg' alt='ejercicio' className='w-[330px] h-[220px]' />
                <img src='./fitness-3502830_1280.jpg' alt='ejercicio' className='w-[330px] h-[220px]' />
                <img src='./fitness-3502830_1280.jpg' alt='ejercicio' className='w-[330px] h-[220px]' />
            </div>
    </div>
  )
}

export default About