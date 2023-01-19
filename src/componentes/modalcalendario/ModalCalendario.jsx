import { useContext, useEffect, useState } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import "./modalCalendario.css";
export default function ModalCalendario() {
	const {
		openModalcalendario,
		setOpenModalcalendario,
		eventosCalendario,
		setEventosCalendario,
	} = useContext(darkModeContext);
	const [inicio, setInicio] = useState("");
	const [fim, setFim] = useState("");
	const handleDelete = (id) => {
		setEventosCalendario(
			eventosCalendario.filter((evento) => evento.id !== id)
		);
	};
	const handleEdit = () => {
		const novo = [...eventosCalendario];
		const evento = {
			id: openModalcalendario[0],
			title: title,
			start: inicio,
			end: fim,
		};
		novo.map((item) => {
			if (item.id == openModalcalendario[0]) {
				item = evento;
			}
		});

		setEventosCalendario((_antigo) => novo);
		console.log(inicio, fim, eventosCalendario);
	};
	const [title, setTitle] = useState();
	useEffect(() => {
		const achar = eventosCalendario.find(
			(evento) => evento.id == openModalcalendario[0]
		);
		setTitle(achar.title);
	}, []);
	return (
		<div>
			<div className="modalCalendario">
				<div className="modalContainerCalendario">
					<div className="titleCloseBtnModalCalendario">
						<div className="nada"></div>

						<div className="titleModalCalendario">
							<h3 className="">Editar Evento</h3>
						</div>
						<button
							onClick={() => {
								setOpenModalcalendario([0, false]);
							}}
						>
							X
						</button>
					</div>
					<div className="bodyModalCalendario">
						<form className="formModalCalendario" action="">
							<div className="div-formModal">
								<label htmlFor="">Nome do produto:</label>
								<input
									type="text"
									className="inputModal"
									defaultValue={title}
									onChange={(e) => {
										setTitle(e.target.value);
									}}
								/>
							</div>
							<div className="div-formModal">
								<label htmlFor="">Data de Inicio:</label>
								<input
									type="date"
									className="inputModal"
									onChange={(e) => {
										setInicio(e.target.value);
									}}
								/>
							</div>
							<div className="div-formModal">
								<label htmlFor="">Data de Fim:</label>
								<input
									type="date"
									className="inputModal"
									onChange={(e) => {
										setFim(e.target.value);
									}}
								/>
							</div>
						</form>
					</div>

					<div className="footerModalCalendario">
						<button
							className="exluirBotao"
							onClick={() => {
								setOpenModalcalendario([0, false]);
								handleDelete(openModalcalendario[0]);
							}}
						>
							Excluir
						</button>
						<button
							className="link-exportar"
							onClick={(e) => {
								handleEdit();
								setOpenModalcalendario([0, false]);
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
