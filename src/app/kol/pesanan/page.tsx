"use client";

import React, { useState } from "react";
import PageHeader from "@/components/kol/PageHeader";
import SearchBar from "@/components/kol/SearchBar";
import OrderItem from "@/components/kol/OrderItem";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PesananPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const orders = [
    {
      id: "order1",
      type: "ratecard",
      title: "Instagram Story",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      username: "@fashionista",
      status: "pending",
      date: "15 Juni 2023",
      price: "Rp 2.500.000",
    },
    {
      id: "order2",
      type: "campaign",
      title: "Promosi Produk Skincare",
      brand: "Beauty Brand",
      status: "accepted",
      date: "20 Juni 2023",
      price: "Rp 5.000.000",
    },
    {
      id: "order3",
      type: "ratecard",
      title: "TikTok Video",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      username: "@dancecreator",
      status: "completed",
      date: "10 Juni 2023",
      price: "Rp 3.000.000",
    },
    {
      id: "order4",
      type: "campaign",
      title: "Review Gadget Terbaru",
      brand: "Tech Company",
      status: "rejected",
      date: "5 Juni 2023",
      price: "Rp 4.500.000",
    },
    {
      id: "order5",
      type: "ratecard",
      title: "YouTube Shorts",
      platform: "YouTube",
      platformIcon: "/icons/youtube.svg",
      username: "Cooking Master",
      status: "pending",
      date: "25 Juni 2023",
      price: "Rp 1.800.000",
    },
    {
      id: "order6",
      type: "campaign",
      title: "Kampanye Brand Awareness",
      brand: "Fashion Brand",
      status: "accepted",
      date: "30 Juni 2023",
      price: "Rp 6.000.000",
    },
  ];

  const getPriceValue = (priceString: string) => {
    const numericValue = priceString.replace(/\D/g, '');
    return parseInt(numericValue, 10);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.title.toLowerCase().includes(searchQuery.toLowerCase());


    
    const matchesPlatform = 
      platformFilter === "all" ||
      (order.platform && order.platform === platformFilter);
    
    const matchesStatus = 
      statusFilter === "all" ||
      order.status === statusFilter;
    
    const priceValue = getPriceValue(order.price);
    const matchesPrice = 
      priceFilter === "all" ||
      (priceFilter === "low" && priceValue < 3000000) ||
      (priceFilter === "medium" && priceValue >= 3000000 && priceValue < 5000000) ||
      (priceFilter === "high" && priceValue >= 5000000);

    return matchesSearch  && matchesPlatform && matchesStatus && matchesPrice;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return (
    <main
      id="main-content"
      className="flex-1 p-4 transition-all duration-300 md:p-6"
    >
      <div
        id="kol-pesanan"
        className="space-y-6 duration-300 animate-in fade-in"
      >
        <PageHeader title="Daftar Pesanan" />

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="w-full max-w-md">
              <SearchBar
                placeholder="Cari pesanan..."
                onSearch={handleSearch}
                value={searchQuery}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-wrap gap-4">
            <div className="w-full sm:w-auto">
              <Select onValueChange={setPlatformFilter} defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Pilih Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Platform</SelectItem>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="TikTok">TikTok</SelectItem>
                  <SelectItem value="YouTube">YouTube</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full sm:w-auto">
              <Select onValueChange={setStatusFilter} defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Pilih Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="pending">Menunggu</SelectItem>
                  <SelectItem value="accepted">Diterima</SelectItem>
                  <SelectItem value="rejected">Ditolak</SelectItem>
                  <SelectItem value="completed">Selesai</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full sm:w-auto">
              <Select onValueChange={setPriceFilter} defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Pilih Rentang Harga" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Harga</SelectItem>
                  <SelectItem value="low"> Rp 3.000.000</SelectItem>
                  <SelectItem value="medium">Rp 3.000.000 - Rp 5.000.000</SelectItem>
                  <SelectItem value="high"> Rp 5.000.000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

           
          </div>
          

          {filteredOrders.length === 0 ? (
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
                Tidak ada pesanan ditemukan
              </h3>
              <p className="mt-2 text-gray-500">
                Coba ubah kriteria pencarian Anda
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredOrders.map((order) => (
                <OrderItem 
                  key={order.id}
                  id={order.id}
                  type={order.type as "ratecard" | "campaign"}
                  title={order.title}
                  platform={order.platform}
                  platformIcon={order.platformIcon}
                  username={order.username}
                  brand={order.brand}
                  status={order.status as "pending" | "accepted" | "completed" | "rejected"}
                  date={order.date}
                  price={order.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}