import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import Bubble from './Bubble';
import { unmountComponentAtNode } from "react-dom";

describe('Running Test for Tayeh Bubble', () => {
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

	test('Check Bubble Defaults', () => {
		render(<Bubble>Bubble Content</Bubble>);
		const node = screen.getByRole('dialog');
		expect(node?.className).toContain('border-radius-10');
		expect(node?.className).toContain('ty-bg-primary');
		expect(node?.className).toContain('ty-bubble-end');
	})

	test('Check Bubble Color', () => {
		render(<Bubble color='secondary' replyColor='primary' replyTo="Reply Content">Bubble Content</Bubble>);
		const node = screen.getByRole('dialog');
		const reply = screen.getByText('Reply Content');
		expect(node?.className).toContain('ty-bg-secondary');
		expect(reply?.className).toContain('ty-bg-primary');
	})

	test('Check Bubble Footer', () => {
		render(<Bubble footer="Footer Content">Bubble Content</Bubble>);
		const node = screen.getByText('Footer Content');
		expect(node).toBeDefined()
	})

	test('Check Bubble Side', () => {
		render(<Bubble isMe>Bubble Content</Bubble>);
		const node = screen.getByRole('dialog');
		expect(node).toHaveClass('ty-bubble-start')
	})
});
