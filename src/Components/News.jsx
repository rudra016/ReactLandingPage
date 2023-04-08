import React from 'react'

const News = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl'>Lorem ipsum dolor sit amet consectetur.
                    </h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                        <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 px-6 my-6 py-3 '>Notify</button>
                    </div>
                    <p>We care about your Privacy and Security. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
                </div>
                
            </div>
    </div>
  )
}

export default News