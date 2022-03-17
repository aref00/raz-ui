import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { RadioButtonProps } from './RadioButton.types';
import RadioButton from './RadioButton';

export default {
	title: 'Tayeh/RadioButton',
	component: RadioButton,
	argTypes: {},
} as Meta<typeof RadioButton>;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Color = Template.bind({});
Color.args = {
	activeColor: 'danger',
	options: [
		{ value: 'test', label: 'test' },
		{ value: 'test-2', label: 'test-2' },
	],
	value: 'test',
};

export const Style = Template.bind({});
Style.args = {
	options: [
		{ value: 'test', label: 'test' },
		{ value: 'test-2', label: 'test-2' },
	],
	tyClass: 'py-3 px-2',
};
