import { useNavigate } from "react-router-dom";
import Navbar from "../../componentes/navbar/Navbar";
import Sidebar from "../../componentes/sidebar/Sidebar";
import "./pedido.css";
export default function Desenvolvimento() {
	const navigate = useNavigate();
	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="Pedido">
					<h1>-- Em desenvolvimento --</h1>
					<button
						className="voltar-pedido"
						onClick={(e) => {
							navigate(-1);
						}}
					>
						Voltar
					</button>
				</div>
			</div>
		</div>
	);
}
