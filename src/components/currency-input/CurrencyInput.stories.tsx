import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { CurrencyInputProps } from './CurrencyInput.types';
import { CurrencyInput } from './CurrencyInput';

export default {
	title: 'Tayeh/CurrencyInput',
	component: CurrencyInput,
	argTypes: {},
} as Meta<typeof CurrencyInput>;

const Template: Story<CurrencyInputProps> = (args) => (
	<CurrencyInput {...args} />
);

export const Label = Template.bind({});
Label.args = {
	label: 'Label',
	placeholder: 'Placeholder',
};

export const Suffix = Template.bind({});
Suffix.args = {
	suffix: 'suffix',
	placeholder: 'Placeholder',
};

export const Bound = Template.bind({});
Bound.args = {
	min: 10,
	max: 20,
	placeholder: 'Placeholder',
};
