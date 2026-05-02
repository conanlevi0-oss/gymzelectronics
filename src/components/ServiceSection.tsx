import React from 'react';
import { Home, ShieldCheck, FileSearch, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

const ServiceSection = () => {
  return (
    <section className="py-20 bg-gray-light border-y border-gray-medium px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent-yellow/20 text-primary-blue px-4 py-2 rounded-full font-black text-sm uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" />
              Professional Repair Services
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
              Expert Repairs, <br />
              <span className="text-primary-blue">Right at Your Doorstep.</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-primary-blue text-white p-3 rounded-xl h-fit">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Home repair services available</h3>
                  <p className="text-gray-600">No need to carry heavy appliances. We come to you and fix it on-site.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary-blue text-white p-3 rounded-xl h-fit">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">We guarantee all our repairs</h3>
                  <p className="text-gray-600">Quality parts and expert craftsmanship. Peace of mind with every fix.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary-blue text-white p-3 rounded-xl h-fit">
                  <FileSearch className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Free quotations before work</h3>
                  <p className="text-gray-600">Transparent pricing. Know exactly what it costs before we start.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:0778866188" className="bg-primary-blue text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-primary-blue/90 transition-all flex items-center gap-3 shadow-xl shadow-primary-blue/20">
                <Phone className="w-6 h-6" />
                Call Now
              </a>
              <a href="https://wa.me/256778866188" className="bg-green-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-green-700 transition-all flex items-center gap-3 shadow-xl shadow-green-600/20">
                <MessageSquare className="w-6 h-6" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Badge / Illustration Area */}
          <div className="relative flex justify-center">
            {/* Price Quality Service Badge */}
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 bg-primary-blue rounded-full opacity-5 animate-pulse"></div>
              <div className="absolute inset-10 bg-accent-yellow rounded-full flex flex-col items-center justify-center border-8 border-primary-blue shadow-2xl transform rotate-3">
                <div className="bg-white p-6 rounded-full border-4 border-primary-blue mb-4">
                   <CheckCircle2 className="w-20 h-20 text-primary-blue" />
                </div>
                <div className="text-center">
                  <p className="text-primary-blue font-black text-3xl tracking-tighter">PRICE</p>
                  <p className="text-primary-blue font-black text-3xl tracking-tighter">QUALITY</p>
                  <p className="text-primary-blue font-black text-3xl tracking-tighter">SERVICE</p>
                </div>
              </div>
              
              {/* Floating accents */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-medium flex items-center gap-3 animate-bounce">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-bold text-gray-900">Certified Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
