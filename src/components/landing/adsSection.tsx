'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { Button } from '@/components/ui/button'; // sesuaikan path sesuai projectmu

type AnimatedOnScrollProps = {
    children: ReactNode;
    delay?: number;
};

// Komponen reusable untuk animasi saat scroll
const AnimatedOnScroll = ({ children, delay = 0 }: AnimatedOnScrollProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

export function AdsSection() {
    return (
        <section className="advertise">
            <div className="p-0 mx-auto sm:mb-10">
                <div className="px-6 mt-20 ml-0 sm:ml-24 sm:mr-24 sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-0 lg:pt-0">
                    <AnimatedOnScroll delay={0.1}>
                        <div className="text-center lg:mx-10 lg:flex-auto lg:text-left">
                            <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 lg:text-4xl md:text-base">
                                Buat Rate Card Profesional Secara Instan
                            </p>
                            <p className="mt-6 text-sm text-gray-600 lg:text-lg md:text-base">
                                Tak perlu desain manual atau ribet cari template.
                                <br />
                                Dengan CariKOL, influencer bisa membuat rate card profesional hanya dalam hitungan menit.
                                Cukup isi data, pilih gaya, dan sistem otomatis menyusun semuanya dengan layout elegan dan terpercaya.
                            </p>
                            <div className="flex gap-x-6 justify-center items-center py-5 lg:justify-start">
                                <Button variant="default" size="default" asChild>
                                    <a href="#">Get started</a>
                                </Button>
                                <Button variant="link" size="default" asChild>
                                    <a href="#">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </AnimatedOnScroll>

                    <AnimatedOnScroll delay={0.3}>
                        <div className="overflow-hidden relative z-10">
                            <Image
                                className="rounded-xl ring-1 bg-teal-600/5 ring-white/10"
                                src="/images/vector1.png"
                                alt="App screenshot"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </AnimatedOnScroll>
                </div>
            </div>

            <div className="mx-auto mb-3">
                <div className="px-6 mt-10 mr-0 sm:mr-24 sm:ml-24 lg:mt-0 sm:px-16 lg:flex lg:gap-x-10 lg:px-0 lg:pt-0">
                    <AnimatedOnScroll delay={0.2}>
                        <div className="overflow-hidden relative z-10">
                            <Image
                                className="p-4 rounded-xl ring-1 bg-teal-600/5 ring-white/10"
                                src="/images/vector2.png"
                                alt="App screenshot"
                                width={450}
                                height={450}
                            />
                        </div>
                    </AnimatedOnScroll>

                    <div className="py-5 pr-0 mx-auto text-center sm:pr-5 lg:mx-0 lg:flex-auto lg:py-32 lg:text-left lg:w-1/2">
                        <AnimatedOnScroll delay={0.4}>
                            <h2 className="font-semibold text-teal-600 text-base/7">
                                Proses lebih singkat, hasil lebih maksimal.
                            </h2>
                            <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 text-pretty lg:text-4xl md:text-base">
                                Optimasi Profil untuk Brand
                            </p>
                            <p className="mt-6 text-sm text-gray-600 lg:text-lg md:text-base text-pretty">
                                CariKOL tak hanya soal rate card — profil kamu juga dioptimalkan agar menarik bagi brand. Fitur ini memungkinkan influencer menampilkan portofolio, statistik, dan pengalaman kolaborasi sebelumnya dalam satu halaman yang rapi dan informatif.
                            </p>
                            <div className="flex gap-x-6 justify-center items-center py-5 lg:justify-start">
                                <Button variant="default" size="default" asChild>
                                    <a href="#">Get started</a>
                                </Button>
                                <Button variant="link" size="default" asChild>
                                    <a href="#">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </Button>
                            </div>
                        </AnimatedOnScroll>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-white sm:py-20 -z-30">
                <div className="px-6 mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
                    <AnimatedOnScroll delay={0}>
                        <h2 className="font-semibold text-center text-teal-600 text-base/7">
                            Deploy faster
                        </h2>
                        <p className="mx-auto mt-2 max-w-lg text-4xl font-semibold tracking-tight text-center text-black text-balance sm:text-5xl">
                            Tampil Maksimal di Mata Brand
                        </p>
                    </AnimatedOnScroll>

                    <div className="grid gap-4 mt-10 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1 content-stretch items-stretch">
                        {/* Left large card */}
                        <AnimatedOnScroll delay={0.1}>
                            <div className="relative h-full flex flex-col lg:row-span-2">
                                <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                        <p className="mt-2 text-lg font-medium tracking-tight text-teal-600 max-lg:text-center">
                                            Profil Keren, Deal Makin Lancar
                                        </p>
                                        <p className="mt-2 max-w-lg text-gray-600 text-sm/6 max-lg:text-center">
                                            Tingkatkan peluang kolaborasi dengan profil influencer
                                            yang tampil profesional, rapi, dan meyakinkan.
                                        </p>
                                    </div>
                                    <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                        <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                            <Image
                                                src="/images/vector8.png"
                                                alt="Profil Keren"
                                                fill
                                                style={{ objectFit: 'cover', objectPosition: 'top' }}
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                            </div>
                        </AnimatedOnScroll>

                        {/* Top right card + bottom right card */}
                        <div className="grid h-full content-stretch items-stretch">
                            <AnimatedOnScroll delay={0.2}>
                                <div className="relative h-full flex flex-col">
                                    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                            <p className="mt-2 text-lg font-medium tracking-tight text-teal-600 max-lg:text-center">
                                                Terlihat Lebih Profesional
                                            </p>
                                            <p className="mt-2 max-w-lg text-gray-600 text-sm/6 max-lg:text-center">
                                                Profil kamu bukan sekadar biodata. Tampilkan portofolio,
                                                testimoni brand, dan pencapaian dalam satu halaman keren.
                                            </p>
                                        </div>
                                        <div className="flex flex-1 justify-center items-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                            <Image
                                                src="/images/vector4.jpg"
                                                alt="Terlihat Lebih Profesional"
                                                width={400}
                                                height={300}
                                                className="w-full max-lg:max-w-xs"
                                                priority
                                            />
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                                </div>
                            </AnimatedOnScroll>

                            <AnimatedOnScroll delay={0.3}>
                                <div className="relative h-full flex flex-col lg:col-start-2 lg:row-start-2">
                                    <div className="absolute inset-px bg-white rounded-lg"></div>
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                            <p className="mt-2 text-lg font-medium tracking-tight text-teal-600 max-lg:text-center">
                                                Statistik yang Meyakinkan
                                            </p>
                                            <p className="mt-2 max-w-lg text-gray-600 text-sm/6 max-lg:text-center">
                                                Tampilkan data performa seperti engagement rate, audience
                                                reach, dan niche yang relevan—semua otomatis ter-update.
                                            </p>
                                        </div>
                                        <div className="flex flex-1 justify-center items-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                            <Image
                                                src="/images/vector7.png"
                                                alt="Statistik yang Meyakinkan"
                                                width={400}
                                                height={300}
                                                className="w-full rounded-b-4xl max-lg:max-w-xs"
                                                priority
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute inset-px rounded-lg ring-1 shadow-sm pointer-events-none ring-black/5"></div>
                                </div>
                            </AnimatedOnScroll>
                        </div>

                        {/* Right large card */}
                        <AnimatedOnScroll delay={0.4}>
                            <div className="relative h-full flex flex-col lg:row-span-2">
                                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                        <p className="mt-2 text-lg font-medium tracking-tight text-teal-600 max-lg:text-center">
                                            Riwayat Kolaborasi
                                        </p>
                                        <p className="mt-2 max-w-lg text-gray-600 text-sm/6 max-lg:text-center">
                                            Buktikan pengalamanmu dengan daftar brand yang pernah
                                            bekerja sama denganmu. Bangun kepercayaan sejak awal.
                                        </p>
                                    </div>
                                    <div className="relative min-h-[30rem] w-full grow">
                                        <div className="overflow-hidden absolute right-0 bottom-0 top-10 left-10 bg-gray-900 rounded-tl-xl shadow-2xl">
                                            <div className="flex ring-1 bg-gray-800/40 ring-white/5">
                                                <div className="flex -mb-px font-medium text-gray-400 text-sm/6">
                                                    <div className="px-4 py-2 text-white border-r border-b border-r-white/10 border-b-white/20 bg-white/5">
                                                        Tetap Aman dan Terkontrol
                                                    </div>
                                                    <div className="px-4 py-2 border-r border-gray-600/10">
                                                        Data kamu tersimpan aman. Kamu bisa atur apa saja
                                                        yang ingin ditampilkan atau disembunyikan dari
                                                        publik.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-6 pt-6 pb-14">
                                                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                                        <Image
                                                            src="/images/vector6.png"
                                                            alt="Riwayat Kolaborasi"
                                                            fill
                                                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                                                            priority
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                            </div>
                        </AnimatedOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
