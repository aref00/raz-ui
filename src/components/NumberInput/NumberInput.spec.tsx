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

	test('Check NumberInput Disabled', () => {
		let value = 5;
		const fn = jest
			.fn()
			.mockImplementation((e: ChangeEvent<HTMLInputElement>) => {
				value = Number(e.target.value);
				expect(value).toBe(5);
			});
		render(
			<NumberInput onChange={fn} disabled placeholder="Tayeh NumberInput" />,
		);
		expect(screen.getByPlaceholderText('Tayeh NumberInput')).toBeDisabled();
	});

	test('Check NumberInput Value', async () => {
		let value = null;
		const fn = jest
			.fn()
			.mockImplementation((e: ChangeEvent<HTMLInputElement>) => {
				value = e.target.value;
				expect(value).toBe(200);
			});
		render(
			<NumberInput onChange={fn} value={100} placeholder="Tayeh NumberInput" />,
		);
		const node = screen.getByPlaceholderText('Tayeh NumberInput');
		expect(node?.getAttribute('value')).toBe(100);
		fireEvent.input(node, { target: { value: 200 } });
		fireEvent.change(node, { target: { value: 200 } });
		fireEvent.submit(node, { target: { value: 200 } });
		expect(fn).toBeCalled();
		expect(node?.getAttribute('value')).toBe(200);
	});

	test('Check NumberInput Max', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				max={20}
				value={1000}
				placeholder="Tayeh NumberInput"
			/>,
		);
		const node = screen.getByPlaceholderText('Tayeh NumberInput');
		expect(node?.getAttribute('value')).toBe(20);
		fireEvent.change(node, { target: { value: 100 } });
		fireEvent.submit(node, { target: { value: 100 } });
		expect(fn).toBeCalled();
		expect(node.getAttribute('value')).toBe(20);
	});

	test('Check NumberInput Min', async () => {
		const fn = jest.fn();
		render(
			<NumberInput
				onChange={fn}
				min={10}
				value={0}
				placeholder="Tayeh NumberInput"
			/>,
		);
		const node = screen.getByPlaceholderText('Tayeh NumberInput');
		expect(node?.getAttribute('value')).toBe(0);
		fireEvent.change(node, { target: { value: 1 } });
		fireEvent.submit(node, { target: { value: 2 } });
		expect(fn).toBeCalled();
		expect(node.getAttribute('value')).toBe(0);
	});
});
