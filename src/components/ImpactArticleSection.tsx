import { Card } from "@/components/ui/card";

export const ImpactArticleSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <Card className="max-w-5xl mx-auto p-8 md:p-12 shadow-elegant border-border">
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 mb-6">
              Impact investing is a relatively new approach that involves allocating money to companies or projects that generate a <strong>positive social or environmental impact</strong>, while still seeking a <strong>financial return</strong>. Unlike philanthropy, it is not about giving money away. And unlike traditional investing, it is not only about maximizing profit. Impact investing sits at the intersection of purpose and performance: <em>earning returns by solving real-world problems</em>.
            </p>

            <p className="text-lg text-foreground/90 mb-6">
              It differs from responsible or ESG investing, which primarily focuses on reducing risks or avoiding harmful sectors. Impact investing goes further. Its objective is to <strong>create measurable, intentional change</strong>. It is most commonly applied in sectors such as clean energy, sustainable agriculture, circular economy, education, healthcare access, biodiversity protection, or social inclusion.
            </p>

            <p className="text-lg text-foreground/90 mb-6">
              In practice, impact investors ensure the company they finance is addressing a well-defined societal or environmental challenge. Impact must be <strong>intentional</strong> (the company aims to create positive change), <strong>measurable</strong> (with clear indicators), and <strong>additional</strong> (the investment enables outcomes that wouldn&apos;t happen otherwise). These principles help prevent greenwashing and ensure that every dollar invested genuinely contributes to improving society.
            </p>

            <p className="text-lg text-foreground/90 mb-8">
              This approach is gaining traction across private investors, venture funds, banks, and institutions, as more people want their money to reflect their values—especially in a world facing urgent climate, social, and economic challenges.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why invest in impact startups?
            </h3>

            <p className="text-lg text-foreground/90 mb-6">
              Impact startups play a crucial role in reshaping the economy. They tend to be more agile, innovative, and mission-driven than large corporations. Investing in them offers several advantages:
            </p>

            <ul className="space-y-4 mb-6 text-lg text-foreground/90">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span><strong>They bring breakthrough solutions</strong> to major challenges—clean energy technologies, regenerative agriculture methods, AI for education or healthcare, waste-to-resource innovations, and more.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span><strong>They offer strong growth potential</strong>, as impact-driven markets are rapidly expanding and supported by regulations, consumer demand, and institutional pressure.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span><strong>They drive systemic change</strong>, exploring new business models that value long-term societal benefit over short-term profit.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span><strong>They increase economic resilience</strong>, since companies aligned with future societal needs are less exposed to climate, resource, and inequality-related risks.</span>
              </li>
            </ul>

            <p className="text-lg text-foreground/90">
              In short, investing in impact startups allows you to combine <strong>profit</strong>, <strong>purpose</strong>, and <strong>positive transformation</strong>. It&apos;s one of the most concrete ways to use capital to shape the better world we want to build.
            </p>
          </article>
        </Card>
      </div>
    </section>
  );
};
