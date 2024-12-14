import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "./scroll-animation";

export function CTA() {
  return (
    <ScrollAnimation>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e0f7f7] to-[#fdf6e4] py-24">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#38B2AC]/20 to-transparent blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-[#9BE3DE]/20 to-transparent blur-3xl" />
        </div>

        <div className="container relative px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 backdrop-blur-sm transition-all hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6e4]/50 to-[#e0f7f7]/50 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative space-y-4">
                <p className="text-sm font-medium uppercase tracking-wider text-[#38B2AC]">
                  Investments
                </p>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Invest with Tofu
                </h2>
                <Button 
                  className="mt-4 rounded-full bg-[#38B2AC] text-white hover:bg-[#2C9296]"
                >
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="absolute bottom-8 right-8">
                  <svg
                    className="h-12 w-12 text-slate-900/10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="group relative overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1616452362403-2a49231dbd94"
                alt="Mountain view"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                  Partnerships
                </p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  We are open to collaborate
                </h2>
                <Button 
                  variant="link" 
                  className="mt-4 w-fit p-0 text-white hover:text-white/80"
                >
                  Lets chat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}

