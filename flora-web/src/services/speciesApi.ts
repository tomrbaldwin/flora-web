import { supabase } from './supabaseClient';
import type { Species } from '../models/types';

/**
 * Searches the canonical `species` table for plants matching a query.
 * Uses Supabase's `ilike` for case-insensitive pattern matching.
 * @param query The user's search input.
 * @returns A promise that resolves to an array of matching species.
 */
export const searchSpeciesByName = async (query: string): Promise<Species[]> => {
  if (!query) {
    return [];
  }

  const { data, error } = await supabase
    .from('species')
    .select('*')
    .ilike('common_name', `%${query}%`)
    .limit(10); // Limit results for performance

  if (error) {
    console.error('Error searching for species:', error);
    return [];
  }

  return data as Species[];
};