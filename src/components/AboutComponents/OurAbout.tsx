import React from 'react'
import Image from 'next/image'

const OurAbout = () => {
  return (
    <section className="w-full bg-white py-10 md:py-28">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 md:gap-0 px-4 sm:px-4 md:px-0">
        {/* Left: Text */}
        <div className="flex flex-col items-start justify-center  md:p-4 sm:p-8 md:pr-8 lg:p-16 py-6">
          <span className="text-xl md:text-2xl lg:text-3xl font-heading mb-4 text-[#ff3131]">Welcome to Party Delights</span>
          <h2 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-dark-brown mb-4 sm:mb-6 leading-tight">Passion For Baking, Love For Celebration</h2>
          <p className="text-grey text-sm sm:text-base md:text-lg font-sans mb-3 sm:mb-4 max-w-2xl">
           At Party Delights, We Believe Every Celebration Deserves a Centerpiece That Delights the Senses. Our Expert Bakers Blend Tradition and Innovation to Create Cakes and Pastries That Are as Beautiful as They Are Delicious.
          </p>
          <p className="text-grey text-sm sm:text-base md:text-lg font-sans mb-4 sm:mb-6 max-w-2xl">
            From Sourcing the Finest Ingredients to Handcrafting Each Detail, Our Commitment Is to Quality, Creativity, and Customer Joy. Join Us in Making Every Occasion Unforgettable.
          </p>
          {/* <div className="mt-6 sm:mt-8">
          <Image src="/images/about3.png" alt="Signature Cake" width={180} height={60} className="object-contain w-36 sm:w-44 md:w-[220px]" />
          </div> */}
        </div>
        {/* Right: Background Image */}
<div className="relative w-full aspect-[16/9] border-light-brown flex items-end">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/33.jpeg"
              alt="Our Signature Collection"
              fill
              className="object-cover object-center rounded-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurAbout