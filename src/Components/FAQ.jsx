import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const faqs = [
  {
    question: "Can I work while my visa application is being processed?",
    answer:
      "Work rights during visa processing depend on your current visa and local immigration rules. Some applicants receive bridging visas with permission to work.",
  },
  {
    question: "Can a work visa lead to permanent residency?",
    answer:
      "Yes, many skilled work visas can provide pathways to permanent residency depending on eligibility.",
  },
  {
    question: "Can I change employers on a work visa?",
    answer:
      "Some visas allow employer changes while others require sponsorship updates.",
  },
  {
    question: "Can my spouse work on a dependent visa?",
    answer:
      "Dependent visa holders may receive work rights depending on visa subclass and country rules.",
  },
  {
    question: "Do I need a job offer before applying?",
    answer:
      "Certain work visas require employer sponsorship while others are points-based.",
  },
  {
    question: "What documents are required?",
    answer:
      "Usually passport, employment proof, educational certificates, and financial records.",
  },
];

function FAQ({ item, index, activeIndex, setActiveIndex }) {
  const isOpen = activeIndex === index;

  return (
    <div className="border border-green-200 rounded-xl bg-[#F3FBF4] overflow-hidden mb-4">
      <button
        type="button"
        onClick={() => setActiveIndex(isOpen ? null : index)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-medium text-green-900">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-green-700" />
        ) : (
          <ChevronDown className="w-5 h-5 text-green-700" />
        )}
      </button>

      {isOpen && (
        <div
          id={`faq-answer-${index}`}
          role="region"
          className="px-5 pb-4 pt-0 text-sm text-gray-600 leading-relaxed"
        >
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function BottomSections() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-white">
      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold text-center text-green-900 mb-14">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-5 items-start">
          {faqs.map((item, index) => (
            <FAQ
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </section>
    </div>
  );
}