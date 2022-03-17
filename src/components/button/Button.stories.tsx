import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
	title: 'Tayeh/Button',
	component: Button,
	argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const DarkTemplate: Story<ButtonProps[]> = (args) => (
	<div className="dark-theme">
		<Button {...args[0]} />
		<Button {...args[1]} />
		<Button {...args[2]} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	tyClass: 'px-3 px-sm-4 py-1 py-sm-2 fs-12 fs-sm-14 fs-md-16',
	disabled: false,
	children: <span>test</span>,
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	tyClass: 'px-3 px-sm-4 py-1 py-sm-2 fs-12 fs-sm-14 fs-md-16',
	disabled: false,
	children: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	tyClass: 'px-4 py-2',
	children: 'Disabled',
};

export const Small = Template.bind({});
Small.args = {
	disabled: false,
	children: 'Small',
	tyClass: 'fs-10 px-2 py-1',
};

export const Medium = Template.bind({});
Medium.args = {
	disabled: false,
	children: 'Medium',
	tyClass: 'fs-12 px-3 py-2',
};

export const Large = Template.bind({});
Large.args = {
	disabled: false,
	children: 'Large',
	tyClass: 'fs-16 px-5 py-3',
};

export const Outline = Template.bind({});
Outline.args = {
	disabled: false,
	layout: 'outline',
	children: 'Outline',
	tyClass: 'px-4 py-2',
	width: '100px',
};

export const Clear = Template.bind({});
Clear.args = {
	disabled: false,
	layout: 'clear',
	children: 'Clear',
};

export const Icon = Template.bind({});
Icon.args = {
	disabled: false,
	tyClass: 'ty-icon ty-icon-cart',
	layout: 'clear',
	children: 'Cart',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = [
	{
		children: 'Button Content',
	},
	{
		tyClass: 'ty-icon ty-icon-cart px-5 py-2',
		layout: 'clear',
	},
	{
		disabled: false,
		tyClass: 'ty-icon ty-icon-cart',
		layout: 'clear',
		children: 'Button Content',
	},
];
