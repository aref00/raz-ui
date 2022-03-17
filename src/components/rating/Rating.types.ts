import { Color } from "../types";

export interface RatingProps {
	value?: number;
	readonly?: boolean;
	activeColor?: Color;
	defaultColor?: Color;
	disabled?: boolean;
	max?: number;
	tyClass?: string;
	onChange?: (value: number) => void;
}
