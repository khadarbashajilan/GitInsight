import reposcount from "../assets/dashboardpage/reposnum.svg";
import followers from "../assets/dashboardpage/followers.svg";
import following from "../assets/dashboardpage/following.svg";
import Menubar from "./Menubar";
import Recentactivity from "./dashboardcomponents/Recentactivity";
import { useGit } from "../context/GitContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const {data} = useGit()

  const navigate = useNavigate()

  // Error handling for page refresh : 
  if(!data){
    navigate("/")
  }

  // The prop "data" containd the all the data of username according to endpoint and doc of API.
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
  // So, here we are gonna select and store in object datatype only which is needed

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
                  height={"50px"}
                  className="rounded-full border-1 m-2 w-25"
                  width={"50px"}
                  alt=""
                />
                <div className="mt-5">
                  <h1 className="text-[16px] font-bold">{obj.name}</h1>
                  <p className="font-light">@{obj.username}</p>
                  <p className="font-extralight italic my-2">
                    {obj.bio || "no-bio"}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-2 mmy-1  items-center flex md:flex md:flex-row md:gap-10">
              {/* followers,repository count, following */}
              <div className="flex-col md:flex md:flex-row gap-1 ">
                <img
                  height={"15px"}
                  width={"15px"}
                  src={followers}
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
                  alt="Respositories count"
                  className="hidden md:block"
                />
                <h4 className="text-center"> {obj.reposcount} Respositories</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Recent activity Section */}
        <div className="w-full flex justify-center items-center over">
          <div className="cursor-default flex flex-col gap-2  p-6  justify-center  md:w-250 lg:w-350">
            <Recentactivity username={data.login}></Recentactivity>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
