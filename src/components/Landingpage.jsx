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
    <section className='home-page1'>
      <div>
    <h1>Explore Any GitHub Profile With Ease</h1>
      </div>
      <div>
    <p>Unlock comprehensive insights into Github profiles, repositories, and activity.</p>
      </div>
      <div>
    <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" ref={inputRef} placeholder='Enter GitHub Username'/>
        <button onClick={focusInput} type='submit'>View Profile</button>
    </form>
      </div>
    </section>
    <section className='home-page2 min-h-[calc(100vh)]'>
      <h1 className=''>How It Works</h1>
      <div className='flex flex-col gap-4 lg:flex-row md:gap-6'>
        <Card img={profile} heading={"Enter Username"} para={"Simply type GitHub username you wish to explore into the search box."}></Card>
        <Card img={search} heading={"View Profile"} para={"Get a quick and clear snapshot of any GitHub profile - including bio, followers, and recent commit activity."}></Card>
        <Card img={analyze} heading={"Analyze Data"} para={"Get a snapshot of any GitHub user’s activity, including profile info, recent commits, and project repositories."}></Card>
    </div>
    </section>
    <section className='min-h-[calc(100vh)] home-page3'>
          <div className='flex flex-col gap-8 overflow-y-hidden p-2'>
            <h1 className='text-lg font-bold md:text-3xl md:font-bolder md:m-4 '>Popular Repositories</h1>
            <Popularrepos></Popularrepos>
          </div>
    </section>
    </>
  )
}

export default Landingpage
