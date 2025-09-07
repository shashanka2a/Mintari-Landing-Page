import { ArrowRight, Camera, Book, Frame, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-50 via-pink-50 to-rose-50 px-4 relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-4 h-4 text-pink-300 animate-pulse" />
        <Sparkles className="absolute top-32 right-20 w-3 h-3 text-lavender-400 animate-pulse" style={{animationDelay: '1s'}} />
        <Sparkles className="absolute bottom-40 left-1/4 w-5 h-5 text-rose-300 animate-pulse" style={{animationDelay: '2s'}} />
        <Sparkles className="absolute bottom-60 right-1/3 w-3 h-3 text-pink-400 animate-pulse" style={{animationDelay: '0.5s'}} />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-lavender-600 via-pink-500 to-rose-500 bg-clip-text text-transparent" 
              style={{fontFamily: 'system-ui', fontWeight: '800', borderRadius: '2rem'}}>
            Mint Your Moments ✨
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transform your precious photos into beautiful AI-generated storybooks and custom frames. 
            Turn memories into masterpieces.
          </p>
        </div>
        
        {/* Flow Visualization */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg mb-2" style={{fontWeight: '600'}}>Upload Photo</h3>
              <p className="text-sm text-gray-600 text-center max-w-32">Your favorite memories</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-pink-400 hidden md:block" />
            <div className="w-8 h-8 border-2 border-pink-300 border-dashed rounded-full md:hidden" />
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-lavender-400 to-pink-400 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <Book className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg mb-2" style={{fontWeight: '600'}}>AI Storybook</h3>
              <p className="text-sm text-gray-600 text-center max-w-32">Generated narrative</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-pink-400 hidden md:block" />
            <div className="w-8 h-8 border-2 border-pink-300 border-dashed rounded-full md:hidden" />
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <Frame className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg mb-2" style={{fontWeight: '600'}}>Custom Frame</h3>
              <p className="text-sm text-gray-600 text-center max-w-32">Ready to display</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-lavender-500 to-pink-500 hover:from-lavender-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Start Creating ✨
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg">
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
}