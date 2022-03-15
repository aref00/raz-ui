import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { SelectProps } from './Select.types';
import Select from './Select';

export default {
	title: 'Tayeh/Select',
	component: Select,
	argTypes: {},
} as Meta<typeof Select>;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Options = Template.bind({});
Options.args = {
	options: [{label: 'test', value: 'test'}, {label: 'test-2', value: 'test-2'}],
	children: 'Select Content',
}

export const Label = Template.bind({});
Label.args = {
	label: 'Select Label',
	options: [{label: 'test', value: 'test'}, {label: 'test-2', value: 'test-2'}],
	children: 'Select Content',
}