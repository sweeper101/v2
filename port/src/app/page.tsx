import Navbar from '../components/navbar';
import Image from 'next/image';
import Hero from '@/components/hero';
import CTA from '@/components/cta';
import CONTACTME from '@/components/contactme';
import Footer from '@/components/footer';
import PROJECT1 from '@/components/project1';
import PROJECT2 from '@/components/project2';
import PROJECT3 from '@/components/project3';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Page = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <Navbar navItems={navItems} />
      <Hero/>
      <CTA />
      <PROJECT1 />
      <PROJECT2 />
      <PROJECT3 />
      <CONTACTME />
      
      
        
   
      <footer className="mt-8">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
