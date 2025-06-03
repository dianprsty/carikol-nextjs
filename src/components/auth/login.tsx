"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';  // import useRouter

// ... slides array tetap sama
const slides = [
    {
        image: '/images/hero.png',
        title: 'Buat Rate Card Profesional Secara Instan',
        text: 'Tidak perlu ribet desain manual. KOL bisa langsung tampil profesional.'
    },
    {
        image: '/images/hero2.png',
        title: 'Satu Tempat untuk Semua Data Kolaborasi',
        text: 'Simpan semua portofolio, campaign, dan statistik dalam satu dashboard.'
    },
    {
        image: '/images/hero3.png',
        title: 'Tunjukkan Kredibilitas KOL Kamu',
        text: 'Dengan data engagement & audience insights otomatis terupdate.'
    },
    {
        image: '/images/hero4.png',
        title: 'KOL = Brand Partner, Bukan Sekadar Influencer',
        text: 'Tingkatkan value personal branding kamu di mata brand profesional.'
    },
    {
        image: '/images/hero5.png',
        title: 'Siap Kolaborasi? Tinggal Kirim Link!',
        text: 'Bagikan rate card kamu ke brand secara instan dan track siapa yang melihatnya.'
    }
];

export default function LoginForm() {
    const [current, setCurrent] = useState(0);
    const router = useRouter();  // inisialisasi router

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleLogin = () => {
        router.push('/');
    };

    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="flex items-center justify-center p-6 md:p-12 bg-white">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start">
                            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
                            <div className="bg-amber-200 ml-2 px-2 py-1 rounded">
                                <h1 className="text-lg font-semibold">CariKol</h1>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold mt-5">Welcome Back</h1>
                        <h3 className="text-gray-600">Please login with your account instead</h3>
                    </div>

                    <div className="space-y-4">
                        <input
                            className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-teal-400"
                            type="email"
                            placeholder="Email"
                        />

                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-teal-400"
                            />
                        </div>

                        <div className="text-sm text-right">
                            <Link href="/forgot-password" className="text-gray-700 hover:text-teal-600">
                                Forgot your password?
                            </Link>
                        </div>

                        <Button
                            onClick={handleLogin}  // pasang event handler di sini
                            className="w-full bg-primary hover:bg-primary/90 text-white p-3 rounded-lg font-semibold transition ease-in-out duration-300"
                        >
                            Login
                        </Button>


                        <div className="text-sm text-center m-auto row">
                            <span>Don't Have Account? </span>
                            <Link href="/register" className="text-gray-700  font-bold hover:text-teal-600">
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT CONTENT / CAROUSEL */}
            <div className="hidden md:flex items-center justify-center bg-primary">
                <div className="text-center px-4 py-8">
                    <div className="transition-opacity duration-500 ease-in-out">
                        <Image
                            src={slides[current].image}
                            alt="Hero"
                            width={400}
                            height={300}
                            className="mx-auto object-contain mb-4"
                        />
                        <h2 className="text-xl md:text-3xl font-bold text-white">
                            {slides[current].title}
                        </h2>
                        <p className="mt-2 md:mt-4 text-white text-sm md:text-base">
                            {slides[current].text}
                        </p>
                    </div>

                    {/* Indicators */}
                    <div className="mt-6 flex justify-center space-x-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${current === index ? 'bg-white' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
