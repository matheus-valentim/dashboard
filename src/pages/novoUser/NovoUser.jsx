import "./novoUser.css";
import Sidebar from "../../componentes/sidebar/Sidebar";
import Navbar from "../../componentes/navbar/Navbar";
import { userColumns } from "../../data";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export default function NovoUser({ title }) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [file, setFile] = useState(
		"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
	);
	const [nome, setNome] = useState("");
	const [endereco, setEndereco] = useState("");
	const [telefone, setTelefone] = useState("");
	const [nomeUsuario, setNomeUsuario] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [pais, setPais] = useState("");
	const { users, setUsers } = useContext(darkModeContext);

	const addData = () => {
		const user = {
			id: users[users.length - 1].id + 1,
			username: nomeUsuario,
			img: file,
			status: "pending",
			email: email,
			country: pais,
			name: nome,
			address: endereco,
			tel: telefone,
			password: senha,
		};
		console.log(file);
		console.log(users, user);
		setUsers((usuarios) => [...usuarios, user]);
		navigate("/usuarios");
	};

	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="produtosAdicionar-novo">
					<h1 className="h1-novo">{t("New User-NovoUser")}</h1>
					<Link to="/usuarios" className="voltar-card">
						Voltar
					</Link>
				</div>
				<div className="bottom-novoUser">
					<label htmlFor="file" className="left-novo">
						<img className="img-novo" src={file} alt="" />
					</label>
					<div className="right-NovoUser">
						<form
							className="form-novo1"
							onSubmit={(e) => {
								e.preventDefault();
								addData();
							}}
						>
							<div className="form-novo2">
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

								<div className="formInput">
									<label htmlFor="">{t("Name-NovoUser")}</label>
									<input
										className="input-novo"
										type="text"
										onChange={(e) => {
											setNome(e.target.value);
										}}
									/>
								</div>
								<div className="formInput">
									<label htmlFor="">{t("Username-NovoUser")}</label>
									<input
										className="input-novo"
										type="text"
										onChange={(e) => {
											setNomeUsuario(e.target.value);
										}}
									/>
								</div>
								<div className="formInput">
									<label htmlFor="">{t("Phone-NovoUser")}</label>
									<input
										className="input-novo"
										type="num"
										onChange={(e) => {
											setTelefone(e.target.value);
										}}
									/>
								</div>

								<div className="formInput">
									<label htmlFor="">{t("Address-NovoUser")}</label>
									<input
										className="input-novo"
										type="text"
										onChange={(e) => {
											setEndereco(e.target.value);
										}}
									/>
								</div>
								<div className="formInput">
									<label htmlFor="">Email:</label>
									<input
										className="input-novo"
										type="email"
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</div>

								<div className="formInput">
									<label htmlFor="">{t("Password-NovoUser")}</label>
									<input
										className="input-novo"
										type="password"
										onChange={(e) => {
											setSenha(e.target.value);
										}}
									/>
								</div>
								<div className="formInput">
									<label htmlFor="">{t("Country-NovoUser")}</label>
									<input
										className="input-novo"
										type="text"
										onChange={(e) => {
											setPais(e.target.value);
										}}
									/>
								</div>
							</div>
							<button className="button-novo">{t("Send-NovoUser")}</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
