import { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import type { Plant, Species } from '../models/types';

export const usePlants = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        // Correctly query the `listings` table and join all columns from the related `species` table.
        // Supabase requires a foreign key relationship between `listings.species_id` and `species.id`.
        const { data, error } = await supabase
          .from('listings')
          .select(
            `
            listing_id:id, 
            price, 
            seller_id, 
            species ( id, common_name, genus, description )
          `,
          );

        if (error) throw error;

        // Best Practice: Transform the data from the API shape to our application's view model shape.
        const transformedPlants = data.map((item) => {
          // Supabase can return the joined 'species' as an object, an array, or null.
          // We must safely handle all cases to create a valid `Species` object.
          let speciesObject: Species | null = null;
          if (Array.isArray(item.species)) {
            speciesObject = item.species[0] ?? null;
          } else if (typeof item.species === 'object' && item.species !== null) {
            speciesObject = item.species;
          }

          // We provide a default empty species object to prevent runtime errors.
          const speciesData: Species = speciesObject || {
            id: -1,
            common_name: 'Unknown',
            genus: 'Unknown',
            description: 'No species data available.',
          };

          return {
            ...speciesData,
            listing_id: item.listing_id,
            price: item.price,
            seller_id: item.seller_id,
          };
        });

        setPlants(transformedPlants);
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