"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Image from 'next/image';

const sampleKOLs = [
  { name: 'Alice', username: '@alice', platform: 'Instagram', followers: 200, rate: 3000000, image: '/images/AvaP1.png' },
  { name: 'Michael', username: '@michael', platform: 'YouTube', followers: 250, rate: 7000000, image: '/images/AvaL1.png' },
  { name: 'David', username: '@david', platform: 'Instagram', followers: 260, rate: 6000000, image: '/images/AvaL2.png' },
  { name: 'Sarah', username: '@sarah', platform: 'TikTok', followers: 120, rate: 3000000, image: '/images/AvaP2.png' },
  { name: 'Ande', username: '@ande', platform: 'Instagram', followers: 250, rate: 6000000, image: '/images/AvaL3.png' },
];

type KOL = {
  name: string;
  username: string;
  platform: string;
  followers: number;
  rate: number;
  image: string;
};

export default function DashboardBrand() {
  const [platform, setPlatform] = useState('');
  const [minFollowers, setMinFollowers] = useState(10);
  const [searchName, setSearchName] = useState('');
  const [results, setResults] = useState(sampleKOLs);

  const handleSearch = () => {
    const filtered = sampleKOLs.filter(kol => {
      return (
        (!platform || kol.platform.toLowerCase() === platform.toLowerCase()) &&
        kol.followers >= minFollowers &&
        kol.name.toLowerCase().includes(searchName.toLowerCase())
      );
    });
    setResults(filtered);
  };

  const handleSendOffer = (kol: KOL) => {
    alert(`Tawaran telah dikirim ke ${kol.name}`);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen p-6 bg-white border-r fixed">
        <div className="text-2xl font-bold text-teal-600 mb-6">CariKOL</div>
        <nav className="space-y-4">
          <div className="font-medium text-gray-800">Dashboard</div>
          <div className="text-gray-600">Campaigns</div>
          <div className="text-gray-600">Offers</div>
          <div className="text-gray-600">Settings</div>
        </nav>
        <div className="absolute bottom-6 text-sm text-gray-500">
          <p>John Doe</p>
          <p>john@example.com</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-6 space-y-6">
        <header className="mb-6 pb-2 border-b-2 border-teal-600">
            <h1 className="text-3xl font-bold text-teal-600">Dashboard Brand</h1>
        </header>
        {/* Kampanye Aktif & Tawaran */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
            <CardContent className="p-4">
            <p className="text-gray-500">Kampanye Aktif</p>
            <p className="text-xl font-bold">3</p>
            </CardContent>
        </Card>
        <Card>
            <CardContent className="p-4">
            <p className="text-gray-500">KOL Terhubung</p>
            <p className="text-xl font-bold">25</p>
            </CardContent>
        </Card>
        <Card>
            <CardContent className="p-4">
            <p className="text-gray-500">Tawaran Dikirim</p>
            <p className="text-xl font-bold">7</p>
            </CardContent>
        </Card>
        </div>

        {/* Cari KOL */}
        <Card>
          <CardContent className="space-y-4 p-4">
            <h2 className="text-lg font-semibold">Cari KOL</h2>
            <Input placeholder="Nama KOL" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Select onValueChange={setPlatform}>
                <SelectTrigger><SelectValue placeholder="Platform" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger><SelectValue placeholder="Kategori" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="makanan">Makanan</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger><SelectValue placeholder="Lokasi" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="jakarta">Jakarta</SelectItem>
                  <SelectItem value="bandung">Bandung</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Jumlah Followers</p>
              <Slider defaultValue={[minFollowers]} max={1000} step={10} onValueChange={(val) => setMinFollowers(val[0])} />
              <p className="text-xs mt-1">Minimal: {minFollowers}K</p>
            </div>
            <Button onClick={handleSearch}>Cari</Button>
          </CardContent>
        </Card>

        {/* Hasil Pencarian */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Hasil Pencarian</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((kol, i) => (
              <Card key={i} className="p-4 space-y-2">
                <div className="flex items-center gap-4">
                  <Image src={kol.image} alt={kol.name} width={40} height={40} className="rounded-full" />
                  <div>
                    <div className="font-bold">{kol.name}</div>
                    <div className="text-sm text-gray-500">{kol.username} • {kol.platform} • {kol.followers}K</div>
                  </div>
                </div>
                <div className="text-sm">Rate: Rp {kol.rate.toLocaleString()}</div>
                <div className="flex gap-2">
                  <Button size="sm">Lihat Profil</Button>
                  <Button size="sm" variant="outline" onClick={() => handleSendOffer(kol)}>Kirim Tawaran</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
