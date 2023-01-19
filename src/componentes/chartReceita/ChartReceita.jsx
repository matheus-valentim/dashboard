import "./chartReceita.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

export default function ChartReceita() {
	const { t } = useTranslation();
	const [dado, setDado] = useState([
		{ name: `${t("January")}`, Lucro: 1200, Despesa: 1111 },
		{ name: `${t("February")}`, Lucro: 2100, Despesa: 3451 },
		{ name: `${t("March")}`, Lucro: 800, Despesa: 113 },
		{ name: `${t("April")}`, Lucro: 1600, Despesa: 623 },
		{ name: `${t("May")}`, Lucro: 900, Despesa: 33 },
		{ name: `${t("June")}`, Lucro: 1700, Despesa: 122 },
	]);
	return (
		<div className="chartReceita">
			<h2 className="charth2">
				Ultimo Semestre (Lucro Líquido x Despesa Total)
			</h2>
			<div className="containerChartReceita">
				<ResponsiveContainer width="95%" aspect={3 / 1.2}>
					<BarChart
						width={500}
						height={300}
						data={dado}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
						barSize={40}
						className="bar"
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Lucro" fill="#d883d8" />
						<Bar dataKey="Despesa" fill="#d88383" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
