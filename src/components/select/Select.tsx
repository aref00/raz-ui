import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react';
import { SelectProps } from './Select.types';
import '../../style/components/select.scss';
import Input from '../input/Input';
import Button from '../button/Button';
import { handleSelect, getSuffix, handleInputChange, handleKeyDown, change } from './Select.utils';

const Select: FC<SelectProps> = ({
	defaultValue,
	options,
	color,
	clear,
	disabled,
	width,
	height,
	tyClass,
	onChange,
	...props
}) => {
	const [state, setState] = useState({
		open: false,
		value: defaultValue||{label: null, value: null},
		inputValue: defaultValue?.label||'',
		filteredOptions: options,
	});
	const [input, setInput] = useState<HTMLInputElement>();
	useEffect(() => {
		function setFocus () {
			if (state.open) return input?.focus();
			input?.blur()
		}
		setFocus();
	}, [state.open])
	width = width || '152px';
	height = height || '32px';
	return (
		<div role='combobox' className={`ty-select ${disabled?'disabled':''} ${clear?'':`ty-border-color-${color||'gray'}`} ${tyClass}`}>
			<div className='ty-select__search'>
				<Input passRef={setInput} width={width} height={height} suffix={getSuffix(() => setState({...state, open: !state.open}))}
				onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)(options)(state)(setState)(onChange)}
				onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)(options)(state, setState)(onChange)}
				value={state.inputValue} outlineColor={color} clear={clear} {...props} disabled={disabled}
				onFocus={() => setState({...state, open: true})} onBlur={() => change(null)(options)(state)(setState)(onChange)}></Input>
			</div>
			<div className='ty-select__dropdown ty-shadow-shadow' style={{width, minHeight: height}}>
				{
					state.filteredOptions.map((o, i) => (
						<Button role='option' key={i} onClick={(e) => handleSelect(e)(o)(options)(state, setState)(onChange)}
						layout='clear' width={width} height={height} tyClass="text-justify px-3" color='contrast-secondary'>
							{o.label}
						</Button>
					))
				}
			</div>
		</div>
	);
};

export default Select;
