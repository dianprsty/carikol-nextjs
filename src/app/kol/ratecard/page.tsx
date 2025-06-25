import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageHeader from "@/components/kol/PageHeader";
import RateCardItem from "@/components/kol/RateCardItem";

export const metadata = {
  title: "My Ratecard",
};

export default function Ratecard({}: {}) {
  const rateCards = [
    {
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      contentType: "Instagram Story",
      username: "@beautyblogger",
      followers: "120K Followers",
      contentDescription: "1 Minute Video",
      contentPurpose: "Product Showcase",
      demographics: {
        age: "18-34 tahun",
        gender: "70% Wanita, 30% Pria",
        location: "Jakarta, Bandung, Surabaya",
      },
      categories: ["Beauty", "Lifestyle"],
      price: "Rp 1.500.000",
    },
    {
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      contentType: "Instagram Reels",
      username: "@foodie.travel",
      followers: "85K Followers",
      contentDescription: "2 Minutes Video Content",
      contentPurpose: "Product Review",
      demographics: {
        age: "18-28 tahun",
        gender: "60% Wanita, 40% Pria",
        location: "Jakarta, Bandung, Semarang",
      },
      categories: ["Food", "Travel"],
      price: "Rp 2.000.000",
    },
    {
      platform: "YouTube",
      platformIcon: "/icons/youtube.svg",
      contentType: "YouTube Video",
      username: "Tech Review ID",
      followers: "80K Subscribers",
      contentDescription: "10-15 Minutes Video",
      contentPurpose: "Product Review",
      demographics: {
        age: "15-25 tahun",
        gender: "80% Pria, 20% Wanita",
        location: "Jakarta, Medan, Makassar",
      },
      categories: ["Gaming", "Technology"],
      price: "Rp 3.500.000",
    },
  ];

  return (
    <main
      id="main-content"
      className="flex-1 p-4 transition-all duration-300 md:p-6 "
    >
      <div
        id="kol-my-ratecard"
        className="space-y-4 duration-300 animate-in fade-in"
      >
        <PageHeader 
          title="My Ratecard" 
          buttonText="Create Ratecard" 
          buttonLink="/kol/ratecard/create" 
        />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rateCards.map((card, index) => (
            <RateCardItem key={index} {...card} />
          ))}
        </div>
      </div>
    </main>
  );
}
