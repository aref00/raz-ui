import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { RadialChartProps } from './RadialChart.types';
import { RadialChart } from './RadialChart';

export default {
	title: 'Raz/RadialChart',
	component: RadialChart,
	argTypes: {},
} as Meta<typeof RadialChart>;

const Template: Story<RadialChartProps> = (args) => <RadialChart {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: false,
	labels: ['test', 'another'],
	series: [10, 20],
	total: {
		show: true,
		label: 'TOTAL',
		color: '#aaaab3',
	},
};
