import React, { useState, useEffect } from "react";
import CreateEvent from "../../assets/recentact/fork.svg";
import PushEvent from "../../assets/recentact/commit.svg";
import PullRequestEvent from "../../assets/recentact/pull.svg";
import axios from "axios";
const API_KEY = import.meta.env.VITE_GITHUB_TOKEN;

const Recentactivity = ({ username }) => {
  // in the prop ->only the username will be sent to this component (from App.jsx)
  // to store all recent activity data
  const [recentdata, setRecentdata] = useState([]);
  // for loader
  const [isLoading, setisLoading] = useState(true);

  const fetchUserrecentdata = async (username) => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/events?per_page=10`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      const recentact = res.data;
      const messages = recentact.map((item) => item.payload.commits);
      // messages -> commit messages
      const newData = recentact.map((item, index) => ({
        name: item?.repo?.name?.replace(`${username}/`, "") || "no-repo",
        type: item?.type || "ERROR",
        time: item?.created_at?.slice(0, 10) || "ERROR",
        messages:
          messages[index]?.map((commit) => commit.message) ||
          "no-commit-message",
      }));
      // (obj)newData -> name of the repo, type of commit (Create, Push, Pull,...), time, commit message (from (obj) commit)

      setRecentdata(newData);
      setisLoading(false);
    } catch (e) {
      console.log("Error ", e);
      setisLoading(false);
    }
  };

  // Only when the username is came as prop, then the function will be called/invoked [username] (or whenever the state username changes then the rendering wil happen)
  useEffect(() => {
    if (username) {
      fetchUserrecentdata(username);
    }
  }, [username]);

  const eventIcons = {
    PushEvent: PushEvent,
    PullRequestEvent: PullRequestEvent,
    ForkEvent: CreateEvent,
    CreateEvent: CreateEvent,
  };
  // General types: Images (in the top as they are imported)

  // if(recentdata.length<1){setisLoading(false)};

  return (
    <div>
      <h1 className="justify-center pb-5 border-b-2 border-b-blue-500 text-md font-bold ps-3">
        Recent Activities
      </h1>
      {isLoading && (
        <div className="loader flex h-screen overflow-hidden flex-col items-center justify-center space-y-4">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-400">Fetching GitHub data...</p>
        </div>
      )}
      {/* if the recendata state is undefined or null */}
      {!recentdata.length ? (
        <div className="h-80 w-full flex justify-center items-center">
          <h1 className=" text-red-400">No-Recent Activities</h1>
        </div>
      ) : (
        // Else we are gonna display the all recent activities as we stored in recentdata state earlier
        <div
          style={{ scrollbarWidth: "none" }}
          className="scroll-smooth overflow-scroll md:h-90 h-70 text-sm"
        >
          {recentdata.map((ele, idx) => {
            return (
              <div
                className="grid md:grid-cols-4 grid-cols-3 px-2 gap-10 py-3 my-2 p-5 text-center"
                key={idx}
              >
                <img
                  title={ele.type}
                  className="h-5 md:mt-2 hidden md:block w-5 ms-25"
                  src={eventIcons[ele.type] || CreateEvent}
                  alt={ele.type}
                />
                <p title="Repo Name" className="text-blue-300 me-5 md:m-2">
                  {ele.name}
                </p>
                <p title="Commit Message" className="">
                  {ele.messages}
                </p>
                <p className="">{ele.time}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Recentactivity;
