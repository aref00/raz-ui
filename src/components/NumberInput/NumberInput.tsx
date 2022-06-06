import React, { ChangeEvent, FC } from 'react';
import { NumberInputProps } from './NumberInput.types';

export const NumberInput: FC<NumberInputProps> = ({
	disabled,
	height,
	label,
	max,
	maxLength,
	min,
	minLength,
	placeholder,
	color,
	radius,
	required,
	step,
	value,
	changeValue,
	error,
	tyClass,
	inputClass,
	width,
	onChange,
	...props
}) => {
	tyClass = tyClass || '';
	inputClass = inputClass || '';
	height = height || '45px';
	color = color || 'primary';
	radius = radius || 5;

	const plusDisabled = () => {
		return max && value && max <= value;
	};
	const minusDisabled = () => {
		return min && value && min >= value;
	};

	const handlePlusClick = () => {
		if (disabled) return;
		if (typeof value !== 'number') {
			if (typeof min === 'number') {
				changeValue(min);
			} else changeValue(0);
		} else {
			let v = +value;
			v += step || 1;
			if (typeof max === 'number' && v > max) v = Number(max);
			changeValue(v);
		}
	};
	const handleMinusClick = () => {
		if (disabled) return;
		if (typeof value !== 'number') {
			if (typeof min === 'number') {
				changeValue(min);
			} else changeValue(0);
		} else {
			let v = +value;
			v -= step || 1;
			if (typeof min === 'number' && v < min) v = min;
			changeValue(v);
		}
	};

	const handleInput = (e: ChangeEvent) => {
		if ((e.target as HTMLInputElement).value) {
			changeValue(Number((e.target as HTMLInputElement).value));
		} else {
			changeValue('');
		}
	};

	const handleChange = (e: Event) => {
		let temp = Number((e.target as HTMLInputElement).value);
		if (typeof max === 'number' && temp > max) temp = max;
		if (typeof min === 'number' && temp < min) temp = min;
		changeValue(temp);
		const event = { target: { value: temp } };
		onChange(event as unknown as ChangeEvent<HTMLInputElement>);
	};

	function registerCallbacks(element: HTMLInputElement | null) {
		if (element) {
			element.onchange = handleChange;
		}
	}

	return (
		<div
			className={`inline-block ty-input ty-input-number ${
				disabled ? 'disabled' : ''
			} ${tyClass}`}
		>
			{label && (
				<p className={`fs-12 fs-sm-14 mb-1 ${error ? 'ty-color-danger' : ''}`}>
					{label} <span className="ty-color-danger">{required ? '*' : ''}</span>
				</p>
			)}
			<div
				role="none"
				className={`input-number-wrapper ty-border ty-border-color-${color} border-radius-${radius}`}
				style={{ width, height }}
			>
				<span
					className={`increase ty-flex align-items-center ty-space-between ty-color-${color} ${
						plusDisabled() ? 'disabled' : ''
					}`}
					onClick={handlePlusClick}
				>
					<i className="ty-icon ty-icon-add-outline fs-24 full-width" />
				</span>
				<span className="input-content">
					<input
						className={`text-center ty-color-${color} border-radius-${radius} ${inputClass}`}
						disabled={disabled}
						ref={registerCallbacks}
						minLength={minLength}
						maxLength={maxLength}
						min={min}
						max={max}
						step={step}
						type="number"
						placeholder={placeholder}
						style={{
							lineHeight: height,
							height: `calc(${height} - 2px)`,
						}}
						value={value || ''}
						onChange={handleInput}
						{...props}
					/>
				</span>
				<span
					className={`decrease ty-flex align-items-center ty-space-between ty-color-${color} ${
						minusDisabled() ? 'disabled' : ''
					}`}
					onClick={handleMinusClick}
				>
					<i className="ty-icon ty-icon-minus-outline fs-24 full-width" />
				</span>
			</div>
		</div>
	);
};
