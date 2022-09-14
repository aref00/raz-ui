import React, { FC } from 'react';
import Chart from 'react-apexcharts';
import { ScatterChartProps } from './ScatterChart.types';

export const ScatterChart: FC<ScatterChartProps> = ({ series, categories, colors }) => (
	<>
		<div className="raz-chart-wrapper" role={'img'}>
			<Chart
				type="scatter"
				series={series}
				options={{
					grid: { show: false },
					dataLabels: { enabled: false },
					legend: { show: false },
					xaxis: {
						crosshairs: { show: false },
						axisBorder: { show: false },
						axisTicks: { show: false },
						categories: categories,
					},
					yaxis: {
						show: false,
					},
					chart: {
						zoom: { enabled: false },
						toolbar: { show: false },
						foreColor: '#7f8190',
					},
					stroke: { curve: 'smooth', show: false },
					fill: { type: 'color' },
					colors: colors || ['#797bf2', '#710193', '#311422'],
				}}
			/>
		</div>
	</>
);
