import { MouseEventHandler } from 'react';

export type Color =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'gray'
	| 'border'
	| 'dark'
	| 'light'
	| 'contrast-primary'
	| 'contrast-primary'
	| 'text-primary'
	| 'text-secondary'
	| 'rating';

export type Option = {
	label: any;
	value: any;
};

export type Tab = {
	label?: string;
	icon?: string;
	disabled: boolean;
	id?: string;
	onClick?: MouseEventHandler;
};
