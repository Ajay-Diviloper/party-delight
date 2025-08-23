import React from 'react'
import Image from 'next/image'
const OurAboutUsTwo = () => {
  return (
    <section className="w-full bg-white py-10 md:py-28">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 md:gap-0 px-4 sm:px-4 md:px-0">
        {/* Left: Bakery Image */}
<div className="relative w-full aspect-[16/9] border-light-brown flex items-end">
          <div className="absolute w-full h-full">
            <Image
              src="/images/Cupcakes.webp"
              alt="Our Bakery Display"
              fill
              className="object-cover object-center rounded-none"
              priority
            />
          </div>
        </div>
        {/* Right: Open Hours Content with extra padding and exact text */}
        <div className="flex flex-col items-start justify-center  md:p-4 sm:p-8 md:pl-8 lg:p-16 py-6">
          <span className="text-xl md:text-2xl lg:text-3xl font-heading mb-4 text-[#ff3131]">Visit Us Anytime</span>
          <h2 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-dark-brown mb-4 sm:mb-6 leading-tight">
  We Are Here For Your <br /> Celebrations
</h2>
          <p className="text-grey text-sm sm:text-base md:text-lg font-sans mb-6 max-w-2xl">
Our Doors Are Always Open to Sweeten Your Day. Whether It’s a Birthday, Wedding, Anniversary, or Simply a Little Craving, We’re Here to Make Every Moment More Delightful. From Decadent Cakes to Handcrafted Desserts, Our Passionate Team Is Dedicated to Serving You Not Just a Treat, but an Experience Filled With Love, Joy, and a Slice of Pure Happiness. Walk In for a Celebration, or Stop By Just Because We’ll Always Be Ready With a Smile and Something Sweet to Brighten Your Day. </p>          {/* <div className="w-full mt-2 mb-2">
            <div className="flex justify-between items-center border-b border-gray-300 py-3">
              <span className="font-heading text-dark-brown text-base md:text-lg">Monday – Friday</span>
              <span className="text-gray-500 text-sm md:text-base italic">8:00 am - 8:00 pm</span>
            </div>
            {/* <div className="flex justify-between items-center border-b border-gray-300 py-3">
              <span className="font-heading text-dark-brown text-base md:text-lg">Saturday – Sunday</span>
              <span className="text-gray-500 text-sm md:text-base italic">9:00 am - 9:00 pm</span>
            </div> *
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default OurAboutUsTwo