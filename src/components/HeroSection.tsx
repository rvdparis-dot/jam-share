import { Button } from "@/components/ui/button";
import { Music, Users, Vote, QrCode } from "lucide-react";
import heroParty from "@/assets/hero-party.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroParty})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <Music className="w-12 h-12 text-music-primary" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Democratunes
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your party into a democratic music experience. Let your guests vote on the perfect playlist in real-time.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <QrCode className="w-5 h-5 text-music-primary" />
            <span className="text-sm font-medium">QR Code Join</span>
          </div>
          <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <Vote className="w-5 h-5 text-music-secondary" />
            <span className="text-sm font-medium">Democratic Voting</span>
          </div>
          <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <Users className="w-5 h-5 text-music-tertiary" />
            <span className="text-sm font-medium">Real-time Sync</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start a Session
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Join Party
          </Button>
        </div>
      </div>

      {/* Floating Music Notes Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Music className="w-6 h-6 text-music-primary/30" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;