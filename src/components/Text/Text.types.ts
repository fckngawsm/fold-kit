type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";

export interface TextProps {
  variant: TextVariant;
  children?: React.ReactNode;
}
