import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white mt-12">
      <div className="mx-auto w-11/12 max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why choose us</h2>
        <p className="text-teal-600 mb-12">
          Here's our reason for standing firm about us
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 (Image) */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden h-48 flex items-center justify-center">
            <Image
              src="/images/wcu1.jpg"
              alt="Why Choose Us Image 1"
              className="max-h-40 object-contain"
              width={300}
              height={160}
            />
          </div>

          {/* Card 2 */}
          <Card
            title="Profesionalisme"
            description="Menyediakan platform yang mendukung penampilan dan interaksi yang berkualitas tinggi."
            icon={<IconBriefcase />}
          />

          {/* Card 3 */}
          <Card
            title="Transparansi"
            description="Semua data dan proses dapat diakses secara jelas oleh kedua belah pihak."
            icon={<IconEye />}
          />

          {/* Card 4 */}
          <Card
            title="Keamanan"
            description="Menjamin kenyamanan dan perlindungan data pengguna."
            icon={<IconShieldCheck />}
          />

          {/* Card 5 */}
          <Card
            title="Inovasi"
            description="Terus mengembangkan fitur dan teknologi sesuai kebutuhan industri."
            icon={<IconLightbulb />}
          />

          {/* Card 6 (Image) */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden h-48 flex items-center justify-center">
            <Image
              src="/images/wcu2.jpg"
              alt="Why Choose Us Image 2"
              className="max-h-40 object-contain"
              width={300}
              height={160}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Komponen Card & Ikon-ikonnya:
interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card = ({ title, description, icon }: CardProps) => (
  <div className="bg-white rounded-xl shadow-md p-6 text-left">
    <div className="flex items-center gap-3 mb-3">
      {icon}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const IconBriefcase = () => (
  <svg className="size-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconEye = () => (
  <svg className="size-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path
      fillRule="evenodd"
      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconShieldCheck = () => (
  <svg className="size-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconLightbulb = () => (
  <svg className="size-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
    <path
      fillRule="evenodd"
      d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
      clipRule="evenodd"
    />
  </svg>
);
