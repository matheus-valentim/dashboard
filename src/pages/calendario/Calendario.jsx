import { useState, useCallback, useMemo, useEffect, useContext } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar from "../../componentes/navbar/Navbar";
import Sidebar from "../../componentes/sidebar/Sidebar";
import { darkModeContext } from "../../contexts/darkModeProvider";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { enUS, pt } from "date-fns/esm/locale";
import ModalCalendario from "../../componentes/modalcalendario/ModalCalendario";

const DnDCalendar = withDragAndDrop(Calendar);

export default function Calendario() {
	const {
		openModalcalendario,
		setOpenModalcalendario,
		eventosCalendario,
		setEventosCalendario,
	} = useContext(darkModeContext);
	const locales = {
		pt: pt,
	};

	const localizer = dateFnsLocalizer({
		format,
		parse,
		startOfWeek,
		getDay,
		locales,
	});

	const moveEvent = useCallback(
		({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
			const { allDay } = event;
			if (!allDay && droppedOnAllDaySlot) {
				event.allDay = true;
			}

			setEventosCalendario((prev) => {
				const existing = prev.find((ev) => ev.id === event.id) ?? {};
				const filtered = prev.filter((ev) => ev.id !== event.id);
				return [...filtered, { ...existing, start, end, allDay }];
			});
		},
		[setEventosCalendario]
	);

	const resizeEvent = useCallback(
		({ event, start, end }) => {
			setEventosCalendario((prev) => {
				const existing = prev.find((ev) => ev.id === event.id) ?? {};
				const filtered = prev.filter((ev) => ev.id !== event.id);
				return [...filtered, { ...existing, start, end }];
			});
		},
		[setEventosCalendario]
	);
	const handleSelectSlot = useCallback(
		({ start, end }) => {
			const title = window.prompt("New Event name");
			if (title) {
				setEventosCalendario((prev) => [
					...prev,
					{
						start,
						end,
						title,
						id: eventosCalendario[eventosCalendario.length - 1].id + 1,
					},
				]);
			}
		},
		[setEventosCalendario, eventosCalendario]
	);

	const handleSelectEvent = (event) => {
		console.log([event.id, true]);
		setOpenModalcalendario([event.id, true]);
	};

	const { defaultDate, scrollToTime } = useMemo(
		() => ({
			defaultDate: new Date(2015, 3, 12),
			scrollToTime: new Date(1970, 1, 1, 6),
		}),
		[]
	);

	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<DnDCalendar
					defaultDate={moment().toDate()}
					defaultView="month"
					events={eventosCalendario}
					localizer={localizer}
					style={{ height: "90%" }}
					onEventDrop={moveEvent}
					onEventResize={resizeEvent}
					popup
					resizable
					onSelectEvent={handleSelectEvent}
					onSelectSlot={handleSelectSlot}
					selectable
					scrollToTime={scrollToTime}
				/>
			</div>
			{openModalcalendario[1] && <ModalCalendario />}
		</div>
	);
}
