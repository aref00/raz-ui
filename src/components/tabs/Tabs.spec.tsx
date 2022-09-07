import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import { Tabs } from './Tabs';
import { unmountComponentAtNode } from 'react-dom';
import { Tab } from '../types';

describe('Running Test for Tayeh Tabs', () => {
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

	test('Check Tabs Defaults', () => {
		const tabs: Tab[] = [
			{
				label: 'tab-1',
				disabled: false,
				icon: 'home',
			},
		];
		const fn = jest.fn().mockImplementation((value) => {
			expect(value).toBe('0');
		});
		render(<Tabs tabs={tabs} onChange={fn}></Tabs>);
		const node = screen.getByText('tab-1');
		expect(node).toBeDefined();
		node.click();
		expect(fn).toBeCalled();
	});
	test('Check Tabs Defaults', () => {
		const tabs: Tab[] = [
			{
				disabled: false,
				icon: 'home',
			},
		];
		const fn = jest.fn();
		render(<Tabs className="custom-class" tabs={tabs} onChange={fn}></Tabs>);
		const node = screen.getByRole('tab');
		expect(node).toHaveClass('custom-class');
	});
});
