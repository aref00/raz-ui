import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import Input from './Input';
import { InputProps } from './Input.types';

export default {
	title: 'Tayeh/Input',
	component: Input,
	argTypes: {},
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	disabled: false,
	children: <span>test</span>
};
