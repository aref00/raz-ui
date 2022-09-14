import React, { FC } from 'react';
import Chart from 'react-apexcharts';
import { RadialChartProps } from './RadialChart.types';

export const RadialChart: FC<RadialChartProps> = ({ series, labels, total, degree, colors }) => (
	<>
		<div className="raz-chart-wrapper" role={'img'}>
			<Chart
				type="radialBar"
				series={series}
				options={{
					chart: {
						zoom: { enabled: false },
						toolbar: { show: false },
						foreColor: '#7f8190',
					},
					plotOptions: {
						radialBar: {
							startAngle: (degree && -degree) || -130,
							endAngle: degree || 130,
							dataLabels: {
								name: {
									fontSize: '1em',
								},
								value: {
									fontSize: '1em',
									color: '#aaaab3',
								},
								...(total ? { total } : {}),
							},
						},
					},
					colors: colors || ['#797bf2', '#710193', '#311422'],
					labels: labels,
				}}
			/>
		</div>
	</>
);
