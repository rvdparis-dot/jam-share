import { Vote, Users, Zap, Shield, Music, Smartphone } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: Vote,
      title: "Democratic Voting",
      description: "Every guest's vote counts. Watch songs rise and fall in real-time based on collective preference.",
      gradient: "bg-gradient-card"
    },
    {
      icon: Users,
      title: "Fair Play Algorithms",
      description: "Advanced algorithms prevent spam and ensure everyone gets heard while maintaining music flow.",
      gradient: "bg-gradient-card"
    },
    {
      icon: Zap,
      title: "Real-time Sync",
      description: "Instant updates across all devices. Everyone sees the same queue, votes, and current song.",
      gradient: "bg-gradient-card"
    },
    {
      icon: Shield,
      title: "Host Controls",
      description: "Maintain control with guest-approved overrides and customizable session settings.",
      gradient: "bg-gradient-card"
    },
    {
      icon: Music,
      title: "Music Service Integration",
      description: "Seamlessly integrates with Spotify, Apple Music, and YouTube for instant access to millions of songs.",
      gradient: "bg-gradient-card"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Perfect for party environments. Works flawlessly on any device with just a web browser.",
      gradient: "bg-gradient-card"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Powerful Features for Perfect Parties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create an inclusive, democratic music experience that keeps everyone engaged.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;