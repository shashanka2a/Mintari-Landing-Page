"use client";

import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Sparkles, MousePointer, Heart, Share2, Download } from 'lucide-react';

export function Gallery() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const galleryItems = [
    {
      original: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG1lbW9yaWVzfGVufDF8fHx8MTc1NzI4NDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      transformed: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG1lbW9yaWVzfGVufDF8fHx8MTc1NzI4NDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&sat=-100&hue=200&blur=2",
      title: "Family Portrait → Magical Painting",
      date: "Dec 15, 2024",
      likes: 124,
      style: "Spirited Away Style"
    },
    {
      original: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1lbW9yaWVzfGVufDF8fHx8MTc1NzI4NDYzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      transformed: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1lbW9yaWVzfGVufDF8fHx8MTc1NzI4NDYzNXww&ixlib=rb-4.1.0&q=80&w=1080&sat=-50&hue=300&blur=1",
      title: "Childhood Memory → Storybook Art",
      date: "Dec 14, 2024",
      likes: 89,
      style: "My Neighbor Totoro"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-magical relative overflow-hidden">
      {/* Magical decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-4 h-4 text-soft-pink-400 animate-sparkle" />
        <Sparkles className="absolute bottom-32 right-20 w-3 h-3 text-lavender-400 animate-sparkle" style={{animationDelay: '1s'}} />
        <Sparkles className="absolute top-1/2 left-1/4 w-2 h-2 text-sky-blue-300 animate-float" style={{animationDelay: '2s'}} />
        <Sparkles className="absolute top-1/3 right-1/3 w-3 h-3 text-peach-400 animate-float" style={{animationDelay: '1.5s'}} />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-storybook bg-clip-text text-transparent font-display font-bold animate-fade-in">
            Gallery of Transformations 🎭
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans animate-fade-in" style={{animationDelay: '0.2s'}}>
            See how ordinary photos become extraordinary art pieces
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <MousePointer className="w-4 h-4" />
            <span className="font-sans">Hover to see the magic</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer animate-fade-in"
              style={{animationDelay: `${0.6 + index * 0.2}s`}}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Storybook frame border */}
              <div className="relative p-6 bg-gradient-to-br from-white to-soft-pink-50 rounded-3xl shadow-2xl border-4 border-gradient-to-r from-lavender-200 via-soft-pink-200 to-sky-blue-200">
                {/* Interactive image container with storybook frame */}
                <div className="relative h-80 rounded-2xl overflow-hidden border-4 border-amber-200 shadow-inner bg-gradient-to-br from-amber-50 to-orange-50">
                  {/* Before image (always visible, fades on hover) */}
                  <div className={`absolute inset-2 transition-all duration-700 ${hoveredItem === index ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    <ImageWithFallback 
                      src={item.original}
                      alt="Original photo"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 rounded-xl px-3 py-1 shadow-lg border border-soft-pink-200">
                      <span className="text-sm text-gray-700 font-sans font-medium">Before</span>
                    </div>
                  </div>
                  
                  {/* After image (fades in on hover) */}
                  <div className={`absolute inset-2 transition-all duration-700 ${hoveredItem === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <ImageWithFallback 
                      src={item.transformed}
                      alt="Transformed artwork"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute top-3 right-3 bg-gradient-peach text-white rounded-xl px-3 py-1 shadow-lg">
                      <span className="text-sm font-sans font-semibold">After ✨</span>
                    </div>
                  </div>
                  
                  {/* Magical hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-lavender-500/10 via-soft-pink-500/10 to-sky-blue-500/10 transition-all duration-500 ${hoveredItem === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/95 rounded-full p-4 shadow-2xl border-2 border-soft-pink-200 animate-sparkle">
                        <Sparkles className="w-8 h-8 text-soft-pink-500" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Title with magical styling */}
                        <div className="mt-6 space-y-3">
                          <h3 className="text-lg text-gray-800 font-sans font-semibold bg-gradient-to-r from-lavender-600 to-soft-pink-600 bg-clip-text text-transparent text-center">
                            {item.title}
                          </h3>
                          
                          {/* Metadata */}
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span className="font-sans">{item.date}</span>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4 text-soft-pink-500" />
                              <span className="font-sans">{item.likes}</span>
                            </div>
                          </div>
                          
                          {/* Style Tag */}
                          <div className="text-center">
                            <span className="inline-block bg-gradient-to-r from-lavender-100 to-soft-pink-100 text-lavender-700 px-3 py-1 rounded-full text-xs font-sans font-medium">
                              {item.style}
                            </span>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex items-center justify-center space-x-4 pt-2">
                            <button className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200">
                              <Share2 className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200">
                              <Download className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-soft-pink-200">
            <span className="text-gray-600 font-sans font-medium">Ready to transform your photos?</span>
            <span className="text-2xl animate-float">🎨</span>
          </div>
        </div>
      </div>
    </section>
  );
}