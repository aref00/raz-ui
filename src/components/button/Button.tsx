import React, { FC } from 'react';
import { ButtonProps } from './Button.types';
import '../../style/components/button.scss';
function typeCss( type?: 'simple'|'outline'|'clear', color = 'primary', outlineColor?: string ) {
	if (type == 'clear') return `clear ty-color-${color}`;
	if (type == 'outline') return `outline ty-color-${color} ty-border-color-${outlineColor||color}`;
	return `simple ty-bg-${color}`
}
const Button: FC<ButtonProps> = ({
	disabled,
	children,
	label,
	width,
	height,
	layout,
	color,
	outlineColor,
	tyClass,
	onClick,
	...props
}) => {
	return (
		<button
			className={`inline-block ty-button px-4 py-2 ${typeCss(layout, color, outlineColor)} ${disabled?'disabled':''} ${tyClass}`}
			type="button"
			onClick={onClick}
			disabled={disabled}
			{...props}
		>
			{label}{children}
		</button>
	);
};

export default Button;
