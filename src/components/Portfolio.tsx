import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Calendar, MapPin, Users, Target, Lightbulb, TrendingUp, Sparkles, Award, Zap } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "Tech Startup Product Launch",
      client: "InnovateTech Solutions",
      challenge: "Launch a revolutionary AI product to enterprise market",
      solution: "Created immersive product demonstration experience with live AI interactions",
      impact: "250% increase in qualified leads, 40+ enterprise partnerships signed",
      category: "Product Launch",
      attendees: "500+",
      location: "Mumbai",
      duration: "3 Days",
      tags: ["AI Technology", "B2B", "Enterprise"]
    },
    {
      title: "International Brand Expansion",
      client: "Global Fashion House",
      challenge: "Enter Indian market with culturally relevant brand experience",
      solution: "Multi-city experiential campaign blending global aesthetics with local culture",
      impact: "30% brand awareness increase, 15 flagship store openings",
      category: "Brand Activation",
      attendees: "2000+",
      location: "Delhi, Mumbai, Bangalore",
      duration: "2 Months",
      tags: ["Fashion", "Cultural Integration", "Multi-city"]
    },
    {
      title: "Corporate Innovation Summit",
      client: "Fortune 500 Company",
      challenge: "Engage 1000+ employees in digital transformation initiative",
      solution: "Interactive workshops with gamified learning and real-time collaboration tools",
      impact: "95% employee engagement, 60% faster project adoption rate",
      category: "Corporate Event",
      attendees: "1000+",
      location: "Hyderabad",
      duration: "2 Days",
      tags: ["Digital Transformation", "Employee Engagement", "Innovation"]
    },
    {
      title: "Sustainable Beauty Campaign",
      client: "Eco-Beauty Startup",
      challenge: "Create awareness about sustainable beauty practices",
      solution: "Pop-up experiences in malls with DIY beauty workshops and sustainability pledges",
      impact: "500% social media engagement, 200+ retail partnerships",
      category: "Experiential Marketing",
      attendees: "5000+",
      location: "Pan-India",
      duration: "6 Weeks",
      tags: ["Sustainability", "Beauty", "Social Impact"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-wide text-primary/70 uppercase bg-primary/10 px-4 py-2 rounded-full">
                  SUCCESS STORIES
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                We have Stories<br />
                <span className="text-gradient">to inspire you</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Over years, businesses have trusted us for the agility, neatness and the robustness we promise and deliver
              </p>
            </div>
            
            <Button className="btn-hero px-8 py-6 text-lg font-semibold rounded-full">
              Read All Stories
            </Button>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            {/* Large Image Card - Top Left */}
            <div className="row-span-2 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                <img 
                  src="/lovable-uploads/62175959-0395-4f49-a3a1-b2cab4f30e26.png" 
                  alt="Event workspace setup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-colors duration-300" />
              </div>
            </div>

            {/* Marketing Card - Top Right */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer border border-teal-100">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-wide text-teal-600 uppercase bg-teal-100 px-3 py-1 rounded-full">
                  MARKETING
                </span>
                <h3 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors">
                  We can transform the way you connect with your audience at events
                </h3>
              </div>
            </div>

            {/* Event Design Card - Bottom Right */}
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer border border-orange-100">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-wide text-orange-600 uppercase bg-orange-100 px-3 py-1 rounded-full">
                  EVENT DESIGN
                </span>
                <h3 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors">
                  Creating immersive experiences that leave lasting impressions
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Success Cards Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer border border-blue-100">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wide text-blue-600 uppercase bg-blue-100 px-3 py-1 rounded-full">
                CORPORATE EVENTS
              </span>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                Bringing Fortune 500 companies together with engaging corporate summits
              </h3>
              <div className="pt-4 border-t border-blue-200">
                <div className="flex items-center justify-between text-sm text-blue-600">
                  <span className="font-semibold">1000+ Attendees</span>
                  <span className="font-semibold">95% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer border border-purple-100">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wide text-purple-600 uppercase bg-purple-100 px-3 py-1 rounded-full">
                BRAND ACTIVATION
              </span>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                Launching global brands into Indian markets with cultural resonance
              </h3>
              <div className="pt-4 border-t border-purple-200">
                <div className="flex items-center justify-between text-sm text-purple-600">
                  <span className="font-semibold">15 Cities</span>
                  <span className="font-semibold">30% Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer border border-green-100">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wide text-green-600 uppercase bg-green-100 px-3 py-1 rounded-full">
                EXPERIENTIAL
              </span>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                Creating interactive experiences that drive 250% increase in engagement
              </h3>
              <div className="pt-4 border-t border-green-200">
                <div className="flex items-center justify-between text-sm text-green-600">
                  <span className="font-semibold">5000+ Participants</span>
                  <span className="font-semibold">AI Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;