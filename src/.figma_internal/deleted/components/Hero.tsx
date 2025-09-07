import { ArrowRight, Camera, Book, Frame } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Mint Your Moments
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transform your precious photos into beautiful AI-generated storybooks and custom frames. 
            Turn memories into masterpieces.
          </p>
        </div>
        
        {/* Flow Visualization */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Upload Photo</h3>
              <p className="text-sm text-slate-400 text-center max-w-32">Your favorite memories</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-slate-600 hidden md:block" />
            <div className="w-8 h-8 border-2 border-slate-600 border-dashed rounded-full md:hidden" />
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <Book className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">AI Storybook</h3>
              <p className="text-sm text-slate-400 text-center max-w-32">Generated narrative</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-slate-600 hidden md:block" />
            <div className="w-8 h-8 border-2 border-slate-600 border-dashed rounded-full md:hidden" />
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <Frame className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Custom Frame</h3>
              <p className="text-sm text-slate-400 text-center max-w-32">Ready to display</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Start Creating
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-lg text-lg">
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
}