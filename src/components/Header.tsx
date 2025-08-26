import lumaLogo from "@/assets/luma-logo.png";

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-center">
          <img 
            src={lumaLogo} 
            alt="Luma Ensino" 
            className="h-8 sm:h-10 lg:h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
}