import React, { useRef } from 'react'
import Card from './landinpagecomponents/Card'
import profile from '../assets/landingpage/user.svg'
import analyze from '../assets/landingpage/analyze.svg'
import search from '../assets/landingpage/search.svg'
import Popularrepos from './landinpagecomponents/Popularrepos'
const Landingpage = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
    <section className='home1'>
      <div>
    <h1 className='home1-h1'>Explore Any GitHub Profile With Ease</h1>
      </div>
      <div>
    <p className='home1-p'>Unlock comprehensive insights into Github profiles, repositories, and activity.</p>
      </div>
      <div>
    <form onSubmit={(e)=>e.preventDefault()} className='font-white flex flex-col md:flex-row md:mt-2 mt-4 gap-5'>
        <input type="text" ref={inputRef} placeholder='Enter GitHub Username' className='p-2 md:px-3 border-blue-500 border-1 rounded'/>
        <button onClick={focusInput} className="font-bold p-1 border border-transparent hover:border-blue-500 transition duration-200 px-4 py-2" type='submit'>View Profile</button>
    </form>
      </div>
    </section>
    <section className='home2 min-h-[calc(100vh)]'>
      <h1 className='home2-h1  md:text-3xl md:font-bolder md:m-4'>How It Works</h1>
      <div className='flex flex-col gap-4 lg:flex-row'>
        <Card img={profile} heading={"Enter Username"} para={"Simply type GitHub username you wish to explore into the search box."}></Card>
        <Card img={search} heading={"View Profile"} para={"Instantly see a comprehensive overview of the Github profile, including bio and statistics"}></Card>
        <Card img={analyze} heading={"Analyze Data"} para={"Dive deep into repositories and interactive charts for detailed insights.."}></Card>
    </div>
    </section>
    <section className='min-h-[calc(100vh)] flex  justify-center items-center text-center '>
          <div className='flex flex-col gap-5 overflow-y-hidden p-2  '>
            <h1 className='text-lg font-bold md:text-3xl md:font-bolder md:m-4 '>Popular Repositories</h1>
            <Popularrepos></Popularrepos>
          </div>
    </section>
    </>
  )
}

export default Landingpage
