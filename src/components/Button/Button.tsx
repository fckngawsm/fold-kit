import React from "react";
import "./Button.module.css";

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  primary?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, primary }) => {
  return (
    <button className={primary ? "primary-button" : "button"} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
