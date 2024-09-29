// TestiMonialCard.jsx
'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote: 'The digital marketing resources here are top-notch. The clarity and depth of the tutorials have made crafting effective marketing campaigns much easier and more enjoyable.',
    name: 'Hamza Faheem',
    title: 'Digital Marketing Specialist',
  },
  {
    quote: 'As a digital marketer, I have found this platform to be a game-changer. The detailed guides and practical exercises have made crafting effective marketing campaigns much more straightforward..',
    name: 'Faisal farooq',
    title: 'Content Marketing Specialist',
  },
  {
    quote: 'Building games requires a deep understanding of complex concepts. This platforms interactive projects and comprehensive lessons have been instrumental in enhancing my game development skills.',
    name: 'faizan akram',
    title: 'Social Media Marketing Specialist',
  },
  {
    quote: 'Learning Next.js through this platform has been an incredible experience. The focus on real-world applications and advanced features has accelerated my development process significantly.',
    name: 'Ahmad hassan',
    title: 'Influencer Marketing specialist',
  },
  {
    quote: 'React.js can be daunting at first, but the step-by-step tutorials here have made it much more accessible. I now feel confident building dynamic and responsive UIs.',
    name: 'Harram',
    title: 'Video Marketing specialist',
  },
  {
    quote: 'Generative AI is a complex field, but this platform breaks it down into manageable parts. The practical examples and cutting-edge projects have deepened my understanding significantly.',
    name: 'Junaid Sakhir',
    title: 'Mobile Marketing specialist',
  },
  {
    quote: 'The interactive coding exercises and detailed feedback have accelerated my journey from a beginner to an advanced developer in web technologies.',
    name: 'Ali Baba',
    title: 'Search Engine Marketing (SEM)',
  },
  {
    quote: 'The platforms comprehensive resources on digital marketing have been crucial for my career growth. The project-based learning approach is highly effective.',
    name: 'Dawood',
    title: 'Digital marketing resarcher',
},
{ quote: 'Thanks to the immersive digital marketing tutorials, I have gained the skills to create engaging and effective campaigns that stand out in the industry.',
    name: 'Sobia Taylor',
    title: 'Email Marketing',
  
   
  },
  {
    quote: 'Mastering Next.js with this platform has been a transformative experience. The advanced tutorials and real-world projects have taken my skills to the next level.',
    name: 'zain',
    title: 'Content Marketing',
  },
  
  {
    quote: 'The generative AI modules provided here are exceptionally detailed and practical. I feel much more prepared to work on cutting-edge AI projects now.',
    name: 'Abdullah',
    title: 'Pay-Per-Click (PPC) Advertising',
  },
];

function TestiMonialCard() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[40rem] w-full bg-black overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 text-white relative z-10">
      Hear Our Voices: Success Stories from the Digital Marketing Community
      </h2>
      <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center items-center w-full max-w-6xl">
          <div className="relative w-full bg-grid-white(0.02)"> {/* Updated Class */}
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-black opacity-60"></div>
          <div className="w-1/2 h-full bg-gradient-to-l from-transparent to-black opacity-60"></div>
        </div>
      </div>
    </div>
  );
}

export default TestiMonialCard;