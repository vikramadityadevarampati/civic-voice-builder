import { ArrowRight, Users, Heart, Star } from "lucide-react";
import { Button } from "./ui/button";
import politicianPortrait from "@/assets/politician-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="political-hero">
                Serving the People with
                <span className="block text-accent">Integrity & Progress</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Together, we build a stronger community. Join me in creating a future where 
                every voice matters and every dream has the opportunity to flourish.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">People Served</div>
              </div>
              <div className="text-center p-4">
                <Heart className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="political-button-primary group"
                onClick={() => document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Vision
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="political-button-secondary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:justify-self-end animate-scale-in">
            <div className="relative">
              <img
                src={politicianPortrait}
                alt="Rajesh Kumar Sharma"
                className="w-full max-w-md rounded-2xl shadow-elegant animate-float"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-glow">
                <div className="text-sm font-semibold">Trusted Leader</div>
                <div className="text-xs opacity-90">Serving Since 2009</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;