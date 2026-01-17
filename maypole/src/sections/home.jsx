import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

export default function Home() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div className="w-screen h-screen overflow-hidden">
        <img
          src="/images/hero.webp"
          alt="hero image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-1  h-screen w-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.6)_40%,rgba(0,0,0,0.8)_100%)]" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute z-5 flex flex-col top-0 left-0 w-full h-screen justify-center px-5 gap-8 max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-white text-5xl md:text-5xl font-bold  font-montserrat"
        >
          Your Care, Our Priority
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-white text-2xl max-w-2xl font-poppins"
        >
          Delivering both compassionate, professional home and hospital care
          services across the Greater Accra Region; <br />
          24 hours a day/365 days a year.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex gap-5"
        >
          <a
            className="bg-white py-2 px-5 border border-white text-secondary rounded-2xl hover:cursor-pointer hover:bg-transparent hover:border hover:border-secondary hover:text-secondary transition-all duration-300 ease-out"
            href="#contact"
          >
            Get Care Support <FaArrowRight className="inline" />
          </a>
          <a
            href="tel:+233550693731"
            className="bg-transparent border border-white py-2 px-5 text-primary rounded-2xl hover:cursor-pointer hover:bg-white hover:border-primary transition-all duration-300 ease-out"
          >
            Call Us{" "}
            <span className="rounded-full bg-white p-1 ml-4">
              <IoCall className="inline" size={20} />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
