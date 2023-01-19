import Navbar from "../../componentes/navbar/Navbar";
import Sidebar from "../../componentes/sidebar/Sidebar";
import Widget from "../../componentes/widget/Widget";
import Rendimento from "../../componentes/rendimento/Rendimento";
import Chart from "../../componentes/chart/Chart";
import "./home.css";
import Transacoes from "../../componentes/transacoes/Transacoes";
import { useTranslation } from "react-i18next";
export default function Home() {
	const { t } = useTranslation();
	return (
		<div className="home">
			<Sidebar />
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earning" />
					<Widget type="balance" />
				</div>
				<div className="charts">
					<Rendimento />
					<Chart aspect={2.1 / 1} />
				</div>
				<div className="listContainer">
					<div className="listTitle">{t("Latest Transactions-home")}</div>
					<Transacoes />
				</div>
			</div>
		</div>
	);
}
