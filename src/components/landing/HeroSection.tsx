"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroCarrouselItem from "./HeroCarrouselItem";

export default function HeroSection() {
  const heroDatas = [
    {
      title: "Buat Rate Card, Mudah Dan Cepat",
      description:
        "CariKOL bantu influencer membuat rate card profesional hanya                dalam hitungan menit. Tinggal Klik Tanpa repot, tanpa ribet.",
      imageSrc: "/images/hero.png",
      buttonText: "Buat Rate Card Sekarang!",
      buttonLink: "/dashboard",
    },
    {
      title: "Gabung dan Tingkatkan Potensimu",
      description:
        "Baik Anda kreator maupun brand, semua peluang ada di CariKOL.              Daftar gratis dan mulai hari ini!",
      imageSrc: "/images/hero2.png",
      buttonText: "Gabung Sekarang!",
      buttonLink: "/dashboard",
    },
    {
      title: "Cari KOL Sesuai Kebutuhan Campaign Anda",
      description:
        "Filter berdasarkan kategori, audiens, hingga budget. Kolaborasi                jadi lebih tepat sasaran.",
      imageSrc: "/images/hero3.png",
      buttonText: "Lihat Rate Card!",
      buttonLink: "/dashboard",
    },
    {
      title: "Platform Terpercaya dan Aman",
      description:
        "Proses transparan, dukungan penuh dari tim kami, dan transaksi             yang terjamin untuk kedua belah pihak.",
      imageSrc: "/images/hero4.png",
      buttonText: "Gabung Sekarang!",
      buttonLink: "/dashboard",
    },
    {
      title: "Platform #1 untuk KOL & Brand",
      description:
        "Tingkatkan kolaborasi antar KOL dan Brand, maksimalkan peluang!",
      imageSrc: "/images/hero5.png",
      buttonText: "Gabung Sekarang!",
      buttonLink: "/dashboard",
    },
  ];
  return (
    <section className="relative w-11/12 max-w-7xl py-8 mx-auto overflow-hidden md:py-12">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {heroDatas.map((data, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <HeroCarrouselItem {...data} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative z-20 flex !items-center justify-center gap-4">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
