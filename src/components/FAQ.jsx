import { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item bg-white rounded-xl border border-gray-100 shadow-sm ${isOpen ? 'faq-open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-bold text-navy text-sm pr-4">{question}</span>
        <i className={`fas fa-chevron-down faq-chevron text-ice text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className="faq-body px-5"><p className="text-gray-500 text-sm pb-5" dangerouslySetInnerHTML={{ __html: answer }}></p></div>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    { q: 'Which ice machine is right for my business?', a: 'Cafes and small restaurants typically need 60kg/day, hotels and bars 80&ndash;100kg, while larger operations may need 120kg or more. Contact us for a free assessment.' },
    { q: 'Do you provide installation?', a: 'Yes. We provide professional installation nationwide, including site assessment, setup, testing, and operator training.' },
    { q: 'Are spare parts available?', a: 'Absolutely. We maintain stock of genuine spare parts for all machines we supply, ensuring quick turnaround on repairs.' },
    { q: 'Which ice cream machine should I choose?', a: 'Soft serve for high-volume walk-in traffic, hard ice cream batch freezers for scoop shops, countertop for restaurants, and gelato for premium specialty products.' },
    { q: 'Can you help me start an ice production business?', a: 'Yes! We assist with equipment selection, capacity planning, installation, training, and ongoing support so you can start producing and selling ice profitably.' },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-ice font-bold text-xs tracking-[3px] uppercase">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3" id="faqList">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}