import React, { ChangeEvent, FC, FocusEvent, FormEvent, useState } from 'react';
import { CurrencyInputProps } from './CurrencyInput.types';
import '../../style/components/input.scss';
import Input from '../input/Input';

function format(valString?: string | number) {
	if (!valString) return '';
	let val = valString.toString();
	return val.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
}

const CurrencyInput: FC<CurrencyInputProps> = ({
	value,
	onChange,
	...props
}) => {
	if (value) {
		if (props.max && +value > props.max) value = props.max;
		if (props.min && +value < props.min) value = props.min;
	}
	const [inputValue, setInputValue] = useState(format(value));
	const [content, setContent] = useState(+(value || '0'));

	function handleInput(e: Event) {
		let v = +(e.target as HTMLInputElement).value.replace(/[^0-9.]/g, '');
		(e.target as HTMLInputElement).value = '' + v;
		setInputValue(format(v));
		setContent(+v);
		const event = { target: { value: v } };
		onChange(event as any);
	}

	function handleChange(e: Event) {
		let v = +(e.target as HTMLInputElement).value.replace(/[^0-9.]/g, '');
		if (props.min && v < props.min) v = props.min;
		if (props.max && v > props.max) v = props.max;
		setInputValue(format(v));
		setContent(+v);
		const event = { target: { value: v } };
		onChange(event as any);
	}

	function registerCallbacks(element: HTMLInputElement | null) {
		if (element) {
			element.onchange = handleChange;
			element.oninput = handleInput;
		}
	}

	return (
		<Input passRef={registerCallbacks} defaultValue={inputValue} {...props} />
	);
};

export default CurrencyInput;
