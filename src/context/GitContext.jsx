import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_TOKEN;

const GitContext = createContext(undefined);

export default function GitProvider({ children }) {
  const [data, setdata] = useState("");
  const [Username, setUsername] = useState("");
  const [error, setError] = useState(false);
  
  // The function to call API
  const fetchUserprofile = async (Username) => {
    try {
      const profile = await axios.get(`https://api.github.com/users/${Username}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      const result = profile.data;
      console.log(result);
      setdata(result);
      setError(false);
    } catch (e) {
      console.log("ERROR: ", e.message);
      setError(true);
      // If there is error Invalid Username will be displayed in UI, using error state toggler
      setUsername("");
    }
  };

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
    FetchRepos(Username);
    
  }, [Username]);

  return (
    <GitContext.Provider
      value={{
        data,
        setdata,
        setUsername,
        fetchUserprofile,
        isLoading,
        error,
        Reposlist,
        Username,
      }}
    >
      {children}
    </GitContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useGit() {
  return useContext(GitContext);
}
