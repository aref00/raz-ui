import React, { ChangeEvent, FC, useState } from 'react';
import { CurrencyInputProps } from './CurrencyInput.types';
import '../../style/components/input.module.scss';
import { Input } from '../input/Input';

function format(valString?: string | number) {
	if (!valString) return '';
	const val = valString.toString();
	return val.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
}

export const CurrencyInput: FC<CurrencyInputProps> = ({
	value,
	onChange,
	...props
}) => {
	if (value) {
		if (props.max && +value > props.max) value = props.max;
		if (props.min && +value < props.min) value = props.min;
	}
	const [inputValue, setInputValue] = useState(format(value));
	// const [, setContent] = useState(+(value || '0'));

	function handleInput(e: ChangeEvent<HTMLInputElement>) {
		const v = +(e.target as HTMLInputElement).value.replace(/[^0-9.]/g, '');
		(e.target as HTMLInputElement).value = '' + v;
		setInputValue(format(v));
		// setContent(+v);
		const event = { target: { value: v } };
		onChange(event as unknown as React.ChangeEvent);
	}

	function handleChange(e: Event) {
		let v = +(e.target as HTMLInputElement).value.replace(/[^0-9.]/g, '');
		if (props.min && v < props.min) v = props.min;
		if (props.max && v > props.max) v = props.max;
		setInputValue(format(v));
		// setContent(+v);
		const event = { target: { value: v } };
		onChange(event as unknown as React.ChangeEvent);
	}

	function registerCallbacks(element: HTMLInputElement | null) {
		if (element) {
			element.onchange = handleChange;
		}
	}

	return (
		<Input
			passRef={registerCallbacks}
			value={inputValue}
			onChange={handleInput}
			{...props}
		/>
	);
};
