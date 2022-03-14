import React, { FC, useState } from 'react';
import { RadioButtonProps } from './RadioButton.types';
import '../../style/components/radio-button.scss';

const RadioButton: FC<RadioButtonProps> = ({
	value,
	options,
	width,
	tyClass,
	onChange,
	...props
}) => {
	const [currentValue, setCurrentValue] = useState(value)
	tyClass = `ty-radio-button ${tyClass||''}`;
	width = width || '16px';
	const height = width;
	props.activeColor = props.activeColor||'primary';
	const activeColor = `ty-bg-${props.activeColor}`;
	const borderColor = `ty-border-color-${props.activeColor}`;
	function handleChange (value: any) {
		onChange(value);
		setCurrentValue(value);
	}
	return (
		<div role='radiogroup'>
			{
				options.map((o, i) => {
					const active = o.value===currentValue;
					return (
						<div onClick={() => handleChange(o.value)} key={i} role='radio' className={`ty-flex ty-space-between align-items-center ${tyClass} ${active?'active':''}`}>
							<div>{o.label}</div>
							<div role='button' style={{width, height}} className={`ty-radio-toggle ${active?borderColor:'ty-border-color-gray'}`}>
								<div className={active?activeColor:''}></div>
							</div>
						</div>
					)
				})
			}
		</div>
	);
};

export default RadioButton;
