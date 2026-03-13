import { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { Plant } from '../types';

export const usePlants = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const { data, error } = await supabase.from('plants').select('*');

        if (error) throw error;

        setPlants(data as Plant[]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  return { plants, loading, error };
};