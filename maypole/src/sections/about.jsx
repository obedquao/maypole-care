import { easeOut, motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="px-4 md:px-0 py-16  ">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-poppins text-3xl font-bold text-center text-blue-500 mt-10 mb-6"
      >
        About Maypole Care Company Limited
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center px-3 md:px-0 font-poppins font-stretch-125% text-gray-700 max-w-5xl mx-auto"
      >
        Maypole Care Limited is a trusted care provider, delivering exceptional
        home and hospital-based care services within the Greater Accra Region
        and its surrounding areas. We provide vital support to individuals and
        families, enabling our clients to live safely, comfortably, and with
        dignity in their own homes. Our services range from personal care,
        mobility assistance, medication management, and hospital appointment
        support to companionship, social engagement, and long-term care. We
        believe everyone deserves compassionate, personalised care tailored to
        their individual needs. Our happy, friendly, and highly qualified team
        works closely with each client to develop special care plans that
        promote independence, comfort, and quality of life.{" "}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row my-5 gap-10 bg-blue-500/10 p-5 md:p-10 rounded-lg max-w-7xl mx-auto"
      >
        <div className="flex-1">
          <h1 className="font-inter font-bold text-2xl text-center text-blue-500">
            Our Mission
          </h1>
          <p className="font-inter  text-gray-700 max-mt-4 text-center">
            To deliver exceptional, person-centred home care services that
            improve quality of life by providing compassionate, personalised
            care in the comfort of our clients’ homes, 24 hours a day, 365 days
            a year.
          </p>
        </div>
        <div className="h-auto w-1 mx-5 bg-gray-300" />
        <div className="flex-1">
          <h1 className="font-inter font-bold text-2xl text-center text-blue-500">
            Our Vision
          </h1>
          <p className="font-inter text-gray-700 max-mt-4 text-center">
            At Maypole Care, we are more than a care agency — we are a caring
            family. We strive to uphold the highest standards of care,
            supporting individuals to thrive at home or within a hospital
            environment through outstanding, tailored care delivered by a
            dedicated and well-trained team.
          </p>
        </div>
      </motion.div>

      {/* Values Section */}
      <div className="flex flex-col bg-gray-100 p-5 md:p-20 md:px-25 gap-5 md:gap-5">
        <h1 className="text-4xl text-blue-500 font-bold font-poppins text-center mb-10">
          Our Values
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
          <li className="relative inset-0 h-110 w-90 group overflow-hidden">
            <img
              src="/images/care.webp"
              alt="care image"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute bg-black/40 inset-0 transition-colors duration-700 ease-out group-hover:bg-black/40" />
            <div className="absolute inset-0 flex  flex-col  justify-end p-5 gap-5 transition-all duration-700 group-hover:-translate-y-20">
              <h2 className="text-white font-bold text-3xl">Care</h2>
              <p className="text-white text-xl">
                We are committed to providing Person Centred Care: Choice,
                Dignity, Respect, Privacy, Rights, Independence, and
                Partnership.
              </p>
            </div>
          </li>
          <li className="relative inset-0 h-110 w-90 group overflow-hidden">
            <img
              src="/images/passionate.webp"
              alt="compassionate image"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute bg-black/60 inset-0 transition-colors duration-700 ease-out group-hover:bg-black/40" />
            <div className="absolute inset-0 flex  flex-col  justify-end p-5 gap-5 transition-all duration-700 group-hover:-translate-y-20">
              <h2 className="text-white font-bold text-3xl">Compassionate</h2>
              <p className="text-white text-xl">
                Awareness of patients and their stories, attentiveness to their
                immediate needs, noticing distress, and attentive listening.
              </p>
            </div>
          </li>
          <li className="relative inset-0 h-110 w-90 group overflow-hidden">
            <img
              src="/images/honesty.webp"
              alt="Honesty image"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute bg-black/60 inset-0 transition-colors duration-700 ease-out group-hover:bg-black/40" />
            <div className="absolute inset-0 flex  flex-col  justify-end p-5 gap-5 transition-all duration-700 group-hover:-translate-y-20">
              <h2 className="text-white font-bold text-3xl">Honesty</h2>
              <p className="text-white text-xl">
                We are truthful, transparent, and accountable in all
                interactions with patients, families, colleagues, and other
                healthcare professionals.
              </p>
            </div>
          </li>
          <li className="relative inset-0 h-110 w-90 group overflow-hidden">
            <img
              src="/images/empowering.webp"
              alt="Empowerment image"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute bg-black/60 inset-0 transition-colors duration-700 ease-out group-hover:bg-black/40" />
            <div className="absolute inset-0 flex  flex-col  justify-end p-5 gap-5 transition-all duration-700 group-hover:-translate-y-20">
              <h2 className="text-white font-bold text-3xl">Empowering</h2>
              <p className="text-white text-xl">
                We enable individuals to take control of their own health and
                well-being, promoting autonomy, informed decision-making, and
                active participation in their care.
              </p>
            </div>
          </li>
          <li className="relative inset-0 h-110 w-90 group overflow-hidden">
            <img
              src="/images/collaborative.webp"
              alt="Collaborative image"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute bg-black/60 inset-0 transition-colors duration-700 ease-out group-hover:bg-black/40" />
            <div className="absolute inset-0 flex  flex-col  justify-end p-5 gap-5 transition-all duration-700 group-hover:-translate-y-20">
              <h2 className="text-white font-bold text-3xl">Collaborative</h2>
              <p className="text-white text-xl">
                We work in Partnership with other healthcare providers and
                multidisciplinary teams to plan and coordinate services,
                providing evidence–based practice and ensuring that patients’
                needs are met.
              </p>
            </div>
          </li>
          <li className="relative inset-0 h-110 w-90 group overflow-hidden">
            <img
              src="/images/excellence.webp"
              alt="care image"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute bg-black/60 inset-0 transition-colors duration-700 ease-out group-hover:bg-black/40" />
            <div className="absolute inset-0 flex  flex-col  justify-end p-5 gap-5 transition-all duration-700 group-hover:-translate-y-20">
              <h2 className="text-white font-bold text-3xl">Excellence</h2>
              <p className="text-white text-xl">
                We are committed to maintaining the highest standards of care
                through continuous training, evidence-based practice, and
                ongoing improvement. Our goal is to consistently deliver safe,
                reliable, and high-quality care that exceeds expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* why choose us  */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="py-10 px-10 md:p-10 my-20 md:m-20 bg-blue-500/10 rounded-lg"
      >
        <h1 className="text-3xl font-popppins text-blue-500 font-bold">
          Why Choose Us
        </h1>
        <ul className="flex justify-center gap-5 flex-col md:flex-row mt-10">
          <li className="flex flex-col gap-2">
            <h2 className="text-gray-500 text-4xl font-bold flex items-center">
              1{" "}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-500 w-32 h-0.5 inline-block"
              />
            </h2>
            <h3 className="font-bold font-poppins ">Reliable 24/7 Support</h3>
            <p>
              We provide care 24 hours a day, 365 days a year, giving families
              peace of mind knowing trusted support is always available when
              it’s needed most.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h2 className="text-gray-500 text-4xl font-bold flex items-center">
              2{" "}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-500 w-32 h-0.5 inline-block"
              />
            </h2>
            <h3 className="font-bold font-poppins ">
              Personalised, Person-Centred Care
            </h3>
            <p>
              We take time to understand each individual’s needs, preferences,
              and life story, allowing us to create tailored care plans that
              respect dignity, independence, and choice.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h2 className="text-gray-500 text-4xl font-bold flex items-center">
              3{" "}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                viewport={{ once: true }}
                className="bg-gray-500 w-32 h-0.5 inline-block"
              />
            </h2>
            <h3 className="font-bold font-poppins ">
              Qualified, Compassionate Professionals
            </h3>
            <p>
              Our highly trained and dedicated team delivers care with empathy,
              professionalism, and respect, ensuring clients feel safe,
              supported, and valued at all times.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h2 className="text-gray-500 text-4xl font-bold flex items-center">
              4{" "}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
                viewport={{ once: true }}
                className="bg-gray-500 w-32 h-0.5 inline-block"
              />
            </h2>
            <h3 className="font-bold font-poppins ">Care You Can Trust</h3>
            <p>
              We work transparently and collaboratively with families and
              healthcare professionals to deliver high-quality, evidence-based
              care that genuinely improves quality of life.
            </p>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
