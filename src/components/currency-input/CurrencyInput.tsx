import React, { ChangeEvent, FC, useState } from 'react';
import { CurrencyInputProps } from './CurrencyInput.types';
import '../../style/components/input.scss';
import Input from '../input/Input';

function format(valString?: string|number) {
	if (!valString) return '';
	let val = valString.toString();
	return val.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
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
	const [content, setContent] = useState(value||props.min||0);
	const [inputValue, setInputValue] = useState(format(value));
	function handleChange (event: ChangeEvent<HTMLInputElement>) {
		let v = +(event.target as HTMLInputElement).value.replace(/[^0-9.]/g, "");
		if (props.min && v < props.min) v = props.min;
		if (props.max && v > props.max) v = props.max;
		event.target.value = '' + v;
		setContent(v);
		setInputValue(format(v));
		onChange(event)
	}
	return (
		<Input value={inputValue} onChange={handleChange} {...props}/>
	);
};

export default CurrencyInput;
