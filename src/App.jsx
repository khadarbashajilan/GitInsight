// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard"

function App() {
  const [ Sharedata, setSharedata]= useState('');

  const setData= (data)=>{
    setSharedata(data);
  }
  return (
    <>
      <Navbar></Navbar>
      <Landingpage setData={setData}></Landingpage>
      <Dashboard data={Sharedata}></Dashboard>
    </>
  );
}

export default App;
