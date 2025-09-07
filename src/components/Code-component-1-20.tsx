import { ArrowRight, Camera, Book, Frame } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Mint Your Moments
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Transform your precious photos into beautiful AI-generated storybooks and custom frames. 
            Turn memories into masterpieces.
          </p>
        </div>
        
        {/* Flow Visualization */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center mb-4 shadow-lg">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg mb-2">Upload Photo</h3>
              <p className="text-sm text-gray-600 text-center max-w-32">Your favorite memories</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-gray-400 hidden md:block" />
            <div className="w-8 h-8 border-2 border-gray-400 border-dashed rounded-full md:hidden" />
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center mb-4 shadow-lg">
                <Book className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg mb-2">AI Storybook</h3>
              <p className="text-sm text-gray-600 text-center max-w-32">Generated narrative</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-gray-400 hidden md:block" />
            <div className="w-8 h-8 border-2 border-gray-400 border-dashed rounded-full md:hidden" />
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center mb-4 shadow-lg">
                <Frame className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg mb-2">Custom Frame</h3>
              <p className="text-sm text-gray-600 text-center max-w-32">Ready to display</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg">
            Start Creating
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full text-lg">
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
}