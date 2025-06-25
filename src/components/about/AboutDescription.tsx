'use client';

import Image from 'next/image';

export default function AboutDescription() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">ABOUT US</h2>
        <p className="text-black-400 font-medium leading-relaxed">
          CariKOL didirikan pada tahun 2024 sebagai solusi atas tantangan dalam dunia influencer marketing yang semakin kompleks. 
          Kami memulai dari kebutuhan sederhana: bagaimana content creator dapat mempresentasikan diri secara profesional, dan bagaimana brand dapat menemukan mitra yang sesuai secara efisien. 
          Dalam waktu singkat, CariKOL tumbuh menjadi platform yang dipercaya oleh ribuan KOL dan ratusan brand di Indonesia.
        </p>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <Image
          src="/images/about-img.jpg" // gunakan path public
          alt="About Us Illustration"
          width={400}
          height={300}
          className="max-w-md w-full object-contain"
        />
      </div>
    </section>
  );
}
