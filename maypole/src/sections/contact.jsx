import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-4  bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="p-10 bg-blue-900 text-white mx-5 my-20 md:m-20 md:rounded-4xl shadow-lg"
      >
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-10">
          <h1 className="border py-2 px-4 rounded-full w-fit font-bold text-sm mb-5">
            ReachOutToUs
          </h1>
          <div className="flex gap-5">
            <a href="https://www.tiktok.com/@maypole.care?is_from_webapp=1&sender_device=pc">
              <img
                src="/icons/tiktok.png"
                alt="tiktok icon"
                className="w-8 h-8"
              />
            </a>
            <a href="https://www.instagram.com/maypole.care/?utm_source=ig_web_button_share_sheet">
              <img
                src="/icons/instagram.png"
                alt="instagram icon"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        <h2 className="capitalize text-3xl font-inter font-bold">
          {" "}
          We Would Love to Hear from you
        </h2>
        <p className="my-5">
          {" "}
          You can reach out to us for enquiries, emergencies or to book
          appointments
        </p>

        <div className="flex flex-col md:flex-row mt-15 gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="space-y-2 md:space-y-3 p-10 bg-white/10 rounded-2xl"
          >
            <MdOutlineMailOutline className="text-white w-7 h-7" />
            <h3>Email Support</h3>
            <p>Our Team is Available to attend to you</p>
            <a
              href="mailto:info@maypolecare.com"
              className="text-blue-400 hover:underline"
            >
              info@maypolecare.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="space-y-2 md:space-y-3 p-10 bg-white/10 rounded-2xl"
          >
            <IoCall className="text-white w-7 h-7" />
            <h3>Call Us Directly</h3>
            <p>Available during working hours</p>
            <p className="text-blue-400 ">
              +23325 606 0995 <span className="text-white">/</span> +23325 606
              0996
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            className="space-y-2 md:space-y-3 p-10 bg-white/10 rounded-2xl"
          >
            <MdLocationCity className="text-white w-7 h-7" />
            <h3>Visit Our Office</h3>
            <p>Available during working hours</p>
            <a href="#" className="text-blue-400 ">
              Kasoa, Road of justice
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
