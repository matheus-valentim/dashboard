import Navbar from "../../componentes/navbar/Navbar";
import PedidosLista from "../../componentes/pedidosLista/PedidosLista";
import Sidebar from "../../componentes/sidebar/Sidebar";
import WidgetPedido from "../../componentes/widget-pedidos/Widget-pedido";
import { useContext, useState, useEffect } from "react";
import "./pedidos.css";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useTranslation } from "react-i18next";
export default function Pedidos() {
	const { mesPedidos, copiaPedidos, setCopiaPedidos, todosPedidos } =
		useContext(darkModeContext);
	const { t } = useTranslation();
	const handlePesquisaMes = (data) => {
		if (data != 13) {
			setCopiaPedidos(
				todosPedidos.filter((pedido) => pedido.dataCompra.slice(0, 2) == data)
			);
		} else {
			setCopiaPedidos(todosPedidos);
		}
	};

	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="datatableTitlePedidosP">
					{t("Orders Page-Pedidos")}
					<div className="teste11">
						<div className="searchNavbar">
							<input type="text" placeholder="Search..." />
							<svg
								width="24"
								height="24"
								viewBox="0 0 1024 1024"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412C712 331.8 680.7 256.6 624.1 199.9C567.5 143.2 492.1 112 412 112C331.9 112 256.5 143.3 199.9 199.9C143.2 256.5 112 331.8 112 412C112 492.1 143.3 567.5 199.9 624.1C256.5 680.8 331.8 712 412 712C479 712 542.6 690.2 594.7 650L854.4 909.6C855.162 910.362 856.066 910.966 857.061 911.379C858.056 911.791 859.123 912.003 860.2 912.003C861.277 912.003 862.344 911.791 863.339 911.379C864.334 910.966 865.238 910.362 866 909.6L909.6 866.1C910.362 865.338 910.966 864.434 911.379 863.439C911.791 862.444 912.003 861.377 912.003 860.3C912.003 859.223 911.791 858.156 911.379 857.161C910.966 856.166 910.362 855.262 909.6 854.5V854.5ZM570.4 570.4C528 612.7 471.8 636 412 636C352.2 636 296 612.7 253.6 570.4C211.3 528 188 471.8 188 412C188 352.2 211.3 295.9 253.6 253.6C296 211.3 352.2 188 412 188C471.8 188 528.1 211.2 570.4 253.6C612.7 296 636 352.2 636 412C636 471.8 612.7 528.1 570.4 570.4Z"
									fill="gray"
								/>
							</svg>
						</div>
						<select
							to="/usuarios/novo"
							className="selectPedidos"
							onChange={(e) => {
								console.log(e.target.value);
								handlePesquisaMes(e.target.value);
							}}
						>
							<option value="13">{t("All-Pedidos")}</option>
							<option value="01">{t("January")}</option>
							<option value="02">{t("February")}</option>
							<option value="03">{t("March")}</option>
							<option value="04">{t("April")}</option>
							<option value="05">{t("May")}</option>
							<option value="06">{t("June")}</option>
							<option value="07">{t("July")}</option>
							<option value="08">{t("August")}</option>
							<option value="09">{t("September")}</option>
							<option value="10">{t("October")}</option>
							<option value="11">{t("November")}</option>
							<option value="12">{t("December")}</option>
						</select>
					</div>
				</div>
				<WidgetPedido />
				<PedidosLista />
			</div>
		</div>
	);
}
