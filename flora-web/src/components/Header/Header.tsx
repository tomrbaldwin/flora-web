import React, { useState } from "react";
import styles from "./Header.module.scss";
import Button from "./Button/Button";

const Header = () => {
  const [activeFilter, setActiveFilter] = useState("Outdoor");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className={styles.header}>
      {/* Search Input */}
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>⌕</span> {/* Placeholder icon */}
        <input
          type="text"
          placeholder="Search for plants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Quick Filters */}
      <div className={styles.filters}>
        <Button
          isActive={activeFilter === "Outdoor"}
          onClick={() => setActiveFilter("Outdoor")}
        >
          Outdoor
        </Button>
        <Button
          isActive={activeFilter === "Indoor"}
          onClick={() => setActiveFilter("Indoor")}
        >
          Indoor
        </Button>
        <Button icon={"📍"}>Indigenous flora</Button>
      </div>

      {/* Mobile-only Filter Button */}
      <div className={styles.mobileFilterButton}>
        <Button icon={"📊"} /> {/* Placeholder filter icon */}
      </div>

      {/* User Profile */}
      <div className={styles.userAvatar}>TB</div>
    </header>
  );
};

export default Header;
