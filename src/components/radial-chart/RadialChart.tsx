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
					},
					plotOptions: {
						radialBar: {
							// track: {
							// 	background: '#232326',
							// 	strokeWidth: '1%',
							// 	margin: 1,
							// },
							startAngle: (degree && -degree) || -130,
							endAngle: degree || 130,
							inverseOrder: true,
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
					stroke: {
						lineCap: 'round',
					},
				}}
			/>
		</div>
	</>
);
