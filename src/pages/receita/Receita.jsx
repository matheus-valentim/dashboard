import { useTranslation } from "react-i18next";
import Navbar from "../../componentes/navbar/Navbar";
import Sidebar from "../../componentes/sidebar/Sidebar";
import "./receita.css";
import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	BarChart,
	YAxis,
	Legend,
	Bar,
} from "recharts";
import { useContext, useEffect, useState } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import WidgetReceita from "../../componentes/widget-receita/WidgetReceita";
import ChartReceita from "../../componentes/chartReceita/ChartReceita";
import Record from "../../componentes/record/Record";
import { Link } from "react-router-dom";

export default function Receita() {
	const { t } = useTranslation();
	const { openNotify, users } = useContext(darkModeContext);

	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<WidgetReceita />
				<div className="chartAreaReceita">
					<Record />
					<ChartReceita />
				</div>

				<div className="tableReceita">
					<div className="containerTableReceita">
						<h2 className="charth2">Ultimas Transações</h2>
						<div className="overflowReceita">
							<table className="tableReceitaItem">
								<thead>
									<tr>
										<th>Tipo</th>
										<th>Motivo</th>
										<th>Valor</th>
										<th>Departamento</th>
										<th>Data</th>
										<th>Ação</th>
									</tr>
								</thead>
								<tbody>
									{users
										? users.map((user, key) => {
												return (
													<tr className="table-tr">
														<td>
															<p className="passive">Saida</p>
														</td>
														<td className="tableCell">Pagamento</td>
														<td>
															<p>$9999,999</p>
														</td>
														<td className="tableCell">
															<p>Marketing</p>
														</td>
														<td className="tableCell">
															<p>21/08/2022</p>
														</td>
														<td className="tableCellPedidos">
															{" "}
															<Link
																to={"/receita/transacao"}
																className="viewButton"
															>
																{t("View-usuarios")}
															</Link>{" "}
															<button
																className="deleteButton"
																onClick={() => {}}
															>
																{t("Delete-usuarios")}
															</button>
														</td>
													</tr>
												);
										  })
										: null}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
