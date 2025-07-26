"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "pricing" | "technical" | "support";
}

const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "What is this platform for?",
    answer:
      "It transforms your internal documents into an intelligent assistant that answers natural language questions with sourced responses.",
    category: "general",
  },
  {
    id: "2",
    question: "Who should use it?",
    answer:
      "Anyone who manages internal knowledge — HR teams, legal firms, educators, startup founders, ops teams, product managers, or solo professionals.",
    category: "general",
  },
  {
    id: "3",
    question: "Is it difficult to use?",
    answer:
      "Not at all. You simply upload your documents and click “Build”. You can begin querying immediately, no technical setup needed.",
    category: "general",
  },
  {
    id: "4",
    question: "What file types are supported?",
    answer:
      "PDF, DOCX, TXT, HTML, Markdown — with more coming soon (like Google Docs and Notion export).",
    category: "technical",
  },
  {
    id: "5",
    question: "What models can I choose from?",
    answer:
      "You can choose from a curated set of high-quality open models or bring your own via API key. Fine-tuned models for your industry will be offered soon.",
    category: "technical",
  },
  {
    id: "6",
    question: "Is the data updated automatically?",
    answer:
      "Yes, you can re-index or auto-sync your RAG model when documents change.",
    category: "technical",
  },
  {
    id: "7",
    question: "How does the system retrieve the top-k content?",
    answer:
      "It uses vector search over your uploaded content, finds the most relevant sections, and appends them to your prompt before querying the model.",
    category: "technical",
  },
  {
    id: "8",
    question: "Is there a free version?",
    answer:
      "Yes — the Starter plan is free and great for solo users or hobby projects.",
    category: "pricing",
  },
  {
    id: "9",
    question: "How does billing work?",
    answer:
      "Paid plans are monthly or annual. You can upgrade anytime and your usage resets each billing cycle.",
    category: "pricing",
  },
  {
    id: "10",
    question: "Are there usage caps?",
    answer:
      "Each plan includes a cap on documents and queries. Enterprise plans are customizable.",
    category: "pricing",
  },
  {
    id: "11",
    question: "Can I cancel anytime?",
    answer:
      "Yes. All plans are pay-as-you-go and cancellable anytime from your dashboard.",
    category: "pricing",
  },
  {
    id: "12",
    question: "What kind of support do you offer?",
    answer:
      "Free users get access to community support. Pro and Enterprise users get email and live chat. Enterprise clients can request onboarding and custom training.",
    category: "support",
  },
  {
    id: "13",
    question: "Do you have documentation or training?",
    answer:
      "Yes — we offer setup guides, tutorials, and demo videos. Enterprise clients also receive hands-on onboarding.",
    category: "support",
  },
  {
    id: "14",
    question: "What happens if I run into bugs?",
    answer:
      "We have a dedicated team handling technical issues and we prioritize uptime and responsiveness for Pro and Enterprise users.",
    category: "support",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "technical", label: "Technical" },
  { id: "pricing", label: "Pricing" },
  { id: "support", label: "Support" },
];

export default function Faq2() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 bg-background overflow-x-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-xs font-medium uppercase tracking-wider border-primary"
          >
            FAQs
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground text-center max-w-2xl">
            Find answers to common questions about CNdocs and how to use our
            documentation to master networking concepts and socket programming.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  "border border-border rounded-xl overflow-hidden h-fit",
                  expandedId === faq.id ? "bg-card/50 shadow-3xl" : "bg-card/50"
                )}
                style={{ minHeight: "88px" }}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-medium text-foreground">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    {expandedId === faq.id ? (
                      <MinusIcon className="h-5 w-5 text-primary" />
                    ) : (
                      <PlusIcon className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-border">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary rounded-lg font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
