import React, { MouseEvent } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import '../../style/index.scss';
import Select from './Select';
import { handleInputChange, handleSelect } from './Select.utils';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Tayeh Select', () => {
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

	test('Check Select TyClass', () => {
		const fn = jest.fn();
		render(
			<Select
				options={[]}
				onChange={fn}
				placeholder="Select Content"
				tyClass="test"
			/>,
		);
		const node = screen.getByRole('combobox');
		expect(node?.className).toContain('test');
		expect(node?.tagName).toBe('DIV');
	});
	test('Check Select Label', () => {
		const fn = jest.fn();
		render(
			<Select
				options={[]}
				label="select label"
				onChange={fn}
				placeholder="Select Content"
				tyClass="test"
			/>,
		);
		const label_node = screen.getByText('select label');
		expect(label_node).toBeDefined();
		expect(label_node?.tagName).toBe('P');
	});
	test('Check Select Focus', () => {
		const fn = jest.fn();
		render(
			<Select
				options={[]}
				onChange={fn}
				placeholder="Select Content"
				tyClass="test"
			/>,
		);
		const node = screen.getByRole('textbox');
		expect(node).not.toHaveFocus();
		node.focus();
		expect(node).toHaveFocus();
		fireEvent.keyDown(node, { key: 'Escape' });
		expect(node).not.toHaveFocus();
		node.focus();
		fireEvent.keyDown(node, { key: 'Enter' });
		expect(node).not.toHaveFocus();
		node.focus();
		node.blur();
		expect(node).not.toHaveFocus();
	});

	test('Check Select Change', () => {
		const fn = jest.fn().mockImplementation((e) => {
			expect(e).toBe('test');
		});
		render(
			<Select
				options={[{ label: 'test-2', value: 'test' }]}
				onChange={fn}
				placeholder="Select Content"
				tyClass="test"
			/>,
		);
		const node = screen.getByRole('textbox');
		fireEvent.change(node, { target: { value: 'test' } });
		expect(fn).toBeCalled();
		fireEvent.keyDown(node, { key: 'Enter' });
		expect(node.getAttribute('value')).toBe('test-2');
	});

	test('Check Select Disabled', () => {
		const fn = jest.fn();
		render(
			<Select
				disabled
				options={[{ label: 'test', value: 'test' }]}
				onChange={fn}
				placeholder="Select Content"
				tyClass="test"
			/>,
		);
		const node = screen.getByRole('textbox');
		expect(node).toBeDisabled();
	});

	test('Check Select Icon', () => {
		const fn = jest.fn();
		render(
			<Select
				disabled
				options={[{ label: 'test', value: 'test' }]}
				onChange={fn}
				placeholder="Select Content"
				tyClass="test"
			/>,
		);
		const node = screen.getByRole('switch');
		const input_node = screen.getByRole('textbox');
		node.click();
		expect(input_node).toHaveFocus();
	});

	test('Check Select HandleSelect', () => {
		const fn = jest.fn().mockImplementation((e) => {
			expect(e).toBe('test');
		});
		render(
			<Select
				disabled
				options={[{ label: 'test', value: 'test' }]}
				onChange={fn}
				placeholder="Select Content"
				tyClass="test"
			/>,
		);
		const node = screen.getByRole('option');
		node.click();
		const input_node = screen.getByRole('textbox');
		expect(input_node.getAttribute('value')).toBe('test');
		expect(fn).toBeCalled();
	});

	test('Check Select Defaults', () => {
		const fn = jest.fn();
		render(
			<Select
				defaultValue={{ label: 'test-2', value: 'test' }}
				options={[{ label: 'test', value: 'test' }]}
				onChange={fn}
				placeholder="Select Content"
				tyClass="test"
			/>,
		);
		const input_node = screen.getByRole('textbox');
		expect(input_node.getAttribute('value')).toBe('test-2');
		expect(fn).not.toBeCalled();
	});

	test('Check Select Clear', () => {
		const fn = jest.fn();
		render(<Select clear options={[]} onChange={fn} tyClass="test" />);
		const input_node = screen.getByRole('none');
		expect(input_node).toHaveClass('--border-clear');
		expect(fn).not.toBeCalled();
	});

	test('Check Select OtherKeys', () => {
		const fn = jest.fn();
		render(
			<Select
				options={[]}
				onChange={fn}
				placeholder="Select Content"
				tyClass="test"
			/>,
		);
		const node = screen.getByRole('textbox');
		expect(node).not.toHaveFocus();
		node.focus();
		expect(node).toHaveFocus();
		fireEvent.keyDown(node, { key: 'e' });
		expect(node).toHaveFocus();
	});

	test('Check handleInputChange Util', () => {
		const base = handleInputChange('test');
		const res1 = base([{ label: 'test-2', value: 'test-2' }])(
			{ filteredOptions: [], inputValue: 'test', open: true, value: {label: null, value: null} },
			() => null,
		)(() => null);
		const res2 = base([{ label: 'not-2', value: 'test-2' }])(
			{ filteredOptions: [], inputValue: 'test', open: true, value: {label: null, value: null} },
			() => null,
		)(() => null);
		expect(res1).toBeUndefined();
		expect(res2).toBeUndefined();
	});
	test('Check handleSelect Util', () => {
		const base = handleSelect({ preventDefault: () => null } as unknown as MouseEvent);
		const res = base({ label: null, value: null })([])(
			{ filteredOptions: [], inputValue: '', open: false, value: {label: null, value: null} },
			() => null,
		)(() => null);
		expect(res).toBeUndefined();
	});
});
