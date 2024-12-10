'use client';
import { useEffect, useState } from 'react';
import TextGradient from '@/components/TextGradient';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineMail, HiDocumentText } from 'react-icons/hi';

export default function HomePage() {
  const [location, setLocation] = useState<{ city?: string; country?: string }>();

  useEffect(() => {
    async function getLocation() {
      try {
        const res = await fetch('/api/location');
        const data = await res.json();
        setLocation(data);
      } catch (error) {
        console.error('Failed to fetch location:', error);
      }
    }
    getLocation();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
      <section className="mb-12 flex flex-col items-center justify-center flex-grow">
        <h1 className="text-8xl font-bold mb-6 text-center">
          <TextGradient text="Hey, I'm Maxwell." />
        </h1>
        <p className="text-2xl text-white max-w-3xl text-center mb-12">
          A software developer who loves to build cool apps, websites, and play with new technologies.
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="https://www.linkedin.com/in/maxwell-souchereau/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-6xl text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/msouch" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-6xl text-purple-600 hover:text-purple-800 transition-all duration-300 hover:scale-110"
          >
            <AiFillGithub />
          </a>
          <a 
            href="mailto:msouch3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-6xl text-green-600 hover:text-green-900 transition-all duration-300 hover:scale-110"
          >
            <HiOutlineMail />
          </a>
        </div>

        <a 
          href="https://docs.google.com/document/d/1zjF_iB1xACC3VaLuSReaWCgmrRhmTzR4XM4UDdNQl4I/edit?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center transition-colors"
        >
          <HiDocumentText className="text-6xl text-red-600 hover:text-red-800 transition-all duration-300 hover:scale-110" />
          <span className="text-xl text-white">Resume</span>
        </a>
      </section>
      
      {location && (
        <section className="flex justify-center mb-20">
          <p className="text-lg text-gray-400 text-center mt-[-20px]">
            Viewing from {location.city}, {location.country}
          </p>
        </section>
      )}
    </div>
  );
}