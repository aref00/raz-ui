import { Color, Tab } from '../types';

export interface TabProps {
	active?: string;
	tabs: Tab[];
	borderColor?: Color;
	borderWidth?: string;
	defaultColor?: Color;
	activeColor?: Color;
	className?: string;
	onChange: (id?: string) => void;
}
