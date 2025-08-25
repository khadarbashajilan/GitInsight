import { createContext, useContext, useState } from "react";

const GitContext = createContext(undefined);

export default function GitProvider({ children }) {

  const [Sharedata, setSharedata] = useState("");
  const [Username, setUsername] = useState("");

  

  return (
    <GitContext.Provider value={{
         Sharedata,
         setSharedata,
         setUsername,
         Username        
        }}>{children}</GitContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useGit() {
  return useContext(GitContext);
}
