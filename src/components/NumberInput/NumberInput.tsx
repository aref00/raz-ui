import React, { ChangeEvent, FC, useState } from 'react';
import { NumberInputProps } from './NumberInput.types';

export const NumberInput: FC<NumberInputProps> = ({
	disabled,
	height,
	label,
	max,
	maxLength,
	min,
	minLength,
	minusColor,
	placeholder,
	plusColor,
	required,
	step,
	value,
	error,
	tyClass,
	width,
	onChange,
	...props
}) => {
	const [inputValue, setInputValue] = useState(value || '');
	tyClass = tyClass || '';
	height = height || '45px';
	plusColor = plusColor || 'light';
	minusColor = minusColor || 'light';

	const plusDisabled = () => {
		return max && value && max <= value;
	};
	const minusDisabled = () => {
		return min && value && min >= value;
	};

	const handlePlusClick = () => {
		if (disabled) return;
		if (typeof inputValue !== 'number') {
			if (typeof min === 'number') {
				setInputValue(min);
			} else setInputValue(0);
		} else {
			let v = +inputValue;
			v += step || 1;
			if (typeof max === 'number' && v > max) v = Number(max);
			setInputValue(v);
		}
	};
	const handleMinusClick = () => {
		if (disabled) return;
		if (typeof inputValue !== 'number') {
			if (typeof min === 'number') {
				setInputValue(min);
			} else setInputValue(0);
		} else {
			let v = +inputValue;
			v -= step || 1;
			if (typeof min === 'number' && v < min) v = min;
			setInputValue(v);
		}
	};

	const handleInput = (e: ChangeEvent) => {
		if ((e.target as HTMLInputElement).value) {
			setInputValue(Number((e.target as HTMLInputElement).value));
		} else {
			setInputValue('');
		}
	};

	const handleChange = (e: Event) => {
		let temp = Number((e.target as HTMLInputElement).value);
		if (typeof max === 'number' && temp > max) temp = max;
		if (typeof min === 'number' && temp < min) temp = min;
		setInputValue(temp);
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
				className="input-number-wrapper"
				style={{ width, height }}
			>
				<span
					className={`increase ty-flex align-items-center ty-space-between ty-bg-${plusColor} ${
						plusDisabled() ? 'disabled' : ''
					}`}
					onClick={handlePlusClick}
				>
					<i className="ty-icon ty-icon-add-outline fs-12 full-width" />
				</span>
				<span className="input-content">
					<input
						disabled={disabled}
						ref={registerCallbacks}
						minLength={minLength}
						maxLength={maxLength}
						min={min}
						max={max}
						step={step}
						type="number"
						placeholder={placeholder}
						style={{ lineHeight: height, height: `calc(${height} - 2px)` }}
						value={inputValue}
						onChange={handleInput}
						{...props}
					/>
				</span>
				<span
					className={`decrease ty-flex align-items-center ty-space-between ty-bg-${minusColor} ${
						minusDisabled() ? 'disabled' : ''
					}`}
					onClick={handleMinusClick}
				>
					<i className="ty-icon ty-icon-minus-outline fs-12 full-width" />
				</span>
			</div>
		</div>
	);
};
