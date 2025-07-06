import React from "react";
import reposcount from "../assets/dashboardpage/reposnum.svg";
// Then use: <ReposCountIcon />
// import axios from 'axios';
import followers from "../assets/dashboardpage/followers.svg";
import following from "../assets/dashboardpage/following.svg";
import Menubar from "./Menubar";
import Recentactivity from "./dashboardcomponents/Recentactivity";
// import { useNavigate } from 'react-router-dom';

const Dashboard = ({data}) => {

    // const navigate= useNavigate();

    // const [isLoading, setisLoading]= useState(false);
    // const [error, setError]= useState(false);
  
  
  let obj = {
    name: data.name,
    followers: data.followers,
    mail: data.email,
    bio: data.bio,
    username: data.login,
    following: data.following,
    reposcount: data.public_repos,
    profile: data.avatar_url,
  };
    // navigate("/repos")


  return (
    <>
    <Menubar></Menubar>
    <div className=" w-full pt-6 overflow-hidden ">

      <div className="w-full flex justify-center items-center">
      <div className="  flex flex-col gap-5 p-5 justify-center mt-5 md:w-350 w-85 ">
        <div className="flex items-center justify-between text-sm">
          {/* profile */}
          <div className="flex md:flex md:flex-row gap-2">
            <img
              src={obj.profile}
              // src=""
              height={"50px"}
              className="rounded-full border-1 m-2 w-20"
              width={"50px"}
              alt=""
              />
            <div className="mt-5">
              <h1 className="text-[16px] font-bold">{obj.name}</h1>
              <p className="font-light">@{obj.username}</p>
              <p className="font-extralight italic my-2">{obj.bio||"no-bio"}</p>
            </div>
          </div>
        </div>

        <div className="px-2 mmy-1  items-center flex md:flex md:flex-row md:gap-10">
          {/* foll,reposcount */}
          <div className="flex-col md:flex md:flex-row gap-1 ">
            <img
              height={"15px"}
              width={"15px"}
              src={followers}
              // src=""
              alt="Followers"
              className="hidden md:block"
              />
            <h4 className="text-center">{obj.followers} Followers</h4>
          </div>
          <div className="flex-col md:flex md:flex-row gap-1">
            <img
              height={"15px"}
              width={"15px"}
              src={following}
              // src=""
              alt="Following"
              className="hidden md:block"
              />
            <h4 className="text-center">{obj.following} Following</h4>
          </div>
          <div className="flex-col md:flex md:flex-row  gap-1">
            <img
              height={"15px"}
              width={"15px"}
              src={reposcount}
              // src=""
              alt="Respositories count"
              className="hidden md:block"
              />
            <h4 className="text-center"> {obj.reposcount} Respositories</h4>
          </div>
        </div>
      </div>
      </div>
      <div className="w-full flex justify-center items-center over">
      <div  className="cursor-default flex flex-col gap-2  p-6  justify-center  md:w-250 lg:w-350">
        <Recentactivity username={data.login}></Recentactivity>
        </div>
        </div>
    </div>
    </>
  );
};

export default Dashboard;
