import React from "react";

type Props = {};

export default function StatisticSection({}: Props) {
  return (
    <section className="w-11/12 max-w-6xl py-16 mx-auto md:py-24 md:w-11/12">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold text-teal-600 md:text-4xl lg:text-5xl md:mb-4">
          Penuhi Semua Kebutuhan KOL Anda
        </h2>
        <p className="text-base text-slate-800 md:text-lg">
          Buat Rate Card dan dapatkan insight yang tepat
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold text-teal-600 md:text-[2rem] lg:text-[2.75rem]">
            17.6M+
          </h3>
          <p className="text-sm text-gray-600 sm:text-base xl:text-lg">
            KOL di Indonesia
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold text-teal-600 md:text-[2rem] lg:text-[2.75rem]">
            69.733+
          </h3>
          <p className="text-sm text-gray-600 sm:text-base xl:text-lg">
            KOL Telah Bergabung
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold text-teal-600 md:text-[2rem] lg:text-[2.75rem]">
            55.187+
          </h3>
          <p className="text-sm text-gray-600 sm:text-base xl:text-lg">
            KOL Bawa Rate Card
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold text-teal-600 md:text-[2rem] lg:text-[2.75rem]">
            2.045+
          </h3>
          <p className="text-sm text-gray-600 sm:text-base xl:text-lg">
            Brand Telah Bergabung
          </p>
        </div>
      </div>
    </section>
  );
}
