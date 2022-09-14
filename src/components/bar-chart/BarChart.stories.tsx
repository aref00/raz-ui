import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { BarChartProps } from './BarChart.types';
import { BarChart } from './BarChart';

export default {
	title: 'Raz/BarChart',
	component: BarChart,
	argTypes: {},
} as Meta<typeof BarChart>;

const Template: Story<BarChartProps> = (args) => <BarChart {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: false,
	labels: ['test', 'another'],
	series: [10, 5, 1],
	total: {
		show: true,
		label: 'TOTAL',
		color: '#aaaab3',
	},
};
