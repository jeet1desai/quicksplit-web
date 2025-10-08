import { Card } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Navigation from "./navigation";

type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "How do I get started with QuickSplit?",
    answer:
      "Getting started is easy! Simply create an account, invite your friends or roommates, and start adding your shared expenses. You can split bills, track who paid what, and see who owes whom.",
  },
  {
    question: "Is QuickSplit free to use?",
    answer:
      "Yes, QuickSplit is completely free to use with all its core features. We may offer premium features in the future, but the basic expense splitting functionality will always remain free.",
  },
  {
    question: "Can I see reports of my expenses?",
    answer:
      "Yes, QuickSplit provides detailed reports of your expenses. You can view spending by category, time period, or group member to better understand your spending patterns.",
  },
  {
    question: "How do I settle up with my friends?",
    answer:
      "QuickSplit automatically calculates who owes what. You can settle up directly through the app using various payment methods, or mark expenses as settled if you've paid outside the app.",
  },
];

export function FAQSection() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen text-left bg-gradient-to-b from-background to-muted/20 pt-16">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="mb-12 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
              <p className="text-muted-foreground text-sm">
                Quick answers about how QuickSplit works today.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <AccordionItem value={`item-${index}`} className="border-b-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className="text-left font-medium">{item.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0 text-left">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
