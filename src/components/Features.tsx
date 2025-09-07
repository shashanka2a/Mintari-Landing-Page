import { Sparkles, Coins, Frame, Star, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Art Generation",
      description: "Transform your photos with cutting-edge AI technology. Create unique artistic interpretations that capture the essence of your memories in stunning detail.",
      gradient: "from-soft-pink-400 to-coral-400",
      bgGradient: "from-soft-pink-50 to-coral-50",
      emoji: "🎨"
    },
    {
      icon: Coins,
      title: "NFT Minting",
      description: "Turn your creations into valuable NFTs. Own your digital art forever on the blockchain and potentially earn from your most treasured moments.",
      gradient: "from-lavender-400 to-sky-blue-400", 
      bgGradient: "from-lavender-50 to-sky-blue-50",
      emoji: "💎"
    },
    {
      icon: Frame,
      title: "Custom Frames",
      description: "Perfect presentation for every memory. Choose from our collection of premium digital and physical frames to showcase your art beautifully.",
      gradient: "from-peach-400 to-coral-400",
      bgGradient: "from-peach-50 to-coral-50",
      emoji: "🖼️"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-magical relative">
      {/* Magical decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Star className="absolute top-10 left-20 w-3 h-3 text-soft-pink-300 animate-sparkle" />
        <Heart className="absolute top-32 right-32 w-4 h-4 text-lavender-300 animate-sparkle" style={{animationDelay: '1.5s'}} />
        <Zap className="absolute bottom-20 left-1/3 w-3 h-3 text-sky-blue-300 animate-sparkle" style={{animationDelay: '2.5s'}} />
        <Sparkles className="absolute top-1/2 right-1/4 w-2 h-2 text-peach-300 animate-float" style={{animationDelay: '3s'}} />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-storybook bg-clip-text text-transparent font-display font-bold animate-fade-in">
            Magical Features ✨
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans animate-fade-in" style={{animationDelay: '0.2s'}}>
            Everything you need to transform your photos into stunning digital masterpieces
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`rounded-3xl border-0 bg-gradient-to-br ${feature.bgGradient} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in`} style={{animationDelay: `${0.4 + index * 0.2}s`}}>
              <CardContent className="p-8 relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 text-2xl opacity-60 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                  {feature.emoji}
                </div>
                <h3 className="text-2xl mb-4 text-gray-800 font-sans font-bold">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-sans mb-4">
                  {feature.description}
                </p>
                
                {/* Feature Benefits */}
                <div className="space-y-2">
                  {feature.title === "AI Art Generation" && (
                    <>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-soft-pink-400"></div>
                        <span className="font-sans">Studio Ghibli Style</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-coral-400"></div>
                        <span className="font-sans">Watercolor Effects</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-soft-pink-400"></div>
                        <span className="font-sans">Oil Painting Style</span>
                      </div>
                    </>
                  )}
                  {feature.title === "NFT Minting" && (
                    <>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-lavender-400"></div>
                        <span className="font-sans">Blockchain Verified</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-sky-blue-400"></div>
                        <span className="font-sans">Unique Ownership</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-lavender-400"></div>
                        <span className="font-sans">Tradeable Assets</span>
                      </div>
                    </>
                  )}
                  {feature.title === "Custom Frames" && (
                    <>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-peach-400"></div>
                        <span className="font-sans">Premium Materials</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-coral-400"></div>
                        <span className="font-sans">Custom Sizes</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-peach-400"></div>
                        <span className="font-sans">Worldwide Shipping</span>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}