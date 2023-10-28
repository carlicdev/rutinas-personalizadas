import {BsPuzzle} from 'react-icons/bs';

const Process = () => {
  return (
    <div className='w-full bg-black'>
        <div className='max-w-7xl mx-auto w-full py-20'>
            <h4 className='text-6xl text-white font-black text-center uppercase'>The <span className='text-yellow-400'>Process?</span></h4>
            <div className='mt-14 flex flex-wrap'>
                <div className='w-full md:w-1/2 lg:w-1/4 p-5 '>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div className='bg-red-300 text-gray-100 p-4 rounded-full flex items-center justify-center text-5xl'>
                            <BsPuzzle />
                        </div>
                        <h4 className='text-white text-2xl font-black'>Brand Strategy Session</h4>
                        <p className='text-white text-justify'>
                            lorem ipsum forte neglectis marigluxis no metsis narta delicuenciatis hominidus lerom ipsum delicate
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 p-5'>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div className='bg-gray-300 text-gray-800 p-4 rounded-full flex items-center justify-center text-5xl'>
                            <BsPuzzle />
                        </div>
                        <h4 className='text-white text-2xl font-black'>Brand Strategy Session</h4>
                        <p className='text-white text-justify'>
                            lorem ipsum forte neglectis marigluxis no metsis narta delicuenciatis hominidus lerom ipsum delicate
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 p-5'>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div className='bg-red-400 text-gray-100 p-4 rounded-full flex items-center justify-center text-5xl'>
                            <BsPuzzle />
                        </div>
                        <h4 className='text-white text-2xl font-black'>Brand Strategy Session</h4>
                        <p className='text-white text-justify'>
                            lorem ipsum forte neglectis marigluxis no metsis narta delicuenciatis hominidus lerom ipsum delicate
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 p-5'>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div className='bg-yellow-400 text-gray-800 p-4 rounded-full flex items-center justify-center text-5xl'>
                            <BsPuzzle />
                        </div>
                        <h4 className='text-white text-2xl font-black'>Brand Strategy Session</h4>
                        <p className='text-white text-justify'>
                            lorem ipsum forte neglectis marigluxis no metsis narta delicuenciatis hominidus lerom ipsum delicate
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-14'>
                <button className='px-5 py-2 bg-yellow-400 text-black rounded-full tracking-wider hover:scale-105'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Process