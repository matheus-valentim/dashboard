import "./rendimento.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useTranslation } from "react-i18next";

export default function Rendimento() {
	const { t } = useTranslation();

	return (
		<div className="featured">
			<div className="top-rendimento">
				<h1 className="title">{t("Total Revenue-rendimento")}</h1>
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
				<p className="title-rendimento">
					{t("Total sales made today-rendimento")}
				</p>
				<p className="amount">$420</p>
				<p className="desc">
					{t(
						"Previous transactions processing. Last payments may not be included.-rendimento"
					)}
				</p>
				<div className="summary">
					<div className="item-rendimento">
						<div className="itemTitle">{t("Target-rendimento")}</div>
						<div className="itemResult negative">
							<svg
								width="20"
								height="20"
								viewBox="0 0 1024 1024"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M831.872 340.864L512 652.672L192.128 340.864C186.413 335.282 178.741 332.157 170.752 332.157C162.763 332.157 155.091 335.282 149.376 340.864C146.609 343.575 144.41 346.812 142.91 350.383C141.409 353.955 140.636 357.79 140.636 361.664C140.636 365.538 141.409 369.373 142.91 372.945C144.41 376.517 146.609 379.753 149.376 382.464L489.664 714.24C495.64 720.065 503.655 723.325 512 723.325C520.345 723.325 528.36 720.065 534.336 714.24L874.624 382.528C877.411 379.815 879.626 376.571 881.138 372.987C882.651 369.404 883.43 365.554 883.43 361.664C883.43 357.775 882.651 353.925 881.138 350.341C879.626 346.758 877.411 343.513 874.624 340.8C868.909 335.218 861.237 332.093 853.248 332.093C845.259 332.093 837.587 335.218 831.872 340.8V340.864Z"
									fill="black"
								/>
							</svg>

							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
					<div className="item-rendimento">
						<div className="itemTitle">{t("Last Week-rendimento")}</div>
						<div className="itemResult positive-rendimento">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z"
									fill="black"
								/>
							</svg>

							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
					<div className="item-rendimento">
						<div className="itemTitle">{t("Last Month-rendimento")}</div>
						<div className="itemResult positive-rendimento">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z"
									fill="black"
								/>
							</svg>
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
