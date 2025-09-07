import { Sparkles, Coins, Frame, Star, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Art Generation",
      description: "Transform your photos with cutting-edge AI technology. Create unique artistic interpretations that capture the essence of your memories in stunning detail.",
      gradient: "from-pink-400 to-rose-400",
      bgGradient: "from-pink-50 to-rose-50",
      emoji: "🎨"
    },
    {
      icon: Coins,
      title: "NFT Minting",
      description: "Turn your creations into valuable NFTs. Own your digital art forever on the blockchain and potentially earn from your most treasured moments.",
      gradient: "from-lavender-400 to-pink-400", 
      bgGradient: "from-lavender-50 to-pink-50",
      emoji: "💎"
    },
    {
      icon: Frame,
      title: "Custom Frames",
      description: "Perfect presentation for every memory. Choose from our collection of premium digital and physical frames to showcase your art beautifully.",
      gradient: "from-rose-400 to-pink-400",
      bgGradient: "from-rose-50 to-pink-50",
      emoji: "🖼️"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-lavender-25 to-pink-25 relative">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Star className="absolute top-10 left-20 w-3 h-3 text-pink-200 animate-pulse" />
        <Heart className="absolute top-32 right-32 w-4 h-4 text-lavender-200 animate-pulse" style={{animationDelay: '1.5s'}} />
        <Zap className="absolute bottom-20 left-1/3 w-3 h-3 text-rose-200 animate-pulse" style={{animationDelay: '2.5s'}} />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-lavender-600 to-pink-600 bg-clip-text text-transparent"
              style={{fontFamily: 'system-ui', fontWeight: '800'}}>
            Powerful Features 🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to transform your photos into stunning digital masterpieces
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`rounded-3xl border-0 bg-gradient-to-br ${feature.bgGradient} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
              <CardContent className="p-8 relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 text-2xl opacity-60">
                  {feature.emoji}
                </div>
                <h3 className="text-2xl mb-4 text-gray-800" style={{fontWeight: '700'}}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}