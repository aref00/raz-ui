import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import { Table } from './Table';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Raz Table', () => {
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

	test('Check Table Defaults', () => {
		render(
			<Table
				data={{
					headers: [{ title: 'test' }],
					rows: [{ _id: '4', cols: [{ value: '1' }], selected: false }],
				}}
				onSelect={() => {
					return;
				}}
				onSelectAll={() => {
					return;
				}}
			/>
		);
		const node = screen.getByText('test');
		expect(node?.className).toContain('text-left');
	});
});
