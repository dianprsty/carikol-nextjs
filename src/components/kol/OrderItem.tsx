import React from 'react';
import Image from 'next/image';

type OrderItemProps = {
  id: string;
  type: 'ratecard' | 'campaign';
  title: string;
  platform?: string;
  platformIcon?: string;
  brand?: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  date: string;
  price: string;
  username?: string;
};

const OrderItem = ({
  id,
  type,
  title,
  platform,
  platformIcon,
  brand,
  status,
  date,
  price,
  username,
}: OrderItemProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'accepted':
        return 'bg-teal-100 text-teal-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'pending':
        return 'Menunggu';
      case 'accepted':
        return 'Diterima';
      case 'rejected':
        return 'Ditolak';
      case 'completed':
        return 'Selesai';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="p-4 transition-shadow duration-200 bg-white border border-gray-100 rounded-xl hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          {platformIcon && (
            <Image
              width={32}
              height={32}
              src={platformIcon}
              alt={platform || ''}
              className="w-8 h-8 p-1 mr-3 border border-gray-300 rounded-full"
            />
          )}
          <div>
            <div className="font-medium text-gray-800">{title}</div>
            <div className="flex items-center text-xs text-gray-500">
              {type === 'ratecard' && username && <span>{username}</span>}
              {type === 'campaign' && brand && (
                <>
                  <Image
                    width={24}
                    height={24}
                    src="/icons/building.svg"
                    className="w-3 h-3 mr-1"
                    alt=""
                  />
                  <span>{brand}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="text-sm font-medium text-teal-600">{price}</div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>
          <div className="text-xs text-gray-500">Tanggal</div>
          <div className="text-xs font-medium">{date}</div>
        </div>
        <div className="text-right">
          <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;