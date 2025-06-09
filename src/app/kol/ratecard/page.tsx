import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const metadata = {
  title: "My Ratecard",
};

export default function Ratecard({}: Props) {
  return (
    <main
      id="main-content"
      className="flex-1 p-4 transition-all duration-300 md:p-6 "
    >
      <div
        id="kol-my-ratecard"
        className="space-y-4 duration-300 animate-in fade-in"
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Ratecard</h1>
          <Link
            href="/kol/ratecard/create"
            className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus-icon lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Create Ratecard
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <Image
                width={32}
                height={32}
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-8 h-8 p-1 mr-2 border border-gray-300 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">Instagram Story</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>@beautyblogger</span>
                  <span className="mx-2">|</span>
                  <span>120K Followers</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>1 Minute Video</p>
              <p>Product Showcase</p>
              <div className="py-4 border-t border-b border-gray-200">
                <h4 className="mb-2 text-sm font-medium text-gray-700">
                  Demografi Audiens:
                </h4>
                <table className="w-full text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1.5 font-medium">Usia</td>
                      <td className="py-1.5">18-34 tahun</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Gender</td>
                      <td className="py-1.5">70% Wanita, 30% Pria</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Lokasi</td>
                      <td className="py-1.5">Jakarta, Bandung, Surabaya</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                  Beauty
                </span>
                <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                  Lifestyle
                </span>
              </div>
              <p className="text-xl font-bold text-teal-600">Rp 1.500.000</p>
            </div>
          </div>
          <div className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <Image
                width={32}
                height={32}
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-8 h-8 p-1 mr-2 border border-gray-300 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">Instagram Reels</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>@foodie.travel</span>
                  <span className="mx-2">|</span>
                  <span>85K Followers</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>2 Minutes Video Content</p>
              <p>Product Review</p>
              <div className="py-4 border-t border-b border-gray-200">
                <h4 className="mb-2 text-sm font-medium text-gray-700">
                  Demografi Audiens:
                </h4>
                <table className="w-full text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1.5 font-medium">Usia</td>
                      <td className="py-1.5">18-28 tahun</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Gender</td>
                      <td className="py-1.5">60% Wanita, 40% Pria</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Lokasi</td>
                      <td className="py-1.5">Jakarta, Bandung, Semarang</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                  Food
                </span>
                <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                  Travel
                </span>
              </div>
              <p className="text-xl font-bold text-teal-600">Rp 2.000.000</p>
            </div>
          </div>
          <div className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <Image
                width={32}
                height={32}
                src="/icons/youtube.svg"
                alt="YouTube"
                className="w-8 h-8 p-1 mr-2 border border-gray-300 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">YouTube Video</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Tech Review ID</span>
                  <span className="mx-2">|</span>
                  <span>80K Subscribers</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>10-15 Minutes Video</p>
              <p>Product Review</p>
              <div className="py-4 border-t border-b border-gray-200">
                <h4 className="mb-2 text-sm font-medium text-gray-700">
                  Demografi Audiens:
                </h4>
                <table className="w-full text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1.5 font-medium">Usia</td>
                      <td className="py-1.5">15-25 tahun</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Gender</td>
                      <td className="py-1.5">80% Pria, 20% Wanita</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Lokasi</td>
                      <td className="py-1.5">Jakarta, Medan, Makassar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                  Gaming
                </span>
                <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                  Tech
                </span>
              </div>
              <p className="text-xl font-bold text-teal-600">Rp 3.000.000</p>
            </div>
          </div>
          {/* YouTube Shorts Ratecard */}
          <div className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <Image
                width={32}
                height={32}
                src="/icons/youtube.svg"
                alt="YouTube"
                className="w-8 h-8 p-1 mr-2 border border-gray-300 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">YouTube Shorts</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>EduTech Tips</span>
                  <span className="mx-2">|</span>
                  <span>180K Subscribers</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>1 Minute Short Video</p>
              <p>Tutorial &amp; Tips</p>
              <div className="py-4 border-t border-b border-gray-200">
                <h4 className="mb-2 text-sm font-medium text-gray-700">
                  Demografi Audiens:
                </h4>
                <table className="w-full text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1.5 font-medium">Usia</td>
                      <td className="py-1.5">16-28 tahun</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Gender</td>
                      <td className="py-1.5">55% Pria, 45% Wanita</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Lokasi</td>
                      <td className="py-1.5">Jakarta, Surabaya, Bali</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                  Education
                </span>
                <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                  Tech
                </span>
              </div>
              <p className="text-xl font-bold text-teal-600">Rp 1.800.000</p>
            </div>
          </div>
          <div className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <Image
                width={32}
                height={32}
                src="/icons/tiktok.svg"
                alt="TikTok"
                className="w-8 h-8 p-1 mr-2 border border-gray-300 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">TikTok Video</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>@fashion.style</span>
                  <span className="mx-2">|</span>
                  <span>300K Followers</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>2 Minutes Video Content</p>
              <p>Product Showcase</p>
              <div className="py-4 border-t border-b border-gray-200">
                <h4 className="mb-2 text-sm font-medium text-gray-700">
                  Demografi Audiens:
                </h4>
                <table className="w-full text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1.5 font-medium">Usia</td>
                      <td className="py-1.5">16-24 tahun</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Gender</td>
                      <td className="py-1.5">65% Wanita, 35% Pria</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium">Lokasi</td>
                      <td className="py-1.5">Jakarta, Surabaya, Yogyakarta</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                  Fashion
                </span>
                <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                  Lifestyle
                </span>
              </div>
              <p className="text-xl font-bold text-teal-600">Rp 2.000.000</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
