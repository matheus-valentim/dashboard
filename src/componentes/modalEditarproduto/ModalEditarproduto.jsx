import { useState, useContext, useEffect } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import "./modalEditarproduto.css";
export default function ModalEditarproduto() {
	const {
		modalEditarProduto,
		setModalEditarProduto,
		todosProdutos,
		setTodosProdutos,
	} = useContext(darkModeContext);
	const produto = todosProdutos[modalEditarProduto[0]];
	const [inputList, setInputList] = useState(produto.cores);
	const [nome, setNome] = useState(produto.nome);
	const [tag, setTag] = useState(produto.tag);
	const [estoque, setEstoque] = useState(produto.estoqueNum);
	const [frete, setFrete] = useState(produto.valorFrete);
	const [desconto, setDesconto] = useState(produto.desconto);
	const [valor, setValor] = useState(produto.valorAtual);
	const [valorAntigo, setValorAntigo] = useState(produto.valorAntigo);
	const [cores, setCores] = useState(produto.cores);
	const [file, setFile] = useState(produto.img1);
	const [file2, setFile2] = useState(produto.img2);
	const [file3, setFile3] = useState(produto.img3);
	const [file4, setFile4] = useState(produto.img4);

	const onAddBtnClick = (_event) => {
		setInputList([...inputList, "Adicionar cor"]);
	};
	const handleEdit = () => {
		const novo = todosProdutos;

		if (!desconto || desconto == 0) {
			const novoProduto = {
				id: produto.id,
				nome: nome,
				valorAtual: valor,
				cores: cores,
				estoqueNum: estoque,
				valorFrete: frete,
				estrelas: "1",
				img1: file,
				img2: file2,
				img3: file3,
				img4: file4,
				tag: tag,
			};

			novo[modalEditarProduto[0]] = novoProduto;
			setTodosProdutos((_antigo) => novo);
		} else {
			const novoProduto = {
				id: produto.id,
				nome: nome,
				valorAtual: valor - valor * (desconto / 100),
				valorAntigo: valor,
				desconto: desconto,
				cores: cores,
				estoqueNum: estoque,
				valorFrete: frete,
				estrelas: "1",
				img1: file,
				img2: file2,
				img3: file3,
				img4: file4,
				tag: tag,
			};

			novo[modalEditarProduto[0]] = novoProduto;
			setTodosProdutos((_antigo) => novo);
		}
	};

	return (
		<div>
			<div className="modalEditarProduto">
				<div className="modalContainerEditarProduto">
					<div className="titleCloseBtnModalEditarProduto">
						<div className="nada"></div>

						<div className="titleModalCalendario">
							<h3 className="">Editar Evento</h3>
						</div>
						<button
							onClick={(e) => {
								e.preventDefault();
								setModalEditarProduto([0, false]);
							}}
						>
							X
						</button>
					</div>
					<div className="bodyModalEditarProduto">
						<div className="divProdutoNovoImg">
							<label htmlFor="file" className="left-novo">
								<img className="img-editar" src={file} alt="" />
							</label>
							<label htmlFor="file2" className="left-novo">
								<img className="img-editar" src={file2} alt="" />
							</label>
							<label htmlFor="file3" className="left-novo">
								<img className="img-editar" src={file3} alt="" />
							</label>
							<label htmlFor="file4" className="left-novo">
								<img className="img-editar" src={file4} alt="" />
							</label>
							<input
								className="input-novo"
								type="file"
								id="file"
								onChange={(e) => {
									const arquivo = URL.createObjectURL(e.target.files[0]);
									setFile(arquivo);
								}}
								style={{ display: "none" }}
							/>
							<input
								className="input-novo"
								type="file"
								id="file2"
								onChange={(e) => {
									const arquivo = URL.createObjectURL(e.target.files[0]);
									setFile2(arquivo);
								}}
								style={{ display: "none" }}
							/>
							<input
								className="input-novo"
								type="file"
								id="file3"
								onChange={(e) => {
									const arquivo = URL.createObjectURL(e.target.files[0]);
									setFile3(arquivo);
								}}
								style={{ display: "none" }}
							/>
							<input
								className="input-novo"
								type="file"
								id="file4"
								onChange={(e) => {
									const arquivo = URL.createObjectURL(e.target.files[0]);
									setFile4(arquivo);
								}}
								style={{ display: "none" }}
							/>
						</div>
						<form className="formModalEditarProduto" action="">
							<div className="wrapperModalEditarProduto">
								<div className="div-formModal">
									<label htmlFor="">Nome do produto:</label>
									<input
										type="text"
										className="input-novo"
										defaultValue={nome}
										onChange={(e) => {
											setNome(e.target.value);
										}}
									/>
								</div>
								<div className="div-formModal">
									<label htmlFor="">Desconto:</label>
									<input
										type="number"
										className="input-novo"
										defaultValue={Number(desconto)}
										onChange={(e) => {
											setDesconto(e.target.value);
										}}
									/>
								</div>
								<div className="div-formModal">
									<label htmlFor="">Valor:</label>
									<input
										type="number"
										className="input-novo"
										defaultValue={valor}
										onChange={(e) => {
											setValor(e.target.value);
										}}
									/>
								</div>
								<div className="div-formModal">
									<label htmlFor="">Numerno no estoque:</label>
									<input
										type="number"
										className="input-novo"
										defaultValue={estoque}
										onChange={(e) => {
											setEstoque(e.target.value);
										}}
									/>
								</div>
							</div>
							<div className="wrapperModalEditarProduto">
								<div className="div-formModal">
									<label htmlFor="">taxa de envio:</label>
									<input
										type="number"
										className="input-novo"
										defaultValue={frete}
										onChange={(e) => {
											setFrete(e.target.value);
										}}
									/>
								</div>
								<div className="div-formModal">
									<label htmlFor="" className="cor">
										Cores:
									</label>
								</div>

								{inputList.map((cor, key) => {
									return (
										<div className="div-formModal">
											<select
												className="input-novo"
												defaultValue={cor}
												onChange={(e) => {
													const novo = [...cores];
													novo[key] = e.target.value;
													console.log(novo, key + 1);
													if (e.target.value == "") {
														novo.splice(key, 1);

														setCores((_antigo) => novo);
													} else {
														setCores((_antigo) => novo);
													}
												}}
											>
												<option selected disabled>
													Adicionar cor
												</option>
												<option value="azul">azul</option>
												<option value="preto">preto</option>
												<option value="amarelo">amarelo</option>
												<option value="branco">branco</option>
												<option value="verde">verde</option>
											</select>
										</div>
									);
								})}

								<button
									className="addCor"
									onClick={(e) => {
										e.preventDefault();
										onAddBtnClick();
									}}
								>
									Add cor
								</button>

								<div className="div-formModal">
									<label htmlFor="">Tag:</label>
									<select
										name=""
										id=""
										className="input-novo"
										onChange={(e) => {
											setTag(e.target.value);
										}}
									>
										<option value="">LIFESTYLE</option>
									</select>
								</div>
							</div>
						</form>
					</div>

					<div className="footerModalCalendario">
						<button
							onClick={() => {
								setModalEditarProduto([0, false]);
							}}
							className="exluirBotao"
						>
							Cancelar
						</button>
						<button
							className="link-exportar"
							onClick={(e) => {
								handleEdit();
								setModalEditarProduto([0, false]);
							}}
						>
							Editar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
