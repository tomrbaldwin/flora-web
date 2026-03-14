/**
 * Represents the master, canonical data for a plant species.
 * This data is controlled by you and fetched from the `species` table.
 */
export interface Species {
  id: number;
  common_name: string;
  genus: string;
  description: string;
  // Future fields like `family` or `image_url` for the species would go here.
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
 * This is the result of joining the `listings` and `species` tables.
 */
export interface Plant extends Omit<Listing, 'id' | 'species_id'>, Species {
  listing_id: number; // Renamed from `id` on the listing to avoid collision with `species.id`
}