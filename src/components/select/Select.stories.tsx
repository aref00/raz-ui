import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { SelectProps } from './Select.types';
import { Select } from './Select';

export default {
	title: 'Tayeh/Select',
	component: Select,
	argTypes: {},
} as Meta<typeof Select>;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Options = Template.bind({});
Options.args = {
	options: [
		{ label: 'test', value: 'test' },
		{ label: 'test-2', value: 'test-2' },
		{ label: 'test-3', value: 'test-3' },
	],
	placeholder: 'Select Content',
};

export const Label = Template.bind({});
Label.args = {
	label: 'Select Label',
	options: [
		{ label: 'test', value: 'test' },
		{ label: 'test-2', value: 'test-2' },
	],
	placeholder: 'Select Content',
};

export const Clear = Template.bind({});
Clear.args = {
	clear: true,
	options: [
		{ label: 'test', value: 'test' },
		{ label: 'test-2', value: 'test-2' },
	],
	placeholder: 'Select Content',
};

export const Size = Template.bind({});
Size.args = {
	width: '100px',
	height: '64px',
	options: [
		{ label: 'test', value: 'test' },
		{ label: 'test-2', value: 'test-2' },
	],
	placeholder: 'Select Content',
};

export const Color = Template.bind({});
Color.args = {
	color: 'success',
	options: [
		{ label: 'test', value: 'test' },
		{ label: 'test-2', value: 'test-2' },
	],
	placeholder: 'Select Content',
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
	autoFocus: true,
	options: [
		{ label: 'test', value: 'test' },
		{ label: 'test-2', value: 'test-2' },
	],
	placeholder: 'Select Content',
};
