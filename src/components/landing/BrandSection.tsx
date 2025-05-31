import Image from "next/image";
import React from "react";

type Props = {};

export default function BrandSection({}: Props) {
  return (
    <section className="w-full py-12 bg-teal-600 lg:py-20 md:py-16">
      <div className="w-11/12 max-w-6xl mx-auto md:w-11/12">
        <p className="mb-8 text-lg font-semibold text-center text-white md:mb-12 lg:mb-16 md:text-3xl lg:text-4xl">
          Brand yang Telah Bekerjasama
        </p>
        <div className="flex mx-auto overflow-hidden flex-nowrap">
          <span className="flex justify-between min-w-[200%] gap-8 mr-16 animate-marquee">
            <Image width={128} height={128}
              src="/images/brand1.png"
              alt="Brand 1"
              className="h-6 md:h-8 lg:h-12 w-max"
            />
            <Image width={128} height={128}
              src="/images/brand2.png"
              alt="Brand 2"
              className="h-6 md:h-8 lg:h-12 w-max"
            />
            <Image width={128} height={128}
              src="/images/brand3.png"
              alt="Brand 3"
              className="h-6 md:h-8 lg:h-12 w-max"
            />
            <Image width={128} height={128}
              src="/images/brand4.png"
              alt="Brand 4"
              className="h-6 md:h-8 lg:h-12 w-max"
            />
            <Image width={128} height={128}
              src="/images/brand5.png"
              alt="Brand 5"
              className="h-6 md:h-8 lg:h-12 w-max"
            />
            <Image width={128} height={128}
              src="/images/brand1.png"
              alt="Brand 1"
              className="h-6 md:h-8 lg:h-12 w-max"
            />
            <Image width={128} height={128}
              src="/images/brand2.png"
              alt="Brand 2"
              className="h-6 md:h-8 lg:h-12 w-max"
            />
            <Image width={128} height={128}
              src="/images/brand3.png"
              alt="Brand 3"
              className="h-6 md:h-8 lg:h-12 w-max"
            />
            <Image width={128} height={128}
              src="/images/brand4.png"
              alt="Brand 4"
              className="h-6 md:h-8 lg:h-12 w-max"
            />
            <Image width={128} height={128}
              src="/images/brand5.png"
              alt="Brand 5"
              className="h-6 md:h-8 lg:h-12 w-max"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
