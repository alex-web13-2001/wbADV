'use client';

// TODO: Реализовать согласно ТЗ
// Компонент для аналитики поисковых кластеров

interface ClustersAnalyticsProps {
  apiKey: string;
  campaignId: number;
}

export default function ClustersAnalytics({ apiKey, campaignId }: ClustersAnalyticsProps) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">Компонент ClustersAnalytics требует реализации согласно ТЗ</p>
    </div>
  );
}
