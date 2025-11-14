'use client';

// TODO: Реализовать с использованием Recharts согласно ТЗ
// Компонент для отображения графика CTR

import { DayStats } from '@/types';

interface CTRChartProps {
  data: DayStats[];
}

export default function CTRChart({ data }: CTRChartProps) {
  return (
    <div className="w-full h-[300px] flex items-center justify-center bg-gray-50 rounded">
      <p className="text-gray-600">График CTR требует реализации с Recharts</p>
    </div>
  );
}
