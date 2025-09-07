"use client";

import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-soft-pink-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl bg-gradient-storybook bg-clip-text text-transparent font-display font-bold">
              Mintari ✨
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-soft-pink-600 transition-colors font-sans font-medium">Features</a>
            <a href="#gallery" className="text-gray-700 hover:text-soft-pink-600 transition-colors font-sans font-medium">Gallery</a>
            <Button variant="outline" className="border-soft-pink-300 text-soft-pink-600 hover:bg-soft-pink-50 rounded-2xl font-sans font-medium">
              Sign In
            </Button>
            <Button className="bg-gradient-peach hover:from-peach-500 hover:to-coral-500 text-white rounded-2xl font-sans font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg border-t border-soft-pink-100">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-soft-pink-600 transition-colors font-sans font-medium">Features</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-soft-pink-600 transition-colors font-sans font-medium">Gallery</a>
              <div className="flex flex-col gap-2 px-3 pt-2">
                <Button variant="outline" className="border-soft-pink-300 text-soft-pink-600 hover:bg-soft-pink-50 rounded-2xl font-sans font-medium">
                  Sign In
                </Button>
                <Button className="bg-gradient-peach hover:from-peach-500 hover:to-coral-500 text-white rounded-2xl font-sans font-semibold shadow-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}