'use client';

import { useState } from 'react';
import { api } from '@/lib/api';

interface ApiKeyInputProps {
  onValidKey: (key: string) => void;
}

export default function ApiKeyInput({ onValidKey }: ApiKeyInputProps) {
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await api.testApiKey(apiKey);
      if (result.success) {
        onValidKey(apiKey);
      } else {
        setError(result.message || 'Неверный API ключ');
      }
    } catch (err) {
      setError('Ошибка проверки ключа');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Введите API ключ</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Ваш API ключ Wildberries"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Проверка...' : 'Проверить API ключ'}
        </button>
      </form>
    </div>
  );
}
