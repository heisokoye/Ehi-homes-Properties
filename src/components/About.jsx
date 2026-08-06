import React from "react";

const About = () => {
  const coreValues = [
    "Integrity",
    "Excellence",
    "Innovation",
    "Customer Satisfaction",
    "Trust",
    "Professionalism",
    "Sustainability",
    "Teamwork",
  ];

  return (
    <section
      id="about"    
      aria-label="About EHI Homes & Properties Ltd"

      className="relative w-full bg-white font-['Plus_Jakarta_Sans',sans-serif] py-24 overflow-hidden"
    >

      {/* Decorative Rings */}
      <div className="pointer-events-none absolute -top-28 -right-28 w-[420px] h-[420px] rounded-full border-[50px] border-[#B88A3E]/10" />
      <div className="pointer-events-none absolute -top-16 -right-16 w-[260px] h-[260px] rounded-full border-[28px] border-[#2F4324]/10" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full border-[55px] border-[#B88A3E]/10" />


      {/* Content */}
      <div className="relative z-10 w-[90%] mx-auto flex flex-col lg:flex-row gap-20 items-start">


        {/* LEFT IMAGE */}
        <div className="lg:w-1/2 w-full relative hidden md:block">

          <div className="absolute top-6 left-6 w-full h-full rounded-3xl bg-gradient-to-br from-[#B88A3E]/20 to-[#2F4324]/10 -z-10" />

          <div className="rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src="/parlour.webp"
              alt="EHI Homes Property"
              className="w-full h-[300px] md:h-[550px] object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

        </div>



        {/* RIGHT CONTENT */}
        <div className="lg:w-1/2 w-full">


          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-12 h-[2px] bg-[#B88A3E]" />

            <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#B88A3E]">
              Who We Are
            </span>
          </div>



          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#2F4324]">

            A real estate company built on{" "}
            <span className="text-[#B88A3E]">
              trust
            </span>
            , not just transactions.

          </h2>



          {/* Description */}
          <p className="mt-6 text-gray-600 text-lg leading-8">

            EHI Homes &amp; Properties Ltd helps individuals, families, and
            investors find secure property opportunities through genuine,
            transparent, and well-documented real estate solutions.

          </p>



          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-[#B88A3E]/40 to-transparent my-10" />




          {/* Mission */}
          <div className="mb-6 border-l-4 border-[#B88A3E] bg-[#F9F8F5] rounded-xl p-6">

            <h3 className="text-xl font-bold text-[#2F4324] mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-7">

              To provide genuine, affordable, and well-documented real estate
              solutions through integrity, professionalism, innovation, and
              excellent customer service, helping individuals and families
              achieve their dream of land and property ownership.

            </p>

          </div>




          {/* Vision */}
          <div className="mb-10 border-l-4 border-[#2F4324] bg-white rounded-xl p-6 shadow-sm">

            <h3 className="text-xl font-bold text-[#2F4324] mb-3">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-7">

              To become one of Nigeria's most trusted and innovative real
              estate companies, delivering quality property investments while
              creating sustainable communities that improve lives.

            </p>

          </div>





          {/* Core Values */}
          <div id="why-us" className="scroll-mt-24">

            <div className="flex items-center gap-3 mb-6">

              <span className="w-10 h-[2px] bg-[#B88A3E]" />

              <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[#B88A3E]">
                Our Core Values
              </span>

            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


              {coreValues.map((value) => (

                <div
                  key={value}
                  className="flex items-center gap-3 bg-[#F9F8F5] rounded-xl p-4 border border-[#B88A3E]/10 hover:shadow-md transition"
                >

                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#B88A3E]/15">

                    <svg
                      className="w-4 h-4 text-[#B88A3E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />

                    </svg>

                  </div>


                  <span className="text-[#2F4324] font-semibold">
                    {value}
                  </span>


                </div>

              ))}


            </div>

          </div>



        </div>


      </div>


    </section>
  );
};


export default About;