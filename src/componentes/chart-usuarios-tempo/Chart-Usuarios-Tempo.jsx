import React, { PureComponent } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";
import "./chart-usuarios-tempo.css";
const data = [
	{ name: "January", Total: 1200 },
	{ name: "February", Total: 2100 },
	{ name: "March", Total: 800 },
	{ name: "April", Total: 1600 },
	{ name: "May", Total: 900 },
	{ name: "June", Total: 1700 },
];
export default function ChartUsuariosTempo({ aspect, title }) {
	const { t } = useTranslation();

	const data = [
		{
			name: "Janeiro",
			Ativos: 4000,
			Inativos: 2400,
			amt: 2400,
		},
		{
			name: "Fevereiro",
			Ativos: 3000,
			Inativos: 1398,
			amt: 2210,
		},
		{
			name: "Março",
			Ativos: 2000,
			Inativos: 9800,
			amt: 2290,
		},
		{
			name: "Abril",
			Ativos: 2780,
			Inativos: 3908,
			amt: 2000,
		},
		{
			name: "Maio",
			Ativos: 1890,
			Inativos: 4800,
			amt: 2181,
		},
		{
			name: "Junho",
			Ativos: 2390,
			Inativos: 3800,
			amt: 2500,
		},
		{
			name: "Julho",
			Ativos: 3490,
			Inativos: 4300,
			amt: 2100,
		},
	];
	return (
		<div className="chartUsuariosTempo">
			<div className="titleChartUsuariosTempo">
				{title}

				<LineChart
					width={800}
					height={400}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />

					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="Ativos"
						stroke="#8884d8"
						activeDot={{ r: 8 }}
					/>
					<Line type="monotone" dataKey="Inativos" stroke="#82ca9d" />
				</LineChart>
			</div>
		</div>
	);
}
