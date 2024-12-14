import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "./scroll-animation"; // Import ScrollAnimation

const pricingPlans = [
  {
    name: "Basic",
    description: "For personal use and exploration of AI technology.",
    price: "$0",
    color: "text-[#38B2AC]", // Unified color scheme
    features: [
      "100 requests per day",
      "Free trial features access",
      "Limited API access",
    ],
    buttonText: "Get started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Premium",
    description: "Perfect for professionals and small businesses in need of significant AI integration.",
    price: "$9.99",
    color: "text-[#38B2AC]", // Unified color scheme
    popular: true,
    features: [
      "Unlimited AI generation",
      "Full new features access",
      "Priority support",
    ],
    buttonText: "Get started",
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "Perfect for large businesses or organizations that require specialized support.",
    price: "Custom",
    color: "text-[#38B2AC]", // Unified color scheme
    features: [
      "Custom deployment",
      "Comprehensive usage data",
      "Training specialized models",
    ],
    buttonText: "Contact sales",
    buttonVariant: "outline" as const,
  },
];

export function Pricing() {
  return (
    <ScrollAnimation> {/* Wrap with ScrollAnimation */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e0f7f7] to-[#fdf6e4] py-24">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#38B2AC]/20 to-transparent blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-[#9BE3DE]/20 to-transparent blur-3xl" />
        </div>

        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="bg-gradient-to-r from-[#38B2AC] to-[#9BE3DE] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl xl:text-6xl/none">
              Choose your plan
            </h2>
            <p className="text-xl text-slate-600">
              Unlock endless possibilities
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className="group relative overflow-hidden border-none bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6e4]/50 to-[#e0f7f7]/50 opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className={`text-2xl font-bold ${plan.color}`}>{plan.name}</h3>
                    {plan.popular && (
                      <Badge variant="secondary" className="bg-[#38B2AC]/20 text-[#38B2AC]">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.color}`}>{plan.price}</span>
                    {plan.name !== "Enterprise" && <span className="text-slate-600">/month</span>}
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 ${plan.color}`} />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full rounded-full transition-all ${
                      plan.popular
                        ? "bg-[#38B2AC] text-white hover:bg-[#2C9296]"
                        : "border-[#38B2AC] text-[#38B2AC] hover:bg-[#38B2AC] hover:text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}

