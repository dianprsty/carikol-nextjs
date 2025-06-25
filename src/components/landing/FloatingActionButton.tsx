import React from "react";

type Props = {};

export default function FloatingActionButton({}: Props) {
  return (
    <div className="fixed z-50 right-6 bottom-6 group">
      <a href="tel:0800123456" className="flex items-center space-x-3">
        <div
          className="flex items-center justify-center gap-2 px-4 text-white transition duration-300 bg-teal-600 border-2 border-white rounded-full h-14 hover:bg-teal-700"
          title="Call Center"
        >
          <span className="p-1.5 text-teal-600 bg-white rounded-full">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.34 4.02a1 1 0 01-.21.95l-2.13 2.13a11.042 11.042 0 005.66 5.66l2.13-2.13a1 1 0 01.95-.21l4.02 1.34a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V6a2 2 0 010-1z"
              />
            </svg>
          </span>
          Contact Us
        </div>
      </a>
    </div>
  );
}
