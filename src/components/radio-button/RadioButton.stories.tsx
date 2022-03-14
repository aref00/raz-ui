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
	color: 'primary',
	radius: 10,
	tyClass: 'p-2',
	children: 'RadioButton Content',
};

export const Padding = Template.bind({});
Padding.args = {
	tyClass: 'p-5',
	children: 'RadioButton Content',
};