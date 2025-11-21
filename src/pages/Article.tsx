import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { CommunitySection } from "@/components/CommunitySection";
import { QASection } from "@/components/QASection";
import { DatesSection } from "@/components/DatesSection";
import { CTASection } from "@/components/CTASection";

const Article = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        {/* Hero Section with different title */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/src/assets/hero-impact.jpg)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                How to optimise my taxes, using philanthropy
              </h1>
            </div>
          </div>
        </section>

        {/* Article Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <Card className="max-w-5xl mx-auto p-8 md:p-12 shadow-elegant border-border">
              <article className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground/90 mb-6">
                  XXXXXXX
                </p>
                
                {/* Add more content here when provided */}
              </article>
            </Card>
          </div>
        </section>

        <CommunitySection />
        <QASection />
        <DatesSection />
        <CTASection />
      </main>
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/80">
            © 2025 BNP Paribas Banque Privée. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Article;
