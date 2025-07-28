import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="KRAYONS Events Background" 
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
      </div>
      
      {/* Floating Elements with Enhanced Animation */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl hero-float animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-accent/20 rounded-full blur-xl hero-float pulse-glow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-secondary/20 rounded-full blur-lg hero-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-32 w-20 h-20 bg-primary/15 rounded-full blur-lg hero-float" style={{animationDelay: '1s'}}></div>
      
      {/* Content with Enhanced Text Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Text Container with Frosted Glass Effect */}
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="space-y-8">
            {/* Main Tagline with Drop Shadow */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up" 
                style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
              Breaking The{" "}
              <span className="text-white animate-pulse">Barriers</span>{" "}
              Of Events &{" "}
              <span className="text-white animate-pulse" style={{animationDelay: '0.5s'}}>Marketing!</span>
            </h1>
            
            {/* Subtitle with Enhanced Contrast */}
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200"
               style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
              Since 2014, KRAYONS has empowered brands & startups with{" "}
              <strong className="text-white">Strategic Events</strong>, <strong className="text-white">Experiential Marketing</strong> &{" "}
              <strong className="text-white">Data-driven Solutions</strong> across India and beyond.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up animate-delay-300">
              <Button className="btn-hero text-lg group shadow-lg hover:shadow-xl transition-shadow">
                Let's Collaborate
                <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
              </Button>
              <Button variant="outline" className="text-white border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white hover:scale-105 transition-all duration-300 shadow-lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats with Counter Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-400">
          <div className="text-center group bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-white counter-animate hover:scale-110 transition-transform" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>10+</div>
            <div className="text-gray-100 group-hover:text-white transition-colors">Years of Excellence</div>
          </div>
          <div className="text-center group bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 animate-delay-100">
            <div className="text-4xl font-bold text-white counter-animate hover:scale-110 transition-transform" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>500+</div>
            <div className="text-gray-100 group-hover:text-white transition-colors">Successful Events</div>
          </div>
          <div className="text-center group bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 animate-delay-200">
            <div className="text-4xl font-bold text-white counter-animate hover:scale-110 transition-transform" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>50+</div>
            <div className="text-gray-100 group-hover:text-white transition-colors">Happy Clients</div>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-fade-in-up animate-delay-500">
        <div className="flex flex-col items-center space-y-2 hover:text-white transition-colors cursor-pointer group">
          <span className="text-sm group-hover:scale-105 transition-transform">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;