import React from 'react';

type StatusItemProps = {
  label: string;
  count: number;
  bgColor: string;
  textColor: string;
};

const StatusItem = ({ label, count, bgColor, textColor }: StatusItemProps) => (
  <div className={`p-2 text-center rounded-lg ${bgColor}`}>
    <div className="text-xs text-gray-500">{label}</div>
    <div className={`font-bold ${textColor}`}>{count}</div>
  </div>
);

type CampaignStatusGridProps = {
  running: number;
  waiting: number;
  completed: number;
};

const CampaignStatusGrid = ({ running, waiting, completed }: CampaignStatusGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      <StatusItem label="Berjalan" count={running} bgColor="bg-teal-50" textColor="text-teal-600" />
      <StatusItem label="Menunggu" count={waiting} bgColor="bg-yellow-50" textColor="text-yellow-600" />
      <StatusItem label="Selesai" count={completed} bgColor="bg-green-50" textColor="text-green-600" />
    </div>
  );
};

export default CampaignStatusGrid;