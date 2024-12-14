"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PowerBiLogo from "../public/icons8-power-bi-logo.svg";
import QuickBooksLogo from "../public/quickbooks-1.svg";
import SlackLogo from "../public/slack-new-logo.svg";

export function SystemIntegration() {
  return (
    <div className="relative h-60 w-full rounded-xl bg-white p-6 shadow-lg overflow-hidden">
      {/* Center Circle */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative h-24 w-24 rounded-full bg-[#38B2AC]/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-[#38B2AC]" />
          </div>
        </div>
      </div>

      {/* Integration Lines - Animated Beam */}
      <motion.svg
        className="absolute inset-0 h-full w-full z-0"
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M80,100 C140,100 160,100 200,100 C240,100 260,100 320,100"
          fill="none"
          stroke="#38B2AC"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      {/* Integration Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-12 z-20">
        {/* Slack */}
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-lg bg-white p-2 shadow-md">
            <Image
              src={SlackLogo}
              alt="Slack"
              width={48}
              height={48}
              className="rounded"
            />
          </div>
          <span className="text-xs font-medium text-slate-600">Slack</span>
        </div>

        {/* QuickBooks */}
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-lg bg-white p-2 shadow-md">
            <Image
              src={QuickBooksLogo}
              alt="QuickBooks"
              width={48}
              height={48}
              className="rounded"
            />
          </div>
          <span className="text-xs font-medium text-slate-600">QuickBooks</span>
        </div>

        {/* Power BI */}
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-lg bg-white p-2 shadow-md">
            <Image
              src={PowerBiLogo}
              alt="Power BI"
              width={48}
              height={48}
              className="rounded"
            />
          </div>
          <span className="text-xs font-medium text-slate-600">Power BI</span>
        </div>
      </div>
    </div>
  );
}
