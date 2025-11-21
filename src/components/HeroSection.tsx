import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-impact.jpg";

export const HeroSection = () => {
  const scrollToSimulation = () => {
    const simulationSection = document.getElementById("simulation-cta");
    simulationSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Looking to invest in impact-driven startups and meet people like you?
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light">
            Join our club.
          </p>
          <Button 
            size="lg"
            onClick={scrollToSimulation}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-elegant group"
          >
            Simulate my investment
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};