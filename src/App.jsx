import {   useState } from "react";
import Landingpage from "./components/Landingpage";
import Dashboard from "./components/Dashboard"
import Repositories from "./components/Repositories";
import { Route, Routes } from 'react-router-dom';
function App() {
  const [ Sharedata, setSharedata]= useState('');
  const [ Username, setUsername]= useState('');

  const setData= (data)=>{
    setSharedata(data);
    setUsername(data.login);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage setData={setData}></Landingpage>}></Route >
        <Route path="/dashboard" element={<Dashboard data={Sharedata}></Dashboard>}></Route>
        <Route path="/repos" element={<Repositories username={Username}></Repositories>}></Route>
      </Routes>
    </>
  );
}

export default App;
