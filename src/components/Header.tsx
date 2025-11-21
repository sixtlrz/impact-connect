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
          <img src={bnpLogo} alt="BNP Paribas Banque Privée" className="h-10" />
          
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground/70 hover:text-foreground transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              className="bg-[#8B1538] hover:bg-[#6B1028] text-white rounded-full px-6 text-sm"
            >
              <span className="mr-2">🔒</span>
              Accéder à mes comptes
            </Button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-[#2A2A2A] py-4">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto relative">
            <div className="flex items-center gap-4 bg-[#3A3A3A] rounded-full px-6 py-3">
              <span className="text-white/60 text-2xl">+</span>
              <Input
                placeholder="Poser une question"
                className="flex-1 bg-transparent border-0 text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                <Mic className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-white rounded-full"></div>
                  <div className="w-1 h-4 bg-white rounded-full"></div>
                  <div className="w-1 h-4 bg-white rounded-full"></div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};