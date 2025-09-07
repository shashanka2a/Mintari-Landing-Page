import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl mb-6 text-white">
            Ready to Mint Your Moments?
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto">
            Join thousands of creators who are transforming their memories into digital masterpieces. Start your journey today.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg shadow-xl">
            Start Creating Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg">
            Watch Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-white mb-2">10k+</div>
            <div className="text-purple-200">Photos Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-white mb-2">5k+</div>
            <div className="text-purple-200">Happy Creators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-white mb-2">50k+</div>
            <div className="text-purple-200">NFTs Minted</div>
          </div>
        </div>
      </div>
    </section>
  );
}