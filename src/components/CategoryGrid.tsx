import React from 'react';
import { 
  Activity, 
  Zap, 
  RefreshCcw, 
  Flame, 
  Coffee, 
  Disc, 
  Speaker,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'Treadmills', icon: Activity, color: 'bg-blue-50', iconColor: 'text-primary-blue' },
  { name: 'Microwaves', icon: Zap, color: 'bg-yellow-50', iconColor: 'text-accent-yellow' },
  { name: 'Blenders', icon: RefreshCcw, color: 'bg-green-50', iconColor: 'text-green-600' },
  { name: 'Toasters', icon: Flame, color: 'bg-orange-50', iconColor: 'text-orange-600' },
  { name: 'Flat Irons', icon: Zap, color: 'bg-purple-50', iconColor: 'text-purple-600' },
  { name: 'Kettles & Percolators', icon: Coffee, color: 'bg-cyan-50', iconColor: 'text-cyan-600' },
  { name: 'DVD Players', icon: Disc, color: 'bg-red-50', iconColor: 'text-red-600' },
  { name: 'Home Theatres', icon: Speaker, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Repair Your Stuff</h2>
            <p className="text-gray-600 font-medium text-lg">Choose a category to find the right repair guide for your appliance.</p>
          </div>
          <Link href="/guides" className="hidden md:flex items-center gap-2 text-primary-blue font-bold hover:underline">
            View All Categories <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-gray-light border border-gray-medium rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary-blue hover:shadow-xl transition-all duration-300"
            >
              <div className={`${cat.color} p-6 rounded-full mb-6 group-hover:scale-110 transition-transform`}>
                <cat.icon className={`w-10 h-10 ${cat.iconColor}`} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary-blue transition-colors">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
