import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QrCode, Smartphone, Music, ArrowRight } from "lucide-react";
import qrMusic from "@/assets/qr-music.jpg";

const JoinSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Join the Party in Seconds
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No downloads, no sign-ups. Just scan and start voting on your favorite tracks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Host Setup */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Music className="w-6 h-6 text-music-primary" />
                Host a Session
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Party Name
                  </label>
                  <Input 
                    placeholder="Sarah's Birthday Bash" 
                    className="bg-background/50 border-border"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Music Service
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="text-xs">Spotify</Button>
                    <Button variant="ghost" className="text-xs opacity-50">Apple Music</Button>
                    <Button variant="ghost" className="text-xs opacity-50">YouTube</Button>
                  </div>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                Create Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Get instant QR code for guests to join
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Guest Join */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-music-secondary" />
                Join as Guest
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div 
                  className="w-48 h-48 mx-auto rounded-2xl bg-cover bg-center shadow-music mb-6"
                  style={{ backgroundImage: `url(${qrMusic})` }}
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Scan QR code with your phone camera
                </p>
                <div className="text-xs text-muted-foreground/70">
                  or enter session code
                </div>
              </div>

              <div className="space-y-4">
                <Input 
                  placeholder="Enter 6-digit code" 
                  className="bg-background/50 border-border text-center text-lg tracking-widest font-mono"
                  maxLength={6}
                />
                <Button variant="music" className="w-full">
                  Join Party
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                <div>
                  <QrCode className="w-6 h-6 text-music-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Instant Join</p>
                </div>
                <div>
                  <Music className="w-6 h-6 text-music-secondary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Vote on Songs</p>
                </div>
                <div>
                  <Smartphone className="w-6 h-6 text-music-tertiary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Mobile First</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;