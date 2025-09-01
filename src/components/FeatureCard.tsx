import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

const FeatureCard = ({ icon: Icon, title, description, gradient = "bg-gradient-card" }: FeatureCardProps) => {
  return (
    <Card className={`${gradient} border-border/50 shadow-card hover:shadow-music transition-all duration-300 group`}>
      <CardContent className="p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-card/30 group-hover:shadow-glow transition-all duration-300">
            <Icon className="w-8 h-8 text-music-primary" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;