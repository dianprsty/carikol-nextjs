import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="p-12 w-full text-sm bg-white">
        <div className="grid grid-cols-1 gap-8 mx-auto w-full max-w-6xl md:grid-cols-4">
          {/* Kolom 1 */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-teal-600">CariKOL</h1>
            <p className="text-gray-600">
              CariKOL adalah platform digital yang memudahkan influencer dalam
              membuat rate card profesional secara instan.
            </p>
            <div>
              <h3 className="pt-4 pb-1 font-bold text-gray-800">
                PT. Digital Solution
              </h3>
              <p className="text-gray-600">
                Jl. Kencana Indah Blok A No. 123, Kota Malang, 65144
              </p>
            </div>
            <div className="mt-4 space-y-1">
              <div className="font-bold text-gray-800">CONTACT US</div>
              <div className="flex items-center gap-2 text-gray-600">
                {/* Email Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:support@carikol.id"
                  className="hover:text-teal-600"
                >
                  support@carikol.id
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                {/* WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 
                    0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 
                    0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4
                    -69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 
                    0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 
                    34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z" />
                </svg>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-600"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Kolom 2 */}
          <div>
            <div className="pb-2 font-bold text-gray-800">OUR SERVICES</div>
            <div className="flex flex-col space-y-2">
              {[
                "Buat Rate Card TikTok",
                "Buat Rate Card Instagram",
                "Buat Rate Card YouTube",
                "Cari Rate Card KOL TikTok",
                "Cari Rate Card KOL Instagram",
                "Cari Rate Card KOL YouTube",
              ].map((item, idx) => (
                <Link href="#" key={idx} className="text-gray-600 hover:text-teal-600 block">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Kolom 3 */}
          <div>
            <div className="pb-2 font-bold text-gray-800">COMMUNITY</div>
            <div className="flex flex-col space-y-2">
              {[
                { text: "About Us", href: "/app/about/page.tsx" },
                { text: "Team", href: "#" },
                { text: "Testimonial", href: "#" },
                { text: "Tutorials", href: "#" },
                { text: "Smart Guides", href: "#" },
              ].map((link, idx) => (
                <Link href={link.href} key={idx} className="text-gray-600 hover:text-teal-600 block">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Kolom 4 */}
          <div>
            <div className="pb-2 font-bold text-gray-800">SUPPORT LINKS</div>
            <div className="flex flex-col space-y-2">
              {[
                "Warranty",
                "Terms of Use",
                "Privacy Policy",
                "Cookie Policy",
                "Cookie Settings",
                "FAQ",
              ].map((item, idx) => (
                <Link href="#" key={idx} className="text-gray-600 hover:text-teal-600 block">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bawah Sosial Media */}
      <div className="p-4 bg-white border-t text-center border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-center gap-6 mb-2">
          {[
            {
              name: "Instagram",
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="text-gray-600 w-6 h-6"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zM398.8 64.2c-22.4-22.4-52.2-36.2-84.1-39.5-59.6-5.4-119.2-5.4-178.9 0-31.9 3.3-61.7 17.1-84.1 39.5C29.2 86.6 15.4 116.4 12.1 148.3 6.7 208 6.7 267.6 12.1 327.3c3.3 31.9 17.1 61.7 39.5 84.1 22.4 22.4 52.2 36.2 84.1 39.5 59.6 5.4 119.2 5.4 178.9 0 31.9-3.3 61.7-17.1 84.1-39.5 22.4-22.4 36.2-52.2 39.5-84.1 5.4-59.6 5.4-119.2 0-178.9-3.3-31.9-17.1-61.7-39.5-84.1z" />
                </svg>
              ),
            },
            {
              name: "YouTube",
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  className="text-gray-600 w-6 h-6"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 334.6V177.4l142.7 78.6-142.7 78.6z" />
                </svg>
              ),
            },
            {
              name: "Threads",
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="text-gray-600 w-6 h-6"
                >
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              ),
            },
          ].map((item) => (
            <a href="#" key={item.name} aria-label={item.name} className="hover:text-teal-600">
              {item.svg}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500">&copy; 2025 CariKOL. All rights reserved.</p>
      </div>
    </>
  );
}
