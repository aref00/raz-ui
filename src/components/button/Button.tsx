import React, { FC, PropsWithChildren } from 'react';
import { ButtonProps } from './Button.types';

function typeCss(
	type?: 'simple' | 'outline' | 'clear',
	color = 'primary',
	outlineColor = 'primary',
) {
	if (type == 'clear') return `clear ty-color-${color}`;
	if (type == 'outline')
		return `outline ty-color-${color} ty-border-color-${outlineColor}`;
	return `simple ty-bg-${color}`;
}
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	disabled,
	children,
	width,
	height,
	layout,
	color,
	outlineColor,
	radius,
	tyClass,
	onClick,
	...props
}) => {
	return (
		<button
			className={`inline-block ty-button ${typeCss(
				layout,
				color,
				outlineColor,
			)} ${disabled ? 'disabled' : ''} ${tyClass || ''}`}
			style={{ width, height, borderRadius: (radius || 5) + 'px' }}
			onClick={onClick}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};
