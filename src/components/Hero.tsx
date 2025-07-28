import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="KRAYONS Events Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl hero-float"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-accent/20 rounded-full blur-xl hero-float" style={{animationDelay: '2s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Breaking The{" "}
            <span className="text-gradient">Barriers</span>{" "}
            Of Events &{" "}
            <span className="text-gradient">Marketing!</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Since 2014, KRAYONS has empowered brands & startups with{" "}
            <strong>Strategic Events</strong>, <strong>Experiential Marketing</strong> &{" "}
            <strong>Data-driven Solutions</strong> across India and beyond.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button className="btn-hero text-lg">
              Let's Collaborate
            </Button>
            <Button variant="outline" className="btn-outline-gradient text-white border-white/30 hover:bg-white/10">
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">10+</div>
              <div className="text-gray-300">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">500+</div>
              <div className="text-gray-300">Successful Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">50+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;