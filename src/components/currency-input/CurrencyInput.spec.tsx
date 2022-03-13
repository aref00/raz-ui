import React, { ChangeEvent } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '../../style/index.scss';
import CurrencyInput from './CurrencyInput';
import { unmountComponentAtNode } from "react-dom";

describe('Running Test for Tayeh Input', () => {
	let container: HTMLDivElement;
	beforeEach(() => {
	  // setup a DOM element as a render target
	  container = document.createElement("div");
	  document.body.appendChild(container);
	});

	afterEach(() => {
	  // cleanup on exiting
	  unmountComponentAtNode(container);
	  container.remove();
	});
	test('Check CurrencyInput Disabled', () => {
		render(<CurrencyInput onChange={() =>{}} disabled placeholder='Tayeh CurrencyInput'/>);
		expect(screen.getByPlaceholderText('Tayeh CurrencyInput')).toBeDisabled();
	});
	test('Check CurrencyInput Value', async () => {
		let value = null;
		const fn = jest.fn().mockImplementation((e: ChangeEvent<HTMLInputElement>) => {
			value = e.target.value;
			expect(value).toBe('2000');
		})
		render(<CurrencyInput onChange={fn} value="1000" placeholder='Tayeh CurrencyInput'/>);
		const node = screen.getByPlaceholderText('Tayeh CurrencyInput');
		expect(node?.getAttribute('value')).toBe('1,000');
		fireEvent.change(node, {target: {value: '2,000'}});
		expect(fn).toBeCalled();
		expect(node?.getAttribute('value')).toBe('2,000');
	});

	test('Check CurrencyInput Max', async () => {
		const fn = jest.fn();
		render(<CurrencyInput onChange={fn} max={20} value="1000" placeholder='Tayeh CurrencyInput'/>);
		const node = screen.getByPlaceholderText('Tayeh CurrencyInput');
		expect(node?.getAttribute('value')).toBe('20');
		fireEvent.change(node, {target: {value: '100'}});
		expect(fn).toBeCalled();
		expect(node).toHaveValue('20');
	});

	test('Check CurrencyInput Min', async () => {
		const fn = jest.fn();
		render(<CurrencyInput onChange={fn} min={10} value="0" placeholder='Tayeh CurrencyInput'/>);
		const node = screen.getByPlaceholderText('Tayeh CurrencyInput');
		expect(node?.getAttribute('value')).toBe('10');
		fireEvent.change(node, {target: {value: '0'}});
		expect(fn).toBeCalled();
		expect(node).toHaveValue('10');
	});

	test('Check CurrencyInput null change', async () => {
		const fn = jest.fn();
		render(<CurrencyInput onChange={() => fn} value="10" placeholder='Tayeh CurrencyInput'/>);
		const node = screen.getByPlaceholderText('Tayeh CurrencyInput');
		fireEvent.change(node, {target: {value: null}});
		expect(node).toHaveValue('')
	});
});
