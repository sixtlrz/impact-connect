import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import teamImage from "@/assets/team-collaboration.jpg";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section id="simulation-cta" className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImage})` }}
      >
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to make an impact?
          </h2>
          <p className="text-xl md:text-2xl text-white/90">
            Start your journey towards meaningful investments today
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/simulate')}
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 shadow-elegant group"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};