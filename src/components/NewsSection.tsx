import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "₹50 Crore Infrastructure Development Package Approved",
      excerpt: "Major infrastructure boost for the constituency including new roads, bridges, and public facilities to enhance connectivity and quality of life.",
      date: "2024-01-15",
      category: "Development",
      isBreaking: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Digital Learning Centers Inaugurated in 10 Villages",
      excerpt: "State-of-the-art computer labs and internet connectivity brought to rural schools, bridging the digital divide for students.",
      date: "2024-01-10",
      category: "Education",
      isBreaking: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Free Medical Camp Serves 2000+ Patients",
      excerpt: "Comprehensive health checkups, specialist consultations, and free medicines provided to underserved communities.",
      date: "2024-01-05",
      category: "Healthcare",
      isBreaking: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Youth Skill Development Program Launches",
      excerpt: "Partnership with leading institutes to provide job-oriented training in emerging technologies and traditional crafts.",
      date: "2023-12-28",
      category: "Employment",
      isBreaking: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Solar Power Initiative for Rural Electrification",
      excerpt: "Green energy project to provide reliable electricity to remote villages while promoting environmental sustainability.",
      date: "2023-12-20",
      category: "Environment",
      isBreaking: false,
      image: "/api/placeholder/400/250"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Development': 'bg-primary text-primary-foreground',
      'Education': 'bg-accent text-accent-foreground',
      'Healthcare': 'bg-green-500 text-white',
      'Employment': 'bg-blue-500 text-white',
      'Environment': 'bg-emerald-500 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="political-section-title">Latest News & Updates</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our latest initiatives, projects, and community developments. 
            Your awareness drives our accountability.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <div className="political-card p-0 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <div className="w-full h-64 lg:h-full bg-gradient-hero flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-2xl font-bold mb-4">Latest Development</h3>
                    <p className="text-lg opacity-90">Infrastructure Package Approved</p>
                  </div>
                </div>
                {newsItems[0].isBreaking && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      BREAKING
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(newsItems[0].category)}`}>
                    {newsItems[0].category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(newsItems[0].date)}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {newsItems[0].title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {newsItems[0].excerpt}
                </p>
                <Button className="political-button-primary group">
                  Read Full Story
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {newsItems.slice(1, 5).map((news) => (
            <article key={news.id} className="political-card p-6 group hover:shadow-glow transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(news.category)}`}>
                  {news.category}
                </span>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(news.date)}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {news.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {news.excerpt}
              </p>
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-primary hover:text-primary-light group"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="political-card p-8 bg-primary/5 border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated with Our Newsletter
          </h3>
          <p className="text-muted-foreground mb-6">
            Get the latest news, updates, and announcements delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground"
            />
            <Button className="political-button-primary px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;