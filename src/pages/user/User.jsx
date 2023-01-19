import "./user.css";
import Sidebar from "../../componentes/sidebar/Sidebar";
import Navbar from "../../componentes/navbar/Navbar";
import Chart from "../../componentes/chart/Chart";
import List from "../../componentes/transacoes/Transacoes";
import { useContext } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function User() {
	const { t } = useTranslation();
	const { users, setUsers } = useContext(darkModeContext);
	const [position, setPosition] = useState("");
	const [atual, setAtual] = useState("");
	const [loading, setLoading] = useState("");
	console.log();
	useEffect(() => {
		const posicao = window.location.pathname.slice(10);
		setAtual(posicao);
		setPosition(users.filter((user) => posicao == user.id));
	}, []);

	return (
		<div className="single">
			<Sidebar />
			<div className="singleContainer">
				<Navbar />
				<div className="top-user">
					<div className="left-user">
						<Link to={"/usuarios/" + atual + "/editar"} className="editButton">
							{t("Edit-user")}
						</Link>
						<h1 className="title-user">{t("Information-user")}</h1>
						{position ? (
							<div className="itemUser">
								<img src={position[0].img} alt="" className="itemImg" />
								<div className="details">
									<h1 className="itemTitle">{position[0].username}</h1>
									<div className="detailItem">
										<span className="itemKey">Email:</span>
										<span className="itemValue">{position[0].email}</span>
									</div>
									<div className="detailItem">
										<span className="itemKey">{t("Phone-user")}</span>
										<span className="itemValue">{position[0].tel}</span>
									</div>
									<div className="detailItem">
										<span className="itemKey">{t("Address-user")}</span>
										<span className="itemValue">{position[0].address}</span>
									</div>
									<div className="detailItem">
										<span className="itemKey">{t("Country-user")}</span>
										<span className="itemValue">{position[0].country}</span>
									</div>
								</div>
							</div>
						) : null}
					</div>
					<div className="right-User">
						<Chart
							aspect={3 / 1}
							title={t("User Spending ( Last 6 Months)-user")}
						/>
					</div>
				</div>
				<div className="bottom-user">
					<h1 className="title-user">{t("Last Transactions-user")}</h1>
					<List />
				</div>
			</div>
		</div>
	);
}
