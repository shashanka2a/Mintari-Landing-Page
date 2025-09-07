"use client";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Sparkles, MousePointer } from 'lucide-react';

export function Gallery() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const galleryItems = [
    {
      original: "https://images.unsplash.com/photo-1587955793432-7c4ff80918ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG1lbW9yaWVzfGVufDF8fHx8MTc1NzI4NDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      transformed: "https://images.unsplash.com/photo-1648555412975-cfe0576b2f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNuZnQlMjBkaWdpdGFsJTIwYXJ0d29ya3xlbnwxfHx8fDE3NTcyODQ2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Family Portrait → Digital Art"
    },
    {
      original: "https://images.unsplash.com/photo-1755192627753-8b3b463b5aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5JTIwbW9tZW50c3xlbnwxfHx8fDE3NTcyODQ2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      transformed: "https://images.unsplash.com/photo-1598266629277-22f259f8049b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNkaWdpdGFsJTIwYXJ0JTIwZ2FsbGVyeSUyMGZyYW1lc3xlbnwxfHx8fDE3NTcyODQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Creative Moment → Framed Art"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-lavender-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-4 h-4 text-pink-300 animate-pulse" />
        <Sparkles className="absolute bottom-32 right-20 w-3 h-3 text-lavender-400 animate-pulse" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-lavender-600 to-pink-600 bg-clip-text text-transparent"
              style={{fontFamily: 'system-ui', fontWeight: '800'}}>
            Gallery of Transformations 🎭
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how ordinary photos become extraordinary art pieces
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
            <MousePointer className="w-4 h-4" />
            <span>Hover to see the magic</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white to-pink-50 p-4">
                {/* Interactive image container */}
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  {/* Before image (always visible, fades on hover) */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredItem === index ? 'opacity-0' : 'opacity-100'}`}>
                    <ImageWithFallback 
                      src={item.original}
                      alt="Original photo"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 rounded-xl px-3 py-1 shadow-lg">
                      <span className="text-sm text-gray-700">Before</span>
                    </div>
                  </div>
                  
                  {/* After image (fades in on hover) */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredItem === index ? 'opacity-100' : 'opacity-0'}`}>
                    <ImageWithFallback 
                      src={item.transformed}
                      alt="Transformed artwork"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-lavender-500 to-pink-500 text-white rounded-xl px-3 py-1 shadow-lg">
                      <span className="text-sm">After ✨</span>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-lavender-500/20 to-pink-500/20 transition-opacity duration-300 ${hoveredItem === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg">
                        <Sparkles className="w-6 h-6 text-pink-500" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg text-gray-800" style={{fontWeight: '600'}}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="text-gray-600">Ready to transform your photos?</span>
            <span className="text-2xl">🎨</span>
          </div>
        </div>
      </div>
    </section>
  );
}