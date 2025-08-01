import React, { useEffect, useState } from "react";
import code from "../assets/repositoriespage/code.svg";
import axios from "axios";
import Menubar from "./Menubar";
const API_KEY = import.meta.env.VITE_GITHUB_TOKEN;

const Repositories = ({ username }) => {
  // Reposlist -> stores the json data (array of objects) which is returned from the API
  const [Reposlist, setReposlist] = useState([]);
  // loader
  const [isLoading, setisLoading] = useState(true);

  const FetchRepos = async (username) => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      const repos = res.data;
      const obj = repos.map((item) => ({
        name: item?.name ?? "-",
        description: item?.description
          ? item.description.length > 100
            ? `${item.description.substring(0, 100).trim()} ...`
            : item.description.trim()
          : "no description",
        language: item?.language ?? "-",
        updated: item?.updated_at?.slice(0, 10) ?? "-",
        link: item?.html_url ?? "#",
      }));
      setReposlist(obj);
      setisLoading(false);
    } catch (e) {
      console.log(e, "ERROR");
      setisLoading(false);
    }
  };

  useEffect(() => {
    FetchRepos(username);
  }, [username]);

  return (
    <>
      <Menubar></Menubar>
      {isLoading ? (
        <div className="loader flex h-screen overflow-hidden flex-col items-center justify-center space-y-4">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-400">Fetching GitHub data...</p>
        </div>
      ):(
       <>
      <div className="h-screen w-full pt-7  flex flex-col gap-2 items-center">
        <div className="flex flex-col my-8 mx-5">
          <h1 className="font-bold text-3xl text-center text-white">
            Repositories
          </h1>
        </div>
        {!Reposlist.length > 0 ? (
          <div className="flex justify-center h-8/12 items-center">
            <h1 className=" text-red-500">No-Repos</h1>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-5 mt-2">
              {Reposlist.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="hover:border-blue-500 hover:transition-2s border-2 gap-2 p-2 px-4 justify-evenly m-2 my-3 h-65 w-50 md:h-75 md:w-60 lg:h-80 rounded-3xl flex flex-col"
                  >
                    <h2 className="self-start">{item.name}</h2>
                    <p className="h-16  my-1 text-[12px] md:text-[14px]  font-extralight">
                      {item.description}
                    </p>
                    <div className="flex gap-2 items-center ">
                      <img
                        className="w-5 h-4 lg:w-6 lg:h-5"
                        src={code}
                        alt="language"
                      />
                      <h2 className="text-sm">{item.language}</h2>
                    </div>
                    <h2 className="text-sm">Last updated: {item.updated}</h2>
                    <button
                      className="hover:border-blue-500 hover:transition-2s cursor-pointer border rounded-2xl p-1 m-2"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      View Repo
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </> )}
    </>
  );
};

export default Repositories;
