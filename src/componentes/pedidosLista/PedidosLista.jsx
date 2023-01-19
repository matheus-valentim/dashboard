import "./pedidosLista.css";
import { userRows } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useEffect } from "react";
import CsvDownloadButton from "react-json-to-csv";

export default function PedidosLista() {
	const { t } = useTranslation();
	const { todosPedidos, setTodosPedidos, copiaPedidos, setCopiaPedidos } =
		useContext(darkModeContext);

	const navigate = useNavigate();
	const handleDelete = (id) => {
		console.log("foi");
		setCopiaPedidos(copiaPedidos.filter((item) => item.id !== id));
	};
	const handleView = (id) => {
		navigate(`/pedidos/${id}`);
	};
	return (
		<div className="pedidosContainer ">
			<div className="datatableTitlePedidos">
				{t("Order List-pedidosLista")}
				<div className="datatableDiv">
					<CsvDownloadButton
						filename="Pedidos.csv"
						className="link-exportar"
						data={todosPedidos}
					>
						{t("Export to CSV-pedidosLista")}
					</CsvDownloadButton>
				</div>
			</div>
			<div className="pedidosDatatable">
				{copiaPedidos[0] ? (
					<table className="usuariosTable">
						<thead>
							<tr>
								<th>{t("Order Number-pedidosLista")}</th>
								<th>Username</th>
								<th>{t("Cart-pedidosLista")}</th>
								<th>{t("Total Amount-pedidosLista")}</th>
								<th>{t("Payment Method-pedidosLista")}</th>
								<th>{t("Paid Amount-pedidosLista")}</th>
								<th>{t("Status-pedidosLista")}</th>
								<th>{t("Options-pedidosLista")}</th>
							</tr>
						</thead>
						<tbody>
							{copiaPedidos.map((pedido, key) => {
								return (
									<tr className="table-tr">
										<td className="tableCellPedidos">N° {pedido.pedidoNum}</td>
										<td className="cellTeste">{pedido.username}</td>
										<td className="cellTeste">{pedido.nomeProduto}</td>
										<td className="tableCellPedidos">
											<p>$ {pedido.valorTotal}</p>
										</td>
										<td className="tableCellPedidos">{pedido.pagamento}</td>
										<td className="tableCellPedidos">$ {pedido.valorPago}</td>
										<td className="pendingPedido">{pedido.situação}</td>

										<td className="tableCellPedidos">
											{" "}
											<button
												className="viewButton"
												onClick={() => {
													handleView(pedido.id);
												}}
											>
												{t("View-usuarios")}
											</button>{" "}
											<button
												className="deleteButton"
												onClick={() => {
													handleDelete(pedido.id);
												}}
											>
												{t("Delete-usuarios")}
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				) : (
					<p className="pedidosListaTitle">
						{t("Any order found-pedidosLista")}
					</p>
				)}
			</div>
		</div>
	);
}
