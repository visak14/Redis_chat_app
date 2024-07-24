import React from 'react'
import AuthButton from './AuthButton'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';

 export default async function page () {

    const { isAuthenticated} = getKindeServerSession();
  if ( await isAuthenticated()) return redirect("/auth");

  return (
    <div className=' flex h-screen w-full'>

        <div className=' flex-1 flex overflow-hidden dark:bg-pink bg-violet-600 relative justify-center items-center'>
            <img  src='redis-logo.svg' alt=' Redis Logo' className=' absolute -left-1/4 opacity-25 -bottom-52 lg:scale-100 scale-[2]'/>
            <div className=' flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold'>
                <img
                src={"/logo.png"}
                alt='Redistash Logo'
                width={763}
                height={173}
                className=' mt-20 w-[420px] z-0 pointer-events-none select-none'
                />
                <p className=' text-2xl md:text-3xl text-balance z-10'>
                    The <span className=' bg-pink-500 px-2 font-bold text-white rounded-full'> Chat App</span>
                </p>
                <AuthButton/>
            </div>
        </div>
        <div className=' flex-1 relative overflow-hidden justify-center items-center hidden md:flex bg-noise '>

        <img
            src={'/hero-right.png'}
            alt='Hero Image'
            
            className=' dark:opacity-60 opacity-90 pointer-events-none select-none h-full'
           />
        </div>
    </div>
  )
}

