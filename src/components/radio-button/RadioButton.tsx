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
	className = `raz-radio-button ${className || ''}`;
	width = width || '16px';
	const inner_width = +width.replace('px', '') - 1.6 + 'px';
	props.activeColor = props.activeColor || 'primary';
	const activeColor = `raz-bg-${props.activeColor}`;
	const borderColor = `raz-border-color-${props.activeColor}`;
	function handleChange(value: string) {
		onChange(value);
		setCurrentValue(value);
	}
	return (
		<div role="radiogroup" className="raz-radio-button">
			{options.map((o, i) => {
				const active = o.value === currentValue;
				return (
					<div
						onClick={() => handleChange(o.value)}
						key={i}
						role="radio"
						className={`raz-radio-row raz-flex raz-space-between raz-gap-10 align-items-center ${className} ${
							active ? 'active' : ''
						}`}>
						<div
							role="button"
							style={{ width, height: width }}
							className={`raz-radio-toggle ${
								active ? borderColor : 'raz-border-color-gray'
							}`}>
							<div
								style={{ width: inner_width, height: inner_width }}
								className={`raz-radio-fill ${active ? activeColor : ''}`}></div>
						</div>
						<div>{o.label}</div>
					</div>
				);
			})}
		</div>
	);
};
