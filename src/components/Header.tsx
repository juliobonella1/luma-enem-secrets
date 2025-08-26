import lumaLogo from "@/assets/luma-logo.png";

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <img 
            src={lumaLogo} 
            alt="Luma Ensino" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
}