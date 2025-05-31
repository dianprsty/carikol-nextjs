"use client"

import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="advertise -z-10">
      <div className="w-11/12 max-w-6xl mx-auto md:w-11/12">
        <div className="px-5 py-3 mx-auto my-16 max-w-5xl tracking-wide md:px-4 md:my-20">
          <div className="flex justify-center text-3xl font-black text-teal-600">
            Frequently Asked Questions
          </div>

          <Accordion type="single" collapsible className="grid gap-3 py-8 text-lg leading-6 text-gray-800 md:gap-8 md:grid-cols-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Apa itu CariKOL?</AccordionTrigger>
              <AccordionContent>
                CariKOL adalah platform yang memudahkan influencer untuk membuat dan membagikan rate card secara profesional dan cepat.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Siapa saja yang bisa menggunakan CariKOL?</AccordionTrigger>
              <AccordionContent>
                Platform ini bisa digunakan oleh content creator, influencer, KOL, dan siapa pun yang ingin menampilkan portofolio media sosial serta tarif kerja sama mereka.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Apa saja fitur utama di CariKOL?</AccordionTrigger>
              <AccordionContent>
                Beberapa fitur unggulan termasuk pembuatan rate card otomatis, integrasi statistik media sosial, portofolio digital, serta link yang bisa dibagikan ke brand.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Apakah CariKOL gratis digunakan?</AccordionTrigger>
              <AccordionContent>
                Ya! Saat ini semua fitur utama dapat digunakan secara gratis. Kami juga akan menyediakan opsi premium dengan fitur tambahan di masa depan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
