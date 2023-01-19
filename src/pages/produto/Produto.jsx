import { NavLink } from "react-router-dom";
import Navbar from "../../componentes/navbar/Navbar";
import ProdutoDetalhe from "../../componentes/produtoDetalhe/ProdutoDetalhe";
import Sidebar from "../../componentes/sidebar/Sidebar";
import "./produto.css";
export default function Produto() {
    
	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
                <div className="produto-detalhe">
                    <ProdutoDetalhe />
                </div>
			</div>
		</div>
	);
}
