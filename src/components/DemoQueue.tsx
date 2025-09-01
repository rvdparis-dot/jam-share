import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown, Play, Clock, Users } from "lucide-react";
import musicDemo from "@/assets/music-democracy.jpg";

const mockQueue = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:22",
    votes: { up: 8, down: 1 },
    addedBy: "Alex",
    priority: 95,
    isPlaying: true
  },
  {
    id: 2,
    title: "Don't Stop Me Now",
    artist: "Queen",
    duration: "3:29",
    votes: { up: 6, down: 0 },
    addedBy: "Sarah",
    priority: 88
  },
  {
    id: 3,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    duration: "4:30",
    votes: { up: 5, down: 2 },
    addedBy: "Mike",
    priority: 75
  },
  {
    id: 4,
    title: "Dancing Queen",
    artist: "ABBA",
    duration: "3:51",
    votes: { up: 4, down: 1 },
    addedBy: "Emma",
    priority: 70
  }
];

const DemoQueue = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            See Democracy in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how your guests collaborate to create the perfect party playlist
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Queue Demo */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="border-b border-border/50">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <Play className="w-6 h-6 text-music-primary" />
                  Live Queue
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>12 guests</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {mockQueue.map((song, index) => (
                <div 
                  key={song.id} 
                  className={`p-4 border-b border-border/30 last:border-b-0 ${
                    song.isPlaying ? 'bg-music-primary/10 border-l-4 border-l-music-primary' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Position */}
                    <div className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-sm font-medium">
                      {song.isPlaying ? <Play className="w-4 h-4" /> : index + 1}
                    </div>

                    {/* Song Info */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground">{song.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{song.artist}</span>
                        <Clock className="w-3 h-3" />
                        <span>{song.duration}</span>
                        <span>by {song.addedBy}</span>
                      </div>
                    </div>

                    {/* Voting */}
                    <div className="flex items-center gap-2">
                      <Button variant="vote" size="sm" className="gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        {song.votes.up}
                      </Button>
                      <Button variant="vote" size="sm" className="gap-1">
                        <ThumbsDown className="w-3 h-3" />
                        {song.votes.down}
                      </Button>
                      <Badge variant="secondary" className="ml-2">
                        {song.priority}%
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Features */}
          <div className="space-y-8">
            <div 
              className="aspect-square rounded-2xl bg-cover bg-center shadow-music"
              style={{ backgroundImage: `url(${musicDemo})` }}
            />
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-music-primary/20">
                  <ThumbsUp className="w-5 h-5 text-music-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Democratic Voting</h3>
                  <p className="text-muted-foreground">Every guest's vote matters. Songs rise and fall based on real-time community preference.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-music-secondary/20">
                  <Users className="w-5 h-5 text-music-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Fair Play Algorithm</h3>
                  <p className="text-muted-foreground">Advanced algorithms ensure everyone gets heard while preventing spam and maintaining flow.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-music-tertiary/20">
                  <Play className="w-5 h-5 text-music-tertiary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Real-time Sync</h3>
                  <p className="text-muted-foreground">Instant updates across all devices. Everyone sees the same queue, votes, and current song.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoQueue;