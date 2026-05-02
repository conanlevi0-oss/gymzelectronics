import React from 'react';
import { Search, PenTool as Tool, BookOpen, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient py-16 md:py-24 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-yellow rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
          Repair All Domestic <br />
          <span className="text-accent-yellow">Electric Home Appliances</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">
          GMZ TECH is the free repair guide for everything, written by everyone. 
          We provide the parts, tools, and guides to help you fix it yourself.
        </p>

        {/* Big Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <input 
            type="text" 
            placeholder="Search our 100,000+ free repair guides..." 
            className="w-full py-5 px-6 rounded-lg text-xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent-yellow transition-all pr-16"
          />
          <button className="absolute right-3 top-3 bg-primary-blue text-white p-3 rounded-md hover:bg-primary-blue/90 transition-all shadow-lg">
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* Stats/Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white text-left group hover:bg-white/20 transition-all cursor-pointer">
            <div className="bg-accent-yellow p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
              <Tool className="w-6 h-6 text-primary-blue" />
            </div>
            <h3 className="font-bold text-lg mb-1">Fix It Yourself</h3>
            <p className="text-sm text-white/70">Expert guides for home appliances, electronics, and more.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white text-left group hover:bg-white/20 transition-all cursor-pointer">
            <div className="bg-accent-yellow p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-primary-blue" />
            </div>
            <h3 className="font-bold text-lg mb-1">100k+ Guides</h3>
            <p className="text-sm text-white/70">Community-driven documentation for thousands of devices.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white text-left group hover:bg-white/20 transition-all cursor-pointer">
            <div className="bg-accent-yellow p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-primary-blue" />
            </div>
            <h3 className="font-bold text-lg mb-1">Global Community</h3>
            <p className="text-sm text-white/70">Join millions of people helping each other fix their stuff.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
