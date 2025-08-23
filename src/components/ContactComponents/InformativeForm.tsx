'use client';
import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { Facebook, Instagram } from 'lucide-react';

const info = [
  { icon: FiMapPin, lines: ['6638 152A St #115, Surrey, BC V3S 5X5'] },
  { icon: FiPhone,  lines: ['+1 (604) 593-0080'] },
  { icon: FiMail,   lines: ['partydelightsca@outlook.com'] },
];

export default function InformativeForm() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-normal text-gray-900 font-heading">Get in touch</h2>
              <p className="mt-6   text-sm md:text-base text-gray-600">
              We’d Love To Hear From You. Reach Out For Orders, Questions, Or Just A Quick Hello.
              </p>
            </div>

            <ul className="space-y-5">
              {info.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[#ff3131] text-[#ff3131]" aria-hidden>
                      <Icon className="text-lg" />
                    </span>
                    <div className="text-sm md:text-base text-gray-800">
                      {item.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div>
              {/* <span className="text-xl text-gray-500 font-heading">Follow us</span> */}
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/partydelightsca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-full border border-[#ff3131] text-[#ff3131] transition hover:opacity-90"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/partydelightsca/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-full border border-[#ff3131] text-[#ff3131] transition hover:opacity-90"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full">
            <h3 className="text-xl md:text-4xl font-normal text-gray-900 font-heading"> Contact Us </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
We’d Love To Hear From You. Share Your Thoughts Below And We’ll Get Back To You Soon.
</p>
            <form className="mt-6 space-y-4 flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  {/* <label htmlFor="firstName" className="mb-1 block text-sm text-gray-600">First name*</label> */}
                  <input
                    id="firstName"
                    type="text"
                    placeholder='First Name'
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ff3131]"
                  />
                </div>
                <div>
                  {/* <label htmlFor="lastName" className="mb-1 block text-sm text-gray-600">Last name*</label> */}
                  <input
                    id="lastName"
                    type="text"
                    placeholder='Last Name'
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ff3131]"
                  />
                </div>
              </div>

              <div>
                {/* <label htmlFor="email" className="mb-1 block text-sm text-gray-600">Email address* */}
             
                <input
                  id="email"
                  type="email"
                  placeholder='Email Address'
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ff3131]"
                />
              </div>

              <div>
                {/* <label htmlFor="message" className="mb-1 block text-sm text-gray-600">Message*</label> */}
                <textarea
                  id="message"
                   placeholder='Message'
                  rows={5}
                  required
                  className="w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ff3131]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-[#ff3131] transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#ff3131]"
              >
                Send message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
