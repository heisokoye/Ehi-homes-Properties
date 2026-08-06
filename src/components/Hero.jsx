import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] text-gray-900 overflow-x-hidden ">

            {/* HERO SECTION - Exact Match to Reference Image */}
            <section id="home" aria-label="Hero Section - Real Estate & Property Investments in Lagos" className="relative w-full h-screen flex items-center overflow-hidden bg-white scroll-mt-24">

                {/* Background Image Container - Right side building with seamless left fade */}
                <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] h-full z-0 flex items-center justify-end pointer-events-none">
                    <div className="relative w-full h-full">
                        <img
                            src="/house_hero.png"
                            alt="EHI Homes & Properties Ltd - Modern Luxury Real Estate Architecture in Lagos Nigeria"
                            width="1200"
                            height="800"
                            fetchPriority="high"
                            className="w-full h-full object-cover object-left lg:object-center"
                        />
                        {/* Left to right gradient fade overlay to make text area pure crisp white */}
                        <div className="absolute inset-y-0 left-0 w-full lg:w-1/4 bg-linear-to-r from-white via-white/90 to-transparent"></div>
                        {/* Bottom left soft blend gradient */}
                        <div className="absolute bottom-0 left-0  h-2/2 bg-linear-to-tr from-white via-white/80 to-transparent"></div>
                        {/* Top gradient overlay */}
                        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white/90 via-white/40 to-transparent"></div>
                    </div>
                </div>

                {/* Hero Left Content */}
                <div className="w-[92%] mx-auto relative z-10 -translate-y-20">
                <div className="w-full lg:w-[50%] text-left">

                    {/* Small Label */}
                    <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-[2px] bg-[#B88A3E]" />

                    <span className="text-[#B88A3E] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]">
                        EHI Homes &amp; Properties Ltd
                    </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-[42px] sm:text-5xl lg:text-[62px] xl:text-[68px] font-bold tracking-[-0.03em] leading-[1.08] text-[#2F4324]">
                    Building Lifestyles,
                    <span className="block text-[#B88A3E]">
                        Creating Values.
                    </span>
                    </h1>

                    {/* Paragraph for rich snippet search relevance */}
                    <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                        Your premier real estate partner in Lagos, Nigeria. We specialize in genuine, affordable, and well-documented land and property investments.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">

                    <a
                        href="#contact"
                        title="Contact EHI Homes & Properties"
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('contact');
                            if (el) {
                                const offset = 80;
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = el.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
                            }
                        }}
                        className="px-7 py-4 rounded-xl border border-[#B88A3E] text-[#B88A3E] font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-[#B88A3E] hover:text-white hover:-translate-y-1 cursor-pointer"
                    >
                        Contact Us
                    </a>

                    </div>

                </div>
                </div>

            </section>


        </div>
    );
};

export default Hero;
