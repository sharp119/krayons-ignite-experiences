import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "KRAYONS transformed our product launch from a simple announcement to an unforgettable experience. Their strategic approach and attention to detail resulted in 300% higher engagement than our previous launches.",
      author: "Priya Sharma",
      position: "CMO",
      company: "TechVantage Solutions",
      rating: 5
    },
    {
      quote: "Working with KRAYONS for our international expansion was game-changing. They understood our brand perfectly and created culturally relevant experiences that resonated with Indian audiences while maintaining our global identity.",
      author: "Marcus Johnson",
      position: "Global Marketing Director",
      company: "Luxe Fashion International",
      rating: 5
    },
    {
      quote: "The data-driven insights and ROI tracking that KRAYONS provided were exceptional. We could see exactly how our investment translated into business results. Their experiential marketing campaign delivered 250% ROI.",
      author: "Rajesh Gupta",
      position: "Founder & CEO",
      company: "GreenTech Innovations",
      rating: 5
    },
    {
      quote: "KRAYONS doesn't just execute events – they craft experiences. Our corporate summit became a catalyst for company-wide digital transformation. The engagement levels and employee feedback were outstanding.",
      author: "Sarah Chen",
      position: "VP People & Culture",
      company: "Global Dynamics Corp",
      rating: 5
    },
    {
      quote: "From concept to execution, KRAYONS exceeded every expectation. Their team's creativity combined with strategic thinking helped us achieve our sustainability goals while creating buzz in the market.",
      author: "Ananya Reddy",
      position: "Marketing Head",
      company: "EcoBeauty Brand",
      rating: 5
    },
    {
      quote: "The level of professionalism and innovation KRAYONS brings is unmatched. They turned our vision into reality and helped us connect with our audience in ways we never thought possible.",
      author: "David Thompson",
      position: "Director of Marketing",
      company: "Innovation Labs",
      rating: 5
    }
  ];

  const clientLogos = [
    "TechVantage", "Luxe Fashion", "GreenTech", "Global Dynamics", 
    "EcoBeauty", "Innovation Labs", "StartupAccel", "FutureCorps"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Don't just take our word for it. Here's what industry leaders have to say about their experience working with KRAYONS.
          </p>
        </div>

        {/* Testimonials Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
              <Card className="card-hover card-tilt shadow-card border-0 bg-card/80 backdrop-blur-sm group hover:bg-card transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/40 group-hover:text-primary/60 transition-colors" />
                  </div>

                  {/* Rating with Animation */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-primary text-primary hover:scale-125 transition-transform cursor-default"
                        style={{transitionDelay: `${i * 0.1}s`}}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow group-hover:text-foreground transition-colors">
                    "{testimonial.quote}"
                  </p>

                  {/* Author with Hover Effect */}
                  <div className="border-t pt-4 group-hover:border-primary/20 transition-colors">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{testimonial.position}</div>
                    <div className="text-sm text-primary font-medium group-hover:scale-105 transition-transform origin-left">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Client Logos with Animation */}
        <div className="text-center animate-fade-in-up animate-delay-600">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Trusted by Leading Brands
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="bg-card/50 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-card hover:scale-105 transition-all duration-300 text-center animate-scale-in"
                style={{animationDelay: `${index * 0.1 + 0.7}s`}}
              >
                <div className="text-muted-foreground font-medium text-sm hover:text-foreground transition-colors">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary with Counter Animation */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 animate-slide-up animate-delay-800 hover:bg-primary/10 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-2 counter-animate hover:scale-110 transition-transform cursor-default">4.9/5</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">Average Client Rating</div>
            </div>
            <div className="group animate-delay-100">
              <div className="text-3xl font-bold text-primary mb-2 counter-animate hover:scale-110 transition-transform cursor-default">100%</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">Client Retention Rate</div>
            </div>
            <div className="group animate-delay-200">
              <div className="text-3xl font-bold text-primary mb-2 counter-animate hover:scale-110 transition-transform cursor-default">50+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;