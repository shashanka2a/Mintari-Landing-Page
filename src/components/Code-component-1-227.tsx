import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for trying out Momint",
      features: [
        "3 AI transformations",
        "Basic storybook templates",
        "Digital frames only",
        "Community support"
      ],
      gradient: "from-gray-400 to-gray-500",
      bgGradient: "from-gray-50 to-gray-100",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Creator",
      price: "$19",
      period: "/month",
      description: "For regular content creators",
      features: [
        "50 AI transformations",
        "Premium storybook templates",
        "Digital & physical frames",
        "Priority support",
        "NFT minting included",
        "Custom frame designs"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "For businesses and professionals",
      features: [
        "Unlimited AI transformations",
        "Custom storybook creation",
        "Premium frame materials",
        "24/7 priority support",
        "Bulk NFT minting",
        "Brand customization",
        "API access",
        "Commercial license"
      ],
      gradient: "from-blue-500 to-teal-500",
      bgGradient: "from-blue-50 to-teal-50",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your creative journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`rounded-3xl border-0 bg-gradient-to-br ${plan.bgGradient} shadow-lg hover:shadow-xl transition-all duration-300 relative ${plan.popular ? 'ring-4 ring-purple-200 scale-105' : 'hover:-translate-y-2'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl mb-2 text-gray-800">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl text-gray-800">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full rounded-full py-3 ${plan.buttonVariant === 'default' 
                    ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white` 
                    : `border-2 text-gray-700 hover:bg-gray-50`
                  }`}
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}