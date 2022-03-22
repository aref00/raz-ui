import React, { ChangeEvent } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '../../style/index.scss';
import NumberInput from './NumberInput';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Tayeh NumberInput', () => {
	let container: HTMLDivElement;
	beforeEach(() => {
		// setup a DOM element as a render target
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		// cleanup on exiting
		unmountComponentAtNode(container);
		container.remove();
	});

	test('Check NumberInput plusHandle', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				max={20}
				min={1}
				value={25}
				placeholder="Tayeh NumberInput"
			/>,
		);
		const input = screen.getByPlaceholderText('Tayeh NumberInput');
		const node = screen.getByRole('none')?.children[0];
		fireEvent.click(node);
		expect(input.getAttribute('value')).toBe('20');
	});

	test('Check NumberInput minusHandle', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				max={20}
				min={1}
				value={-3}
				placeholder="Tayeh NumberInput"
			/>,
		);
		const input = screen.getByPlaceholderText('Tayeh NumberInput');
		const node = screen.getByRole('none')?.children[2];
		fireEvent.click(node);
		expect(input.getAttribute('value')).toBe('1');
	});

	test('Check NumberInput plusMinus disabled', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				max={20}
				min={1}
				placeholder="Tayeh NumberInput"
				disabled={true}
			/>,
		);
		const plus = screen.getByRole('none')?.children[0];
		const minus = screen.getByRole('none')?.children[2];
		fireEvent.click(plus);
		fireEvent.click(minus);
	});

	test('Check NumberInput plus value undefined', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				max={20}
				min={1}
				placeholder="Tayeh NumberInput"
			/>,
		);
		const input = screen.getByPlaceholderText('Tayeh NumberInput');
		const plus = screen.getByRole('none')?.children[0];
		fireEvent.click(plus);
		expect(input.getAttribute('value')).toBe(input.getAttribute('min'));
	});

	test('Check NumberInput Minus value undefined', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				max={20}
				min={1}
				placeholder="Tayeh NumberInput"
			/>,
		);
		const input = screen.getByPlaceholderText('Tayeh NumberInput');
		const minus = screen.getByRole('none')?.children[2];
		fireEvent.click(minus);
		expect(input.getAttribute('value')).toBe(input.getAttribute('min'));
	});

	test('Check NumberInput undefined-min & value for plusHnadle', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				max={20}
				placeholder="Tayeh NumberInput"
			/>,
		);
		const input = screen.getByPlaceholderText('Tayeh NumberInput');
		const plus = screen.getByRole('none')?.children[0];
		fireEvent.click(plus);
		expect(input.getAttribute('value')).toBe('0');
	});

	test('Check NumberInput undefined-min & value for minusHnadle', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				max={20}
				placeholder="Tayeh NumberInput"
			/>,
		);
		const input = screen.getByPlaceholderText('Tayeh NumberInput');
		const minus = screen.getByRole('none')?.children[2];
		fireEvent.click(minus);
		expect(input.getAttribute('value')).toBe('0');
	});

	test('Check NumberInput change & input', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				max={20}
				min={1}
				value={5}
				error="Something is wrong"
				label='error check'
				placeholder="Tayeh NumberInput"
			/>,
		);
		const input = screen.getByPlaceholderText('Tayeh NumberInput');
		fireEvent.input(input, { target: { value: 25 } });
		fireEvent.change(input, { target: { value: 25 } });
		expect(fn).toBeCalled();
		expect(input.getAttribute('value')).toBe('20');
	});

	test('Check NumberInput change to undefined', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				max={20}
				min={1}
				value={5}
				label="error check"
				required
				placeholder="Tayeh NumberInput"
			/>,
		);
		const input = screen.getByPlaceholderText('Tayeh NumberInput');
		fireEvent.input(input, { target: { value: '' } });
		fireEvent.change(input, { target: { value: '' } });
		expect(fn).toBeCalled();
		expect(input.getAttribute('value')).toBe('5');
	});
});
