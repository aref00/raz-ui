import { Color, Tab } from '../types';

export interface TabProps {
	defaultActive?: string;
	tabs: Tab[];
	color?: Color;
	tyClass?: string;
	tyTabClass?: string;
	onChange: (id?: string) => void;
}
