import { Sparkles, Coins, Frame } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Art Generation",
      description: "Transform your photos with cutting-edge AI technology. Create unique artistic interpretations that capture the essence of your memories in stunning detail.",
      gradient: "from-pink-400 to-rose-400",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: Coins,
      title: "NFT Minting",
      description: "Turn your creations into valuable NFTs. Own your digital art forever on the blockchain and potentially earn from your most treasured moments.",
      gradient: "from-purple-400 to-indigo-400", 
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: Frame,
      title: "Custom Frames",
      description: "Perfect presentation for every memory. Choose from our collection of premium digital and physical frames to showcase your art beautifully.",
      gradient: "from-blue-400 to-teal-400",
      bgGradient: "from-blue-50 to-teal-50"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your photos into stunning digital masterpieces
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`rounded-3xl border-0 bg-gradient-to-br ${feature.bgGradient} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 shadow-md`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-800">
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