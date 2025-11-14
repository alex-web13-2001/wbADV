'use client';

// TODO: Реализовать согласно ТЗ
// Компонент для отображения списка рекламных кампаний

import { Campaign } from '@/types';

interface CampaignsListProps {
  apiKey: string;
  onSelectCampaign: (campaign: Campaign) => void;
}

export default function CampaignsList({ apiKey, onSelectCampaign }: CampaignsListProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Рекламные кампании</h2>
      <p className="text-gray-600">Компонент требует реализации согласно ТЗ</p>
    </div>
  );
}
