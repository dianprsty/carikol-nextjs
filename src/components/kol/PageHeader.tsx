import React from 'react';
import Link from 'next/link';

type PageHeaderProps = {
  title: string;
  buttonText?: string;
  buttonLink?: string;
  showButton?: boolean;
};

const PageHeader = ({ title, buttonText, buttonLink, showButton = true }: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      {showButton && buttonLink && buttonText && (
        <Link
          href={buttonLink}
          className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus-icon lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            {buttonText}
          </div>
        </Link>
      )}
    </div>
  );
};

export default PageHeader;