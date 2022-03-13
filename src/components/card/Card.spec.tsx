import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import Card from './Card';
import { unmountComponentAtNode } from "react-dom";

describe('Running Test for Tayeh Card', () => {
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

	test('Check Card Defaults', () => {
		render(<Card>Card Content</Card>);
		const node = screen.getByText('Card Content');
		expect(node?.className).toContain('border-radius-15');
		expect(node?.className).toContain('ty-bg-contrast-primary');
	})

	test('Check Card Radius', () => {
		render(<Card radius={10}>Card Content</Card>);
		const node = screen.getByText('Card Content');
		expect(node?.className).toContain('border-radius-10');
	})

	test('Check Card Color', () => {
		render(<Card color='primary'>Card Content</Card>);
		const node = screen.getByText('Card Content');
		expect(node?.className).toContain('ty-bg-primary');
	})
});
