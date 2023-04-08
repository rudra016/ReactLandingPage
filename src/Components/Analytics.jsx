import React from 'react'
import ill2 from '../assets/ill2.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={ill2} alt="/" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Lorem, ipsum dolor.</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit amet.</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error magni et, asperiores, incidunt laborum sunt ipsum dolore deleniti minima necessitatibus quis nihil dolorem animi non iure voluptatem omnis facere dicta.
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-auto py-3 '> Get Started</button>
        </div>
        </div>
        </div>
  )
}

export default Analytics