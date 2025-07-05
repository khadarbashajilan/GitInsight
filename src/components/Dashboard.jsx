import React from "react";
// import profiledata from "../profile.json";
// import recentact from "../recent_activity.json";
// import reposcount from "../assets/dashboardpage/reposnum.svg";
// Then use: <ReposCountIcon />
// import axios from 'axios';
// import followers from "../assets/dashboardpage/followers.svg";
// import following from "../assets/dashboardpage/following.svg";
// import CreateEvent from "./assets/recentact/fork.svg";
// import PushEvent from "./assets/recentact/commit.svg";
// import PullRequestEvent  from "./assets/recentact/pull.svg";

const Dashboard = ({data}) => {

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

// const API_KEY = import.meta.env.VITE_GITHUB_TOKEN;
  
//   const fetchUserrecentact = async (username) => {
//   try {
//     const res = await axios.get(`https://api.github.com/users/${username}/events?per_page=10`, {
//       headers: {
//         'Authorization':`Bearer ${API_KEY}` ,
//         // 'X-GitHub-Api-Version': '2022-11-28',
//       },
//     });
//     const result = res.data;
//     console.log(result);
//     setisLoading(false);
//   } catch (e) {
//     console.log("ERROR: ", e.message); 
//     setError(true);
//     setisLoading(false);
//   }
// };

//   let message = recentact.map((item) => item.payload.commits);

//   let recent = recentact.map((item, index) => ({
//     name: item?.repo?.name?.replace("khadarbashajilan/", "")||"no-repo",
//     type: item?.type||"ERROR",
//     time: item?.created_at.slice(0, 10)||"ERROR",
//     messages: message[index]?.map((commit) => commit.message )||"no-commit-message",
//   }));

//   const eventIcons = {
//   PushEvent: PushEvent,
//   PullRequestEvent: PullRequestEvent,
//   ForkEvent: CreateEvent,
//   CreateEvent: CreateEvent,
// };

//   console.log(recent);
  return (
    <div className=" w-full overflow-hidden ">
      
      {/* {isLoading && (
          <div className="loader flex h-screen overflow-hidden flex-col items-center justify-center space-y-4">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-400">Fetching GitHub data...</p>
          </div>
        )} */}

      <div className="w-full flex justify-center items-center">
      <div className="  flex flex-col gap-5 p-5 justify-center mt-5 md:w-350 w-85 ">
        <div className="flex items-center justify-between text-sm">
          {/* profile */}
          <div className="flex md:flex md:flex-row gap-2">
            <img
              // src={obj.profile}
              src=""
              height={"50px"}
              className="rounded-full border-1 m-2 w-20"
              width={"50px"}
              alt=""
              />
            <div className="mt-5">
              <h1 className="text-[16px] font-bold">{obj.name}</h1>
              <p className="font-light">@{obj.username}</p>
              <p className="font-extralight">{obj.bio}</p>
            </div>
          </div>
        </div>

        <div className="px-2 mmy-1  items-center flex md:flex md:flex-row md:gap-10">
          {/* foll,reposcount */}
          <div className="flex-col md:flex md:flex-row gap-1 ">
            <img
              height={"15px"}
              width={"15px"}
              // src={followers}
              src=""
              alt="Followers"
              className="hidden md:block"
              />
            <h4 className="text-center">{obj.followers} Followers</h4>
          </div>
          <div className="flex-col md:flex md:flex-row gap-1">
            <img
              height={"15px"}
              width={"15px"}
              // src={following}
              src=""
              alt="Following"
              className="hidden md:block"
              />
            <h4 className="text-center">{obj.following} Following</h4>
          </div>
          <div className="flex-col md:flex md:flex-row  gap-1">
            <img
              height={"15px"}
              width={"15px"}
              // src={reposcount}
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
        {/* <h1 className="justify-center pb-5 border-b-2 border-b-blue-500 text-md font-bold ps-3">Recent Activities</h1>
        <div style={{scrollbarWidth:"none"}} className="scroll-smooth overflow-scroll md:h-90 h-70 text-sm">

        {recent.map((ele, idx) => {
          return (
            <>
              <div
                className="grid md:grid-cols-4 grid-cols-3 px-2 gap-10 py-3 my-2 p-5 text-center"
                key={idx}
                >
                <img title={ele.type} className="h-5 hidden md:inline w-5 ms-25" src={eventIcons[ele.type]} alt={ele.type} />
                <p title="Repo Name" className="text-blue-300 me-5">{ele.name}</p>
                <p title="Commit Message" className="">{ele.messages}</p>
                <p className="">{ele.time}</p>
              </div>
            </>
          );
        })}
        </div> */}
          {/* {isLoading && (
          <div className="loader flex h-screen overflow-hidden flex-col items-center justify-center space-y-4">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-400">Fetching GitHub data...</p>
          </div>
        )} */}
        </div>
        </div>
    </div>
  );
};

export default Dashboard;
