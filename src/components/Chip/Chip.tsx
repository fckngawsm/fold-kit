import React from "react";
import styles from "./Chip.module.css";
import { ChipProps, ChipType } from "./Chip.types";

const getChipClass = (type: ChipType) => {
  switch (type) {
    case "neutral":
      return styles["chip--neutral"];
    case "primary":
      return styles["chip--primary"];
    case "ghost":
      return styles["chip--ghost"];
    default:
      return "";
  }
};

export const Chip = ({ label, onClick, type }: ChipProps) => {
  const chipClasses = `${styles.chip} ${getChipClass(type)}`;

  return (
    <div className={chipClasses} onClick={onClick}>
      {label}
    </div>
  );
};
