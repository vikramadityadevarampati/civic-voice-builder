import { Target, Heart, Lightbulb, Shield, Globe, Leaf } from "lucide-react";

const VisionSection = () => {
  const visionPoints = [
    {
      icon: Target,
      title: "Economic Development",
      description: "Creating sustainable job opportunities and supporting local businesses through strategic industrial growth and skill development programs."
    },
    {
      icon: Heart,
      title: "Healthcare for All",
      description: "Ensuring accessible, affordable, and quality healthcare facilities in every village and urban area within our constituency."
    },
    {
      icon: Lightbulb,
      title: "Education Excellence",
      description: "Building world-class educational institutions and providing digital literacy to prepare our youth for the future economy."
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Strengthening law enforcement and community safety measures to create a secure environment for families and businesses."
    },
    {
      icon: Globe,
      title: "Digital Connectivity",
      description: "Bridging the digital divide by ensuring high-speed internet connectivity reaches every corner of our region."
    },
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Implementing sustainable development practices while preserving our natural heritage for future generations."
    }
  ];

  const missionValues = [
    {
      title: "Transparency",
      description: "Every decision, every rupee spent, and every project undertaken will be open to public scrutiny."
    },
    {
      title: "Inclusivity",
      description: "Ensuring that development reaches every community, regardless of caste, creed, or economic status."
    },
    {
      title: "Innovation",
      description: "Embracing modern solutions and technology to solve age-old problems efficiently."
    },
    {
      title: "Accountability",
      description: "Taking full responsibility for commitments made and delivering measurable results."
    }
  ];

  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Vision Header */}
        <div className="text-center mb-16">
          <h2 className="political-section-title">Vision & Mission</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Building a prosperous, inclusive, and sustainable future where every citizen 
            has the opportunity to thrive and contribute to our collective progress.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="political-card p-12 mb-16 text-center bg-gradient-hero text-white">
          <h3 className="text-3xl font-bold mb-6">Our Vision 2030</h3>
          <p className="text-xl leading-relaxed opacity-95">
            "To transform our constituency into a model region that exemplifies sustainable development, 
            social harmony, and economic prosperity—where every citizen enjoys equal opportunities, 
            quality education, healthcare, and a dignified standard of living."
          </p>
        </div>

        {/* Vision Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <div 
              key={index} 
              className="political-card p-8 group hover:shadow-glow transition-all duration-300"
            >
              <div className="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <point.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Values */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground">
              The principles that guide every action and decision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionValues.map((value, index) => (
              <div 
                key={index} 
                className="political-card p-8 border-l-4 border-accent hover:border-primary transition-colors"
              >
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="political-card p-8 mt-16 bg-accent/10 border-accent/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join the Movement for Change
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Together, we can turn these visions into reality. Your voice, your ideas, 
            and your participation are crucial to building the future we all deserve.
          </p>
          <button 
            className="political-button-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;