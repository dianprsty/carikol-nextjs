'use client';

import React from 'react';

export default function VisionMission() {
  return (
    <section id="visi-misi" className="py-20 bg-gray-50">
      <div className="w-11/12 max-w-6xl mx-auto">

        {/* Judul */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">Visi & Misi Kami</h2>
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto">
            Inilah dasar dari setiap langkah yang kami ambil di{' '}
            <span className="font-semibold text-teal-700">CariKOL</span>.
          </p>
        </div>

        {/* Stack Vertikal Semua Ukuran */}
        <div className="flex flex-col gap-8">

          {/* VISI */}
          <div className="bg-teal-600 text-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">VISI</h3>
            <p className="text-lg leading-relaxed">
              Menjadi platform terdepan dalam mempertemukan KOL dan Brand secara profesional,
              transparan, dan efisien di Asia Tenggara.
            </p>
          </div>

          {/* MISI */}
          <div className="bg-gray-200 text-black p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">MISI</h3>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
              <li>Mempermudah kreator membuat rate card profesional dalam hitungan menit.</li>
              <li>Memberikan akses bagi brand untuk menemukan KOL sesuai target audiens dan budget.</li>
              <li>Menyediakan sistem yang transparan, aman, dan terpercaya dalam kolaborasi digital.</li>
              <li>Mendorong pertumbuhan komunitas kreatif berbasis data dan kepercayaan.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
