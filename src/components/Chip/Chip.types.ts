export type ChipType = "neutral" | "primary" | "ghost" | "active";
export interface ChipProps {
  label: string;
  type: ChipType;
  onClick?: () => void;
}
