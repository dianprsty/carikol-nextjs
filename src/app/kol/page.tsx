import Image from "next/image";
import StatCard from "@/components/kol/StatCard";
import CampaignStatusGrid from "@/components/kol/CampaignStatusGrid";

export const metadata = {
  title: "Kol Dashboard",
};

export default function Page() {
  return (
    <main
      id="main-content"
      className="flex-1 p-4 transition-all duration-300 md:p-6"
    >
      <div
        id="kol-dashboard"
        className="space-y-4 duration-300 animate-in fade-in"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard 
            title="Total Pendapatan" 
            value="Rp 15.000.000" 
            change="+12% dari bulan lalu" 
            isPositive={true} 
          />
          
          <div className="p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
            <div className="flex justify-between">
              <div>
                <div className="mb-1 text-sm font-medium text-gray-500">
                  Campaign
                </div>
              </div>
            </div>
            <CampaignStatusGrid running={2} waiting={1} completed={5} />
          </div>
          
          <StatCard title="Tawaran Baru" value="7">
            <div className="mt-4">
              <button className="w-full py-2 text-sm text-white transition-colors duration-200 bg-teal-600 rounded-lg hover:bg-teal-700">
                Lihat Semua Tawaran
              </button>
            </div>
          </StatCard>
        </div>
        
        {/* Rest of the dashboard content remains the same */}
        <div className="grid gap-6 mt-4 lg:grid-cols-2">
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-800">
                Campaign Terbaru
              </h2>
              <a
                href="#"
                className="flex items-center text-sm text-teal-600 transition-colors duration-200 hover:text-teal-800"
              >
                Lihat semua <i className="ml-1 fas fa-arrow-right" />
              </a>
            </div>
            <div className="space-y-4">
              <div className="p-4 transition-shadow duration-200 border border-gray-100 rounded-xl hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 mr-3 bg-teal-100 rounded-full">
                      <i className="text-teal-600 fas fa-ad" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        Campaign 1
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Image
                          width={24}
                          height={24}
                          src="/icons/building.svg"
                          className="w-3 h-3 mr-1"
                          alt=""
                        />
                        Brand 1
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-teal-600">
                    Rp 1.000.000
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div>
                    <div className="text-xs text-gray-500">Mulai</div>
                    <div className="text-xs font-medium">15 Mei 2023</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Selesai</div>
                    <div className="text-xs font-medium">30 Juni 2023</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 text-xs text-teal-800 bg-teal-100 rounded-full">
                      Berjalan
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 transition-shadow duration-200 border border-gray-100 rounded-xl hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 mr-3 bg-green-100 rounded-full">
                      <i className="text-green-600 fas fa-ad" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        Campaign 2
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Image
                          width={24}
                          height={24}
                          src="/icons/building.svg"
                          className="w-3 h-3 mr-1"
                          alt=""
                        />
                        Brand 2
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-teal-600">
                    Rp 1.500.000
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div>
                    <div className="text-xs text-gray-500">Mulai</div>
                    <div className="text-xs font-medium">1 April 2023</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Selesai</div>
                    <div className="text-xs font-medium">15 Mei 2023</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 text-xs text-yellow-800 bg-yellow-100 rounded-full">
                      Menunggu
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 transition-shadow duration-200 border border-gray-100 rounded-xl hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 mr-3 bg-purple-100 rounded-full">
                      <i className="text-purple-600 fas fa-ad" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        Campaign 3
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Image
                          width={24}
                          height={24}
                          src="/icons/building.svg"
                          className="w-3 h-3 mr-1"
                          alt=""
                        />
                        Brand 3
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-teal-600">
                    Rp 2.000.000
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div>
                    <div className="text-xs text-gray-500">Mulai</div>
                    <div className="text-xs font-medium">10 Maret 2023</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Selesai</div>
                    <div className="text-xs font-medium">10 April 2023</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">
                      Selesai
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-800">
                Social Media
              </h2>
              <a
                href="#"
                className="flex items-center text-sm text-teal-600 transition-colors duration-200 hover:text-teal-800"
              >
                Tambah Akun <i className="ml-1 fas fa-plus" />
              </a>
            </div>
            <div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 transition-all duration-200 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 hover:shadow-md">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                      <Image
                        width={24}
                        height={24}
                        src="/icons/instagram.svg"
                        alt="Instagram"
                        className="w-5 h-5 text-white"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        @instagram
                      </div>
                      <div className="text-xs text-gray-600">
                        120K Followers
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      className="px-2 py-1 text-xs text-gray-700 transition-colors duration-200 bg-white rounded-md hover:bg-gray-100"
                    >
                      <span className="flex items-center">
                        <Image
                          width={24}
                          height={24}
                          src="/icons/external-link.svg"
                          alt="Link"
                          className="w-3 h-3 mr-1"
                        />
                        Lihat
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 transition-all duration-200 rounded-lg bg-gradient-to-r from-red-100 to-red-50 hover:shadow-md">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 bg-white rounded-full">
                      <Image
                        width={24}
                        height={24}
                        src="/icons/youtube.svg"
                        alt=""
                        className="w-5 h-5 text-white"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Youtube</div>
                      <div className="text-xs text-gray-600">
                        50K Subscribers
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      className="px-2 py-1 text-xs text-gray-700 transition-colors duration-200 bg-white rounded-md hover:bg-gray-100"
                    >
                      <span className="flex items-center">
                        <Image
                          width={24}
                          height={24}
                          src="/icons/external-link.svg"
                          alt="Link"
                          className="w-3 h-3 mr-1"
                        />
                        Lihat
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 transition-all duration-200 rounded-lg bg-gradient-to-r from-gray-100 to-black-50 hover:shadow-md">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 bg-white rounded-full">
                      <Image
                        width={24}
                        height={24}
                        src="/icons/tiktok.svg"
                        alt="TikTok"
                        className="w-5 h-5 text-white"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">@tiktok</div>
                      <div className="text-xs text-gray-600">80K Followers</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      className="px-2 py-1 text-xs text-gray-700 transition-colors duration-200 bg-white rounded-md hover:bg-gray-100"
                    >
                      <span className="flex items-center">
                        <Image
                          width={24}
                          height={24}
                          src="/icons/external-link.svg"
                          alt="Link"
                          className="w-3 h-3 mr-1"
                        />
                        Lihat
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
