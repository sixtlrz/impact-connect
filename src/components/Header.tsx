import { Button } from "@/components/ui/button";
import bnpLogo from "@/assets/bnp-logo.webp";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <img src={bnpLogo} alt="BNP Paribas Banque Privée" className="h-12" />
        <Button variant="outline" className="font-semibold">
          Login
        </Button>
      </div>
    </header>
  );
};