import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { CurrencyInputProps } from './CurrencyInput.types';
import CurrencyInput from './CurrencyInput';

export default {
	title: 'Tayeh/InputCurrency',
	component: CurrencyInput,
	argTypes: {},
} as Meta<typeof CurrencyInput>;

const Template: Story<CurrencyInputProps> = (args) => <CurrencyInput {...args} />;

export const Label = Template.bind({});
Label.args = {
	label: 'Label',
	placeholder: 'CurrencyInput Placeholder',
};