import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "./scroll-animation";

import AppleLogo from "../public/apple-14.svg";
import IbmLogo from "../public/ibm.svg";
import JpMorganLogo from "../public/jp-morgan.svg";
import MicrosoftLogo from "../public/microsoft-6.svg";
import OpenAiLogo from "../public/openai-2.svg";

const testimonials = [
  {
    name: "Sara Johnson",
    image: "/avatars/sara.jpg",
    company: "TechStart Inc.",
    role: "HR Director",
    quote: "Tofu's AI-powered payroll system has revolutionized our HR processes. We've cut processing time by 70% and eliminated errors. It's a game-changer for growing tech companies.",
  },
  {
    name: "Michael Chen",
    image: "/avatars/michel.jpg",
    company: "Global Innovations Ltd.",
    role: "CFO",
    quote: "The real-time reporting and AI-driven insights have given us unprecedented visibility into our payroll expenses. Tofu has become an indispensable tool for our financial planning.",
  },
  {
    name: "Smith Rodriguez",
    image: "/avatars/smith.jpg",
    company: "StartUp Accelerator",
    role: "Operations Manager",
    quote: "Tofu's seamless integration with our existing HR tools made the transition smooth. The AI's ability to handle complex pay structures has been a lifesaver for our diverse workforce.",
  },
  {
    name: "David Okonkwo",
    image: "/avatars/david.jpg",
    company: "AfriTech Solutions",
    role: "CEO",
    quote: "As a rapidly expanding company, we needed a payroll solution that could scale with us. Tofu's AI adapts to our changing needs, ensuring compliance across multiple regions effortlessly.",
  },
];

const trustedBy = [
  { name: "Apple", logo: AppleLogo },
  { name: "IBM", logo: IbmLogo },
  { name: "JP Morgan", logo: JpMorganLogo },
  { name: "Microsoft", logo: MicrosoftLogo },
  { name: "OpenAI", logo: OpenAiLogo },
];

export function Testimonials() {
  return (
    <ScrollAnimation>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf6e4] to-[#e0f7f7] py-24">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#38B2AC]/20 to-transparent blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-[#9BE3DE]/20 to-transparent blur-3xl" />
        </div>

        <div className="container relative px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Trusted by industry leaders
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="group relative overflow-hidden border-none bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6e4]/50 to-[#e0f7f7]/50 opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="relative space-y-6 p-8">
                  <div className="flex items-center gap-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80} // Increased size
                      height={80} // Increased size
                      className="rounded-full border-4 border-[#38B2AC]" // Thicker border
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg text-slate-900">{testimonial.name}</h3>
                        <Badge className="bg-[#38B2AC] text-[0.75rem]">Verified</Badge>
                      </div>
                      <p className="text-sm text-slate-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-base text-slate-600">
                    {testimonial.quote}
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 space-y-4">
            <h4 className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
              Trusted By Industry Leaders
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {trustedBy.map((company) => (
                <div
                  key={company.name}
                  className="relative h-20 w-36 transition-opacity hover:opacity-75" // Increased size for logos
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    style={{ objectFit: "contain" }}
                    className="opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}
