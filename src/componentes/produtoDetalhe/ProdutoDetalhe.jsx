import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./produtoDetalhe.css";
export default function ProdutoDetalhe() {
	const { todosProdutos, setTodosProdutos } = useContext(darkModeContext);
	const [principalImage, setPrincipalImage] = useState("");
	const [position, setPosition] = useState(0);
	const [loading, setLoading] = useState("");
	const { t } = useTranslation();

	useEffect(() => {
		setLoading(true);
		setPosition(window.location.pathname.slice(10));
		setLoading(false);
	}, []);
	useEffect(() => {
		setLoading(true);
		setPrincipalImage(todosProdutos[position].img1);
		setLoading(false);
	}, [position]);
	return (
		<div className="card-wrapper">
			<div className="Header-card">
				<p className="breadcrumb-card">produtos/{todosProdutos[position].id}</p>
				<Link to="/produtos" className="voltar-card">
					Voltar
				</Link>
			</div>
			{!loading ? (
				<div className="card">
					<div className="product-imgs">
						<div className="img-display">
							<div className="img-showcase">
								<img
									className="principal-image"
									src={principalImage}
									alt="shoe image"
								/>
							</div>
						</div>
						<div className="img-select">
							<div className="img-item">
								<button
									data-id="1"
									onClick={(e) => {
										setPrincipalImage(todosProdutos[position].img1);
									}}
								>
									<img
										className="img"
										src={todosProdutos[position].img1}
										alt="shoe image"
									/>
								</button>
							</div>
							<div className="img-item">
								<button
									data-id="2"
									onClick={(e) => {
										setPrincipalImage(todosProdutos[position].img2);
									}}
								>
									<img
										className="img"
										src={todosProdutos[position].img2}
										alt="shoe image"
									/>
								</button>
							</div>
							<div className="img-item">
								<button
									data-id="3"
									onClick={(e) => {
										setPrincipalImage(todosProdutos[position].img3);
									}}
								>
									<img
										className="img"
										src={todosProdutos[position].img3}
										alt="shoe image"
									/>
								</button>
							</div>
							<div className="img-item">
								<button
									data-id="4"
									onClick={(e) => {
										setPrincipalImage(todosProdutos[position].img4);
									}}
								>
									<img
										className="img"
										src={todosProdutos[position].img4}
										alt="shoe image"
									/>
								</button>
							</div>
						</div>
					</div>

					<div className="product-content">
						<h2 className="product-title">{todosProdutos[position].nome}</h2>
						<a href="#" className="product-link">
							visit nike store
						</a>
						<div className="product-rating">
							<i className="fas fa-star">
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
							</i>
							<i className="fas fa-star">
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
							</i>
							<i className="fas fa-star">
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
							</i>
							<i className="fas fa-star">
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
							</i>
							<i className="fas fa-star-half-alt">
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
							</i>
							<span> 5(21)</span>
						</div>

						<div className="product-price">
							{todosProdutos[position].valorAtual ? (
								<p className="new-price">
									{t("New Price:-ProdutosDetalhe")}
									<span>
										${todosProdutos[position].valorAtual}
										{todosProdutos[position].desconto
											? `(${todosProdutos[position].desconto}% OFF)`
											: null}
									</span>
								</p>
							) : null}

							{todosProdutos[position].valorAntigo ? (
								<p className="last-price">
									{t("Old Price:-ProdutosDetalhe")}{" "}
									<span>${todosProdutos[position].valorAntigo}</span>
								</p>
							) : null}
						</div>

						<div className="product-detail">
							<h2>{t("Details-ProdutosDetalhe")} </h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
								eveniet veniam tempora fuga tenetur placeat sapiente architecto
								illum soluta consequuntur, aspernatur quidem at sequi ipsa!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequatur, perferendis eius. Dignissimos, labore suscipit.
								Unde.
							</p>
							<ul>
								<li className="listaCor">
									{t("Color-ProdutosDetalhe")}
									{todosProdutos[position].cores.map((cor, key) => {
										return (
											<p>
												{cor}
												{todosProdutos[position].cores.length - 1 <= key
													? "."
													: ","}
											</p>
										);
									})}
								</li>
								<li>
									{t("Avaliable-ProdutosDetalhe")}{" "}
									<span>{todosProdutos[position].estoqueNum}</span>
								</li>
								<li>
									tag: <span>{todosProdutos[position].tag}</span>
								</li>

								<li>
									{t("Shipping Fee-ProdutosDetalhe")}
									<span> ${todosProdutos[position].valorFrete}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}
