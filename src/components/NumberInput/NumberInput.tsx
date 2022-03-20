import React, { ChangeEvent, createRef, FC, useState } from 'react';
import { NumberInputProps } from './NumberInput.types';
import '../../style/components/input.scss';
import '../../style/components/number-input.scss';

const NumberInput: FC<NumberInputProps> = ({
	disabled,
	height,
	inputDisabled,
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
	suffixWidth,
	value,
	error,
	tyClass,
	width,
	onChange,
	...props
}) => {
	// value = value || null;
	const [inputValue, setInputValue] = useState(value || '');
	// const input_ref = createRef<HTMLInputElement>();
	tyClass = tyClass || '';
	height = height || '45px';
	suffixWidth = suffixWidth || 32;
	step = step || 1;
	plusColor = plusColor || 'light';
	minusColor = minusColor || 'light';

	let plusDisabled = () => {
		return max && value && max <= value;
	};
	let minusDisabled = () => {
		return min && value && min >= value;
	};

	let handlePlusClick = () => {
		if (disabled) return;
		let v = +inputValue;
		if (typeof v === 'undefined') v = 0;
		v += step || 1;
		if (typeof max === 'number' && v > max) v = Number(max);
		setInputValue(v);
	};
	let handleMinusClick = () => {
		if (disabled) return;
		let v = +inputValue;
		if (typeof v === 'undefined') v = 0;
		v -= step || 1;
		if (typeof min === 'number' && v < min) v = min;
		setInputValue(v);
	};

	let handleInput = (e: ChangeEvent) => {
		setInputValue((e.target as HTMLInputElement).value);
		// const event = { target: { value: temp } };
		// onChange(event as any);
	};

	let handleChange = (e: Event) => {
		let temp = Number((e.target as HTMLInputElement).value);
		if (typeof max === 'number' && temp > max) temp = Number(max);
		if (typeof min === 'number' && temp < min) temp = min;
		setInputValue(temp);
		const event = { target: { value: temp } };
		onChange(event as any);
	};

	function registerCallbacks(element: HTMLInputElement | null) {
		if (element) {
			element.onchange = handleChange;
		}
	}

	return (
		<div className={`inline-block ty-input ty-input-number ${tyClass}`}>
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
					<i className="ty-icon ty-icon-plus fs-12 full-width" />
				</span>
				<span className="input-content">
					<input
						// ref={input_ref}
						disabled={disabled || inputDisabled}
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
					<i className="ty-icon ty-icon-minus fs-12 full-width" />
				</span>
			</div>
		</div>
	);
};

export default NumberInput;
