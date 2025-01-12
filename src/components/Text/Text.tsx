import React, { JSX } from "react";
import styles from "./Text.module.css";
import { TextProps } from "./Text.types";
export const Text = ({ variant, children }: TextProps) => {
  const Component = variant as keyof JSX.IntrinsicElements;

  return <Component className={styles.text}>{children}</Component>;
};
