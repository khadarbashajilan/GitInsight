import React from "react";
import repos from "./github_repos.json";
const Popularrepos = () => {
  // console.log(repos);

  return (
    <>
      <div
        style={{ scrollbarWidth: "none" }}
        className="grid grid-rows-2 auto-cols-max grid-flow-col gap-3 md:gap-5 overflow-x-scroll overflow-y-hidden mx-3 px-2 md:px-8 md:grid-rows-1 "
      >
        {repos.map((ele, idx) => {
          return (
            <div
              key={idx}
              className="cursor-pointer border rounded-2xl w-50 h-50 gap-4 p-2 flex hover:border-blue-500 transition duration-200  flex-col items-center justify-center md:w-75 md:h-75"
              onClick={() => window.open(ele["repo-link"], "_blank")}
            >
              <h1
                className="md:text-xl text-blue-500 font-medium underline"
                key={idx}
              >
                {" "}
                {ele.title}{" "}
              </h1>
              <p className="repos">{ele.description}</p>
              {/* <p className="md:text-md lg:text-lg text-sm">{ele.description}</p> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Popularrepos;
