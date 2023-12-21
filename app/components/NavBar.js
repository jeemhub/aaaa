'use client'
 
import Link from 'next/link'
import { useState } from 'react'
 
export default function NavBar() {
    const [toggle,settoggle]=useState(false); 
//  #3B450D
//  #96AB46
  return (
    <>
      {/* //desctop */}
    <div className='w-screen md:flex flex-row justify-start items-center py-10 px-5 bg-[#3B460D] text-white  gap-4 font-bold text-2xl hidden' >
      <Link href='#'>
        <h1 className='bg-[#3B460D]'>Home</h1>
      </Link>
      <Link href='#'>
        <h1 className='bg-[#3B460D]'>About</h1>
      </Link>
      <Link href='#'>
        <h1 className='bg-[#3B460D]'>Contact</h1>
      </Link>
      <Link href='#'>
        <h1 className='bg-[#3B460D]'>FQS</h1>
      </Link>
    </div>
    {/*mobile*/}
    <div className='flex flex-col md:hidden'>
      <div className='flex flex-row justify-between items-center py-5 px-3 bg-[#3b460d]'>
        <h1 className='font-bold bg-[#3b460d] text-white'>Neepula</h1>
        <button onClick={()=>{
          settoggle(!toggle);
        }}>
          {toggle?'close':'open'}
        </button>
      </div>
    {
      toggle ?<div className='flex flex-col gap-8 w-full items-center h-screen justify-center pb-24 text-3xl border-solid bg-[#3b460d] border-b-white border-b-2'>
          <Link href='#'>
        <h1 className=' border-solid border-b-white border-b-2 pb-4 bg-[#3b460d] text-white'>Home</h1>
      </Link>
      <Link href='#'>
        <h1 className=' border-solid border-b-white border-b-2 pb-4 bg-[#3b460d] text-white'>About</h1>
      </Link>
      <Link href='#'>
        <h1 className=' border-solid border-b-white border-b-2 pb-4 bg-[#3b460d] text-white'>Contact</h1>
      </Link>
      <Link href='#'>
        <h1 className=' border-solid border-b-white border-b-2 pb-4 bg-[#3b460d] text-white'>FQS</h1>
      </Link>
      </div>:<></>
    }
        </div>
     
    </>

  )
}