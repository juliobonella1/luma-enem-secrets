import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <Card className="p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 h-full">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0 mx-auto sm:mx-0">
          {name.charAt(0)}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <blockquote className="text-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
            "{content}"
          </blockquote>
          <div>
            <cite className="font-semibold text-primary not-italic text-sm sm:text-base">{name}</cite>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}