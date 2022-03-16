import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import '../../style/index.scss';
import Modal from './Modal';
import { unmountComponentAtNode } from "react-dom";

describe('Running Test for Tayeh Modal', () => {
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

	test('Check Modal Defaults', () => {
		render(<Modal visible>Modal Content</Modal>);
		const node = screen.getByText('Modal Content');
		const card = node?.parentElement;
		const mask = card?.parentElement;
		expect(node).toHaveClass('ty-modal-body');
	})

	test('Check Modal Visibility', () => {
		render(<Modal>Modal Content</Modal>);
		let node;
		try {
			node = screen.getByText('Modal Content');
		} catch {}
		expect(node).toBeUndefined();
		render(<Modal visible>Modal Content</Modal>);
		node = screen.getByText('Modal Content');
		expect(node).toBeDefined();
	})

	test('Check Modal Exit', () => {
		const fn = jest.fn();
		render(<Modal beforeClose={fn} visible>Modal Content</Modal>);
		const node = screen.getByText('Modal Content');
		const card = node?.parentElement;
		const mask = card?.parentElement;
		const button = screen.getByText('close');
		expect(mask).toBeDefined();
		button?.click();
		expect(fn).toBeCalled()
		mask?.click();
		expect(fn).toBeCalledTimes(2);
	})

	test('Check Modal Transparent', () => {
		render(<Modal transparent visible>Modal Content</Modal>);
		const node = screen.getByText('Modal Content');
		const card = node?.parentElement;
		const mask = card?.parentElement;
		expect(card).toHaveClass('transparent')
		expect(mask).toHaveClass('scrollable')
	})

	test('Check Modal Footer', () => {
		render(<Modal footer={'footer'} visible>Modal Content</Modal>);
		const node = screen.getByText('footer');
		expect(node).toHaveClass('ty-modal-footer')
	})

	test('Check Modal Header', () => {
		render(<Modal header={'header'} visible>Modal Content</Modal>);
		const node = screen.getByText('header');
		expect(node).toHaveClass('ty-space-between')
	})

	test('Check Modal title', () => {
		render(<Modal title='title' visible>Modal Content</Modal>);
		const node = screen.getByText('title');
		expect(node).toHaveClass('ty-flex ty-space-between')
	})

	test('Check Modal Default BeforeClose', async () => {
		const fn = jest.fn().mockImplementation((visible) => {
			expect(visible).toBe(false);
		})
		render(<Modal onChange={fn} title='title' visible>Modal Content</Modal>);
		const button = screen.getByText('close');
		button.click();
		await waitFor((() => {
			expect(fn).toBeCalled();
		}), {timeout: 1000})
	})
});
