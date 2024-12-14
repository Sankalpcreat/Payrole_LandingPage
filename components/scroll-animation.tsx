"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Scroll Animation Component
interface ScrollAnimationProps {
  children: React.ReactNode;
}

export const ScrollAnimation = ({ children }: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.2, // Stagger child animations
          },
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

// Hover Button Component
export const HoverButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#007BFF", color: "#fff" }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg"
    >
      Hover Me
    </motion.button>
  );
};

// Hover Image Component
export const HoverImage = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.3 },
      }}
      className="overflow-hidden rounded-lg"
    >
      <img
        src="https://via.placeholder.com/400"
        alt="Hover Example"
        className="w-full h-auto"
      />
    </motion.div>
  );
};

// Parallax Scrolling Section
export const ParallaxSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gray-100"
    >
      <h1 className="text-center text-4xl font-bold">Parallax Effect</h1>
    </motion.div>
  );
};

// Dynamic Menu Component
export const DynamicMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Toggle Menu
      </button>
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="absolute mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <ul>
          <li className="px-4 py-2 hover:bg-gray-100">Item 1</li>
          <li className="px-4 py-2 hover:bg-gray-100">Item 2</li>
          <li className="px-4 py-2 hover:bg-gray-100">Item 3</li>
        </ul>
      </motion.div>
    </div>
  );
};

// Advanced Dynamic Menu with Hover Submenus
export const AdvancedMenu = () => {
  return (
    <div className="flex space-x-8">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="p-4 bg-gray-200 rounded-lg cursor-pointer"
      >
        Home
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="p-4 bg-gray-200 rounded-lg cursor-pointer"
      >
        About
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="p-4 bg-gray-200 rounded-lg cursor-pointer"
      >
        Contact
      </motion.div>
    </div>
  );
};
