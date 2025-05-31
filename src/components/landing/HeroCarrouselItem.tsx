import Image from "next/image";
import React from "react";

type Props = {};

export default function HeroCarrouselItem({}: Props) {
  return (
    <div className="flex flex-col-reverse items-center w-full gap-8 sm:flex-row sm:w-full md:w-full">
      <div className="flex flex-col items-center justify-center sm:w-1/2 md:mb-0 sm:items-start ">
        <h1 className="mb-4 font-extrabold text-center text-teal-600 sm:text-start text-4xl/snug sm:text-3xl/snug md:text-4xl/snug lg:text-5xl xl:text-6xl lg:leading-[1.175]">
          Buat Rate Card, Mudah Dan Cepat
        </h1>
        <p className="max-w-md mx-auto mb-4 text-sm leading-relaxed text-center text-slate-800 sm:mx-0 sm:text-start lg:text-lg md:text-base lg:mb-8 md:mb-4">
          CariKOL bantu influencer membuat rate card profesional hanya dalam
          hitungan menit. Tinggal Klik Tanpa repot, tanpa ribet.
        </p>
        <a
          href="/html/kol/index.html"
          className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-full cursor-pointer md:text-base md:px-6 md:py-3"
        >
          Buat Rate Card Sekarang!
        </a>
      </div>
      <div className="w-3/4 mx-auto md:w-1/2">
        <Image width={1000} height={1000}
          src="/images/hero.png"
          alt="Dashboard Preview"
          className="w-full"
        />
      </div>
    </div>
  );
}
