import axios from 'axios';
import { Campaign, CampaignStats, ClusterStats } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = {
  testApiKey: async (apiKey: string) => {
    const response = await axios.post(`${API_URL}/api/test-key`, { apiKey });
    return response.data;
  },

  getCampaigns: async (apiKey: string) => {
    const response = await axios.get(`${API_URL}/api/campaigns`, {
      headers: { 'x-api-key': apiKey },
    });
    return response.data;
  },

  getCampaignStats: async (
    apiKey: string,
    id: number,
    beginDate: string,
    endDate: string
  ) => {
    const response = await axios.get(`${API_URL}/api/campaign/${id}/stats`, {
      headers: { 'x-api-key': apiKey },
      params: { beginDate, endDate },
    });
    return response.data;
  },

  getClusterStats: async (
    apiKey: string,
    id: number,
    nm_id: number,
    from: string,
    to: string
  ) => {
    const response = await axios.post(
      `${API_URL}/api/campaign/${id}/clusters`,
      { nm_id, from, to },
      {
        headers: { 'x-api-key': apiKey },
      }
    );
    return response.data;
  },
};
