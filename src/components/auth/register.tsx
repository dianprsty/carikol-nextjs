"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const slides = [
    {
        image: "/images/hero.png",
        title: "Buat Rate Card Profesional Secara Instan",
        text: "Tidak perlu ribet desain manual. KOL bisa langsung tampil profesional.",
    },
    {
        image: "/images/hero2.png",
        title: "Satu Tempat untuk Semua Data Kolaborasi",
        text: "Simpan semua portofolio, campaign, dan statistik dalam satu dashboard.",
    },
    {
        image: "/images/hero3.png",
        title: "Tunjukkan Kredibilitas KOL Kamu",
        text: "Dengan data engagement & audience insights otomatis terupdate.",
    },
    {
        image: "/images/hero4.png",
        title: "KOL = Brand Partner, Bukan Sekadar Influencer",
        text: "Tingkatkan value personal branding kamu di mata brand profesional.",
    },
    {
        image: "/images/hero5.png",
        title: "Siap Kolaborasi? Tinggal Kirim Link!",
        text: "Bagikan rate card kamu ke brand secara instan dan track siapa yang melihatnya.",
    },
];

export default function RegisterForm() {
    const router = useRouter();
    const [current, setCurrent] = useState(0);

    // Form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleRegister = () => {
        setError("");
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill all fields.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Password and confirm password do not match.");
            return;
        }

        // TODO: tambahkan logic submit ke backend/register API di sini

        // Contoh: setelah register sukses, redirect ke login
        router.push("/login");
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            {/* Right side carousel */}
            <div className="hidden md:flex items-center justify-center bg-teal-500">
                <div className="w-full px-4 py-8 text-center">
                    <div className="transition-opacity duration-500 ease-in-out">
                        <Image
                            src={slides[current].image}
                            alt="Slide"
                            width={400}
                            height={300}
                            className="mx-auto object-contain mb-4"
                        />
                        <h2 className="text-2xl font-bold text-white">{slides[current].title}</h2>
                        <p className="mt-4 text-white text-base">{slides[current].text}</p>
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Left side form */}
            <div className="flex items-center justify-center p-6 md:p-12 bg-white">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start">
                            <Image src="/images/logo.png" width={40} height={40} alt="Logo" />
                            <div className="bg-amber-200 ml-2 px-2 py-1 rounded">
                                <h1 className="text-lg font-semibold">CariKol</h1>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold mt-5">Welcome</h1>
                        <h3 className="text-gray-600">Please register with your account instead</h3>
                    </div>

                    {error && (
                        <p className="text-red-600 font-semibold text-sm">{error}</p>
                    )}

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter your full name here"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-teal-400"
                        />
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-teal-400"
                        />
                        <input
                            type="password"
                            placeholder="Enter your password here"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-teal-400"
                        />
                        <input
                            type="password"
                            placeholder="Confirm your password here"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-teal-400"
                        />

                        <Button
                            className="w-full bg-blue-600 hover:bg-teal-500 text-white p-3 rounded-lg font-semibold"
                            onClick={handleRegister}
                        >
                            Register
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    );
}
