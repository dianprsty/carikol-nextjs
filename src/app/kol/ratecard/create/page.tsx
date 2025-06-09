import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function CreateRateCard({}: Props) {
  return (
    <main
      id="main-content"
      className="flex-1 min-h-full p-6 transition-all duration-300"
    >
      <div className="w-full p-8 mx-auto bg-white rounded-lg shadow-md md:p-10">
        <div className="flex items-center pb-5 mb-8 border-b border-gray-200">
          <Image
            width={24}
            height={24}
            src="/icons/ratecard.svg"
            alt="Ratecard"
            className="w-6 h-6 p-1 mr-3 text-teal-600 bg-teal-100 rounded-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            Create New Ratecard
          </h1>
        </div>
        <form className="">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="platform"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Account
              </label>
              <div className="relative">
                <select
                  id="platform"
                  name="platform"
                  className="block w-full px-4 py-3 mt-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Select Account</option>
                  <option
                    value="instagram_account"
                    className="flex items-center"
                  >
                    @instagram
                  </option>
                  <option value="youtube_account" className="flex items-center">
                    Youtube Channel
                  </option>
                  <option value="tiktok_account" className="flex items-center">
                    @tiktok
                  </option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contentType"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Content Type
              </label>
              <div className="relative">
                <select
                  id="contentType"
                  name="contentType"
                  className="block w-full px-4 py-3 mt-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Choose Content Type</option>
                  <option value="instagram_post">Instagram Post</option>
                  <option value="instagram_reels">Instagram Reels</option>
                  <option value="instagram_story">Instagram Story</option>
                  <option value="instagram_carousel">Instagram Carousel</option>
                  <option value="youtube_video">YouTube Video</option>
                  <option value="youtube_shorts">YouTube Shorts</option>
                  <option value="youtube_live">YouTube Live</option>
                  <option value="tiktok_video">TikTok Video</option>
                  <option value="tiktok_live">TikTok LIVE</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="duration"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Content Detail
              </label>
              <input
                type="text"
                id="content-detail"
                name="content-detail"
                className="block w-full px-4 py-3 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="1 Minute Video"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="block w-full px-4 py-3 text-sm border border-gray-300 rounded-md shadow-sm p-4w-full focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder={"1000000"}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="ageRange"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Audience Age Range
              </label>
              <input
                type="text"
                id="ageRange"
                name="ageRange"
                className="block w-full px-4 py-3 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="18-34 years"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="genderRatio"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Audience Gender Ratio
              </label>
              <input
                type="text"
                id="genderRatio"
                name="genderRatio"
                className="block w-full px-4 py-3 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="70% Wanita, 30% Pria"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Audience Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="block w-full px-4 py-3 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Jakarta, Bandung, Surabaya"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <div className="relative flex flex-col">
                <input
                  type="text"
                  id="category"
                  name="category"
                  className="block w-full px-4 py-3 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Beauty, Lifestyle"
                />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label
                htmlFor="notes"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="block w-full px-4 py-3 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Your Notes"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex justify-end pt-6 mt-4 space-x-4 border-t border-gray-200">
            <Link
              href="/kol/ratecard"
              className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md transition-colors duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="flex items-center px-6 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md transition-colors duration-200 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Create Ratecard
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
