import "./navbar.css";

import { useContext } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const { t, i18n } = useTranslation();
	const {
		darkModeOn,
		setDarkModeOn,
		openNotify,
		setOpenNotify,
		Lingua,
		setLingua,
	} = useContext(darkModeContext);
	const [ativo, setAtivo] = useState(false);
	const darkMode = () => {
		if (darkModeOn) {
			setDarkModeOn(false);
		} else {
			setDarkModeOn(true);
		}
	};

	const toggleFullscreen = () => {
		if (!document.documentElement.requestFullscreen()) {
			document.documentElement.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	};
	return (
		<div className="Navbar">
			<div className="wrapper">
				<div className="searchNavbar">
					<input type="text" placeholder="Search..." />
					<svg
						width="24"
						height="24"
						viewBox="0 0 1024 1024"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412C712 331.8 680.7 256.6 624.1 199.9C567.5 143.2 492.1 112 412 112C331.9 112 256.5 143.3 199.9 199.9C143.2 256.5 112 331.8 112 412C112 492.1 143.3 567.5 199.9 624.1C256.5 680.8 331.8 712 412 712C479 712 542.6 690.2 594.7 650L854.4 909.6C855.162 910.362 856.066 910.966 857.061 911.379C858.056 911.791 859.123 912.003 860.2 912.003C861.277 912.003 862.344 911.791 863.339 911.379C864.334 910.966 865.238 910.362 866 909.6L909.6 866.1C910.362 865.338 910.966 864.434 911.379 863.439C911.791 862.444 912.003 861.377 912.003 860.3C912.003 859.223 911.791 858.156 911.379 857.161C910.966 856.166 910.362 855.262 909.6 854.5V854.5ZM570.4 570.4C528 612.7 471.8 636 412 636C352.2 636 296 612.7 253.6 570.4C211.3 528 188 471.8 188 412C188 352.2 211.3 295.9 253.6 253.6C296 211.3 352.2 188 412 188C471.8 188 528.1 211.2 570.4 253.6C612.7 296 636 352.2 636 412C636 471.8 612.7 528.1 570.4 570.4Z"
							fill="gray"
						/>
					</svg>
				</div>
				<div className="items">
					<div className="language">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							className="icon-navbar"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_203_8)">
								<path
									d="M2 16H22M2 8H22M12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23ZM12 23C15 23 16 18 16 12C16 6 15 1 12 1C9 1 8 6 8 12C8 18 9 23 12 23Z"
									stroke="gray"
									strokeWidth="2"
								/>
							</g>
							<defs>
								<clipPath id="clip0_203_8">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<select
							className="select-navbar"
							name=""
							id=""
							onChange={(e) => {
								i18n.changeLanguage(e.target.value);
								Lingua == "en" ? setLingua("ptBR") : setLingua("en");
							}}
						>
							<option selected={Lingua == "en" ? true : false} value="en">
								{t("language-english-navbar")}
							</option>
							<option selected={Lingua == "ptBR" ? true : false} value="ptBR">
								{t("language-portuguese-navbar")}
							</option>
						</select>
					</div>
					<div
						className="item"
						onClick={(e) => {
							darkMode();
						}}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							className="icon-navbar"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.37 5.51C9.18937 6.15786 9.09853 6.82744 9.1 7.5C9.1 11.58 12.42 14.9 16.5 14.9C17.18 14.9 17.85 14.81 18.49 14.63C17.9647 15.9207 17.0668 17.0257 15.9109 17.804C14.755 18.5823 13.3935 18.9987 12 19C8.14 19 5 15.86 5 12C5 9.07 6.81 6.55 9.37 5.51V5.51ZM12 3C10.22 3 8.47991 3.52784 6.99986 4.51677C5.51982 5.50571 4.36627 6.91131 3.68508 8.55585C3.00389 10.2004 2.82566 12.01 3.17293 13.7558C3.5202 15.5016 4.37736 17.1053 5.63604 18.364C6.89471 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4441 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 11.54 20.96 11.08 20.9 10.64C20.4003 11.3407 19.7401 11.9115 18.9746 12.3047C18.2091 12.6978 17.3606 12.902 16.5 12.9C15.3552 12.9 14.24 12.5364 13.3152 11.8617C12.3904 11.1869 11.7038 10.2358 11.3545 9.14561C11.0052 8.05541 11.0112 6.88243 11.3717 5.79586C11.7321 4.70928 12.4284 3.76528 13.36 3.1C12.92 3.04 12.46 3 12 3V3Z"
								fill="gray"
							/>
						</svg>
					</div>
					<div
						className="item"
						onClick={(e) => {
							toggleFullscreen();
						}}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							className="icon-navbar"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 4H8V8H4V10H10V4ZM8 20H10V14H4V16H8V20ZM20 14H14V20H16V16H20V14ZM20 8H16V4H14V10H20V8Z"
								fill="gray"
							/>
						</svg>
					</div>

					<div className="item">
						<div className="notification_wrap">
							<div
								className=""
								onClick={() => {
									if (openNotify) {
										setOpenNotify(false);
									} else {
										setOpenNotify(true);
									}
								}}
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="icon-navbar"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
										fill="gray"
									/>
								</svg>
							</div>
							<div className={openNotify ? "dropdown" : "dropdown close-noti"}>
								<Link to="/notificacoes" className="notify_item">
									<div className="notify_img">
										<img
											src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
											alt=""
											className="avatar"
										/>
									</div>
									<div className="notify_info">
										<p>
											Matheus created <span>a event</span>
										</p>
										<span className="notify_time">10 minutes ago</span>
									</div>
								</Link>
								<Link to="/notificacoes" className="notify_item">
									<div className="notify_img">
										<img
											src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
											alt=""
											className="avatar"
										/>
									</div>
									<div className="notify_info">
										<p>
											Matheus deleted <span>a account.</span>
										</p>
										<span className="notify_time">55 minutes ago</span>
									</div>
								</Link>
								<Link to="/notificacoes" className="notify_item">
									<div className="notify_img">
										<img
											src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
											alt=""
											className="avatar"
										/>
									</div>
									<div className="notify_info">
										<p>
											Matheus created <span>a event</span>
										</p>
										<span className="notify_time">2 hours ago</span>
									</div>
								</Link>
								<Link to="/notificacoes" className="notify_item">
									<div className="notify_img">
										<img
											src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
											alt=""
											className="avatar"
										/>
									</div>
									<div className="notify_info">
										<p>
											Matheus deleted <span>a product.</span>
										</p>
										<span className="notify_time">6 hours ago</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className="item">
						<svg
							width="24"
							height="24"
							viewBox="0 0 1024 1024"
							fill="none"
							className="icon-navbar"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M912 192H328C323.6 192 320 195.6 320 200V256C320 260.4 323.6 264 328 264H912C916.4 264 920 260.4 920 256V200C920 195.6 916.4 192 912 192ZM912 476H328C323.6 476 320 479.6 320 484V540C320 544.4 323.6 548 328 548H912C916.4 548 920 544.4 920 540V484C920 479.6 916.4 476 912 476ZM912 760H328C323.6 760 320 763.6 320 768V824C320 828.4 323.6 832 328 832H912C916.4 832 920 828.4 920 824V768C920 763.6 916.4 760 912 760ZM104 228C104 235.354 105.448 242.636 108.263 249.43C111.077 256.225 115.202 262.398 120.402 267.598C125.602 272.798 131.775 276.923 138.57 279.737C145.364 282.552 152.646 284 160 284C167.354 284 174.636 282.552 181.43 279.737C188.225 276.923 194.398 272.798 199.598 267.598C204.798 262.398 208.923 256.225 211.737 249.43C214.552 242.636 216 235.354 216 228C216 220.646 214.552 213.364 211.737 206.57C208.923 199.775 204.798 193.602 199.598 188.402C194.398 183.202 188.225 179.077 181.43 176.263C174.636 173.448 167.354 172 160 172C152.646 172 145.364 173.448 138.57 176.263C131.775 179.077 125.602 183.202 120.402 188.402C115.202 193.602 111.077 199.775 108.263 206.57C105.448 213.364 104 220.646 104 228V228ZM104 512C104 519.354 105.448 526.636 108.263 533.43C111.077 540.225 115.202 546.398 120.402 551.598C125.602 556.798 131.775 560.923 138.57 563.737C145.364 566.552 152.646 568 160 568C167.354 568 174.636 566.552 181.43 563.737C188.225 560.923 194.398 556.798 199.598 551.598C204.798 546.398 208.923 540.225 211.737 533.43C214.552 526.636 216 519.354 216 512C216 504.646 214.552 497.364 211.737 490.57C208.923 483.775 204.798 477.602 199.598 472.402C194.398 467.202 188.225 463.077 181.43 460.263C174.636 457.448 167.354 456 160 456C152.646 456 145.364 457.448 138.57 460.263C131.775 463.077 125.602 467.202 120.402 472.402C115.202 477.602 111.077 483.775 108.263 490.57C105.448 497.364 104 504.646 104 512V512ZM104 796C104 803.354 105.448 810.636 108.263 817.43C111.077 824.225 115.202 830.398 120.402 835.598C125.602 840.798 131.775 844.923 138.57 847.737C145.364 850.552 152.646 852 160 852C167.354 852 174.636 850.552 181.43 847.737C188.225 844.923 194.398 840.798 199.598 835.598C204.798 830.398 208.923 824.225 211.737 817.43C214.552 810.636 216 803.354 216 796C216 788.646 214.552 781.364 211.737 774.57C208.923 767.775 204.798 761.602 199.598 756.402C194.398 751.202 188.225 747.077 181.43 744.263C174.636 741.448 167.354 740 160 740C152.646 740 145.364 741.448 138.57 744.263C131.775 747.077 125.602 751.202 120.402 756.402C115.202 761.602 111.077 767.775 108.263 774.57C105.448 781.364 104 788.646 104 796V796Z"
								fill="gray"
							/>
						</svg>
					</div>
					<div className="item">
						<img
							src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
							className="avatarNavbarPerfil"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
