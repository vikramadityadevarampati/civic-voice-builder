import { Facebook, Twitter, Instagram, Youtube, Linkedin, ExternalLink } from "lucide-react";

const SocialSection = () => {
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      handle: "@RajeshKumarSharmaOfficial",
      followers: "45.2K",
      description: "Daily updates, community events, and policy discussions",
      url: "https://facebook.com/rajeshkumarsharma",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@RKSharmaOfficial",
      followers: "32.8K",
      description: "Real-time updates, news, and public statements",
      url: "https://twitter.com/rksharma",
      color: "bg-sky-500 hover:bg-sky-600"
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@rajeshsharma_official",
      followers: "28.5K",
      description: "Behind-the-scenes moments and community highlights",
      url: "https://instagram.com/rajeshsharma",
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "Rajesh Kumar Sharma",
      followers: "15.3K",
      description: "Speeches, interviews, and development documentaries",
      url: "https://youtube.com/@rajeshsharma",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "Rajesh Kumar Sharma",
      followers: "12.1K",
      description: "Professional updates and policy discussions",
      url: "https://linkedin.com/in/rajeshsharma",
      color: "bg-blue-700 hover:bg-blue-800"
    }
  ];

  const recentPosts = [
    {
      platform: "Twitter",
      time: "2 hours ago",
      content: "Proud to announce the completion of road connectivity project in 5 villages. Infrastructure development remains our top priority. #Development #Progress"
    },
    {
      platform: "Facebook",
      time: "1 day ago",
      content: "Attended the graduation ceremony at our newly established technical institute. Watching young minds equipped with skills for the future fills me with hope."
    },
    {
      platform: "Instagram",
      time: "3 days ago",
      content: "Community health camp successfully served 500+ families today. Healthcare for all remains our unwavering commitment."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="political-section-title">Connect on Social Media</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected and be part of the conversation. Follow our social media channels 
            for real-time updates, behind-the-scenes content, and community engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Social Platforms */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-8">Follow Us</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {socialPlatforms.map((platform) => (
                <div key={platform.name} className="political-card p-6 group hover:shadow-glow transition-all">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg text-white transition-colors ${platform.color}`}>
                      <platform.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {platform.name}
                        </h4>
                        <span className="text-sm text-primary font-semibold">
                          {platform.followers} followers
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {platform.handle}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {platform.description}
                      </p>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors ${platform.color}`}
                      >
                        Follow
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Guidelines */}
            <div className="political-card p-6 mt-8 bg-primary/5 border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Social Media Engagement Guidelines
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• We encourage respectful and constructive dialogue</p>
                <p>• Share your ideas, concerns, and suggestions</p>
                <p>• Help us spread awareness about community initiatives</p>
                <p>• Report any misuse or inappropriate content</p>
                <p>• Use hashtags #RajeshSharma #CommunityFirst #Development</p>
              </div>
            </div>
          </div>

          {/* Recent Posts Feed */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Recent Updates</h3>
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <div key={index} className="political-card p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-primary">
                      {post.platform}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {post.time}
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {post.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Stats */}
            <div className="political-card p-6 mt-8 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Social Media Reach
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Followers</span>
                  <span className="text-lg font-bold text-primary">133.9K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Monthly Engagement</span>
                  <span className="text-lg font-bold text-accent">45.2K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Content Pieces</span>
                  <span className="text-lg font-bold text-primary">890+</span>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="political-card p-6 mt-6 bg-accent/10 border-accent/20 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Email Newsletter
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get weekly updates directly in your inbox
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground"
                />
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;