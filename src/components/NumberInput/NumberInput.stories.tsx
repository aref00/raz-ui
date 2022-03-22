import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { NumberInputProps } from './NumberInput.types';
import NumberInput from './NumberInput';

export default {
	title: 'Tayeh/NumberInput',
	component: NumberInput,
	argTypes: {},
} as Meta<typeof NumberInput>;

const Template: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

export const Values = Template.bind({});
Values.args = {
	label: 'Label',
	value: 5,
	min: 1,
	max: 11,
	step: 2,
};

export const Undefined = Template.bind({});
Undefined.args = {
	label: 'Label',
	min: 1,
	max: 11,
	step: 2,
};

export const Disable = Template.bind({});
Disable.args = {
	disabled: true,
	label: 'Only Readable',
	placeholder: 'Unchangable'
};

export const Error = Template.bind({});
Error.args = {
	error: 'Something is wrong',
	label: 'Error check',
	placeholder: 'typing...',
};
