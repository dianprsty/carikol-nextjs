"use client";

import React, { useState } from "react";
import PageHeader from "@/components/kol/PageHeader";
import RateCardItem from "@/components/kol/RateCardItem";
import SearchBar from "@/components/kol/SearchBar";

export default function ExploreRatecard() {
  const rateCards = [
    {
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      contentType: "Instagram Story",
      username: "@fashionista",
      followers: "250K Followers",
      contentDescription: "30 Seconds Video",
      contentPurpose: "Product Showcase",
      demographics: {
        age: "18-30 tahun",
        gender: "80% Wanita, 20% Pria",
        location: "Jakarta, Bandung, Yogyakarta",
      },
      categories: ["Fashion", "Lifestyle"],
      price: "Rp 2.500.000",
    },
    {
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      contentType: "TikTok Video",
      username: "@dancecreator",
      followers: "500K Followers",
      contentDescription: "60 Seconds Dance Video",
      contentPurpose: "Brand Integration",
      demographics: {
        age: "15-25 tahun",
        gender: "65% Wanita, 35% Pria",
        location: "Jakarta, Surabaya, Bali",
      },
      categories: ["Dance", "Entertainment"],
      price: "Rp 3.000.000",
    },
    {
      platform: "YouTube",
      platformIcon: "/icons/youtube.svg",
      contentType: "YouTube Shorts",
      username: "Cooking Master",
      followers: "120K Subscribers",
      contentDescription: "1 Minute Cooking Tutorial",
      contentPurpose: "Product Placement",
      demographics: {
        age: "25-45 tahun",
        gender: "70% Wanita, 30% Pria",
        location: "Jakarta, Medan, Semarang",
      },
      categories: ["Cooking", "Food"],
      price: "Rp 1.800.000",
    },
    {
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      contentType: "Instagram Post",
      username: "@travelblogger",
      followers: "180K Followers",
      contentDescription: "High Quality Photo",
      contentPurpose: "Product Review",
      demographics: {
        age: "22-35 tahun",
        gender: "55% Wanita, 45% Pria",
        location: "Bali, Jakarta, Lombok",
      },
      categories: ["Travel", "Lifestyle"],
      price: "Rp 1.200.000",
    },
    {
      platform: "YouTube",
      platformIcon: "/icons/youtube.svg",
      contentType: "YouTube Video",
      username: "Tech Reviewer Pro",
      followers: "350K Subscribers",
      contentDescription: "15-20 Minutes In-depth Review",
      contentPurpose: "Product Review",
      demographics: {
        age: "18-40 tahun",
        gender: "75% Pria, 25% Wanita",
        location: "Jakarta, Bandung, Surabaya",
      },
      categories: ["Technology", "Gadgets"],
      price: "Rp 5.000.000",
    },
    {
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      contentType: "TikTok LIVE",
      username: "@gamingpro",
      followers: "300K Followers",
      contentDescription: "1 Hour Live Gaming Session",
      contentPurpose: "Product Showcase",
      demographics: {
        age: "15-25 tahun",
        gender: "80% Pria, 20% Wanita",
        location: "Jakarta, Surabaya, Makassar",
      },
      categories: ["Gaming", "Entertainment"],
      price: "Rp 4.000.000",
    },
    {
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      contentType: "Instagram Reel",
      username: "@beautyguru",
      followers: "420K Followers",
      contentDescription: "60 Seconds Beauty Tutorial",
      contentPurpose: "Product Demo",
      demographics: {
        age: "18-35 tahun",
        gender: "90% Wanita, 10% Pria",
        location: "Jakarta, Surabaya, Bandung",
      },
      categories: ["Beauty", "Skincare"],
      price: "Rp 3.200.000",
    },
    {
      platform: "YouTube",
      platformIcon: "/icons/youtube.svg",
      contentType: "YouTube Vlog",
      username: "Family Adventures",
      followers: "280K Subscribers",
      contentDescription: "10-15 Minutes Family Content",
      contentPurpose: "Brand Integration",
      demographics: {
        age: "25-45 tahun",
        gender: "60% Wanita, 40% Pria",
        location: "Jakarta, Bandung, Yogyakarta",
      },
      categories: ["Family", "Lifestyle", "Parenting"],
      price: "Rp 4.500.000",
    },
    {
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      contentType: "TikTok Tutorial",
      username: "@diyhacks",
      followers: "750K Followers",
      contentDescription: "30 Seconds DIY Tutorial",
      contentPurpose: "Product Integration",
      demographics: {
        age: "16-30 tahun",
        gender: "70% Wanita, 30% Pria",
        location: "Jakarta, Bandung, Semarang",
      },
      categories: ["DIY", "Crafts", "Home"],
      price: "Rp 3.800.000",
    },
    {
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      contentType: "Instagram Carousel",
      username: "@financetips",
      followers: "150K Followers",
      contentDescription: "10 Slides Financial Tips",
      contentPurpose: "Educational Content",
      demographics: {
        age: "25-45 tahun",
        gender: "55% Pria, 45% Wanita",
        location: "Jakarta, Surabaya, Medan",
      },
      categories: ["Finance", "Education"],
      price: "Rp 2.000.000",
    },
    {
      platform: "YouTube",
      platformIcon: "/icons/youtube.svg",
      contentType: "YouTube Tutorial",
      username: "Fitness Coach Pro",
      followers: "320K Subscribers",
      contentDescription: "20 Minutes Workout Tutorial",
      contentPurpose: "Product Demonstration",
      demographics: {
        age: "20-40 tahun",
        gender: "50% Pria, 50% Wanita",
        location: "Jakarta, Bali, Surabaya",
      },
      categories: ["Fitness", "Health", "Wellness"],
      price: "Rp 4.200.000",
    },
    {
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      contentType: "TikTok Challenge",
      username: "@musictrends",
      followers: "1.2M Followers",
      contentDescription: "15 Seconds Challenge Video",
      contentPurpose: "Viral Marketing",
      demographics: {
        age: "13-25 tahun",
        gender: "60% Wanita, 40% Pria",
        location: "Jakarta, Bandung, Surabaya, Makassar",
      },
      categories: ["Music", "Trends", "Entertainment"],
      price: "Rp 8.500.000",
    },
    {
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      contentType: "Instagram Live",
      username: "@foodcritic",
      followers: "210K Followers",
      contentDescription: "45 Minutes Live Cooking Session",
      contentPurpose: "Product Review & Cooking",
      demographics: {
        age: "25-50 tahun",
        gender: "65% Wanita, 35% Pria",
        location: "Jakarta, Bandung, Bali",
      },
      categories: ["Food", "Cooking", "Lifestyle"],
      price: "Rp 3.500.000",
    },
    {
      platform: "YouTube",
      platformIcon: "/icons/youtube.svg",
      contentType: "YouTube Review",
      username: "Auto Enthusiast",
      followers: "450K Subscribers",
      contentDescription: "30 Minutes Car Review",
      contentPurpose: "In-depth Product Review",
      demographics: {
        age: "25-55 tahun",
        gender: "85% Pria, 15% Wanita",
        location: "Jakarta, Surabaya, Bandung, Medan",
      },
      categories: ["Automotive", "Lifestyle", "Technology"],
      price: "Rp 6.500.000",
    },
    {
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      contentType: "TikTok Educational",
      username: "@sciencefun",
      followers: "380K Followers",
      contentDescription: "60 Seconds Science Experiment",
      contentPurpose: "Educational Content",
      demographics: {
        age: "13-18 tahun",
        gender: "55% Pria, 45% Wanita",
        location: "Jakarta, Bandung, Yogyakarta, Surabaya",
      },
      categories: ["Education", "Science", "Entertainment"],
      price: "Rp 2.800.000",
    },
    {
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      contentType: "Instagram IGTV",
      username: "@petlover",
      followers: "290K Followers",
      contentDescription: "10 Minutes Pet Care Video",
      contentPurpose: "Product Showcase & Tips",
      demographics: {
        age: "20-45 tahun",
        gender: "70% Wanita, 30% Pria",
        location: "Jakarta, Bandung, Surabaya, Bali",
      },
      categories: ["Pets", "Lifestyle", "Care"],
      price: "Rp 2.700.000",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRateCards, setFilteredRateCards] = useState(rateCards);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredRateCards(rateCards);
      return;
    }

    const lowercasedQuery = query.toLowerCase();

    const filtered = rateCards.filter((card) => {
      return (
        card.contentType.toLowerCase().includes(lowercasedQuery) ||
        card.username.toLowerCase().includes(lowercasedQuery) ||
        card.categories.some((category) =>
          category.toLowerCase().includes(lowercasedQuery)
        ) ||
        card.demographics.location.toLowerCase().includes(lowercasedQuery)
      );
    });
    setFilteredRateCards(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearch(value);
  };

  return (
    <main
      id="main-content"
      className="flex-1 p-4 transition-all duration-300 md:p-6"
    >
      <div
        id="kol-explore-ratecard"
        className="space-y-6 duration-300 animate-in fade-in"
      >
        <PageHeader
          title="Explore Ratecards"
        />

        <div className="flex flex-col space-y-6">
          <div className="w-full max-w-md">
            <SearchBar
              placeholder="Search by content type, username, category..."
              onSearch={handleSearch}
              value={searchQuery}
              onChange={handleInputChange}
            />
          </div>

          {filteredRateCards.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <svg
                className="w-16 h-16 mb-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-700">
                No ratecards found
              </h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your search criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRateCards.map((card, index) => (
                <RateCardItem key={index} {...card} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
