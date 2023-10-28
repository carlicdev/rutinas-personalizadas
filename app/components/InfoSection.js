import {BsPuzzle} from 'react-icons/bs';

const InfoSection = () => {
  return (
    <div className='w-full my-[100px]'>
        <div className='max-w-7xl w-full mx-auto'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col lg:pr-10'>
                        <h4 className='font-black text-6xl uppercase mb-5'>What is <span className='text-yellow-400'>unique?</span></h4>
                        <p className='text-gray-700 text-justify mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illum voluptatibus quae deleniti perspiciatis voluptatum, nobis provident! Officia labore atque reprehenderit molestiae asperiores corrupti, dolorem quasi animi cumque, aliquid tempora.</p>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-2 items-center justify-center pr-5'>
                                <p className='font-bold text-3xl'>3,232</p>
                                <p className='font-thin text-sm'>Rutinas</p>
                            </div>
                            <div className='flex flex-col gap-2 items-center justify-center pl-5 border-l-2'>
                                <p className='font-bold text-3xl'>2,136</p>
                                <p className='font-thin text-sm'>Vidas Cambiadas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='relative'>
                        <img src='./blob-haikei.png' alt='blob' className='w-full' />
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap mt-10'>
                <div className='w-full md:w-1/2 lg:w-1/3 pr-5'>
                    <div className='bg-yellow-50 p-5 shadow flex flex-col gap-5 rounded'>
                        <span className='text-4xl text-black'>
                            <BsPuzzle />
                        </span>
                        <h4 className='text-2xl font-black'>Un Titulo</h4>
                        <p className='text-gray-700 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illum voluptatibus quae deleniti perspiciatis voluptatum.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 pr-5'>
                    <div className='bg-yellow-50 p-5 shadow flex flex-col gap-5 rounded'>
                            <span className='text-4xl text-black'>
                                <BsPuzzle />
                            </span>
                            <h4 className='text-2xl font-black'>Un Titulo</h4>
                            <p className='text-gray-700 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illum voluptatibus quae deleniti perspiciatis voluptatum.</p>
                        </div>                    
                    </div>
                <div className='w-full md:w-1/2 lg:w-1/3 pr-5'>
                    <div className='bg-yellow-50 p-5 shadow flex flex-col gap-5 rounded'>
                        <span className='text-4xl text-black'>
                            <BsPuzzle />
                        </span>
                        <h4 className='text-2xl font-black'>Un Titulo</h4>
                        <p className='text-gray-700 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illum voluptatibus quae deleniti perspiciatis voluptatum.</p>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoSection