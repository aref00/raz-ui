import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { CheckboxProps } from './Checkbox.types';
import { Checkbox } from './Checkbox';

export default {
	title: 'Raz/Checkbox',
	component: Checkbox,
	argTypes: {},
} as Meta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: false,
	onChange: () => {
		return;
	},
};
