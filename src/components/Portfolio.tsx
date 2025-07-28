import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Users } from "lucide-react";

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
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Discover how we've helped brands break barriers and achieve extraordinary results through strategic events and innovative marketing solutions.
          </p>
        </div>

        {/* Case Studies Grid with Enhanced Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <Card className="card-hover card-tilt shadow-card border-0 bg-card/80 backdrop-blur-sm group overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {study.category}
                    </Badge>
                    <Button variant="ghost" size="sm" className="p-2 hover:scale-110 transition-transform icon-bounce">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{study.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {study.client}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Event Details with Hover Effects */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground group-hover:text-foreground transition-colors">
                      <Users className="w-4 h-4 icon-bounce" />
                      <span>{study.attendees}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground group-hover:text-foreground transition-colors">
                      <MapPin className="w-4 h-4 icon-bounce" />
                      <span>{study.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground group-hover:text-foreground transition-colors">
                      <Calendar className="w-4 h-4 icon-bounce" />
                      <span>{study.duration}</span>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="transform group-hover:translate-x-1 transition-transform">
                    <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="transform group-hover:translate-x-1 transition-transform" style={{transitionDelay: '0.1s'}}>
                    <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>

                  {/* Impact */}
                  <div className="transform group-hover:translate-x-1 transition-transform" style={{transitionDelay: '0.2s'}}>
                    <h4 className="font-semibold text-foreground mb-2">Impact</h4>
                    <p className="text-sm font-medium text-primary group-hover:scale-105 transition-transform origin-left">{study.impact}</p>
                  </div>

                  {/* Tags with Staggered Animation */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 hover:scale-105 transition-all duration-200"
                        style={{transitionDelay: `${tagIndex * 0.1}s`}}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA with Pulse Animation */}
        <div className="text-center mt-12 animate-fade-in-up animate-delay-600">
          <Button className="btn-hero pulse-glow">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;