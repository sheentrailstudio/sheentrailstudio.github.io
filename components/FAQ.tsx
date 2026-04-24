"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-hair border-y border-ink-hair">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-8 py-6 text-left transition-colors hover:text-ink"
            >
              <span className="flex-1">
                <span className="num-badge mr-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-xl font-[450] text-ink sm:text-2xl">
                  {item.question}
                </span>
              </span>
              <span
                aria-hidden
                className={`mt-2 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink-hair text-sm transition-transform duration-500 ease-editorial ${
                  isOpen ? "rotate-45 border-ink bg-ink text-paper" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-500 ease-editorial ${
                isOpen
                  ? "grid-rows-[1fr] pb-7 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="max-w-2xl pl-10 body">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
