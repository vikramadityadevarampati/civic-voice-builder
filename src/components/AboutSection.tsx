import { GraduationCap, Award, Users, Building } from "lucide-react";

const AboutSection = () => {
  const milestones = [
    {
      year: "1975",
      title: "Born in Rural Haryana",
      description: "Born into a farming family, understanding grassroots challenges from day one."
    },
    {
      year: "1997",
      title: "Engineering Graduate",
      description: "Completed B.Tech in Civil Engineering from IIT Delhi with distinction."
    },
    {
      year: "2003",
      title: "Community Service Begins",
      description: "Started volunteer work in education and rural development programs."
    },
    {
      year: "2009",
      title: "First Election Victory",
      description: "Elected as MLA with a historic mandate from the people."
    },
    {
      year: "2023",
      title: "Third Consecutive Term",
      description: "Re-elected with increased majority, proving consistent public service."
    }
  ];

  const achievements = [
    {
      icon: GraduationCap,
      title: "Education Champion",
      description: "Established 15+ government schools and computer centers"
    },
    {
      icon: Building,
      title: "Infrastructure Developer",
      description: "Built roads, bridges, and modern healthcare facilities"
    },
    {
      icon: Users,
      title: "Employment Creator",
      description: "Generated 5000+ jobs through skill development programs"
    },
    {
      icon: Award,
      title: "Recognition Received",
      description: "State Excellence Award for Rural Development (2020, 2022)"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="political-section-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey rooted in service, driven by passion for community development, 
            and committed to creating lasting positive change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Life Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-4 pb-8">
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="political-card p-6 flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {milestone.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Key Achievements</h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="political-card p-6 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Personal Quote */}
            <div className="political-card p-8 bg-primary/5 border-primary/20">
              <blockquote className="text-lg text-foreground italic mb-4">
                "True leadership is not about being served, but about serving others. 
                Every decision I make is guided by one simple question: How will this 
                benefit the people who have placed their trust in me?"
              </blockquote>
              <footer className="text-primary font-semibold">
                — Rajesh Kumar Sharma
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;