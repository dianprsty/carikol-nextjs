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

const Profile = [
    {
        nama: "Dhian Prasetyo",
        motivasi: "makan, tidur, dulu aja",
        image: "",
        buttonElement: [
            {
                title: 'Github',
                url: ""
            },
            {
                title: 'Linkedin',
                url: ""
            },
            {
                title: 'Instagram',
                url: ""
            }
        ],
    },

    {
        nama: "Muhammad Dzulfiqar",
        motivasi: "makan tidur",
        image: "",
        buttonElement: [
            {
                title: 'Github',
                url: ""
            },
            {
                title: 'Linkedin',
                url: ""
            },
            {
                title: 'Instagram',
                url: ""
            }
        ],
    },

    {
        nama: "Dhafina",
        motivasi: "stecu stecu",
        image: "",
        buttonElement: [
            {
                title: 'Github',
                url: ""
            },
            {
                title: 'Linkedin',
                url: ""
            },
            {
                title: 'Instagram',
                url: ""
            }
        ],
    },
]


export default function TeamSection() {
    return (

        <section className="team-section">

            <section className="grid m-auto  sm:ml-24 sm:mr-24 flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12">
                {/* Left Content */}
                <div className="md:w-1/2 text-center mb-5 md:text-left m-auto bg-teal-500 p-5 rounded-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Meet Our Team</h2>
                    <p className="text-white font-medium text-sm text-center leading-relaxed">
                        Kami adalah tim di balik CariKOL — platform yang hadir sejak 2025 untuk menjawab tantangan dunia influencer marketing yang semakin kompleks. Berawal dari pertanyaan sederhana: bagaimana seorang content creator bisa tampil profesional, dan bagaimana brand bisa menemukan mitra yang tepat secara efisien?

                        Dengan latar belakang yang beragam namun satu visi, tim kami bekerja untuk membangun solusi yang mudah, cepat, dan terpercaya. Kini, CariKOL dipercaya oleh ribuan KOL dan ratusan brand di seluruh Indonesia. Kami percaya, kolaborasi yang tepat dimulai dari sistem yang solid dan tim yang berdedikasi.
                    </p>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 mb-10 m-auto md:mb-0 flex justify-center">
                    <Image
                        src="/images/about-img.jpg" // gunakan path public
                        alt="About Us Illustration"
                        width={400}
                        height={300}
                        className="max-w-md w-full object-contain"
                    />
                </div>
            </section>

            <div className="p-0 mx-auto sm:mb-10">
                <div className="px-6 mt-20 ml-0 sm:ml-24 sm:mr-24 sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-0 lg:pt-0">
                    <AnimatedOnScroll delay={0.1}>
                        <div className="text-center lg:mx-10 lg:flex-auto lg:text-left">
                            {Profile.map((item, index) => {
                                if (index === 0) {
                                    return <div key={index}>
                                        <h2 className="font-semibold text-teal-600 text-base/7">
                                            As Kak {item.nama.split(" ")[0]}
                                        </h2>
                                        <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 lg:text-4xl md:text-base">
                                            {item.nama}
                                        </p>
                                        <p className="mt-6 text-sm text-gray-600 lg:text-lg md:text-base">
                                            {item.motivasi}  </p>
                                    </div>
                                }
                                return null
                            })}

                            <div className="flex gap-x-6 justify-center items-center py-5 lg:justify-start">
                                {Profile.map((item, index) => {
                                    if (item.nama === "Muhammad Dzulfiqar") {
                                        return item.buttonElement.map((subItem, subindex) => {
                                            let selectUrl = "";

                                            if (subItem.title === "Github") {
                                                selectUrl = subItem.url;
                                            } else if (subItem.title === "Linkedin") {
                                                selectUrl = subItem.url;
                                            } else if (subItem.title === "Instagram") {
                                                selectUrl = subItem.url;
                                            }

                                            return <Button key={subindex} variant="default" size="default" asChild>
                                                <a href={selectUrl} target="_blank" rel="noopener noreferrer">
                                                    {subItem.title}
                                                </a>
                                            </Button>

                                        }

                                        )
                                    }
                                    return null
                                })}
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

                            {Profile.map((item, index) => {
                                if (index === 1) {
                                    return (
                                        <div key={index}>
                                            <h2 className="font-semibold text-teal-600 text-base/7">
                                                As Kak {item.nama.split(" ")[1].substring(0, 4)}
                                            </h2>
                                            <p key={index} className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 text-pretty lg:text-4xl md:text-base">
                                                {item.nama}
                                            </p>

                                            <p className="mt-6 text-sm text-gray-600 lg:text-lg md:text-base text-pretty">
                                                {item.motivasi}
                                            </p>
                                        </div>


                                    )
                                }
                                return null
                            })}

                            <div className="flex gap-x-6 justify-center items-center py-5 lg:justify-start">
                                {Profile.map((item, index) => {
                                    if (item.nama === "Dhian Prasetyo") {
                                        return item.buttonElement.map((subItem, subIndex) => {
                                            let selectUrl = "";

                                            if (subItem.title === "Github") {
                                                selectUrl = subItem.url;
                                            } else if (subItem.title === "Linkedin") {
                                                selectUrl = subItem.url;
                                            } else if (subItem.title === "Instagram") {
                                                selectUrl = subItem.url;
                                            }

                                            return (
                                                <Button key={subIndex} variant="default" size="default" asChild>
                                                    <a href={selectUrl} target="_blank" rel="noopener noreferrer">
                                                        {subItem.title}
                                                    </a>
                                                </Button>
                                            );
                                        })
                                    }

                                    return null
                                })}

                            </div>

                        </AnimatedOnScroll>
                    </div>
                </div>
            </div>

            <div className="p-0 mx-auto sm:mb-10">
                <div className="px-6 mt-20 ml-0 sm:ml-24 sm:mr-24 sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-0 lg:pt-0">
                    <AnimatedOnScroll delay={0.1}>
                        <div className="text-center lg:mx-10 lg:flex-auto lg:text-left">
                            
                            {Profile.map((item, index) => {
                                if (index === 2) {
                                    return <div key={index}>
                                         <h2 className="font-semibold text-teal-600 text-base/7">
                                            As Kak {item.nama.split(" ")[0]}
                                        </h2>
                                        <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 lg:text-4xl md:text-base">
                                            {item.nama}
                                        </p>
                                        <p className="mt-6 text-sm text-gray-600 lg:text-lg md:text-base">
                                            {item.motivasi}  </p>
                                    </div>
                                }
                                return null
                            })}

                            <div className="flex gap-x-6 justify-center items-center py-5 lg:justify-start">
                                {Profile.map((item, index) => {
                                    if (item.nama === "Dhafina") {
                                        return item.buttonElement.map((subItem, subindex) => {
                                            let selectUrl = "";

                                            if (subItem.title === "Github") {
                                                selectUrl = subItem.url;
                                            } else if (subItem.title === "Linkedin") {
                                                selectUrl = subItem.url;
                                            } else if (subItem.title === "Instagram") {
                                                selectUrl = subItem.url;
                                            }

                                            return <Button key={subindex} variant="default" size="default" asChild>
                                                <a href={selectUrl} target="_blank" rel="noopener noreferrer">
                                                    {subItem.title}
                                                </a>
                                            </Button>

                                        }

                                        )
                                    }
                                    return null
                                })}
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

        </section>
    )

}