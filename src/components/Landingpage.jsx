import React, { useState } from "react";
import Card from "./landinpagecomponents/Card";
import profile from "../assets/landingpage/user.svg";
import analyze from "../assets/landingpage/analyze.svg";
import search from "../assets/landingpage/search.svg";
import Popularrepos from "./landinpagecomponents/Popularrepos";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useGit } from "../context/GitContext";
const API_KEY = import.meta.env.VITE_GITHUB_TOKEN;

const Landingpage = () => {

  const {setSharedata, setUsername} = useGit()

  const [trackUserip, settrackUserip] = useState()
  // username -> to get from the username from user as he will enter in input>
  // toggling loader untill data is fetched or returned something
  const [isLoading, setisLoading] = useState(false);
  // ""Invalid username" -> popped below input> if the username is wrong or didnt match from API
  const [error, setError] = useState(false);
  
  // to naviagate to dashboard page that is next page
  const navigate = useNavigate();

  // to handle the form> behaviour that is e.preventDefault(), loader will appear and the function to fetch the data will be called
  const handleSubmit = (e) => {
    setisLoading(true);
    e.preventDefault();
    trackUserip.trim();
    fetchUserprofile(trackUserip);
    setUsername(trackUserip)
    settrackUserip("")
      navigate("/dashboard");

  };

  // The function to call API
  const fetchUserprofile = async (Username) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${Username}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      const result = res.data;
      console.log(result);
      setSharedata(result);
      setisLoading(false);
      setError(false);
    } catch (e) {
      console.log("ERROR: ", e.message);
      setError(true);
      // If there is error Invalid Username will be displayed in UI, using error state toggler 
      setisLoading(false);
      setUsername("");
    }
  };

  return (
    <>
      <Navbar></Navbar>
      {/* loader */}
      {isLoading ? (
        <div className="loader flex h-screen overflow-hidden flex-col items-center justify-center space-y-4">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-400">Fetching GitHub data...</p>
        </div>
      ):
      (<>
      {/* main page */}
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={trackUserip}
              list="username-options"
              onChange={(e) => settrackUserip(e.target.value)}
              placeholder="Enter GitHub Username "
            />
            {/* These datalist are just some random usernames to select. coz, some guyz just forget their usernames so, lol*/}
            <datalist id="username-options">
              <option value="ry" />
              <option value="yyx990803" />
              <option value="sindresorhus" />
              <option value="t3dotgg" />
            </datalist>
            <button type="submit">View Profile</button>
          </form>
        </div>
        {error && <p className="text-red-500 mt-4">Invalid Username</p>}

        {/* How it works -section */}
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

      {/* Popular repos- section */}
      <section className="min-h-[calc(100vh)] home-page3">
        <div className="flex flex-col gap-8 overflow-y-hidden p-2">
          <h1 className="text-lg font-bold md:text-3xl md:font-bolder md:m-4 ">
            Popular Repositories
          </h1>
          <Popularrepos></Popularrepos>
        </div>
      </section>
      </>)}
    </>
  );
};

export default Landingpage;
