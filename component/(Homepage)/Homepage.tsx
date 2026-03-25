"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Users, Crown } from "lucide-react";

const Homepage = () => {
  return (
    <main className="min-h-screen py-14 flex flex-col items-center justify-center text-center px-6">
      
      {/* Hero Section */}
      <header className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl max-w-4xl font-bold tracking-tight leading-tight"
        >
          Meet Bulbul
          <span className="inline-flex items-center align-middle mx-3 bg-black p-2 rounded-2xl">
            <Image
              src="/Bulbul.png"
              alt="Bulbul Avatar"
              height={60}
              width={50}
              className="rounded-lg object-cover w-auto h-10 md:h-16"
            />
          </span>
          <br className="hidden md:block" />
          <span className="text-blue-600">
            Your Personal Teacher to get you into AIIMS
          </span>
        </motion.h1>

        {/* Divider + Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mt-8 w-full max-w-2xl"
        >
          <hr className="flex-1 border-gray-200" />
          <p className="text-sm md:text-base text-gray-600 font-medium px-2">
            AIIMS is not easy to crack. Stay serious — Bulbul is here to help 🚀
          </p>
          <hr className="flex-1 border-gray-200" />
        </motion.div>
      </header>

      {/* Stats Grid */}
      <section className="w-full max-w-5xl mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <StatCard 
            Icon={ClipboardList} 
            number="500+" 
            description="Tests happen regularly" 
          />

          {/* Card 2 */}
          <StatCard 
            Icon={Users} 
            number="4000+" 
            description="Students giving this exam" 
          />

          {/* Card 3 - Spans 2 cols on mobile for balance, or stays 1 */}
          <StatCard 
            Icon={Crown} 
            number="2000+" 
            description="Students upgraded to premium" 
            className="sm:col-span-2 md:col-span-1"
          />
        </motion.div>
      </section>
    </main>
  );
};

// Reusable StatCard Component for cleaner code
const StatCard = ({ Icon, number, description, className = "" }: any) => (
  <motion.article
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    }}
    whileHover={{ scale: 1.03 }}
    className={`bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-left transition-shadow hover:shadow-md ${className}`}
  >
    <div className="bg-gray-50  rounded-xl flex items-center  mb-2">
      <Icon className="w-6 h-6 text-blue-600" />
          <h2 className="text-3xl md:text-4xl ml-4 font-bold text-black">{number}</h2>
    </div>

    <p className="text-gray-500 mt-2 text-sm leading-relaxed">{description}</p>
  </motion.article>
);

export default Homepage;