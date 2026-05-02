import React from 'react';
import { Search, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-medium sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-primary-blue text-white py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Main Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center">
                <span className="text-primary-blue font-black text-xl">G</span>
              </div>
              <span className="font-black text-2xl tracking-tighter">GMZ TECH</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-6 font-semibold text-sm uppercase tracking-wide">
              <Link href="/guides" className="hover:text-accent-yellow transition-colors">Repair Guides</Link>
              <Link href="/store" className="hover:text-accent-yellow transition-colors">Store</Link>
              <Link href="/community" className="hover:text-accent-yellow transition-colors">Community</Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:flex relative">
            <input 
              type="text" 
              placeholder="What do you want to fix today?" 
              className="w-full py-2 px-4 pr-10 rounded bg-white/10 border border-white/20 focus:bg-white focus:text-gray-900 focus:outline-none transition-all placeholder:text-white/60 focus:placeholder:text-gray-400"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-white/60 pointer-events-none group-focus-within:text-gray-400" />
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden">
              <Search className="w-6 h-6" />
            </button>
            <Link href="/cart" className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-accent-yellow text-primary-blue text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-primary-blue">0</span>
            </Link>
            <Link href="/login" className="hidden sm:flex items-center gap-2 py-1.5 px-4 rounded font-bold hover:bg-white/10 transition-colors">
              <User className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <button className="lg:hidden p-2 hover:bg-white/10 rounded-full">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Sub-navigation (Categories) */}
      <div className="bg-white py-2 px-4 md:px-8 border-b border-gray-medium overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="max-w-7xl mx-auto flex items-center gap-8 text-sm font-bold text-gray-700 uppercase tracking-tight">
          <Link href="/category/treadmills" className="hover:text-primary-blue transition-colors flex items-center gap-1">
            Treadmills <ChevronDown className="w-4 h-4 opacity-50" />
          </Link>
          <Link href="/category/microwaves" className="hover:text-primary-blue transition-colors flex items-center gap-1">
            Microwaves <ChevronDown className="w-4 h-4 opacity-50" />
          </Link>
          <Link href="/category/blenders" className="hover:text-primary-blue transition-colors flex items-center gap-1">
            Blenders <ChevronDown className="w-4 h-4 opacity-50" />
          </Link>
          <Link href="/category/toasters" className="hover:text-primary-blue transition-colors flex items-center gap-1">
            Toasters <ChevronDown className="w-4 h-4 opacity-50" />
          </Link>
          <Link href="/category/flat-irons" className="hover:text-primary-blue transition-colors flex items-center gap-1">
            Flat Irons <ChevronDown className="w-4 h-4 opacity-50" />
          </Link>
          <Link href="/category/kettles" className="hover:text-primary-blue transition-colors flex items-center gap-1">
            Kettles <ChevronDown className="w-4 h-4 opacity-50" />
          </Link>
          <Link href="/category/theatres" className="hover:text-primary-blue transition-colors flex items-center gap-1">
            Home Theatres <ChevronDown className="w-4 h-4 opacity-50" />
          </Link>
          <Link href="/fix-it" className="ml-auto text-accent-yellow bg-primary-blue px-3 py-1 rounded text-xs font-black uppercase tracking-widest hover:bg-primary-blue/90 transition-all">
            Fix Your Stuff
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
