import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-label="Contact EHI Homes & Properties Ltd"
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

          <address className="mt-10 space-y-6 not-italic">

            <div className="flex gap-4">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#B88A3E]/10 flex items-center justify-center">
                <Phone className="text-[#B88A3E]" size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[#2F4324]">
                  Phone
                </h3>
                <p className="text-gray-600">
                  <a href="tel:+2349037125053" className="hover:text-[#B88A3E] transition" title="Call EHI Homes">+234 903 712 5053</a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+2349161966606" className="hover:text-[#B88A3E] transition" title="Call EHI Homes">+234 916 196 6606</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#B88A3E]/10 flex items-center justify-center">
                <Mail className="text-[#B88A3E]" size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[#2F4324]">
                  Email
                </h3>
                <p className="text-gray-600 wrap-break-word text-sm">
                  <a href="mailto:ehihomesandpropertiesltd@gmail.com" className="hover:text-[#B88A3E] transition" title="Email EHI Homes">
                    ehihomesandpropertiesltd@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#B88A3E]/10 flex items-center justify-center">
                <MapPin className="text-[#B88A3E]" size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[#2F4324]">
                  Office Address
                </h3>
                <p className="text-gray-600">
                  Five Point Business Hub, Opposite Community Primary School, Isheri Olofu Grace Land, Isheri, Lagos State, Nigeria.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#B88A3E]/10 flex items-center justify-center">
                <Clock className="text-[#B88A3E]" size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[#2F4324]">
                  Working Hours
                </h3>
                <p className="text-gray-600">
                  Mon - Fri: 8:00 AM – 5:00 PM
                </p>
              </div>
            </div>

          </address>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-3/5 rounded-3xl p-10 border border-neutral-300">

          <h3 className="text-3xl font-bold text-[#2F4324] mb-8">
            Send us a Message
          </h3>

          <form
            action="https://formsubmit.co/techokoye@gmail.com"
            method="POST"
            className="space-y-6"
            aria-label="Property Enquiry Form"
          >

            {/* Hidden Inputs */}
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Property Enquiry - EHI Homes" />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="sr-only">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#B88A3E]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#B88A3E]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#B88A3E]"
              />
            </div>

            <div>
              <label htmlFor="contact-subject" className="sr-only">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#B88A3E]"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Tell us about the property you're looking for..."
                required
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none resize-none focus:border-[#B88A3E]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#2F4324] text-white px-8 py-4 rounded-xl hover:bg-[#3d5a2d] transition cursor-pointer"
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