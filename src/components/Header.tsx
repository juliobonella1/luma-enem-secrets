import lumaLogoDark from "@/assets/luma-logo-dark.png";
import lumaLogoWhite from "@/assets/luma-logo-white.png";

export function Header() {
  return (
    <header className="backdrop-blur-md border-b border-border/30 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo for light mode */}
            <img 
              src={lumaLogoDark} 
              alt="Luma Ensino" 
              className="h-8 sm:h-10 md:h-12 w-auto dark:hidden"
            />
            {/* Logo for dark mode */}
            <img 
              src={lumaLogoWhite} 
              alt="Luma Ensino" 
              className="h-8 sm:h-10 md:h-12 w-auto hidden dark:block"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a 
              href="#beneficios" 
              className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </a>
            <a 
              href="#depoimentos" 
              className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </a>
            <a 
              href="#download" 
              className="text-sm lg:text-base bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg hover:shadow-primary transition-all"
            >
              Download Gratuito
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}