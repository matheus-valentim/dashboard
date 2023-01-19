import "./usuarios.css";
import { userRows } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useEffect } from "react";
import CsvDownloadButton from "react-json-to-csv";

export default function Usuarios() {
	const { t } = useTranslation();
	const { users, setUsers } = useContext(darkModeContext);
	const navigate = useNavigate();

	const handleDelete = (id) => {
		setUsers(users.filter((item) => item.id !== id));
	};
	const handleView = (id) => {
		navigate(`/usuarios/${id}`);
	};
	return (
		<div className="datatable">
			<div className="datatableTitle">
				{t("User List-usuarios")}
				<div className="datatableDiv">
					<CsvDownloadButton
						className="link-exportar"
						filename="Usuarios.csv"
						data={users}
					>
						exportar para csv
					</CsvDownloadButton>
					<Link to="/usuarios/novo" className="link-usuarios">
						{t("Add New User-usuarios")}
					</Link>
				</div>
			</div>
			<table className="usuariosTable">
				<thead>
					<tr>
						<th>{t("Image-usuarios")}</th>
						<th>{t("Username-usuarios")}</th>
						<th>{t("Status-usuarios")}</th>
						<th>{t("Email-usuarios")}</th>
						<th>{t("Country-usuarios")}</th>
						<th>{t("Actions-usuarios")}</th>
					</tr>
				</thead>
				<tbody>
					{users
						? users.map((user, key) => {
								return (
									<tr className="table-tr">
										<td>
											<img src={user.img} className="cellImg" alt="" />
										</td>
										<td className="tableCell">{user.username}</td>
										<td>
											<p className={user.status}>{user.status}</p>
										</td>
										<td className="tableCell">{user.email}</td>
										<td className="tableCell">{user.country}</td>
										<td className="tableCell">
											<button
												className="viewButton"
												onClick={() => {
													handleView(user.id);
												}}
											>
												{t("View-usuarios")}
											</button>{" "}
											<button
												className="deleteButton"
												onClick={() => {
													handleDelete(user.id);
												}}
											>
												{t("Delete-usuarios")}
											</button>
										</td>
									</tr>
								);
						  })
						: null}
				</tbody>
			</table>
		</div>
	);
}
