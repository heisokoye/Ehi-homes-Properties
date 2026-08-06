import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-white py-24 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Decorative Rings */}
      <div className="absolute -top-28 -right-28 w-[420px] h-[420px] rounded-full border-[50px] border-[#B88A3E]/8" />
      <div className="absolute -bottom-28 -left-28 w-[420px] h-[420px] rounded-full border-[50px] border-[#2F4324]/6" />

      <div className="relative z-10 w-[90%] mx-auto flex flex-col lg:flex-row gap-20">

        {/* LEFT SIDE */}
        <div className="lg:w-2/5">

          <div className="flex items-center gap-3 mb-5">
            <span className="w-12 h-[2px] bg-[#B88A3E]" />
            <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#B88A3E]">
              Contact Us
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#2F4324] leading-tight">
            Let's help you find your
            <span className="text-[#B88A3E]"> dream property.</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Whether you're buying, selling, or simply making an enquiry,
            our team is ready to guide you every step of the way.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex gap-4">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#B88A3E]/10 flex items-center justify-center">
                <Phone className="text-[#B88A3E]" size={20} />
              </div>

              <div>
                <h4 className="font-semibold text-[#2F4324]">
                  Phone
                </h4>
                <p className="text-gray-600">
                  +234 903 712 5053
                </p>
                <p className="text-gray-600">
                  +234 916 196 6606
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#B88A3E]/10 flex items-center justify-center">
                <Mail className="text-[#B88A3E]" size={20} />
              </div>

              <div>
                <h4 className="font-semibold text-[#2F4324]">
                  Email
                </h4>
                <p className="text-gray-600 wrap-break-word text-sm">
                  ehihomesandpropertiesltd@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#B88A3E]/10 flex items-center justify-center">
                <MapPin className="text-[#B88A3E]" size={20} />
              </div>

              <div>
                <h4 className="font-semibold text-[#2F4324]">
                  Office
                </h4>
                <p className="text-gray-600">
                  Five Point Business Hub, Opposite Community Primary School, Isheri Olofu GRace Land, Isheri, Lagos State, Nigeria.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#B88A3E]/10 flex items-center justify-center">
                <Clock className="text-[#B88A3E]" size={20} />
              </div>

              <div>
                <h4 className="font-semibold text-[#2F4324]">
                  Working Hours
                </h4>
                <p className="text-gray-600">
                  Mon - Fri: 8:00 AM – 5:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-3/5  rounded-3xl p-10 border border-neutral-300">

          <h3 className="text-3xl font-bold text-[#2F4324] mb-8">
            Send us a Message
          </h3>

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#B88A3E]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#B88A3E]"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#B88A3E]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#B88A3E]"
            />

            <textarea
              rows={6}
              placeholder="Tell us about the property you're looking for..."
              className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none resize-none focus:border-[#B88A3E]"
            />

            <button
              className="bg-[#2F4324] text-white px-8 py-4 rounded-xl hover:bg-[#3d5a2d] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;