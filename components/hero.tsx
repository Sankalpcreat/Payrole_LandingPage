import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "./scroll-animation"

export function Hero() {
  return (
    <ScrollAnimation>
      <div className="relative overflow-hidden bg-gradient-to-b from-[#fdf6e4] to-[#e0f7f7]">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 sm:pt-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Empowering payroll processors with the world's first AI platform
              </h1>
              <p className="mt-6 text-lg text-slate-600">
                Save time, attract more clients, boost security with our AI solution.
              </p>
              <div className="mt-8">
                <Button className="rounded-full bg-[#38B2AC] px-8 py-6 text-lg font-semibold hover:bg-[#319795]">
                  Join waitlist
                </Button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute right-0 top-0 h-40 w-40 bg-[#fdf6e4] rounded-xl -z-10" />
              <div className="absolute right-0 bottom-0 h-32 w-32 bg-[#9BE3DE] rounded-xl -z-10" />
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Two professionals collaborating on a laptop"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

