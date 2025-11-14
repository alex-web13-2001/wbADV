import { formatNumber } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: number | string;
  suffix?: string;
}

export default function MetricCard({ title, value, suffix = '' }: MetricCardProps) {
  const displayValue = typeof value === 'number' ? formatNumber(value) : value;

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">
        {displayValue}{suffix}
      </p>
    </div>
  );
}
