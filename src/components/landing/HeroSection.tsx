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

export function HeroSection() {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <HeroCarrouselItem />
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
