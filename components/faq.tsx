"use client"

import { MessageCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollAnimation } from "./scroll-animation"; // Import ScrollAnimation

const faqs = [
  {
    question: "What do we do?",
    answer: "Millions of businesses of all sizes – from startups to large enterprises – use our AI-powered payroll system to process payments, manage employee data, and automate their payroll operations efficiently."
  },
  {
    question: "Getting started with Tofu",
    answer: "Getting started is easy! Sign up for an account, connect your existing HR systems, and our AI will guide you through the setup process. We'll help you import your employee data and configure your payroll settings."
  },
  {
    question: "Installing Tofu",
    answer: "Tofu is a cloud-based solution, so there's no installation required. Simply access our platform through your web browser and you're ready to go. We also offer mobile apps for iOS and Android."
  },
  {
    question: "The messenger",
    answer: "Our AI messenger helps you communicate with employees about payroll queries, automate responses to common questions, and ensure everyone stays informed about important updates."
  },
  {
    question: "Our next-gen inbox",
    answer: "Our smart inbox prioritizes important payroll-related communications, automatically categorizes messages, and helps you manage employee requests efficiently."
  },
  {
    question: "How do tickets work?",
    answer: "Support tickets are automatically created and prioritized by our AI system. It analyzes the content and urgency of requests to ensure timely responses to payroll-related inquiries."
  },
  {
    question: "How does support work?",
    answer: "We offer 24/7 AI-powered support, backed by our human expert team. Get instant answers to common questions and personalized assistance for complex payroll matters."
  },
  {
    question: "How does billing work?",
    answer: "Choose from our flexible pricing plans. Pay monthly or annually, with pricing based on your employee count and feature requirements. All plans include our core AI payroll features."
  }
]

export function FAQ() {
  return (
    <ScrollAnimation> {/* Wrap with ScrollAnimation */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf6e4] to-[#e0f7f7] py-24">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#38B2AC]/20 to-transparent blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-[#9BE3DE]/20 to-transparent blur-3xl" />
        </div>

        <div className="container relative px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#38B2AC] to-[#9BE3DE]" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Frequently asked questions
              </h2>
              <p className="text-slate-600 md:text-lg">
                Still need help? Chat to us.
              </p>
              <div className="flex items-center gap-2 text-[#38B2AC]">
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Start a conversation</span>
              </div>
            </div>

            <div className="lg:pl-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-none bg-white/80 px-6 backdrop-blur-sm data-[state=open]:bg-gradient-to-br data-[state=open]:from-[#fdf6e4]/50 data-[state=open]:to-[#e0f7f7]/50"
                  >
                    <AccordionTrigger className="text-left hover:no-underline [&[data-state=open]>div]:text-[#38B2AC]">
                      <div className="text-base font-medium">{faq.question}</div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}

