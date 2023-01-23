import "./chartReceita.css";
import { useEffect, useState } from "react";
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
	const [data, setData] = useState(3);
	const [dataAtual, setDataAtual] = useState([
		{ name: `${t("January")}`, Lucro: 1200, Despesa: 1111 },
		{ name: `${t("February")}`, Lucro: 2100, Despesa: 3451 },
		{ name: `${t("March")}`, Lucro: 800, Despesa: 113 },
		{ name: `${t("April")}`, Lucro: 1600, Despesa: 623 },
		{ name: `${t("May")}`, Lucro: 900, Despesa: 33 },
		{ name: `${t("June")}`, Lucro: 1700, Despesa: 122 },
	]);
	const [title, setTitle] = useState([
		"Last Week (Net Income x Total Expenses)-ChartReceita",
		"Last Semester (Net Income x Total Expenses)-ChartReceita",
		"Last Year (Net Income x Total Expenses)-ChartReceita",
	]);

	const dataSemanal = [
		{ name: `${t("Monday")}`, Lucro: 1200, Despesa: 1111 },
		{ name: `${t("Tuesday")}`, Lucro: 1200, Despesa: 1111 },
		{ name: `${t("Wednesday")}`, Lucro: 1200, Despesa: 1111 },
		{ name: `${t("Thursday")}`, Lucro: 1200, Despesa: 1111 },
		{ name: `${t("Friday")}`, Lucro: 900, Despesa: 33 },
		{ name: `${t("Saturday")}`, Lucro: 900, Despesa: 33 },
		{ name: `${t("Sunday")}`, Lucro: 900, Despesa: 33 },
	];
	const dataAnual = [
		{ name: `${t("January")}`, Lucro: 200, Despesa: 900 },
		{ name: `${t("February")}`, Lucro: 600, Despesa: 200 },
		{ name: `${t("March")}`, Lucro: 800, Despesa: 400 },
		{ name: `${t("April")}`, Lucro: 800, Despesa: 113 },
		{ name: `${t("May")}`, Lucro: 1000, Despesa: 600 },
		{ name: `${t("June")}`, Lucro: 500, Despesa: 122 },
		{ name: `${t("July")}`, Lucro: 900, Despesa: 900 },
		{ name: `${t("August")}`, Lucro: 500, Despesa: 1111 },
		{ name: `${t("September")}`, Lucro: 1000, Despesa: 400 },
		{ name: `${t("October")}`, Lucro: 900, Despesa: 33 },
		{ name: `${t("November")}`, Lucro: 300, Despesa: 200 },
		{ name: `${t("December")}`, Lucro: 300, Despesa: 100 },
	];
	const dataMensal = [
		{ name: `${t("January")}`, Lucro: 1200, Despesa: 1111 },
		{ name: `${t("February")}`, Lucro: 2100, Despesa: 3451 },
		{ name: `${t("March")}`, Lucro: 800, Despesa: 113 },
		{ name: `${t("April")}`, Lucro: 1600, Despesa: 623 },
		{ name: `${t("May")}`, Lucro: 900, Despesa: 33 },
		{ name: `${t("June")}`, Lucro: 1700, Despesa: 122 },
	];

	useEffect(() => {
		if (data == 1) {
			setDataAtual(dataSemanal);
		} else if (data == 2) {
			setDataAtual(dataMensal);
		} else if (data == 3) {
			setDataAtual(dataAnual);
		}
	}, [data]);
	return (
		<div className="chartReceita">
			<div className="title-chart">
				<h2 className="charth2">{t(title[data - 1])}</h2>
				<div className="ChartDiv">
					<button
						onClick={(e) => {
							setData(1);
						}}
						className={
							data == 1 ? "ChartButton ChartButtonAtivo" : "ChartButton"
						}
					>
						{t("weekly-chart")}
					</button>
					<button
						onClick={(e) => {
							setData(2);
						}}
						className={
							data == 2 ? "ChartButton ChartButtonAtivo" : "ChartButton"
						}
					>
						{t("semester-chart")}
					</button>
					<button
						onClick={(e) => {
							setData(3);
						}}
						className={
							data == 3 ? "ChartButton ChartButtonAtivo" : "ChartButton"
						}
					>
						{t("annually-chart")}
					</button>
				</div>
			</div>
			<div className="containerChartReceita">
				<ResponsiveContainer width="95%" aspect={3 / 1.2}>
					<BarChart
						width={500}
						height={300}
						data={dataAtual}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
						barSize={40}
						className="bar"
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey={t("Profit-ChartReceita")} fill="#d883d8" />
						<Bar dataKey={t("Expenses-ChartReceita")} fill="#d88383" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
