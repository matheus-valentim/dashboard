import Navbar from "../../componentes/navbar/Navbar";
import ProdutosCard from "../../componentes/produtosCard/ProdutosCard";
import Sidebar from "../../componentes/sidebar/Sidebar";
import CsvDownloadButton from "react-json-to-csv";
import { Link } from "react-router-dom";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useContext } from "react";
export default function Produtos() {
	const { todosProdutos, setTodosProdutos } = useContext(darkModeContext);
	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="datatableTitle">
					Produtos
					<div className="datatableDiv">
						<CsvDownloadButton
							filename="Produtos.csv"
							className="link-exportar"
							data={todosProdutos}
						>
							exportar para csv
						</CsvDownloadButton>
						<Link to="/produtos/novo" className="link-usuarios">
							Add Product
						</Link>
					</div>
				</div>

				<ProdutosCard />
			</div>
		</div>
	);
}
