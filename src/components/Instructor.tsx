'use client';


import { AnimatedTooltip } from "./ui/animated-tooltip";
import aliImage from '@/components/images/img.jpeg';
import razaImage from '@/components/images/asif.jpeg';
import { StaticImageData } from 'next/image';
import faizanImage from '@/components/images/faizan.jpeg';

// Instructor type definition
type InstructorType = {
  id: number;
  name: string;
  designation: string;
  image: StaticImageData; // Ensure this matches how you're handling images
};

const Instructors: InstructorType[] = [
  {
    id: 1,
    name: 'Muhammad Ali Raza',
    designation: 'digital marketing and frontend developer',
    image: aliImage,
  }, {
    id: 2,
    name: 'faizan akram',
    designation: 'full stack developer',
    image: faizanImage,
  },
  {
    id: 3,
    name: 'Muhammad Asif Langrah',
    designation: 'Master of Generative Artificial Intelligence',
    image: razaImage,
  }
];

function Instructor() {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center center '>  
    <div className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
        <h2 className="text-2xl md:text-4xl ld:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide you in Digital Marketing and Artificial Intelligence
        </p>
        <AnimatedTooltip
  items={Instructors.map(instructor => ({
    ...instructor,
    image: typeof instructor.image === 'string' ? instructor.image : instructor.image.src
  }))}
/>
      </div>
    </div>
  );
}

export default Instructor;
