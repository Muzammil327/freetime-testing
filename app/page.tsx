"use client";
import React, { useState } from "react";

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Currency thresholds drifted, region flow seen clear?",
      answer:
        "Barriers moved with ease, shifting tokens across streams. New paths shimmered softly where old limits once stood.",
    },
    {
      question: "Conversion flattened. Stable received?",
      answer: "Detailed answer about conversion and stability.",
    },
    {
      question: "Wallet modes tangled fine. Solo toggle missed where?",
      answer: "Explanation about wallet modes and toggles.",
    },
    {
      question: "Fee narrowed. Shift timed?",
      answer: "Information about fee adjustments and timing.",
    },
    {
      question: "Security expanded. Trust unseen?",
      answer: "Details regarding security updates and trust levels.",
    },
  ];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      <main className="min-h-screen bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Features / Cards section */}
          {/* <section className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Empower your wallet</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Empower your wallet with seamless access to payments, currency management, and smart conversions, all
              in one easy-to-use platform.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
              <div className="bg-[#F3F2FF] rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 text-center">
                  <h3 className="text-lg font-semibold mb-2">Send Payments</h3>
                  <p className="text-gray-600">Transfer funds globally with one tap. Fast, secure, and always reliable.</p>
                </div>
              </div>

              <div className="bg-[#F3F2FF] rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 text-center">
                  <h3 className="text-lg font-semibold mb-2">Receive Funds</h3>
                  <p className="text-gray-600">Transfer funds globally with one tap. Fast, secure, and always reliable.</p>
                </div>
              </div>

              <div className="bg-[#F3F2FF] rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 text-center">
                  <h3 className="text-lg font-semibold mb-2">Convert Currency</h3>
                  <p className="text-gray-600">Transfer funds globally with one tap. Fast, secure, and always reliable.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium flex items-center gap-3">
                Explore More Features
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </section> */}

          <h1 className="text-4xl font-extrabold mb-8">Frequently Asked Questions</h1>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-stretch">
            {/* Left: Accordion list */}
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {faqs.map((f, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div
                      key={i}
                      className="flex items-start justify-between bg-[#6061F7]/8 border border-[#CFCFCF] rounded-xl p-4 shadow-sm"
                    >
                      <div className="pr-4 flex-1">
                        <button
                          onClick={() => toggle(i)}
                          aria-expanded={isOpen}
                          className="w-full text-left"
                        >
                          <div className="text-lg font-semibold">{f.question}</div>
                          {isOpen && (
                            <p className="mt-2 text-gray-600 leading-relaxed">{f.answer}</p>
                          )}
                        </button>
                      </div>

                      <div className="flex-shrink-0">
                        <button
                          onClick={() => toggle(i)}
                          aria-label={isOpen ? "Collapse" : "Expand"}
                          className="w-7 h-7 rounded-full flex items-center justify-center"
                        >
                          {isOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 12H6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 5v14M5 12h14" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Contact card */}
            <aside className="bg-[#6061F7]/8 border border-[#CFCFCF] rounded-xl p-6 flex flex-col items-start justify-between lg:col-span-3 min-h-80">
              <div className="text-center">
                <div className="w-12 h-12 rounded bg-white flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="67" height="63" viewBox="0 0 67 63" fill="none">
                    <path d="M13.2977 52.0866L0 63V0H67V52.0866H13.2977Z" fill="#102A53" />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold mb-2">Do you have more questions?</h3>
                <p className="text-gray-600 mb-6">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
              </div>

              <div className="w-full">
                <button className="w-full bg-[#6061F7] text-white py-4 px-6 rounded-full font-semibold shadow-md">
                  Send a Direct Mail
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
