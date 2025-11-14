'use client';

// TODO: Реализовать с использованием Recharts согласно ТЗ
// Компонент для отображения графика показов и кликов

import { DayStats } from '@/types';

interface ViewsClicksChartProps {
  data: DayStats[];
}

export default function ViewsClicksChart({ data }: ViewsClicksChartProps) {
  return (
    <div className="w-full h-[300px] flex items-center justify-center bg-gray-50 rounded">
      <p className="text-gray-600">График показов и кликов требует реализации с Recharts</p>
    </div>
  );
}
