import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  onClick,
  isActive = false,
  icon,
  type = "button",
}: ButtonProps) => {
  const classNames = [
    styles.button,
    isActive ? styles.active : "",
    icon ? styles.hasIcon : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} onClick={onClick} type={type}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
