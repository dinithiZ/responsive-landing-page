import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Answer goes here..."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Answer goes here..."
    }
  ];

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#4F46E5] mb-6 sm:mb-8">Frequently asked questions</h2>
        <div className="space-y-3 sm:space-y-4 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg p-3 sm:p-4 bg-gray-50">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={`w-full flex justify-between items-center font-medium text-left transition-colors duration-200 ${
                  openIndex === idx ? "text-[#4F46E5]" : "text-gray-900"
                } text-sm sm:text-base`}
              >
                {faq.question}
                <span className={`ml-2 text-xl sm:text-2xl transition-colors duration-200 ${
                  openIndex === idx ? "text-[#4F46E5]" : "text-gray-400"
                }`}>
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <p className="mt-2 text-gray-600 text-xs sm:text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
