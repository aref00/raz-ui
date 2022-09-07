import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import { Input } from './Input';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('Running Test for Tayeh Input', () => {
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
	test('Check Input Disabled', () => {
		render(<Input disabled placeholder="Tayeh input" />);
		expect(screen.getByPlaceholderText('Tayeh input')).toBeDisabled();
	});
	test('Check Input Label', () => {
		render(<Input label="label" placeholder="Tayeh input" />);
		expect(screen.getByText('label')).toBeDefined();
	});
	test('Check Input Direction', () => {
		render(<Input dir="ltr" placeholder="Tayeh input" />);
		const node = screen.getByPlaceholderText('Tayeh input');
		expect(node?.dir).toBe('ltr');
	});
	test('Check Input Clear', () => {
		render(<Input clear placeholder="Tayeh input" />);
		const node = screen.getByRole('none');
		expect(node?.className).toContain('--border-clear');
	});
	// test('Check Input Outline', () => {
	// 	render(<Input outline placeholder='Tayeh input'/>);
	// 	const node = screen.getByRole('none');
	// 	expect(node?.className).toContain('ty-input-focus');
	// });
	test('Check Input Error', () => {
		render(<Input error="error" label="label" placeholder="Tayeh input" />);
		const node = screen.getByRole('none');
		const label = screen.getByText('label');
		expect(node?.className).toContain('raz-color-danger');
		expect(screen.getByRole('alert')).toHaveTextContent('error');
		expect(label.className).toContain('raz-color-danger');
	});
	test('Check Input Password', () => {
		render(<Input type="password" placeholder="Tayeh input" />);
		const node = screen.getByRole('button');
		expect(node).toBeDefined();
		const input = screen.getByRole('textbox');
		expect(input.getAttribute('type')).toBe('password');
		act(() => node.click());
		expect(input.getAttribute('type')).toBe('text');
	});
	test('Check Input Required', () => {
		render(<Input required label="label" placeholder="Tayeh input" />);
		const node = screen.getByRole('textbox');
		expect(node).toBeRequired();
		const label = screen.getByText('label');
		expect(label.innerHTML).toContain('*');
	});
	test('Check Input BorderBottom', () => {
		render(<Input borderBottom label="label" placeholder="Tayeh input" />);
		const node = screen.getByRole('none');
		expect(node.className).toContain('--border-bottom');
	});
});
