export type ChipType = "neutral" | "primary" | "ghost";
export interface ChipProps {
  label: string;
  type: ChipType;
  onClick?: () => void;
}
