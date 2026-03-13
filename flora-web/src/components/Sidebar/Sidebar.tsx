import React, { useState } from "react";
import styles from "./Sidebar.module.scss";

// A reusable accordion item component for the sidebar navigation
const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`${styles.accordionHeader} ${isOpen ? styles.expanded : ""}`.trim()}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={styles.icon}>▶</span>
      </div>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.expanded : ""}`.trim()}
      >
        {children}
      </div>
    </div>
  );
};

const Sidebar = () => {
  // Data for the navigation can be hardcoded for now or fetched from an API later
  const plantCategories = ["Cacti", "Climbing", "Edible", "Flowers", "Trees"];
  const filterOptions = {
    Colours: ["Red", "Blue", "Yellow", "White"],
    Climate: ["Tropical", "Temperate", "Arid"],
    "Growing Conditions": ["Full Sun", "Partial Shade", "Low Water"],
    Price: ["Under $25", "$25 - $50", "Over $50"],
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>flora</div>

      <nav className={styles.nav}>
        <AccordionItem title="Plants">
          <ul>
            {plantCategories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </AccordionItem>

        {Object.entries(filterOptions).map(([title, options]) => (
          <AccordionItem key={title} title={title}>
            <ul>
              {options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </nav>

      <button className={styles.sellButton}>Sell</button>
    </aside>
  );
};

export default Sidebar;
