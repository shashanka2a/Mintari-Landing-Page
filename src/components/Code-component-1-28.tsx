import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const galleryItems = [
    {
      original: "https://images.unsplash.com/photo-1587955793432-7c4ff80918ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG1lbW9yaWVzfGVufDF8fHx8MTc1NzI4NDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      transformed: "https://images.unsplash.com/photo-1648555412975-cfe0576b2f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNuZnQlMjBkaWdpdGFsJTIwYXJ0d29ya3xlbnwxfHx8fDE3NTcyODQ2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Family Portrait → Digital Art"
    },
    {
      original: "https://images.unsplash.com/photo-1755192627753-8b3b463b5aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5JTIwbW9tZW50c3xlbnwxfHx8fDE3NTcyODQ2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      transformed: "https://images.unsplash.com/photo-1598266629277-22f259f8049b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNkaWdpdGFsJTIwYXJ0JTIwZ2FsbGVyeSUyMGZyYW1lc3xlbnwxfHx8fDE3NTcyODQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Creative Moment → Framed Art"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
            Gallery of Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how ordinary photos become extraordinary art pieces
          </p>
        </div>
        
        <div className="space-y-16">
          {galleryItems.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-lg z-10">
                    <span className="text-sm text-gray-600">Before</span>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWithFallback 
                      src={item.original}
                      alt="Original photo"
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl px-4 py-2 shadow-lg z-10">
                    <span className="text-sm">After</span>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWithFallback 
                      src={item.transformed}
                      alt="Transformed artwork"
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <span className="text-gray-600">Ready to transform your photos?</span>
            <span className="text-2xl">🎨</span>
          </div>
        </div>
      </div>
    </section>
  );
}