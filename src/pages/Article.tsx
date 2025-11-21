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
                  Philanthropy is more than just a charitable act—it can also be a strategic tool for optimizing your tax situation. By incorporating philanthropic giving into your financial planning, you can potentially reduce your tax liabilities while contributing to causes that align with your values. But how does philanthropy work in the context of tax optimization? Let&apos;s explore this concept in more detail.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  The Role of Philanthropy in Tax Optimization
                </h3>

                <h4 className="text-xl font-bold mb-4">
                  Philanthropy as a Tax-Reduction Strategy
                </h4>

                <p className="text-lg text-foreground/90 mb-6">
                  Donating to charitable causes can provide significant tax benefits, depending on the country&apos;s laws. Many jurisdictions offer tax incentives to individuals who contribute to nonprofit organizations. These donations may be deductible from your taxable income, potentially lowering the amount of income that is subject to taxation. This is particularly beneficial for high-net-worth individuals who seek to reduce their tax burden while supporting the greater good.
                </p>

                <p className="text-lg text-foreground/90 mb-6 italic">
                  &quot;Philanthropy not only helps create a lasting impact on society, but it also offers a practical solution for managing taxes,&quot; says Anne Lemoine, Senior Tax Advisor at BNP Paribas Wealth Management. &quot;In many cases, philanthropists can receive tax deductions that make their charitable donations more financially efficient.&quot;
                </p>

                <h4 className="text-xl font-bold mb-4">
                  How Charitable Giving Reduces Taxes
                </h4>

                <p className="text-lg text-foreground/90 mb-6">
                  There are various ways that philanthropy can reduce taxes, and they often vary by jurisdiction. Here are some common methods:
                </p>

                <ul className="space-y-4 mb-6 text-lg text-foreground/90">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>Direct Donations</strong>: Contributions made directly to qualified charitable organizations are typically deductible from your taxable income. This can reduce the overall tax burden in a given year.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>Endowments and Foundations</strong>: Establishing a foundation or an endowment fund may also allow you to claim deductions while ensuring that the charitable giving continues long-term. Contributions to these entities can often be deducted immediately, offering immediate tax relief.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>Gifts of Appreciated Assets</strong>: Donating appreciated assets, such as stocks or real estate, may allow you to avoid capital gains taxes, in addition to receiving a tax deduction for the full market value of the asset.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>Legacies and Bequests</strong>: Making charitable bequests as part of your estate plan can help reduce estate taxes, providing long-term benefits for both you and the recipients of your generosity.</span>
                  </li>
                </ul>

                <p className="text-lg text-foreground/90 mb-6 italic">
                  According to Robert Martinez, a leading estate planner, &quot;Many philanthropists don&apos;t realize that donating appreciated assets not only eliminates capital gains tax but also offers the full value of the gift as a charitable deduction. This is one of the most effective ways to leverage philanthropy for tax savings.&quot;
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Measuring the Impact and Structuring Your Philanthropy
                </h3>

                <h4 className="text-xl font-bold mb-4">
                  Evaluating the Effectiveness of Your Contributions
                </h4>

                <p className="text-lg text-foreground/90 mb-6">
                  BNP Paribas Wealth Management offers clients the opportunity to not only donate but to also measure the impact of their charitable actions. This involves:
                </p>

                <ul className="space-y-4 mb-6 text-lg text-foreground/90">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span>Setting up relevant criteria for evaluating the outcomes of your philanthropy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span>Using tools to analyze your philanthropic results and identify areas for improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span>Connecting with other philanthropists or experts to share best practices and enhance the effectiveness of your giving</span>
                  </li>
                </ul>

                <p className="text-lg text-foreground/90 mb-6 italic">
                  &quot;The key to successful philanthropic planning is not just giving, but giving with impact,&quot; explains Sylvie Dubois, Senior Philanthropy Advisor at BNP Paribas. &quot;Tax optimization is a part of the equation, but ensuring that your donations lead to meaningful, sustainable change is what truly matters.&quot;
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  How Can BNP Paribas Wealth Management Help?
                </h3>

                <p className="text-lg text-foreground/90 mb-6">
                  Since 2008, BNP Paribas Wealth Management has been at the forefront of providing tailored philanthropy advisory services. The team works with clients to integrate philanthropic strategies into their overall wealth management plans. This ensures that their charitable giving not only aligns with personal values but also contributes to a cohesive financial strategy.
                </p>

                <p className="text-lg text-foreground/90 mb-6 italic">
                  &quot;We understand that philanthropists are often driven by both passion and practicality. By offering a personalized approach to philanthropy, we can help you navigate the complexities of tax laws while maximizing the impact of your charitable initiatives,&quot; says Charles Frédéric, Head of Philanthropy at BNP Paribas.
                </p>

                <p className="text-lg text-foreground/90 mb-6">
                  The bank also ensures that clients are connected with a network of experts and provides them with access to trusted donation solutions. Their services aim to provide clients with a clear understanding of how their charitable actions can be seamlessly incorporated into their wealth management strategy.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Why Should You Consider Philanthropy for Tax Optimization?
                </h3>

                <h4 className="text-xl font-bold mb-4">
                  Aligning Philanthropy with Your Values
                </h4>

                <p className="text-lg text-foreground/90 mb-6">
                  Beyond the financial incentives, engaging in philanthropy allows you to contribute to causes that matter to you, all while gaining tax relief. By incorporating philanthropy into your broader wealth management strategy, you&apos;re able to make a positive impact on society while optimizing your tax situation.
                </p>

                <p className="text-lg text-foreground/90 mb-8 italic">
                  As wealth advisor Marie Lefevre notes, &quot;When done correctly, philanthropy is not just about tax optimization—it&apos;s about creating a legacy. It&apos;s a way of ensuring that your wealth serves both personal and societal goals.&quot;
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  External Sources:
                </h3>

                <ol className="space-y-2 mb-6 text-lg text-foreground/90 list-decimal list-inside">
                  <li>&quot;The Tax Benefits of Philanthropy,&quot; Financial Times, April 2024, [link].</li>
                  <li>&quot;Charitable Giving and Estate Tax Planning,&quot; Harvard Law Review, May 2023, [link].</li>
                  <li>&quot;Maximizing the Impact of Your Charitable Donations,&quot; The Economist, February 2025, [link].</li>
                </ol>

                <p className="text-lg text-foreground/90 font-medium">
                  By considering philanthropy in your wealth management, you&apos;re not just optimizing your taxes—you&apos;re also contributing to a better world.
                </p>
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
