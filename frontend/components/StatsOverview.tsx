'use client';

// TODO: Реализовать согласно ТЗ
// Компонент для отображения статистики кампании

interface StatsOverviewProps {
  apiKey: string;
  campaignId: number;
}

export default function StatsOverview({ apiKey, campaignId }: StatsOverviewProps) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">Компонент StatsOverview требует реализации согласно ТЗ</p>
    </div>
  );
}
