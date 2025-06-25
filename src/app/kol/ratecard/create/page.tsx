import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormField from "@/components/kol/FormField";

type Props = {};

export default function CreateRateCard({}: Props) {
  const accountOptions = [
    { value: "instagram_account", label: "@instagram" },
    { value: "youtube_account", label: "Youtube Channel" },
    { value: "tiktok_account", label: "@tiktok" },
  ];

  const contentTypeOptions = [
    { value: "instagram_post", label: "Instagram Post" },
    { value: "instagram_reels", label: "Instagram Reels" },
    { value: "instagram_story", label: "Instagram Story" },
    { value: "instagram_carousel", label: "Instagram Carousel" },
    { value: "youtube_video", label: "YouTube Video" },
    { value: "youtube_shorts", label: "YouTube Shorts" },
    { value: "youtube_live", label: "YouTube Live" },
    { value: "tiktok_video", label: "TikTok Video" },
    { value: "tiktok_live", label: "TikTok LIVE" },
  ];

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
            <FormField 
              id="platform" 
              label="Account" 
              type="select" 
              options={accountOptions} 
              placeholder="Select Account" 
            />
            
            <FormField 
              id="contentType" 
              label="Content Type" 
              type="select" 
              options={contentTypeOptions} 
              placeholder="Choose Content Type" 
            />
            
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
          ]
          <div className="flex justify-end mt-8 space-x-4">
            <Link
              href="/kol/ratecard"
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700"
            >
              Save Ratecard
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
