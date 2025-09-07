import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-storybook relative overflow-hidden">
      {/* Magical floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-white/40 animate-sparkle" />
        <Heart className="absolute top-32 right-32 w-5 h-5 text-white/30 animate-sparkle" style={{animationDelay: '1s'}} />
        <Sparkles className="absolute bottom-20 left-1/3 w-4 h-4 text-white/35 animate-sparkle" style={{animationDelay: '2s'}} />
        <Sparkles className="absolute top-1/2 right-1/4 w-3 h-3 text-white/25 animate-float" style={{animationDelay: '1.5s'}} />
        <Heart className="absolute bottom-1/3 left-1/4 w-4 h-4 text-white/20 animate-float" style={{animationDelay: '2.5s'}} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl mb-6 text-white font-display font-bold animate-fade-in">
            Ready to Mint Your Moments? ✨
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-sans animate-fade-in" style={{animationDelay: '0.2s'}}>
            Transform your memories into digital masterpieces. Start your creative journey today with Mintari.
          </p>
        </div>
        
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <Button size="lg" className="bg-white text-lavender-600 hover:bg-gray-100 px-8 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-sans font-semibold">
                    Start Creating Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-lavender-600 px-8 py-4 rounded-2xl text-lg transition-all duration-300 font-sans font-semibold">
                    Watch Demo 🎬
                  </Button>
                </div>
                
                {/* Additional Benefits */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="flex items-center space-x-2 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm font-sans">Free to try</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm font-sans">Instant results</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm font-sans">Mint as NFT</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm font-sans">Order frames</span>
                  </div>
                </div>
      </div>
    </section>
  );
}