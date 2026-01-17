import { motion } from "motion/react";

export default function Career() {
  return (
    <section id="career" className="py-20">
      <h1 className="text-5xl text-center font-bold font-inter text-blue-500 ">
        Career Opportunities
      </h1>
      <p className="max-w-5xl mx-auto px-5 md:px-0 text-center text-lg font-light font-inter text-gray-700 mb-10 mt-5">
        Maypole Care is seeking to attract experienced home care and hospital
        facility workers who love working in the community. Do you love working
        in a flexible environment and have a passion for caring for patients in
        their homes? <br />
        Join Our Team!
      </p>

      <h3 className="font-bold text-2xl text-center">What We Offer:</h3>
      <ul className="font-inter text-gray-700 text-center p-5 space-y-4 px-5 md:px-20">
        <li className="">
          Flexible working hours (daytime, evening, live-in & weekend shifts)
        </li>
        <li>Supportive management and peer support</li>
        <li>Opportunities to grow within a caring professional environment</li>
      </ul>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
        }}
        className="flex justify-center mt-10"
      >
        <a
          href="mailto:info@maypolecare.com"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Apply Now
        </a>
      </motion.div>
    </section>
  );
}
