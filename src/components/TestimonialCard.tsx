import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="flex-1">
          <blockquote className="text-foreground mb-4 leading-relaxed">
            "{content}"
          </blockquote>
          <div>
            <cite className="font-semibold text-primary not-italic">{name}</cite>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}