export interface RadialChartProps {
	series: ApexAxisChartSeries;
	labels: string[];
	degree?: number;
	colors?: string[];
	total?: {
		show?: boolean | undefined;
		label?: string | undefined;
		color?: string | undefined;
		fontFamily?: string | undefined;
		fontWeight?: string | number | undefined;
		fontSize?: string | undefined;
		formatter?(opts: any): string;
	};
}
