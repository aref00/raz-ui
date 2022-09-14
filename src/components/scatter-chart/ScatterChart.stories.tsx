import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { ScatterChartProps } from './ScatterChart.types';
import { ScatterChart } from './ScatterChart';

export default {
	title: 'Raz/ScatterChart',
	component: ScatterChart,
	argTypes: {},
} as Meta<typeof ScatterChart>;

const Template: Story<ScatterChartProps> = (args) => <ScatterChart {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: false,
	categories: ['12 Oct', '13 Oct', '14 Nov'],
	series: [{ data: [10, 2, 12] }, { data: [15, 4, 2] }, { data: [5, 10, 25] }],
};
