import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isopen, setIsopen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav>
        <div
          className={`flex z-100 justify-between px-5 py-3 fixed w-full items-center  
                    transition-all duration-300 ease-in
                    ${
                      scrolled
                        ? "text-black bg-white/90 backdrop-blur-md shadow-md"
                        : "bg-white/5 backdrop-blur-md text-white"
                    }
                    `}
        >
          <a href="" className="flex gap-2 justify-center items-center">
            <img src="logo.png" alt="company logo" className="w-12 h-auto" />
            <p className="text-secondary font-bold text-lg">
              Maypole <span className="text-primary">Care</span>{" "}
            </p>
          </a>

          <ul className="hidden md:flex gap-10 items-center">
            <li>
              <a href="#home" className="hover:text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-secondary">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-secondary">
                Services
              </a>
            </li>
            <li className="hidden">
              <a href="#reviews" className="hover:text-secondary">
                Reviews
              </a>
            </li>
            <li>
              <a href="#career" className="hover:text-secondary">
                Career
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-secondary">
                Contact
              </a>
            </li>
            <li className="bg-white py-2 px-5 text-xs text-secondary rounded-2xl">
              <a
                href="tel:+233550693731"
                className="hover:text-primary font-bold"
              >
                Book An Appointment
                <FaArrowRight className="inline ml-2" />
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsopen(!isopen)}
          >
            {isopen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isopen && (
          <ul className="md:hidden bg-white/90 backdrop-blur-md fixed top-16 z-50 w-full flex flex-col items-center shadow-lg transition-all duration-300 ease-out">
            <li className="p-4 border-b border-gray-200">
              <a href="#home" className="hover:text-secondary">
                Home
              </a>
            </li>
            <li className="p-4 border-b border-gray-200">
              <a href="#about" className="hover:text-secondary">
                About
              </a>
            </li>
            <li className="p-4 border-b border-gray-200">
              <a href="#services" className="hover:text-secondary">
                Services
              </a>
            </li>
            <li className="hidden p-4 border-b border-gray-200">
              <a href="#reviews" className="hover:text-secondary">
                Reviews
              </a>
            </li>
            <li className="p-4 border-b border-gray-200">
              <a href="#career" className="hover:text-secondary">
                Career
              </a>
            </li>
            <li className="p-4 border-b border-gray-200">
              <a href="#contact" className="hover:text-secondary">
                Contact
              </a>
            </li>
            <li className="bg-white py-2 px-5 text-xs text-secondary rounded-2xl mb-2">
              <a
                href="tel:+233550693731"
                className="hover:text-primary font-bold text-lg"
              >
                Book An Appointment
                <FaArrowRight className="inline ml-2" />
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
