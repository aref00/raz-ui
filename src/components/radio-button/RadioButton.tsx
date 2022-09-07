import React, { FC, useState } from 'react';
import { RadioButtonProps } from './RadioButton.types';

export const RadioButton: FC<RadioButtonProps> = ({
	value,
	options,
	width,
	className,
	onChange,
	...props
}) => {
	const [currentValue, setCurrentValue] = useState(value);
	className = `ty-radio-button ${className || ''}`;
	width = width || '16px';
	const inner_width = +width.replace('px', '') - 1.6 + 'px';
	props.activeColor = props.activeColor || 'primary';
	const activeColor = `ty-bg-${props.activeColor}`;
	const borderColor = `ty-border-color-${props.activeColor}`;
	function handleChange(value: string) {
		onChange(value);
		setCurrentValue(value);
	}
	return (
		<div role="radiogroup" className="ty-radio-button">
			{options.map((o, i) => {
				const active = o.value === currentValue;
				return (
					<div
						onClick={() => handleChange(o.value)}
						key={i}
						role="radio"
						className={`ty-radio-row ty-flex ty-space-between ty-gap-10 align-items-center ${className} ${
							active ? 'active' : ''
						}`}
					>
						<div
							role="button"
							style={{ width, height: width }}
							className={`ty-radio-toggle ${
								active ? borderColor : 'ty-border-color-gray'
							}`}
						>
							<div
								style={{ width: inner_width, height: inner_width }}
								className={`ty-radio-fill ${active ? activeColor : ''}`}
							></div>
						</div>
						<div>{o.label}</div>
					</div>
				);
			})}
		</div>
	);
};
