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

export const Primary = Template.bind({});
Primary.args = {
	disabled: false,
	children: <span>test</span>
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	disabled: false,
	label: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
	primary: false,
	disabled: true,
	label: 'Disabled',
};

export const Small = Template.bind({});
Small.args = {
	primary: true,
	disabled: false,
	size: 'small',
	label: 'Small',
	tyClass: 'fs-10 px-2 py-1'
};

export const Medium = Template.bind({});
Medium.args = {
	primary: true,
	disabled: false,
	size: 'medium',
	label: 'Medium',
	tyClass: 'fs-12 px-3 py-2'
};

export const Large = Template.bind({});
Large.args = {
	primary: true,
	disabled: false,
	size: 'large',
	label: 'Large',
	tyClass: 'fs-16 px-5 py-3'
};

export const Outline = Template.bind({});
Outline.args = {
	primary: true,
	disabled: false,
	layout: 'outline',
	size: 'large',
	label: 'Outline',
	width: '100px',
};

export const Clear = Template.bind({});
Clear.args = {
	primary: true,
	disabled: false,
	layout: 'clear',
	size: 'large',
	label: 'Clear',
	width: '100px',
};
