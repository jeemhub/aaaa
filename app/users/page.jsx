'use client'
import NavBar from "../components/NavBar";
import { useState } from "react";
export default function Users(){
  const [optionToggle,setoptionToggle]=useState(false)
  const option=()=>{
    setoptionToggle(!optionToggle);
  }
    return(
      <>
      <NavBar/>
      {optionToggle?
      <div className="h-screen w-full flex justify-center items-center">
        <div className="p-2 bg-yellow-300 rounded-lg flex flex-col justify-center items-center ">
          <h1 className="font-bold text-2xl text-black m-2">Option</h1>
          <button className="w-full bg-yellow-800 text-white rounded-md px-8 py-2 m-2">Edit</button>
          <button className="w-full bg-red-800 text-white rounded-md px-8 py-2 m-2">Delete</button>
          <button onClick={()=>setoptionToggle(!optionToggle)} className="w-full bg-yellow-300 text-black">Close</button>
        </div>
      </div>
      :
        <div className="flex flex-col md:p-24 bg-white">
        {/* Component 1 */}
     
  
        {/* Component 2 */}
        {/* <div className="rounded bg-[#3b460d] text-white p-4 flex flex-wrap">
          <div className="w-full lg:w-1/4">id</div>
          <div className="w-full lg:w-1/4">username</div>
          <div className="w-full lg:w-1/4">password</div>
          <div className="w-full lg:w-1/4">change</div>
        </div> */}
  
        {/* Component 3 */}
        <div className="rounded bg-[#96ab46] p-4 flex flex-col">
          {/* Section A */}
          <div className="flex-row">
            <button className="rounded mr-2 text-white bg-[#3b460d] p-2">Add</button>
            <input
              className="border border-gray-300 rounded p-2 mr-2 placeholder-black"
              type="text"
              placeholder="Username"
              />
            <input
              className="border border-gray-300 rounded p-2 placeholder-black"
              type="password"
              placeholder="Password"
              />
          </div>
  
          {/* Section B */}
          <div className="overflow-x-auto">
            <table className="mt-4 w-full">
              <thead>
                {/* <tr>
                  <th className="px-4 py-2 text-[#3b460d]">id</th>
                  <th className="px-4 py-2 text-[#3b460d]">username</th>
                  <th className="px-4 py-2 text-[#3b460d]">password</th>
                  <th className="px-4 py-2 text-[#3b460d]">change</th>
                </tr> */}
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">JohnDoe</td>
                  <td className="px-4 py-2">********</td>
                  <td className="px-4 py-2">
                  <div className="hidden md:flex">
                      <button className="m-2 rounded-sm bg-yellow-600 p-2 text-white bg-brown mr-2">Edit</button>
                      <button className="m-2 rounded-sm bg-red-600 p-2 text-white bg-red">Delete</button>
                    </div>
                    {/* mobile */}
                    <div className="md:hidden">
                     <button onClick={()=>option()} className="p-2 bg-yellow-200 rounded-md text-black font-bold">.</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">JohnDoe</td>
                  <td className="px-4 py-2">********</td>
                  <td className="px-4 py-2">
                    <div className="hidden md:flex">
                      <button className="m-2 rounded-sm bg-yellow-600 p-2 text-white bg-brown mr-2">Edit</button>
                      <button className="m-2 rounded-sm bg-red-600 p-2 text-white bg-red">Delete</button>
                    </div>
                    {/* mobile */}
                    <div className="md:hidden">
                     <button onClick={()=>option()} className="p-2 bg-yellow-200 rounded-md text-black font-bold">.</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">JohnDoe</td>
                  <td className="px-4 py-2">********</td>
                  <td className="px-4 py-2">
                  <div className="hidden md:flex">
                      <button className="m-2 rounded-sm bg-yellow-600 p-2 text-white bg-brown mr-2">Edit</button>
                      <button className="m-2 rounded-sm bg-red-600 p-2 text-white bg-red">Delete</button>
                    </div>
                    {/* mobile */}
                    <div className="md:hidden">
                     <button onClick={()=>option()} className="p-2 bg-yellow-200 rounded-md text-black font-bold">.</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">JohnDoe</td>
                  <td className="px-4 py-2">********</td>
                  <td className="px-4 py-2">
                  <div className="hidden md:flex">
                      <button className="m-2 rounded-sm bg-yellow-600 p-2 text-white bg-brown mr-2">Edit</button>
                      <button className="m-2 rounded-sm bg-red-600 p-2 text-white bg-red">Delete</button>
                    </div>
                    {/* mobile */}
                    <div className="md:hidden">
                     <button onClick={()=>option()} className="p-2 bg-yellow-200 rounded-md text-black font-bold">.</button>
                    </div>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
}
              </>
    )
}