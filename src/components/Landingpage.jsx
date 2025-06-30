import React from 'react'

const Landingpage = () => {
  return (
    <>
    <div className=' min-h-[calc(100vh-4rem)] flex flex-col text-center justify-start items-center gap-2 pt-40'>
      <div>
    <h1 className='sm:font-bold font-medium md:text-6xl md:w-150 sm:w-120 text-4xl w-85 '>Explore Any GitHub Profile With Ease</h1>
      </div>
      <div>
    <p className='md:text-2xl md:w-150  sm:w-120 text-xl w-80'>Unlock comprehensive insights into Github profiles, repositories, and activity.</p>
      </div>
      <div>
    <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Enter GitHub Username' required/>
        <button type='submit'>View Profile</button>
    </form>
      </div>
    </div>
    <div className='min-h-[calc(100vh)]'>
        <h1>How It Works</h1>
        <div></div>
    </div>
    <div className='min-h-[calc(100vh)]'>
        <h1>Popular Repositories</h1>
        <div></div>
    </div>
    </>
  )
}

export default Landingpage
