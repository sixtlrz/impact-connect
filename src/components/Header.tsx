import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mic } from "lucide-react";
import bnpLogo from "@/assets/bnp-logo.webp";

const navigationItems = [
  "Patrimoine",
  "Investissement", 
  "Financement",
  "Services bancaires",
  "Être client",
  "Actualités"
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      {/* Main Navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <img src={bnpLogo} alt="BNP Paribas Banque Privée" className="h-10 flex-shrink-0" />
          
          <nav className="flex items-center gap-6 mx-8">
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm whitespace-nowrap">
              Patrimoine
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm whitespace-nowrap">
              Investissement
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm whitespace-nowrap">
              Financement
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm whitespace-nowrap">
              Services bancaires
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm whitespace-nowrap">
              Être client
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm whitespace-nowrap">
              Actualités
            </a>
          </nav>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-foreground/70" />
            </Button>
            <Button 
              className="bg-[#8B1538] hover:bg-[#6B1028] text-white rounded-full px-6 text-sm whitespace-nowrap"
            >
              🔒 Accéder à mes comptes
            </Button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-primary py-3">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md">
              <span className="text-muted-foreground text-lg">+</span>
              <Input
                placeholder="Poser une question"
                className="flex-1 bg-transparent border-0 text-foreground text-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="ghost" size="icon" className="hover:bg-secondary rounded-full h-8 w-8">
                <Mic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary rounded-full h-8 w-8">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-3 bg-foreground rounded-full"></div>
                  <div className="w-0.5 h-3 bg-foreground rounded-full"></div>
                  <div className="w-0.5 h-3 bg-foreground rounded-full"></div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};