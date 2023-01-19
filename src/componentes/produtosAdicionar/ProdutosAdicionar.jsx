import "./produtosAdicionar.css";
import Sidebar from "../../componentes/sidebar/Sidebar";
import Navbar from "../../componentes/navbar/Navbar";
import { userColumns } from "../../data";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";

export default function ProdutoAdicionar() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [file, setFile] = useState(
		"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
	);
	const [file2, setFile2] = useState(
		"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
	);
	const [file3, setFile3] = useState(
		"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
	);
	const [file4, setFile4] = useState(
		"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
	);
	const [nome, setNome] = useState("");
	const [tag, setTag] = useState("");
	const [estoque, setEstoque] = useState("");
	const [frete, setFrete] = useState("");
	const [desconto, setDesconto] = useState(0);
	const [cores, setCores] = useState([]);
	const [valor, setValor] = useState([]);
	const [valorAntigo, setValorAntigo] = useState("");
	const { setTodosProdutos, todosProdutos } = useContext(darkModeContext);
	const [inputList, setInputList] = useState([]);
	const addData = () => {
		const produto = {
			id: todosProdutos[todosProdutos.length - 1].id + 1,
			nome: nome,
			valorAtual: valor,
			valorAntigo: valor * (desconto / 100),
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

		console.log(produto);
		setTodosProdutos((produtos) => [...produtos, produto]);
		navigate("/produtos");
	};

	const onAddBtnClick = (_event) => {
		setInputList([...inputList, inputList[inputList.length - 1] + 1]);
	};

	return (
		<div className="new">
			<Sidebar />

			<div className="newContainer">
				<Navbar />
				<div className="produtosAdicionar-novo">
					<h1 className="h1-novo">Produto novo</h1>
					<Link to="/produtos" className="voltar-card">
						Voltar
					</Link>
				</div>
				<div className="bottom">
					<div className="divProdutoNovoImg">
						<label htmlFor="file" className="left-novo">
							<img className="img-novo" src={file} alt="" />
						</label>
						<label htmlFor="file2" className="left-novo">
							<img className="img-novo" src={file2} alt="" />
						</label>
						<label htmlFor="file3" className="left-novo">
							<img className="img-novo" src={file3} alt="" />
						</label>
						<label htmlFor="file4" className="left-novo">
							<img className="img-novo" src={file4} alt="" />
						</label>
					</div>

					<div className="right-NovoUser">
						<form
							className="form-novo1"
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							<div className="formProdutoNovo">
								<div className="form-teste">
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

									<div className="formInputProdutoNovo">
										<label htmlFor="">Tag:</label>
										<input
											className="input-novo"
											type="text"
											onChange={(e) => {
												setTag(e.target.value);
											}}
										/>
									</div>
									<div className="formInputProdutoNovo">
										<label htmlFor="">Valor:</label>
										<input
											className="input-novo"
											type="text"
											onChange={(e) => {
												setValor(e.target.value);
											}}
										/>
									</div>
									<div className="formInputProdutoNovo">
										<label htmlFor="">Nome do produto:</label>
										<input
											className="input-novo"
											type="text"
											onChange={(e) => {
												setNome(e.target.value);
											}}
										/>
									</div>
									<div className="formInputProdutoNovo">
										<label htmlFor="">valor do frete:</label>
										<input
											className="input-novo"
											type="num"
											onChange={(e) => {
												setFrete(e.target.value);
											}}
										/>
									</div>
								</div>
								<div className="form-teste">
									<div className="formInputProdutoNovo">
										<label htmlFor="">Número no estoque:</label>
										<input
											className="input-novo"
											type="text"
											onChange={(e) => {
												setEstoque(e.target.value);
											}}
										/>
									</div>
									<div className="formInputProdutoNovo">
										<label htmlFor="">Cores:</label>
										<select
											className="input-novo"
											onChange={(e) => {
												const novo = [...cores];
												novo[0] = e.target.value;
												setCores((_antigo) => novo);
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

									{inputList.map((teste, index) => {
										console.log(teste);
										return (
											<div className="formInputProdutoNovo" key={index + 1}>
												<label htmlFor="">{index + 1} :</label>
												<select
													className="input-novo"
													onChange={(e) => {
														const novo = [...cores];
														novo[index + 1] = e.target.value;
														setCores((_antigo) => novo);
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
									<button onClick={onAddBtnClick}>Add input</button>

									<div className="formInputProdutoNovo">
										<label htmlFor="">Desconto:</label>
										<input
											className="input-novo"
											type="password"
											onChange={(e) => {
												setDesconto(e.target.value);
											}}
										/>
									</div>
								</div>
							</div>
							<button
								className="button-novo"
								onClick={() => {
									addData();
								}}
							>
								{t("Send-NovoUser")}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
