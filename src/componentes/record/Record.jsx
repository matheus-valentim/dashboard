import { useTransition } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useTranslation } from "react-i18next";
import "./record.css";
export default function Record() {
	const { t } = useTranslation();
	return (
		<div className="featured">
			<div className="top-rendimento">
				<h1 className="title">{t("Sales Record-record")}</h1>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
						fill="black"
					/>
				</svg>
			</div>
			<div className="bottom-rendimento">
				<div className="featuredChart">
					<CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
				</div>
				<p className="title-rendimento">{t("Distance to the record-record")}</p>
				<p className="amount">$4200,00</p>
				<p className="desc">{t("Counting is done monthly.-record")}</p>
				<div className="summary">
					<div className="item-rendimento">
						<div className="itemTitle">{t("Record-record")}</div>
						<div className="itemResult positive-rendimento">
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
					<div className="item-rendimento">
						<div className="itemTitle">{t("Current-record")}</div>
						<div className="itemResult negative">
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
					<div className="item-rendimento">
						<div className="itemTitle">{t("Difference-record")}</div>
						<div className="itemResult negative">
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
