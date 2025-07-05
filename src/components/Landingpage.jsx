import React, {  useState } from "react";
import Card from "./landinpagecomponents/Card";
import profile from "../assets/landingpage/user.svg";
import analyze from "../assets/landingpage/analyze.svg";
import search from "../assets/landingpage/search.svg";
import Popularrepos from "./landinpagecomponents/Popularrepos";
import axios from 'axios';
const API_KEY = import.meta.env.VITE_GITHUB_TOKEN;

const Landingpage = ({setData}) => {
  
  const [username, setusername]= useState('');
  const [isLoading, setisLoading]= useState(false);
  const [error, setError]= useState(false);

  // const[reopsData,setreposData]=useState();
  
  const handleSubmit=(e)=>{
    setisLoading(true);
    e.preventDefault();
    username.trim();
    fetchUserprofile(username);
  }
  
  const fetchUserprofile = async (username) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        'Authorization':`Bearer ${API_KEY}` ,
        // 'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    const result = res.data;
    console.log(result);
    setData(result);
    setisLoading(false);
    setusername('');
  } catch (e) {
    console.log("ERROR: ", e.message); 
    setError(true);
    setisLoading(false);
    setusername('');
  }
};


  return (
    <>
      {isLoading && (
          <div className="loader flex h-screen overflow-hidden flex-col items-center justify-center space-y-4">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-400">Fetching GitHub data...</p>
          </div>
        )}
        
      <section className="home-page1">
        <div>
          <h1>Explore Any GitHub Profile With Ease</h1>
        </div>
        <div>
          <p>
            Unlock comprehensive insights into Github profiles, repositories,
            and activity.
          </p>
        </div>
        <div>
          <form onSubmit={(e) =>handleSubmit(e)}>
            <input
              type="text"
              onChange={(e)=>setusername(e.target.value)}
              placeholder="Enter GitHub Username"
            />
            <button type="submit">
              View Profile
            </button>
          </form>
        </div>
          {error&& <p className="text-red-500 mt-4">Invalid Username</p>}
      </section>
      <section className="home-page2 min-h-[calc(100vh)]">
        <h1 className="">How It Works</h1>
        <div className="flex flex-col gap-4 lg:flex-row md:gap-6">
          <Card
            img={profile}
            heading={"Enter Username"}
            para={
              "Simply type GitHub username you wish to explore into the search box."
            }
          ></Card>
          <Card
            img={search}
            heading={"View Profile"}
            para={
              "Get a quick and clear snapshot of any GitHub profile - including bio, followers, and recent commit activity."
            }
          ></Card>
          <Card
            img={analyze}
            heading={"Analyze Data"}
            para={
              "Get a snapshot of any GitHub user’s activity, including profile info, recent commits, and project repositories."
            }
          ></Card>
        </div>
      </section>
      <section className="min-h-[calc(100vh)] home-page3">
        <div className="flex flex-col gap-8 overflow-y-hidden p-2">
          <h1 className="text-lg font-bold md:text-3xl md:font-bolder md:m-4 ">
            Popular Repositories
          </h1>
          <Popularrepos></Popularrepos>
        </div>
      </section>
    </>
  );
};

export default Landingpage;
