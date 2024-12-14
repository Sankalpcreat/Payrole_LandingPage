"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {  Lock, Unlock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PayrollChart } from "./payroll-chart";
import { SystemIntegration } from "./system-integration";
import { ScrollAnimation } from "./scroll-animation";

export function Features() {
  const [isLocked, setIsLocked] = useState(true); // Toggle state for the lock animation

  // Automatically toggle lock state every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLocked((prev) => !prev); // Toggle the lock state
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <ScrollAnimation>
      <section className="w-full bg-gradient-to-b from-[#e0f7f7] via-white to-[#fdf6e4]/20 py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Payroll Overview Card */}
            <Card className="group relative overflow-hidden border border-slate-200 bg-white/50 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6e4]/50 to-[#e0f7f7]/50 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardContent className="relative space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Payroll Overview
                  </h3>
                  <div className="rounded-xl bg-white p-6 shadow-md">
                    <div className="text-sm font-medium text-slate-500">
                      Payrolls Cost
                    </div>
                    <div className="mt-2 text-3xl font-bold text-[#38B2AC]">
                      $12,900
                    </div>
                    <div className="text-sm text-slate-400">last month</div>
                  </div>
                </div>
                <p className="text-slate-500">
                  Get a detailed descriptions about Payrolls Cost, Total
                  Expense, Pending Payments, and Total Payrolls in your
                  dashboard.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold text-[#38B2AC] hover:text-[#2C9296]"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* System Integration Card */}
            <Card className="group relative overflow-hidden border border-slate-200 bg-white/50 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6e4]/50 to-[#e0f7f7]/50 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardContent className="relative space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                    System Integration
                  </h3>
                  <SystemIntegration />
                </div>
                <p className="text-slate-500">
                  Our payroll system integrates seamlessly with your existing HR
                  and accounting platforms, ensuring smooth data
                  synchronization.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold text-[#38B2AC] hover:text-[#2C9296]"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Real-Time Reporting Card */}
            <Card className="group relative overflow-hidden border border-slate-200 bg-white/50 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6e4]/50 to-[#e0f7f7]/50 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardContent className="relative space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Real-Time Reporting
                  </h3>
                  <div className="rounded-xl bg-white p-4 shadow-md">
                    <PayrollChart />
                  </div>
                </div>
                <p className="text-slate-500">
                  Access up-to-date financial and payroll reports anytime,
                  giving you the data you need for informed decision-making.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold text-[#38B2AC] hover:text-[#2C9296]"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Security Card */}
            <Card className="group relative overflow-hidden border border-slate-200 bg-white/50 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6e4]/50 to-[#e0f7f7]/50 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardContent className="relative space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                    High-Level Data Security
                  </h3>

                  {/* Dynamic Lock Icon */}
                  <div className="flex justify-center py-6">
                    <motion.div
                      className="rounded-full bg-[#38B2AC]/10 p-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isLocked ? (
                        <motion.div
                          key="lock"
                          initial={{ rotate: 0, opacity: 0 }}
                          animate={{ rotate: 360, opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Lock className="h-12 w-12 text-[#38B2AC]" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="unlock"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Unlock className="h-12 w-12 text-[#38B2AC]" />
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>

                <p className="text-slate-500">
                  Your payroll data is encrypted using the latest technology,
                  ensuring the privacy and security of employee information.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold text-[#38B2AC] hover:text-[#2C9296]"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}
