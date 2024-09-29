
import React from 'react';
import Link from 'next/link';
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function heroSection() {
  return (
    <div className='h-auto md:h[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='p-6 relative z-10 w-full text-center'>
    <h1 className='text-4xl md:text-7xl py-34 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pt-28'>
Boost Your Brand with Digital Marketing and generative AI</h1></div>
    <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
    Unlock Your Business Potential with Our Comprehensive Digital Marketing Courses From Beginner to Pro Master the Art of Online Growth Today.</p>
    <div className='mt-4'>
        <Link href={"/courses"} className='text-white'>
        <Button borderRadius='1.75rem'
        className='bg-black text-white dark:bg-black
         dark:text-white border-neutral-200 dark:border-slate-800'>
        Explore courses
          </Button></Link>
    </div>
    </div>
    
  )
}

export default heroSection