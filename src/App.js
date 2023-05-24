import "./App.css";
import "./dark.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaDeUsuarios from "./pages/llistaDeUsuarios/listaDeUsuarios";
import NovoUser from "./pages/novoUser/NovoUser";
import User from "./pages/user/User";
import { darkModeContext } from "./contexts/darkModeProvider";
import { useState } from "react";
import moment from "moment";
import Notificacoes from "./pages/notificacoes/notificacoes";
import Analytics from "./pages/analytics/Analytics";
import { userRows } from "./data";
import Chat from "./componentes/chat/Chat";
import Produtos from "./pages/produtos/Produtos";
import Produto from "./pages/produto/Produto";
import { todosProdutosJSON } from "./produtos";
import Pedidos from "./pages/pedidos/Pedidos";
import { todosPedidosJSON } from "./pedidosJSON";
import Calendario from "./pages/calendario/Calendario";
import ProdutoAdicionar from "./componentes/produtosAdicionar/ProdutosAdicionar";
import Receita from "./pages/receita/Receita";
import Desenvolvimento from "./pages/desenvolvimento/Pedido";

function App() {
	const [darkModeOn, setDarkModeOn] = useState(false);
	const [openNotify, setOpenNotify] = useState(false);
	const [openPerfil, setOpenPerfil] = useState(false);
	const [Lingua, setLingua] = useState("en");
	const [users, setUsers] = useState(userRows);
	const [todosProdutos, setTodosProdutos] = useState(todosProdutosJSON);
	const [copiaPedidos, setCopiaPedidos] = useState(todosPedidosJSON);
	const [todosPedidos, setTodosPedidos] = useState(todosPedidosJSON);
	const [openModalcalendario, setOpenModalcalendario] = useState([0, false]);
	const [modalEditarProduto, setModalEditarProduto] = useState([0, false]);
	const [eventosCalendario, setEventosCalendario] = useState([
		{
			id: 0,
			title: "All Day Event very long title",
			allDay: true,
			start: new Date(2022, 3, 0),
			end: new Date(2015, 3, 1),
		},
		{
			id: 1,
			title: "Long Event",
			start: new Date(2022, 3, 7),
			end: new Date(2022, 3, 10),
		},

		{
			id: 2,
			title: "DTS STARTS",
			start: new Date(2022, 2, 13, 0, 0, 0),
			end: new Date(2022, 2, 20, 0, 0, 0),
		},

		{
			id: 3,
			title: "DTS ENDS",
			start: new Date(2022, 10, 6, 0, 0, 0),
			end: new Date(2022, 10, 13, 0, 0, 0),
		},

		{
			id: 4,
			title: "Some Event",
			start: new Date(2022, 12, 9, 0, 0, 0),
			end: new Date(2022, 12, 7, 0, 0, 0),
		},
		{
			id: 5,
			title: "Conference",
			start: new Date(2022, 11, 1),
			end: new Date(2022, 11, 3),
			desc: "Big conference for important people",
		},
		{
			id: 6,
			start: moment().toDate(),
			end: moment().add(1, "days").toDate(),
			title: "Some title",
		},
	]);
	return (
		<div className={darkModeOn ? "App dark" : "App"}>
			<darkModeContext.Provider
				value={{
					darkModeOn,
					setDarkModeOn,
					openNotify,
					setOpenNotify,
					openPerfil,
					setOpenPerfil,
					users,
					setUsers,
					Lingua,
					setLingua,
					todosProdutos,
					setTodosProdutos,
					todosPedidos,
					setTodosPedidos,
					copiaPedidos,
					setCopiaPedidos,
					modalEditarProduto,
					setModalEditarProduto,
					openModalcalendario,
					setOpenModalcalendario,
					eventosCalendario,
					setEventosCalendario,
				}}
			>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/usuarios" element={<ListaDeUsuarios />} />
						<Route
							path="/usuarios/novo"
							element={<NovoUser title="Add New User" />}
						/>
						<Route path="/usuarios/:userId" element={<User />} />
						<Route
							path="/usuarios/:userId/editar"
							element={<Desenvolvimento />}
						/>
						<Route path="/notificacoes" element={<Notificacoes />} />
						<Route path="/analytics" element={<Analytics />} />
						<Route path="/produtos" element={<Produtos />} />
						<Route path="/produtos/novo" element={<ProdutoAdicionar />} />
						<Route path="/pedidos" element={<Pedidos />} />
						<Route path="/pedidos/:pedidoID" element={<Desenvolvimento />} />
						<Route path="/receita/transacao" element={<Desenvolvimento />} />
					<Route path="/balance" element={<Desenvolvimento/>}/>
						<Route path="/produtos/:produtoID" element={<Produto />} />
						<Route path="/calendario" element={<Calendario />} />
						<Route path="/Receita" element={<Receita />} />
					</Routes>
				</Router>
			</darkModeContext.Provider>
			<Chat />
		</div>
	);
}

export default App;
