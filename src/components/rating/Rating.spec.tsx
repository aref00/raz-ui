import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import Rating from './Rating';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Tayeh Rating', () => {
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

	test('Check Rating Star Count', () => {
		render(<Rating></Rating>);
		const node = screen.getByText('5');
		const parent = node?.parentElement?.parentElement?.parentElement;
		expect(parent?.children?.length).toBe(5);
	});

	test('Check Rating Custom Star Count', () => {
		render(<Rating max={3}></Rating>);
		const node = screen.getByText('1');
		const parent = node?.parentElement?.parentElement?.parentElement;
		expect(parent?.children?.length).toBe(3);
	});

	test('Check Rating Star Count', () => {
		const fn = jest.fn();
		render(
			<Rating
				activeColor="primary"
				defaultColor="gray"
				value={2.5}
				onChange={fn}
			></Rating>,
		);
		const node2 = screen.getByText('2')?.parentElement;
		const node3 = screen.getByText('3')?.parentElement;
		const node4 = screen.getByText('4')?.parentElement;
		expect(node2).toHaveClass('ty-color-primary');
		expect(node3).toHaveClass('ty-color-primary ty-opacity-70');
		expect(node4).toHaveClass('ty-color-gray');
	});

	test('Check Rating Disabled', () => {
		render(<Rating disabled></Rating>);
		const button = screen.getByText('2')?.parentElement?.parentElement;
		const parent =
			screen.getByText('3')?.parentElement?.parentElement?.parentElement;
		expect(button).toHaveClass('disabled');
		expect(parent).toHaveClass('ty-opacity-50');
	});

	test('Check Rating Disabled', () => {
		const fn = jest.fn().mockImplementation((value) => {
			expect(value).toBe(4);
		});
		render(
			<Rating
				activeColor="primary"
				defaultColor="gray"
				value={2.5}
				onChange={fn}
			></Rating>,
		);
		const button = screen.getByText('4')?.parentElement?.parentElement;
		button?.click();
		expect(fn).toBeCalled();
	});
});
