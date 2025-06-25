'use client';
import React from 'react';
import Image from 'next/image';

export default function PromotionalSection() {
  return (
    <div className="container mx-auto w-11/12 max-w-7xl sm:px-6">
      <div className="flex flex-col gap-7 items-center p-6 bg-teal-600 rounded-lg lg:flex-row md:p-10">
        
        {/* Kiri - Teks dan tombol */}
        <div className="flex-1 text-center lg:text-left lg:pr-10">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-3xl">
            Kembangkan bisnismu dengan CariKol!
          </h1>
          <p className="mb-6 font-normal text-white sm:text-base">
            Tingkatkan kehadiran brand-mu dengan ratecard siap pakai dan alat
            promosi yang maksimalkan potensi penuh pemasaran influencer dengan
            CariKOL.
          </p>
          <button className="inline-block px-4 py-3 font-bold text-center text-teal-600 bg-teal-50 rounded-lg shadow transition w-fit sm:text-base hover:shadow-teal-300">
            Coba cariKOL secara gratis!
          </button>
        </div>

        {/* Kanan - Statistik dan Gambar */}
        <div className="flex flex-col flex-1 gap-6 items-center w-full max-w-screen-sm lg:items-start">
          
          {/* Mobile Only */}
          <div className="flex flex-row gap-3 justify-center px-2 md:hidden">
            {['Followers', 'Likes', 'Comments'].map((label, i) => (
              <div key={i} className="p-3 w-28 text-center rounded-xl shadow backdrop-blur-sm bg-white/80">
                <p className="text-xs text-gray-600">{label}</p>
                <p className="text-base font-bold text-blue-600">
                  {label === 'Followers' ? '500k' : label === 'Likes' ? '20M' : '60k'}
                  <span className="text-xs text-green-500">
                    {label === 'Followers' ? ' +1.5%' : label === 'Likes' ? ' +0.5%' : ' +2.1%'}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center px-2 mt-4 md:hidden">
            <Image src="/images/1aii.png" alt="pict 1" width={160} height={240} className="object-cover rounded-lg" />
            <Image src="/images/2aii.png" alt="pict 2" width={100} height={240} className="object-cover rounded-lg" />
          </div>

          {/* Desktop Only */}
          <div className="hidden flex-row gap-5 items-start md:flex">
            <div className="flex flex-col gap-3">
              {[
                { label: 'Followers', value: '500k', change: '+1.5%' },
                { label: 'Avg. Likes', value: '20M', change: '+0.5%' },
                { label: 'Avg. Comments', value: '60k', change: '+2.1%' },
              ].map((stat, i) => (
                <div key={i} className="p-3 w-36 text-center rounded-xl shadow backdrop-blur-sm bg-white/80">
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-lg font-bold text-blue-600">
                    {stat.value} <span className="text-sm text-green-500">{stat.change}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="hidden gap-4 justify-center mt-4 md:flex">
              <Image src="/images/1aii.png" alt="pict 1" width={160} height={240} className="object-cover rounded-lg" />
              <Image src="/images/2aii.png" alt="pict 2" width={100} height={240} className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
