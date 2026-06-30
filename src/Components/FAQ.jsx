"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// FAQ data
const faqs = [
  {
    question: "Which occupations and industries do you recruit for?",
    answer:
      "We have strong expertise in healthcare recruitment and also recruit across a wide range of industries, including hospitality, engineering, trades, and other sectors where skilled professionals are in demand across Australia.",
  },
  {
    question: "Do you recruit candidates from all countries?",
    answer:
      "Yes. We welcome applications from candidates worldwide. Recruitment is based on the employer's requirements, your qualifications, relevant experience, and your eligibility to work in Australia.",
  },
  {
    question: "How do I apply for jobs through Jobs N Visa?",
    answer:
      "Simply submit your CV through our website or contact our team. We'll review your profile, assess your eligibility, and match your skills with suitable job opportunities in Australia.",
  },
  {
    question: "What documents do I need to apply for a job?",
    answer:
      "Requirements may vary depending on the role, but commonly requested documents include your CV, educational qualifications, professional registrations or licences (if applicable), employment references, and a valid passport.",
  },
  {
    question: "What support does Jobs N Visa provide during the recruitment process?",
    answer:
      "From reviewing your profile and matching you with suitable opportunities to coordinating with employers and providing guidance on employer-sponsored visa pathways, our team supports you throughout every stage of your recruitment journey.",
  },
  {
    question: "Do I need a job offer before applying for an employer-sponsored visa?",
    answer:
      "In most cases, yes. An employer-sponsored visa generally requires an approved Australian employer to nominate you for a suitable position.",
  },
  {
    question: "Can I change employers while on a work visa?",
    answer:
      "Some work visas allow you to change employers, while others require a new sponsorship or approval before you can start working with a different employer. The requirements depend on your visa subclass and individual circumstances.",
  },
  {
    question: "Can a work visa lead to permanent residency?",
    answer:
      "Some employer-sponsored visas in Australia can provide a pathway to permanent residency if you meet the eligibility requirements set by the Australian Government.",
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
          className="text-4xl font-bold text-center text-green-900 mb-14"
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
