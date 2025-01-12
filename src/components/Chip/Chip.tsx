import React from "react";
import styles from "./Chip.module.css";
import { ChipProps, ChipType } from "./Chip.types";

const getChipClass = (type: ChipType) => {
  switch (type) {
    case "neutral":
      return styles["chip--neutral"];
    case "active":
      return styles["chip--active"];
    case "ghost":
      return styles["chip--ghost"];
    default:
      return "";
  }
};

export const Chip = ({ label, onClick, type }: ChipProps) => {
  const chipClasses = `${styles.chip} ${getChipClass(type)}`;
  console.log(getChipClass(type), "chipClasses");
  return (
    <div className={chipClasses} onClick={onClick}>
      {label}
    </div>
  );
};
