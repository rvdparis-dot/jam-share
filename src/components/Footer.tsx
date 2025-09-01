import { Music, Github, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/20 border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Music className="w-6 h-6 text-music-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Democratunes
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Democratic music for better parties. Made with passion for music lovers everywhere.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-music-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-music-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-music-primary transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-music-primary transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-music-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-music-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-music-primary transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-music-primary transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-card/50 hover:bg-music-primary/20 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-card/50 hover:bg-music-primary/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Democratunes. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-music-primary" /> for music lovers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;