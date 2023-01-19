import Navbar from "../../componentes/navbar/Navbar";
import Sidebar from "../../componentes/sidebar/Sidebar";
import TimeLine from "../../componentes/timeLine/TimeLine";
import "./notificacoes.css";

export default function Notificacoes() {
	return (
		<div className="notificacoes">
			<Sidebar />
			<div className="notificacoesContainer">
				<Navbar />
				<h1 style={{ "text-align": "center" }}>Notification List</h1>
				<TimeLine />
			</div>
		</div>
	);
}
