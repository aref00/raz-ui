import React, { FC } from 'react';
import Chart from 'react-apexcharts';
import { AreaChartProps } from './AreaChart.types';

export const AreaChart: FC<AreaChartProps> = ({ series, categories }) => (
	<>
		<div className="raz-chart-wrapper" role={'img'}>
			<Chart
				type="area"
				series={series}
				options={{
					grid: { show: false },
					dataLabels: { enabled: false },
					legend: { position: 'top', horizontalAlign: 'left', inverseOrder: true },
					xaxis: {
						crosshairs: { show: false },
						axisBorder: { show: false },
						axisTicks: { show: false },
						categories: categories,
					},
					chart: {
						zoom: { enabled: false },
						toolbar: { show: false },
						foreColor: '#7f8190',
					},
					stroke: { curve: 'smooth', show: false },
					fill: { type: 'color', colors: ['#fcb290', '#8b82e3'], gradient: {} },
				}}
			/>
		</div>
	</>
);
