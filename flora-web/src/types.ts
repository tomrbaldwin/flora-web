/**
 * Represents the master, canonical data for a plant species.
 * This data is controlled by you and fetched from the `species` table.
 */
export interface Species {
  id: number;
  common_name: string;
  genus: string;
  description: string;
  // Distribution data would also be part of this model
}

/**
 * Represents a user's product listing for sale.
 * This data is created by the user and stored in the `listings` table.
 */
export interface Listing {
  id: number;
  price: number;
  seller_id: string; // Foreign key to the user's profile
  species_id: number; // Foreign key to the `species` table
}

/**
 * Represents the combined "View Model" for displaying a plant in the marketplace.
 * This is the result of joining `listings` and `species` tables.
 */
export interface Plant extends Species, Omit<Listing, 'id' | 'species_id'> {
  listing_id: number; // To differentiate from the species id
}