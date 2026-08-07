import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", targetId: "home", path: "/#home" },
    { name: "About Us", targetId: "about", path: "/#about" },
    { name: "FAQ", targetId: "faq", path: "/#faq" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["home", "about", "why-us", "faq", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };


    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);



  const scrollToElement = (targetId) => {
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 80;

      const bodyRect =
        document.body.getBoundingClientRect().top;

      const elementRect =
        element.getBoundingClientRect().top;

      const elementPosition =
        elementRect - bodyRect;

      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };



  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToElement(targetId);
      }, 100);

    } else {
      scrollToElement(targetId);
    }

    setIsMobileMenuOpen(false);
  };



  return (

    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3"
          : "bg-white/40 backdrop-blur-sm py-5 sm:py-6"
      }`}
    >

      <div className="w-[96%] mx-auto px-2 sm:px-4 lg:px-6 flex items-center">


        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center cursor-pointer"
          aria-label="EHI Homes & Properties Ltd Home Page"
          title="EHI Homes & Properties Ltd - Real Estate & Luxury Lands in Lagos"
        >

          <img
            src="/logo.png"
            alt="EHI Homes & Properties Ltd Logo - Real Estate Company in Lagos"
            width="200"
            height="70"
            className="h-12 sm:h-16 lg:h-[70px] w-auto object-contain transition-transform duration-300 hover:scale-105"
          />

        </a>




        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-10 ml-auto">


          {/* NAVIGATION */}
          <nav className="flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">

            {navLinks.map((link) => {

              const isActive =
                location.pathname === "/" &&
                activeSection === link.targetId;


              return (

                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) =>
                    handleNavClick(e, link.targetId)
                  }
                  className={`relative text-sm lg:text-[15px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#2F4324] font-bold"
                      : "text-gray-700 hover:text-[#2F4324]"
                  }`}
                  title={`${link.name} - EHI Homes`}
                >

                  {link.name}


                  {isActive && (
                    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#B88A3E] rounded-full" />
                  )}

                </a>

              );

            })}

          </nav>





          {/* CONTACT BUTTON */}
          <a
            href="#contact"
            onClick={(e) =>
              handleNavClick(e, "contact")
            }
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2F4324] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#B88A3E] hover:shadow-lg"
            title="Contact EHI Homes & Properties Ltd"
          >

            Get In Touch

          </a>


        </div>





        {/* MOBILE BUTTON */}
        <button
          onClick={() =>
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden ml-auto p-2 rounded-lg text-gray-800 hover:text-[#2F4324]"
        >

          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >

            {isMobileMenuOpen ? (

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />

            ) : (

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />

            )}

          </svg>

        </button>


      </div>





      {/* MOBILE MENU */}

      {isMobileMenuOpen && (

        <div className="md:hidden bg-white/95 backdrop-blur-md  shadow-xl px-5 py-6 space-y-4">


          {navLinks.map((link) => (

            <a
              key={link.name}
              href={link.path}
              onClick={(e) =>
                handleNavClick(e, link.targetId)
              }
              className="block text-gray-800 font-medium hover:text-[#2F4324]"
            >

              {link.name}

            </a>

          ))}



          <a
            href="#contact"
            onClick={(e) =>
              handleNavClick(e, "contact")
            }
            className="block text-center bg-[#2F4324] text-white py-3 rounded-xl"
          >

            Get In Touch

          </a>


        </div>

      )}


    </header>

  );
};


export default Navbar;