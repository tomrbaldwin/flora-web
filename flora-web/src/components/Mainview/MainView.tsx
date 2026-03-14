import React from "react";
import type { Plant } from "../../models/types";
import styles from "./MainView.module.scss";

interface MainViewProps {
  plants: Plant[];
}

const MainView = ({ plants }: MainViewProps) => {
  return (
    <main className={styles.main}>
      <h2>All Plants</h2>
      {/* Plant cards will be rendered here using CSS Grid */}
      {plants.map((plant) => (
        <div key={plant.listing_id}>
          {plant.common_name} - ${plant.price}
        </div>
      ))}
    </main>
  );
};

export default MainView;
