'use client';

// TODO: Реализовать с использованием Recharts согласно ТЗ
// Компонент для отображения графика кластеров

import { ClusterStats } from '@/types';

interface ClustersChartProps {
  data: ClusterStats[];
}

export default function ClustersChart({ data }: ClustersChartProps) {
  return (
    <div className="w-full h-[400px] flex items-center justify-center bg-gray-50 rounded">
      <p className="text-gray-600">График кластеров требует реализации с Recharts</p>
    </div>
  );
}
