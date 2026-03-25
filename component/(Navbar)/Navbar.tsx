"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md text-black border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* LEFT - Logo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl flex gap-2 items-center font-bold cursor-pointer font-sans"
      >
        <Image
          src={"/Bulbul.png"}
          alt={"Image of doctor"}
          height={50}
          width={50}
          className="rounded-full"
        />
        <span className="text-lg md:text-xl font-semibold tracking-tight">
          Bulbul
        </span>
      </motion.div>

      {/* CENTER - Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-10 text-sm md:text-base font-medium tracking-wide"
      >
        <span className="cursor-pointer hover:text-black/60 transition duration-200">
          NEET Exam
        </span>
        <span className="cursor-pointer hover:text-black/60 transition duration-200">
          Chapterwise Exam
        </span>
      </motion.div>

      {/* RIGHT - Login */}
      <motion.button
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border border-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition"
      >
        Login
      </motion.button>
    </nav>
  );
};

export default Navbar;
