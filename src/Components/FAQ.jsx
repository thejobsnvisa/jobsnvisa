"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// FAQ data
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
  const isOpen = activeIndex.includes(index);

  const toggleFAQ = () => {
    setActiveIndex((prev) =>
      isOpen ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="mb-5 break-inside-avoid border border-green-200 rounded-tl-[16px] rounded-bl-[16px] rounded-tr-[16px] bg-[#F3FBF4] overflow-hidden">
      {/* Question */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        onClick={toggleFAQ}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-green-100 transition-colors"
      >
        <span className="font-bold text-green-800">{item.question}</span>

        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-green-700 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-green-700 flex-shrink-0" />
        )}
      </button>

      {/* Answer */}
      <div
        id={`faq-answer-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-4 text-sm font-base text-green-800 leading-relaxed">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BottomSections() {
  const [activeIndex, setActiveIndex] = useState([]);

  return (
    <div className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <h2
          className="text-4xl font-semibold text-center text-green-900 mb-14"
          style={{ fontFamily: "'Caudex', serif" }}
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ Layout */}
        <div className="columns-1 md:columns-2 gap-5">
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
