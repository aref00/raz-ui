import React, { KeyboardEvent, MouseEvent } from 'react';
import Button from '../button/Button';
import { Option } from "../types";

type State = {
	open: boolean,
	value: Option,
	inputValue: string,
	filteredOptions: Option[],
}

function empty() {return empty};

export function getSuffix (onClick: () => void) {
	return (
		<Button role='switch' onClick={onClick} layout='clear' width='32px'>
			<i role='img' className='ty-icon fs-12 px-2'></i>
		</Button>)
}
export function change (ctrl: Option|null) {
	return function (options: Option[]) {
		return function (state: State) {
			const o = ctrl||state.filteredOptions[0]||{label: '', value: null};
			return function (setState: React.Dispatch<State>) {
				setState({
					...state,
					value: o.value,
					inputValue: o.label||'',
					// filteredOptions: options,
					open: false

				})
				return function (onChange: (value: string|number) => void) {
					onChange(o.value);
					return empty();
				}
			}
		}
	}
}
export function handleKeyDown (e: KeyboardEvent<HTMLInputElement>) {
	if (e.key === 'Escape') {
		e.preventDefault();
		return change({label: '', value: null});
	}
	if (e.key === 'Escape' || e.key === 'Enter') {
		e.preventDefault();
		return change(null);
	}
	return empty;
}

export function handleInputChange (value: string) {
	return function (options: Option[]) {
		const o = options.find((o) => o.label==value||o.value==value);
		const filteredOptions = options.filter(o => (''+o.label).includes(value)||(''+o.value).includes(value));
		return function (state: State, setState: React.Dispatch<State>) {
			setState({
				...state,
				value: o?.value,
				inputValue: value,
				filteredOptions,

			})
			return function (onChange: (value: string|number) => void) {
				onChange(o?.value);
			}
		}
	}
}
export function handleSelect (e: MouseEvent) {
	e.preventDefault();
	return function (o: Option) {
		return function (options: Option[]) {
			return function (state: State, setState: React.Dispatch<State>) {
				setState({
					...state,
					value: o.value,
					inputValue: o.label||'',
					filteredOptions: options,
					open: false
				})
				return function (onChange: (value: any) => void) {
					onChange(o.value);
				}
			}
		}
	}
}