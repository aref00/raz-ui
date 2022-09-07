import { MouseEventHandler } from 'react';

export type Color =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'card'
	| 'input'
	| 'text'
	| 'text'
	| 'gray'
	| 'shadow'
	| 'dark'
	| 'darker'
	| 'light'
	| 'border'
	| 'transparent';

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
