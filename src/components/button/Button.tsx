import React, { FC, PropsWithChildren } from 'react';
import { ButtonProps } from './Button.types';

function typeCss(
	type?: 'simple' | 'outline' | 'clear',
	color = 'primary',
	outlineColor = 'primary'
) {
	if (type == 'clear') return `clear raz-color-${color}`;
	if (type == 'outline') return `outline raz-color-${color} raz-border-color-${outlineColor}`;
	return `simple raz-bg-${color}`;
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
	className,
	onClick,
	...props
}) => {
	return (
		<button
			className={`inline-block raz-button ${typeCss(layout, color, outlineColor)} ${
				disabled ? 'disabled' : ''
			} ${className || ''}`}
			style={{ width, height, borderRadius: (radius || 5) + 'px' }}
			onClick={onClick}
			disabled={disabled}
			{...props}>
			{children}
		</button>
	);
};
