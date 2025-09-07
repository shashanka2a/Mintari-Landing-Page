import { ArrowRight, Camera, Book, Frame, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-magical px-4 relative overflow-hidden">
      {/* Magical floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-4 h-4 text-soft-pink-400 animate-sparkle" />
        <Sparkles className="absolute top-32 right-20 w-3 h-3 text-lavender-400 animate-sparkle" style={{animationDelay: '1s'}} />
        <Sparkles className="absolute bottom-40 left-1/4 w-5 h-5 text-sky-blue-400 animate-sparkle" style={{animationDelay: '2s'}} />
        <Sparkles className="absolute bottom-60 right-1/3 w-3 h-3 text-peach-400 animate-sparkle" style={{animationDelay: '0.5s'}} />
        <Sparkles className="absolute top-1/2 left-1/6 w-2 h-2 text-lavender-300 animate-float" style={{animationDelay: '1.5s'}} />
        <Sparkles className="absolute top-1/3 right-1/4 w-3 h-3 text-soft-pink-300 animate-float" style={{animationDelay: '2.5s'}} />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="mb-8">
                  <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-storybook bg-clip-text text-transparent font-display font-bold animate-fade-in"
                      style={{lineHeight: '1.1'}}>
                    Mint Your Ghibli Moments ✨
                  </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans animate-fade-in" 
             style={{animationDelay: '0.2s'}}>
            Transform your precious photos into beautiful AI-generated storybooks and custom frames. 
            Turn memories into magical masterpieces.
          </p>
        </div>
        
        {/* Flow Visualization */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-soft-pink-400 to-coral-400 flex items-center justify-center mb-4 shadow-xl hover:scale-110 transition-all duration-300 hover:shadow-2xl">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg mb-2 font-sans font-semibold text-gray-700">Upload Photo</h3>
              <p className="text-sm text-gray-500 text-center max-w-32">Your favorite memories</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-soft-pink-400 hidden md:block animate-float" />
            <div className="w-8 h-8 border-2 border-soft-pink-300 border-dashed rounded-full md:hidden" />
            
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-lavender-400 to-sky-blue-400 flex items-center justify-center mb-4 shadow-xl hover:scale-110 transition-all duration-300 hover:shadow-2xl">
                <Book className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg mb-2 font-sans font-semibold text-gray-700">AI Storybook</h3>
              <p className="text-sm text-gray-500 text-center max-w-32">Generated narrative</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-soft-pink-400 hidden md:block animate-float" />
            <div className="w-8 h-8 border-2 border-soft-pink-300 border-dashed rounded-full md:hidden" />
            
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-peach-400 to-coral-400 flex items-center justify-center mb-4 shadow-xl hover:scale-110 transition-all duration-300 hover:shadow-2xl">
                <Frame className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg mb-2 font-sans font-semibold text-gray-700">Custom Frame</h3>
              <p className="text-sm text-gray-500 text-center max-w-32">Ready to display</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '1s'}}>
          <Button size="lg" className="bg-gradient-peach hover:from-peach-500 hover:to-coral-500 text-white px-8 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-sans font-semibold">
            Start Creating ✨
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-soft-pink-300 text-soft-pink-600 hover:bg-soft-pink-50 px-8 py-4 rounded-2xl text-lg font-sans font-semibold">
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
}