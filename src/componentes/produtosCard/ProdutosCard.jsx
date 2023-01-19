import "./produtosCard.css";
import { todosProdutosJSON } from "../../produtos";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useTranslation } from "react-i18next";
import ModalEditarproduto from "../modalEditarproduto/ModalEditarproduto";

export default function ProdutosCard() {
	const { t } = useTranslation();
	const {
		todosProdutos,
		setTodosProdutos,
		modalEditarProduto,
		setModalEditarProduto,
	} = useContext(darkModeContext);
	const [ativo, setAtivo] = useState([0, false]);
	return (
		<div className="produtoCard">
			{todosProdutos
				? todosProdutos.map((produto, key) => {
						return (
							<div className="produto">
								<div className="produto-conteudo">
									<div className="produto-img">
										<img
											src={
												produto.img1
													? produto.img1
													: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
											}
											alt=""
										/>
									</div>
									<div className="produto-botao">
										<Link
											type="button"
											className="produto-botao-mais"
											to={"/produtos/" + key}
										>
											{t("See Details-ProdutosCard")}
										</Link>
									</div>
								</div>
								<div className="produto-info">
									<div className="produto-info-top">
										<h2 className="produto-title">{produto.tag}</h2>
										<div className="rating">
											<span>
												<svg
													width="20"
													height="20"
													viewBox="0 0 64 64"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M62 25.2H39.1L32 3L24.9 25.2H2L20.5 38.9L13.5 61L32 47.3L50.5 61L43.4 38.8L62 25.2Z"
														fill="#FFCE31"
													/>
												</svg>
											</span>
											<span>
												<svg
													width="20"
													height="20"
													viewBox="0 0 64 64"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M62 25.2H39.1L32 3L24.9 25.2H2L20.5 38.9L13.5 61L32 47.3L50.5 61L43.4 38.8L62 25.2Z"
														fill="#FFCE31"
													/>
												</svg>
											</span>
											<span>
												<svg
													width="20"
													height="20"
													viewBox="0 0 64 64"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M62 25.2H39.1L32 3L24.9 25.2H2L20.5 38.9L13.5 61L32 47.3L50.5 61L43.4 38.8L62 25.2Z"
														fill="#FFCE31"
													/>
												</svg>
											</span>
											<span>
												<svg
													width="20"
													height="20"
													viewBox="0 0 64 64"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M62 25.2H39.1L32 3L24.9 25.2H2L20.5 38.9L13.5 61L32 47.3L50.5 61L43.4 38.8L62 25.2Z"
														fill="#FFCE31"
													/>
												</svg>
											</span>
											<span>
												<svg
													width="20"
													height="20"
													viewBox="0 0 64 64"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M62 25.2H39.1L32 3L24.9 25.2H2L20.5 38.9L13.5 61L32 47.3L50.5 61L43.4 38.8L62 25.2Z"
														fill="#FFCE31"
													/>
												</svg>
											</span>
										</div>
									</div>
									<a href="#" className="produto-nome">
										{produto.nome}
									</a>
									{produto.valorAntigo ? (
										<p className="produto-preco produto-preco-velho">
											$ {produto.valorAntigo}
										</p>
									) : null}
									<p className="produto-preco">$ {produto.valorAtual}</p>
								</div>
								<div className="produto-desconto">
									{produto.desconto ? (
										<h2 className="produto-title">{produto.desconto}% OFf</h2>
									) : null}
								</div>
								<div className="produto-ponto">
									<button
										className="botao-ativar"
										onClick={() => {
											if (ativo[1]) {
												setAtivo([key, false]);
											} else {
												setAtivo([key, true]);
											}
										}}
									>
										<svg
											className="sidebar-svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" />
										</svg>
									</button>
									{ativo[1] && ativo[0] == key ? (
										<div className="dropdown-item">
											<button
												className="dropdown-link"
												onClick={(e) => {
													setModalEditarProduto([key, true]);
													setAtivo([0, false]);
												}}
											>
												<p>Editar</p>
											</button>
											<button
												className="dropdown-link"
												onClick={(e) => {
													setTodosProdutos(
														todosProdutos.filter(
															(item) => item.id !== produto.id
														)
													);
													setAtivo([0, false]);
												}}
											>
												<div>
													<p>Apagar</p>
												</div>
											</button>
										</div>
									) : null}
								</div>
							</div>
						);
				  })
				: null}
			{modalEditarProduto[1] && <ModalEditarproduto />}
		</div>
	);
}
