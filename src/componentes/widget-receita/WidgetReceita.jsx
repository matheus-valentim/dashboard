import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import "./widgetReceita.css";
export default function WidgetReceita() {
	const { t } = useTranslation();
	const [dataAtual, setDataAtual] = useState([
		{ name: `${t("January")}`, Total: 1200 },
		{ name: `${t("February")}`, Total: 2100 },
		{ name: `${t("March")}`, Total: 800 },
		{ name: `${t("April")}`, Total: 1600 },
		{ name: `${t("May")}`, Total: 900 },
		{ name: `${t("June")}`, Total: 1700 },
	]);
	return (
		<div className="WidgetPedido">
			<div className="WidgetPedidoCard">
				<div className="WidgetReceitaLeft">
					<p className="WidgetReceitaTitle WidgetReceitaTitle1">+13%</p>
					<p className="WidgetReceitaNum">$999,999</p>
					<p className="link-widget">{t("Gross Profit-WidgetReceita")}</p>
				</div>
				<ResponsiveContainer width="50%" aspect={1.7 / 1}>
					<AreaChart
						width={100}
						height={200}
						data={dataAtual}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
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
			<div className="WidgetPedidoCard">
				<div className="WidgetReceitaLeft">
					<p className="WidgetReceitaTitle WidgetReceitaTitle2">+13%</p>
					<p className="WidgetReceitaNum">$999,999</p>
					<p className="link-widget">{t("Net Profit-WidgetReceita")}</p>
				</div>
				<ResponsiveContainer width="50%" aspect={1.7 / 1}>
					<AreaChart
						width={100}
						height={200}
						data={dataAtual}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<Area
							type="monotone"
							dataKey="Total"
							stroke="#d883d8"
							fillOpacity={1}
							fill="url(#total)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
			<div className="WidgetPedidoCard">
				<div className="WidgetReceitaLeft">
					<p className="WidgetReceitaTitle WidgetReceitaTitle3">+13%</p>
					<p className="WidgetReceitaNum">$999,999</p>
					<p className="link-widget">{t("Total Revenue-WidgetReceita")}</p>
				</div>

				<ResponsiveContainer width="50%" aspect={1.7 / 1}>
					<AreaChart
						width={100}
						height={200}
						data={dataAtual}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<Area
							type="monotone"
							dataKey="Total"
							stroke="#83d89f"
							fillOpacity={1}
							fill="url(#total)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
			<div className="WidgetPedidoCard">
				<div className="WidgetReceitaLeft">
					<p className="WidgetReceitaTitle WidgetReceitaTitle4">+13%</p>
					<p className="WidgetReceitaNum">$999,999</p>
					<p className="link-widget">{t("Total Expense-WidgetReceita")}</p>
				</div>
				<ResponsiveContainer width="50%" aspect={1.7 / 1}>
					<AreaChart
						width={100}
						height={200}
						data={dataAtual}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<Area
							type="monotone"
							dataKey="Total"
							stroke="#d88383"
							fillOpacity={1}
							fill="url(#total)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
