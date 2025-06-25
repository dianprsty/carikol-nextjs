import React from 'react';
import Image from 'next/image';

type Demographic = {
  age: string;
  gender: string;
  location: string;
};

type RateCardItemProps = {
  platform: string;
  platformIcon: string;
  contentType: string;
  username: string;
  followers: string;
  contentDescription: string;
  contentPurpose: string;
  demographics: Demographic;
  categories: string[];
  price: string;
};

const RateCardItem = ({
  platform,
  platformIcon,
  contentType,
  username,
  followers,
  contentDescription,
  contentPurpose,
  demographics,
  categories,
  price,
}: RateCardItemProps) => {
  return (
    <div className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1">
      <div className="flex items-start mb-4">
        <Image
          width={32}
          height={32}
          src={platformIcon}
          alt={platform}
          className="w-8 h-8 p-1 mr-2 border border-gray-300 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{contentType}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <span>{username}</span>
            <span className="mx-2">|</span>
            <span>{followers}</span>
          </div>
        </div>
      </div>
      <div className="space-y-2 text-gray-600">
        <p>{contentDescription}</p>
        <p>{contentPurpose}</p>
        <div className="py-4 border-t border-b border-gray-200">
          <h4 className="mb-2 text-sm font-medium text-gray-700">Demografi Audiens:</h4>
          <table className="w-full text-sm text-gray-600">
            <tbody>
              <tr>
                <td className="py-1.5 font-medium">Usia</td>
                <td className="py-1.5">{demographics.age}</td>
              </tr>
              <tr>
                <td className="py-1.5 font-medium">Gender</td>
                <td className="py-1.5">{demographics.gender}</td>
              </tr>
              <tr>
                <td className="py-1.5 font-medium">Lokasi</td>
                <td className="py-1.5">{demographics.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center gap-2">
          {categories.map((category, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
              {category}
            </span>
          ))}
        </div>
        <p className="text-xl font-bold text-teal-600">{price}</p>
      </div>
    </div>
  );
};

export default RateCardItem;