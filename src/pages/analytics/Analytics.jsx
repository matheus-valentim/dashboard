import ChartUsuariosTempo from "../../componentes/chart-usuarios-tempo/Chart-Usuarios-Tempo";
import Devices from "../../componentes/devices/Devices";
import Navbar from "../../componentes/navbar/Navbar";
import Sidebar from "../../componentes/sidebar/Sidebar";
import UsuariosAtual from "../../componentes/usuariosAtual/UsuariosAtual";
import "./analytics.css";

export default function Analytics() {
	return (
		<div className="analitycs">
			<Sidebar />
			<div className="containerAnalytics">
				<Navbar />
				<h2 className="analiticsH2">Usuarios analyics</h2>
				<div className="analitycsWrapper">
					<div className="teste01">
						<UsuariosAtual className="analytics01" />
						<Devices className="analytics02" />
					</div>

					<div className="chartTempo">
						<ChartUsuariosTempo
							title="Last 6 Months (Revenue)"
							aspect={2 / 1}
						/>
					</div>
				</div>
				<h1 style={{ "text-align": "center" }}>-- Em desenvolvimento --</h1>
			</div>
		</div>
	);
}
