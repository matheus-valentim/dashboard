import "./listaDeUsuarios.css";
import Sidebar from "../../componentes/sidebar/Sidebar";
import Navbar from "../../componentes/navbar/Navbar";
import Usuarios from "../../componentes/usuarios/Usuarios";

export default function ListaDeUsuarios() {
	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				<Usuarios />
			</div>
		</div>
	);
}
