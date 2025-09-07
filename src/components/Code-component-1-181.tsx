"use client";
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl bg-gradient-to-r from-lavender-600 to-pink-600 bg-clip-text text-transparent" style={{fontWeight: '800'}}>
              Momint ✨
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-pink-600 transition-colors">Features</a>
            <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors">Gallery</a>
            <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-lavender-500 to-pink-500 hover:from-lavender-600 hover:to-pink-600 text-white rounded-full">
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-pink-100">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors">Features</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors">Gallery</a>
              <div className="flex flex-col gap-2 px-3 pt-2">
                <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-lavender-500 to-pink-500 hover:from-lavender-600 hover:to-pink-600 text-white rounded-full">
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