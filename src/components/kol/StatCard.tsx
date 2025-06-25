import React from 'react';

type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  children?: React.ReactNode;
};

const StatCard = ({ title, value, change, isPositive, children }: StatCardProps) => {
  return (
    <div className="p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
      <div>
        <div className="mb-1 text-sm font-medium text-gray-500">{title}</div>
        <div className="text-2xl font-bold text-gray-800">{value}</div>
        {change && (
          <div className={`flex items-center mt-2 text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default StatCard;