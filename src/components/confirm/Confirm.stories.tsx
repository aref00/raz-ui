import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { ConfirmProps } from './Confirm.types';
import { Confirm } from './Confirm';

export default {
	title: 'Raz/Confirm',
	component: Confirm,
	argTypes: {},
} as Meta<typeof Confirm>;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});
Default.args = {
	visible: true,
	description: 'IS IT OK?',
};
