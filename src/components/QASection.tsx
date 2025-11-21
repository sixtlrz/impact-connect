import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can join the club?",
    answer: "Our impact investment club is open to accredited investors who share our vision of creating positive change through strategic investments. We welcome both experienced impact investors and those new to the field.",
  },
  {
    question: "What types of startups do you invest in?",
    answer: "We focus on startups addressing critical challenges in sustainability, clean energy, healthcare innovation, education technology, and social equity. Each opportunity is carefully vetted for both impact potential and financial viability.",
  },
  {
    question: "What is the minimum investment amount?",
    answer: "Investment minimums vary by opportunity, typically starting from €25,000. We also offer portfolio options that allow for diversification across multiple impact ventures.",
  },
  {
    question: "How do I track the impact of my investments?",
    answer: "We provide regular impact reports detailing both financial performance and measurable social/environmental outcomes. Our transparent dashboard gives you real-time insights into your portfolio's positive influence.",
  },
];

export const QASection = () => {
  return (
    <section className="pt-12 pb-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Everything you need to know about impact investing
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-card"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};