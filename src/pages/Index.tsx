import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ImpactArticleSection } from "@/components/ImpactArticleSection";
import { QASection } from "@/components/QASection";
import { CommunitySection } from "@/components/CommunitySection";
import { DatesSection } from "@/components/DatesSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <HeroSection />
        <ImpactArticleSection />
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

export default Index;