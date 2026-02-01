import { motion } from "motion/react";

export default function Services() {
  return (
    <section id="services" className="  py-22 bg-background">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-inter text-5xl text-blue-500 font-bold text-center mb-8 px-4"
      >
        Our Core Services
      </motion.h1>
      <ul className="flex flex-wrap justify-center px-4">
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 bg-white rounded-xl shadow-lg p-6 m-4 w-90"
        >
          <img src="/icons/nurse.png" alt="Home Care" className="w-12 h-12" />
          <h2 className="font-bold font-poppins">Nursing Care </h2>
          <p className="font-inter">
            Flexible nursing support from a few hours daily to long-term care,
            focused on dignity and independence.
          </p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 bg-white rounded-xl shadow-lg p-6 m-4 w-90"
        >
          <img
            src="/icons/domiciliary.png"
            alt="Home Care"
            className="w-12 h-12"
          />
          <h2 className="font-bold font-poppins">Domiciliary Care </h2>
          <p className="font-inter">
            Live-in care, enablement programs, conventional home care services,
            and hospital discharge support.
          </p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 bg-white rounded-xl shadow-lg p-6 m-4 w-90"
        >
          <img src="/icons/respite.png" alt="Home Care" className="w-12 h-12" />
          <h2 className="font-bold font-poppins">Respite Care </h2>
          <p className="font-inter">
            Short-term care to allow family caregivers time to rest while
            ensuring continuity of care.
          </p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 bg-white rounded-xl shadow-lg p-6 m-4 w-90"
        >
          <img
            src="/icons/paliative.png"
            alt="Home Care"
            className="w-12 h-12"
          />
          <h2 className="font-bold font-poppins">Palliative Care </h2>
          <p className="font-inter">
            Compassionate end-of-life care that enhances comfort and quality of
            life at home.
          </p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 bg-white rounded-xl shadow-lg p-6 m-4 w-90"
        >
          <img src="/icons/mind.png" alt="Home Care" className="w-12 h-12" />
          <h2 className="font-bold font-poppins">Mental Health Care </h2>
          <p className="font-inter">
            Professional mental health support promoting emotional wellbeing in
            familiar surroundings.
          </p>
        </motion.li>
      </ul>

      <div className="bg-[url(/images/specialized.jpg)] bg-cover bg-center max-h-screen w-full mt-20 p-10 md:pl-30  ">
        <h1 className="font-bold font-inter text-4xl md:text-5xl mb-2 text-blue-500 uppercase">
          Our Specialisations
        </h1>
        <p className="text-gray-500 font-inter capitalize">
          Each care plan is tailored to the individual’s needs, preferences, and
          life goals.
        </p>
        <ul className="flex flex-col gap-3 font-inter list-disc mt-8 ml-5">
          <li>Elderly Care</li>
          <li>Dementia Care</li>
          <li>Palliative Care</li>
          <li>Physical Disabilities</li>
          <li>Learning Difficulties</li>

          <li>Behaviour That Challenges</li>
          <li>Companionship & Social Engagement</li>
        </ul>
      </div>
    </section>
  );
}
