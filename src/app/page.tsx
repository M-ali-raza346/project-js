import FeaturedCourses from '@/components/FeaturedCourses';
import HeroSection from '@/components/HeroSection';
import WhyChooseUS from '@/components/ui/WhyChooseUS';
import TestimonialCards from '@/components/TestimonialCards';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import Instructor from '@/components/Instructor';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
    <HeroSection />
    <FeaturedCourses/>
    <WhyChooseUS/>
    <TestimonialCards/>
    <UpcomingWebinars/>
   <Instructor/>
    <Footer/>
    </main> 
  );
}


