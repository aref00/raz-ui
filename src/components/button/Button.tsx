import React, { FC } from 'react';
import { ButtonProps } from './Button.types';
import '../../style/components/button.scss';
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
const Button: FC<ButtonProps> = ({
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
			style={{ width, height, borderRadius: (radius||5) + 'px' }}
			type="button"
			onClick={onClick}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
