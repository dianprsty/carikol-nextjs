"use client";

import { useState } from "react";
import React from "react";

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={props.className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}

export default function RatingSection() {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="p-16 text-center">
      <h3 className="mb-4 font-semibold text-center">
        Bagaimana tanggapan Anda terhadap Pelayanan Kami?
        <span className="block text-sm font-light">
          Klik bintang di bawah untuk memberi penilaian
        </span>
      </h3>

      <div className="flex justify-center space-x-2">
        {stars.map((star) => (
          <StarIcon
            key={star}
            className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
              (hoverRating || currentRating) >= star
                ? "text-teal-600"
                : "text-gray-300"
            }`}
            onClick={() => setCurrentRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
          />
        ))}
      </div>

      <p className="block text-sm font-light mt-4">
        Average rating 4.93 / 5. Vote count: 1607
      </p>
    </div>
  );
}
