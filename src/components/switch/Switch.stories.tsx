import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { SwitchProps } from './Switch.types';
import { Switch } from './Switch';

export default {
	title: 'Raz/Switch',
	component: Switch,
	argTypes: {},
} as Meta<typeof Switch>;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: true,
	label: 'Label',
	onChange: () => {
		return;
	},
};
