import { Sparkles, Coins, Frame } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Art Generation",
      description: "Transform your photos with cutting-edge AI technology. Create unique artistic interpretations that capture the essence of your memories in stunning detail."
    },
    {
      icon: Coins,
      title: "NFT Minting",
      description: "Turn your creations into valuable NFTs. Own your digital art forever on the blockchain and potentially earn from your most treasured moments."
    },
    {
      icon: Frame,
      title: "Custom Frames",
      description: "Perfect presentation for every memory. Choose from our collection of premium digital and physical frames to showcase your art beautifully."
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to transform your photos into stunning digital masterpieces
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="rounded-2xl border border-slate-700 bg-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
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