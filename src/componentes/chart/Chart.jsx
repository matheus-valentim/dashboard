import "./chart.css";
import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { useContext, useEffect, useState } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useTranslation } from "react-i18next";

export default function Chart({ aspect }) {
	const { t } = useTranslation();
	const [data, setData] = useState(3);
	const [dataAtual, setDataAtual] = useState([
		{ name: `${t("January")}`, Total: 1200 },
		{ name: `${t("February")}`, Total: 2100 },
		{ name: `${t("March")}`, Total: 800 },
		{ name: `${t("April")}`, Total: 1600 },
		{ name: `${t("May")}`, Total: 900 },
		{ name: `${t("June")}`, Total: 1700 },
	]);
	const [title, setTitle] = useState([
		"Last Week (Revenue)-chart",
		"Last six months (Revenue)-chart",
		"Last Year (Revenue)-chart",
	]);
	const dataMensal = [
		{ name: `${t("January")}`, Total: 100 },
		{ name: `${t("February")}`, Total: 1100 },
		{ name: `${t("March")}`, Total: 800 },
		{ name: `${t("April")}`, Total: 1600 },
		{ name: `${t("May")}`, Total: 900 },
		{ name: `${t("June")}`, Total: 1700 },
	];
	const dataSemanal = [
		{ name: `${t("Monday")}`, Total: 800 },
		{ name: `${t("Tuesday")}`, Total: 100 },
		{ name: `${t("Wednesday")}`, Total: 1800 },
		{ name: `${t("Thursday")}`, Total: 1600 },
		{ name: `${t("Friday")}`, Total: 900 },
		{ name: `${t("Saturday")}`, Total: 1700 },
		{ name: `${t("Sunday")}`, Total: 1700 },
	];
	const dataAnual = [
		{ name: `${t("January")}`, Total: 1200 },
		{ name: `${t("February")}`, Total: 2100 },
		{ name: `${t("March")}`, Total: 800 },
		{ name: `${t("April")}`, Total: 1600 },
		{ name: `${t("May")}`, Total: 900 },
		{ name: `${t("June")}`, Total: 1700 },
		{ name: `${t("July")}`, Total: 1700 },
		{ name: `${t("August")}`, Total: 900 },
		{ name: `${t("September")}`, Total: 1700 },
		{ name: `${t("October")}`, Total: 900 },
		{ name: `${t("November")}`, Total: 1700 },
		{ name: `${t("December")}`, Total: 900 },
	];
	const { openNotify } = useContext(darkModeContext);

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
		<div className="chart">
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
			<ResponsiveContainer width="100%" aspect={aspect}>
				<AreaChart
					width={730}
					height={250}
					data={dataAtual}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					className={openNotify ? "importante" : null}
				>
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="gray" />
					<CartesianGrid strokeDasharray="3 3" className="chartGrid" />
					{openNotify ? null : <Tooltip />}

					<Area
						type="monotone"
						dataKey="Total"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#total)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
