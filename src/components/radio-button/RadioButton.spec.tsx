import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import { RadioButton } from './RadioButton';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('Running Test for Tayeh RadioButton', () => {
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

	test('Check RadioButton Defaults', () => {
		const fn = jest.fn().mockImplementation((value) => {
			expect(value).toBe('test');
		});
		render(
			<RadioButton
				onChange={fn}
				options={[{ label: 'test', value: 'test' }]}
			/>,
		);
		const node = screen.getByRole('button');
		expect(node?.className).toContain('ty-border-color-gray');
		expect(node?.style.width).toBe('16px');
		expect(node?.style.height).toBe('16px');
	});

	test('Check RadioButton onChange', () => {
		const fn = jest.fn();
		render(
			<RadioButton
				onChange={fn}
				options={[{ label: 'test', value: 'test' }]}
			/>,
		);
		const node = screen.getByRole('radio');
		act(() => node.click());
		const button = screen.getByRole('button');
		expect(button?.className).toContain('ty-border-color-primary');
		expect(fn).toBeCalled();
	});
});
