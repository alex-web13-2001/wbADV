'use client';

import { useState } from 'react';
// TODO: Импортировать компоненты после их создания
// import ApiKeyInput from '@/components/ApiKeyInput';
// import CampaignsList from '@/components/CampaignsList';
// import StatsOverview from '@/components/StatsOverview';
// import ClustersAnalytics from '@/components/ClustersAnalytics';
import { Campaign } from '@/types';

export default function Home() {
  const [apiKey, setApiKey] = useState<string>('');
  const [isKeyValid, setIsKeyValid] = useState<boolean>(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'clusters'>('overview');

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          WB Ads Dashboard
        </h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            Структура проекта создана. Реализуйте компоненты согласно ТЗ.
          </p>
        </div>
      </div>
    </main>
  );
}
