import React from 'react'

function Home() {
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
         <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'> <span>Welcome In My Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>Hello, I'm a</h1>
        <span className='text-red-700 font-bold'>Developer</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio, ipsa est sed et culpa libero maxime nihil repellat tempore dolores nam eligendi eum fuga, quisquam, animi atque ut! Ea.</p>
        </div>
       
        <div className='md:w-1/2'>Rigth</div>
        </div>
    </div>
    </>
  )
}

export default Home