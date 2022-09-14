import React, { FC } from 'react';
import Chart from 'react-apexcharts';
import { BarChartProps } from './BarChart.types';

export const BarChart: FC<BarChartProps> = ({ series, labels, colors, legend }) => (
	<>
		<div className="raz-chart-wrapper" role={'img'}>
			<Chart
				type="bar"
				series={[{ data: series }]}
				options={{
					chart: {
						zoom: { enabled: false },
						toolbar: { show: false },
					},
					plotOptions: {
						bar: {
							horizontal: false,
							distributed: true,
						},
					},
					grid: {
						show: false,
					},
					legend: { show: legend },
					colors: colors || ['#797bf2', '#710193', '#311422'],
					xaxis: { categories: labels },
					yaxis: {
						show: false,
					},
				}}
			/>
		</div>
	</>
);
