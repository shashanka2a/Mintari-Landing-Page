import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-lavender-500 via-pink-500 to-rose-500 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-white/30 animate-pulse" />
        <Heart className="absolute top-32 right-32 w-5 h-5 text-white/20 animate-pulse" style={{animationDelay: '1s'}} />
        <Sparkles className="absolute bottom-20 left-1/3 w-4 h-4 text-white/25 animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl mb-6 text-white" style={{fontFamily: 'system-ui', fontWeight: '800'}}>
            Ready to Mint Your Moments? ✨
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transform your memories into digital masterpieces. Start your creative journey today with Momint.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-lavender-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Start Creating Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-lavender-600 px-8 py-4 rounded-full text-lg transition-all duration-300">
            Watch Demo 🎬
          </Button>
        </div>
      </div>
    </section>
  );
}