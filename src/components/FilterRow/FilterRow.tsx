import React, { useState } from "react";
import { Chip } from "../Chip/Chip";
import styles from "./FilterRow.module.css";
import { FilterRowProps } from "./FilterRow.types";

export const FilterRow = ({ options, onChange }: FilterRowProps) => {
  const [activeOptionIndexes, setActiveOptionsIndexes] = useState<string[]>([]);

  const onClickChip = (option: string) => {
    const isChipActive = activeOptionIndexes.includes(option);
    const newActiveOptions = isChipActive
      ? activeOptionIndexes.filter((prevOption) => prevOption !== option)
      : [...activeOptionIndexes, option];

    setActiveOptionsIndexes(newActiveOptions);
    onChange?.(newActiveOptions);
  };

  return (
    <div className={styles.wrapper}>
      {options?.map((option, index) => {
        return (
          <Chip
            label={option}
            key={index}
            type={activeOptionIndexes.includes(option) ? "active" : "ghost"}
            onClick={() => onClickChip(option)}
          />
        );
      })}
    </div>
  );
};
