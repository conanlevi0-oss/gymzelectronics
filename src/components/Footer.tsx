import React from 'react';
import { Phone, Mail, MapPin, Info, MessageCircle, Globe, Play } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Slogan */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center">
                <span className="text-primary-blue font-black text-xl">G</span>
              </div>
              <span className="font-black text-2xl tracking-tighter text-white">GMZ TECH</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed italic">
              "Repair is noble. Fixing is the ultimate form of self-reliance."
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-yellow hover:text-primary-blue transition-all">
                <Info className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-yellow hover:text-primary-blue transition-all">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-yellow hover:text-primary-blue transition-all">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-yellow hover:text-primary-blue transition-all">
                <Play className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider text-sm">Repair Guides</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link href="/category/treadmills" className="hover:text-accent-yellow transition-colors">Treadmill Repair</Link></li>
              <li><Link href="/category/microwaves" className="hover:text-accent-yellow transition-colors">Microwave Repair</Link></li>
              <li><Link href="/category/blenders" className="hover:text-accent-yellow transition-colors">Blender Repair</Link></li>
              <li><Link href="/category/toasters" className="hover:text-accent-yellow transition-colors">Toaster Repair</Link></li>
              <li><Link href="/category/flat-irons" className="hover:text-accent-yellow transition-colors">Flat Iron Repair</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider text-sm">Community</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link href="/about" className="hover:text-accent-yellow transition-colors">Our Story</Link></li>
              <li><Link href="/manifesto" className="hover:text-accent-yellow transition-colors">Repair Manifesto</Link></li>
              <li><Link href="/blog" className="hover:text-accent-yellow transition-colors">Fixer Blog</Link></li>
              <li><Link href="/careers" className="hover:text-accent-yellow transition-colors">Join the Team</Link></li>
              <li><Link href="/support" className="hover:text-accent-yellow transition-colors">Support Center</Link></li>
            </ul>
          </div>

          {/* Contact Info from Image */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent-yellow shrink-0" />
                <div>
                  <p className="font-bold text-white">Give us a call</p>
                  <p>0778866188</p>
                  <p>0705681001</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent-yellow shrink-0" />
                <div>
                  <p className="font-bold text-white">Visit our workshop</p>
                  <p>GMZ Electronics Hub, Main St.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-accent-yellow shrink-0" />
                <div>
                  <p className="font-bold text-white">Website</p>
                  <p>www.gmztech.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-medium">
          <p>© 2026 GMZ TECH. All repairs guaranteed. Repair All Domestic Electric home appliances.</p>
          <div className="flex gap-8">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
