// import React from 'react'
// import data from '../repos.json'
// import code from "./assets/code.svg"
// const Repositories = () => {
//   const obj = data.map((item) => ({
//   name: item?.name ?? "-",
//   description: item?.description ? item.description.length > 100 ? `${item.description.substring(0, 100).trim()} ...`: item.description.trim()
//     : "no description",
//   language: item?.language ?? "-",
//   updated: item?.updated_at?.slice(0, 10) ?? "-",
//   link: item?.html_url ?? "#"
// }));
//   console.log(obj);

//   return (
//     <div className='h-screen w-full  flex flex-col gap-5 items-center text-amber-50 '>
//       <h1 className='self-start ms-3 font-bold text-3xl'>Repositories</h1><br />
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-5'>
//       {
//         obj.map((item,idx)=>{
//           return(
//             <div key={idx} className='hover:border-blue-500 transition-2s border-2 gap-2 p-2 px-4 justify-evenly m-2 my-3 h-65 w-50 md:h-75 md:w-60 lg:h-80 rounded-3xl flex flex-col'>
//             <h2 className='self-start'>{item.name}</h2>
//             <p className='h-16  my-1 text-[12px] md:text-[14px]  font-extralight'>{item.description}</p>
//             <div className='flex gap-2 items-center '>
//             <img className='w-5 h-4 lg:w-6 lg:h-5' src={code} alt="language" />
//             <h2 className='text-sm'>{item.language}</h2>
//             </div>
//             <h2 className='text-sm'>Last updated: {item.updated}</h2>
//             <button className='cursor-pointer border rounded-2xl p-1 m-2' onClick={() => window.open(item.link, "_blank")}>View Repo</button>
//             </div>
//           )
//         })
//       }
//       </div>
//     </div>
//   )
// }

// export default Repositories
