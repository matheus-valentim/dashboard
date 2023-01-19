import "./sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";
import { useTranslation } from "react-i18next";
import ChartImage from "./7101633.png";

export default function Sidebar() {
	const { t } = useTranslation();

	const { darkModeOn, setDarkModeOn } = useContext(darkModeContext);
	const [sidebarOn, setSidebarOn] = useState(false);
	const darkMode = () => {
		if (darkModeOn) {
			setDarkModeOn(false);
		} else {
			setDarkModeOn(true);
		}
	};
	return (
		<div className={darkModeOn ? "dark" : "white"}>
			<nav className={sidebarOn ? "sidebar" : "sidebar close"}>
				<header>
					<div className="image-text">
						<span className="image">
							<img src={ChartImage} alt="" />
						</span>

						<div className="text logo-text">
							<span className="name">ADMIN</span>
							<span className="profession">DASHBOARD</span>
						</div>
					</div>

					<i
						className="bx bx-chevron-right toggle"
						onClick={(e) => {
							if (sidebarOn) {
								setSidebarOn(false);
							} else {
								setSidebarOn(true);
							}
						}}
					>
						<svg
							className="sidebar-svg"
							width="10"
							height="16"
							viewBox="0 0 8 14"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" />
						</svg>
					</i>
				</header>

				<div className="menu-bar">
					<div className="menu">
						<ul className="menu-links">
							<li className="nav-link">
								<Link to="/" className="sidebar-link">
									<i className="bx bx-home-alt icon-sidebar">
										<svg
											className="sidebar-svg"
											width="25"
											height="25"
											viewBox="0 0 87 87"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M4.34917 47.8504H8.69926V78.3001C8.69926 83.0981 12.6013 87 17.3994 87H69.6006C74.3987 87 78.3007 83.0981 78.3007 78.3001V47.8504H82.6508C83.5111 47.8502 84.3519 47.595 85.0671 47.117C85.7823 46.639 86.3397 45.9597 86.6689 45.165C86.9981 44.3702 87.0842 43.4957 86.9165 42.6521C86.7487 41.8084 86.3345 41.0334 85.7264 40.425L46.5755 1.27541C46.1719 0.871102 45.6925 0.550346 45.1648 0.331496C44.637 0.112647 44.0713 0 43.5 0C42.9287 0 42.363 0.112647 41.8353 0.331496C41.3075 0.550346 40.8281 0.871102 40.4245 1.27541L1.27365 40.425C0.665466 41.0334 0.251309 41.8084 0.0835369 42.6521C-0.0842355 43.4957 0.00190948 44.3702 0.331081 45.165C0.660253 45.9597 1.21767 46.639 1.93287 47.117C2.64807 47.595 3.48893 47.8502 4.34917 47.8504ZM34.7998 78.3001V56.5503H52.2002V78.3001H34.7998ZM43.5 10.5017L69.6006 36.6014V56.5503L69.6049 78.3001H60.9004V56.5503C60.9004 51.7523 56.9983 47.8504 52.2002 47.8504H34.7998C30.0017 47.8504 26.0996 51.7523 26.0996 56.5503V78.3001H17.3994V36.6014L43.5 10.5017Z" />
										</svg>
									</i>
									<span className="text nav-text">{t("Home-sidebar")}</span>
								</Link>
							</li>

							<li className="nav-link">
								<Link to="/usuarios" className="sidebar-link">
									<i className="bx bx-home-alt icon-sidebar">
										<svg
											width="25"
											height="25"
											className="sidebar-svg"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" />
										</svg>
									</i>

									<span className="text nav-text">{t("Users-sidebar")}</span>
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/Produtos" className="sidebar-link">
									<i className="bx bx-home-alt icon-sidebar">
										<svg
											width="25"
											height="25"
											viewBox="0 0 464 496"
											className="sidebar-svg"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M44 278L204 470C218 486 234.333 494 253 494C269.667 494 284 489 296 479L435 362C448.333 350 456 335 458 317C460 300.333 455 284 443 268L283 75.9999C265.667 53.3333 243 38.9999 215 32.9999L76 0.99993C62.6667 -3.00007 50 -6.96182e-05 38 9.99993L21 24.9999C11 32.3333 6 44.3333 6 60.9999L14 204C17.3333 232.667 27.3333 257.333 44 278ZM68 41.9999L209 75.9999C223.667 79.3333 238.333 88.3333 253 103L413 295C418.333 300.333 420 306.333 418 313C418 317 415 322.667 409 330L270 447C265.333 451 259.667 452.833 253 452.5C246.333 452.167 241.333 449.667 238 445L78 253C65.3333 237 59 220.667 59 204L49 56.9999L68 41.9999ZM125 112C125 118 123 123 119 127C115 131 110 133 104 133C98 133 93 131 89 127C85 123 83 118 83 112C83 106 85 101 89 96.9999C93 92.9999 98 90.9999 104 90.9999C110 90.9999 115 92.9999 119 96.9999C123 101 125 106 125 112ZM136 261L332 323H339C348.333 323 355.333 318 360 308C362 302.667 361.667 297.333 359 292C356.333 286.667 352.333 283 347 281L151 219C145.667 216.333 140.167 216.333 134.5 219C128.833 221.667 125 225.667 123 231C119 246.333 123.333 256.333 136 261ZM296 357C296 365.667 293 373.167 287 379.5C281 385.833 273.333 389 264 389C254.667 389 247 385.833 241 379.5C235 373.167 232 365.667 232 357C232 348.333 235.167 340.833 241.5 334.5C247.833 328.167 255.333 325 264 325C272.667 325 280.167 328.167 286.5 334.5C292.833 340.833 296 348.333 296 357ZM232 187C232 195.667 228.833 203.167 222.5 209.5C216.167 215.833 208.667 219 200 219C191.333 219 183.833 215.833 177.5 209.5C171.167 203.167 168 195.667 168 187C168 178.333 171 170.833 177 164.5C183 158.167 190.667 155 200 155C209.333 155 217 158.167 223 164.5C229 170.833 232 178.333 232 187Z" />

											<defs></defs>
										</svg>
									</i>
									<span className="text nav-text">{t("Products-sidebar")}</span>
								</Link>
							</li>

							<li className="nav-link">
								<Link to="/analytics" className="sidebar-link">
									<i className="bx bx-home-alt icon-sidebar">
										<svg
											width="25"
											height="25"
											viewBox="0 0 512 512"
											className="sidebar-svg"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M456 128C449.487 128.002 443.074 129.594 437.316 132.637C431.558 135.681 426.631 140.085 422.962 145.465C419.293 150.846 416.993 157.042 416.263 163.513C415.532 169.985 416.393 176.537 418.77 182.6L334.6 266.77C325.217 263.077 314.783 263.077 305.4 266.77L245.23 206.6C247.613 200.535 248.478 193.98 247.75 187.505C247.022 181.03 244.723 174.831 241.053 169.447C237.384 164.062 232.454 159.656 226.694 156.611C220.933 153.566 214.516 151.974 208 151.974C201.484 151.974 195.067 153.566 189.306 156.611C183.546 159.656 178.616 164.062 174.947 169.447C171.277 174.831 168.978 181.03 168.25 187.505C167.522 193.98 168.387 200.535 170.77 206.6L70.6 306.77C62.0452 303.414 52.5959 303.106 43.8408 305.898C35.0856 308.69 27.5587 314.411 22.5257 322.099C17.4926 329.788 15.2603 338.975 16.2042 348.116C17.148 357.257 21.2104 365.794 27.7083 372.292C34.2063 378.79 42.7434 382.852 51.8842 383.796C61.025 384.74 70.2121 382.507 77.9007 377.474C85.5892 372.441 91.3104 364.914 94.1021 356.159C96.8938 347.404 96.5859 337.955 93.23 329.4L193.4 229.23C202.783 232.923 213.217 232.923 222.6 229.23L282.77 289.4C280.387 295.465 279.522 302.02 280.25 308.495C280.978 314.97 283.277 321.169 286.947 326.553C290.616 331.938 295.546 336.344 301.306 339.389C307.067 342.434 313.484 344.026 320 344.026C326.516 344.026 332.933 342.434 338.694 339.389C344.454 336.344 349.384 331.938 353.053 326.553C356.723 321.169 359.022 314.97 359.75 308.495C360.478 302.02 359.613 295.465 357.23 289.4L441.4 205.23C446.877 207.382 452.762 208.299 458.634 207.915C464.506 207.531 470.221 205.857 475.372 203.011C480.523 200.165 484.982 196.217 488.432 191.45C491.882 186.682 494.237 181.212 495.33 175.43C496.423 169.648 496.227 163.696 494.756 157.998C493.284 152.3 490.574 146.997 486.817 142.467C483.061 137.938 478.352 134.292 473.025 131.792C467.698 129.291 461.885 127.996 456 128V128Z" />
										</svg>
									</i>
									<span className="text nav-text">
										{t("Analytics-sidebar")}
									</span>
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/notificacoes" className="sidebar-link">
									<i className="bx bx-home-alt icon-sidebar">
										<svg
											width="25"
											height="25"
											viewBox="0 0 24 24"
											className="sidebar-svg"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" />
										</svg>
									</i>
									<span className="text nav-text">
										{t("Notifications-sidebar")}
									</span>
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/Pedidos" className="sidebar-link">
									<i className="bx bx-home-alt icon-sidebar">
										<svg
											width="25"
											height="25"
											viewBox="0 0 24 24"
											className="sidebar-svg"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3 13.5L2.25 12H7.5L6.9 10.5H2L1.25 9H9.05L8.45 7.5H1.11L0.25 6H4C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18V8H21L24 12V17H22C22 17.7956 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20C18.2044 20 17.4413 19.6839 16.8787 19.1213C16.3161 18.5587 16 17.7956 16 17H12C12 17.7956 11.6839 18.5587 11.1213 19.1213C10.5587 19.6839 9.79565 20 9 20C8.20435 20 7.44129 19.6839 6.87868 19.1213C6.31607 18.5587 6 17.7956 6 17H4V13.5H3ZM19 18.5C19.3978 18.5 19.7794 18.342 20.0607 18.0607C20.342 17.7794 20.5 17.3978 20.5 17C20.5 16.6022 20.342 16.2206 20.0607 15.9393C19.7794 15.658 19.3978 15.5 19 15.5C18.6022 15.5 18.2206 15.658 17.9393 15.9393C17.658 16.2206 17.5 16.6022 17.5 17C17.5 17.3978 17.658 17.7794 17.9393 18.0607C18.2206 18.342 18.6022 18.5 19 18.5ZM20.5 9.5H18V12H22.46L20.5 9.5ZM9 18.5C9.39782 18.5 9.77936 18.342 10.0607 18.0607C10.342 17.7794 10.5 17.3978 10.5 17C10.5 16.6022 10.342 16.2206 10.0607 15.9393C9.77936 15.658 9.39782 15.5 9 15.5C8.60218 15.5 8.22064 15.658 7.93934 15.9393C7.65804 16.2206 7.5 16.6022 7.5 17C7.5 17.3978 7.65804 17.7794 7.93934 18.0607C8.22064 18.342 8.60218 18.5 9 18.5Z" />
										</svg>
									</i>
									<span className="text nav-text">{t("Orders-sidebar")}</span>
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/calendario" className="sidebar-link">
									<i className="bx bx-home-alt icon-sidebar">
										<svg
											width="25"
											height="25"
											className="sidebar-svg"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6C3 5.45 3.19567 4.97933 3.587 4.588C3.979 4.196 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.021 4.196 20.413 4.588C20.8043 4.97933 21 5.45 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.021 21.8043 19.55 22 19 22H5ZM5 20H19V10H5V20Z" />
										</svg>
									</i>
									<span className="text nav-text">{t("Calendar-sidebar")}</span>
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/receita" className="sidebar-link">
									<i className="bx bx-home-alt icon-sidebar">
										<svg
											width="26"
											height="26"
											viewBox="0 0 24 24"
											className="sidebar-svg"
										>
											<path d="M11.025 21V18.85C10.1416 18.65 9.37928 18.2667 8.73795 17.7C8.09595 17.1333 7.62495 16.3333 7.32495 15.3L9.17495 14.55C9.42495 15.35 9.79595 15.9583 10.288 16.375C10.7793 16.7917 11.425 17 12.225 17C12.9083 17 13.4876 16.846 13.963 16.538C14.4376 16.2293 14.675 15.75 14.675 15.1C14.675 14.5167 14.4916 14.054 14.125 13.712C13.7583 13.3707 12.9083 12.9833 11.575 12.55C10.1416 12.1 9.15828 11.5627 8.62495 10.938C8.09162 10.3127 7.82495 9.55 7.82495 8.65C7.82495 7.56667 8.17495 6.725 8.87495 6.125C9.57495 5.525 10.2916 5.18333 11.025 5.1V3H13.025V5.1C13.8583 5.23333 14.546 5.53733 15.088 6.012C15.6293 6.48733 16.025 7.06667 16.275 7.75L14.425 8.55C14.225 8.01667 13.9416 7.61667 13.575 7.35C13.2083 7.08333 12.7083 6.95 12.075 6.95C11.3416 6.95 10.7833 7.11267 10.4 7.438C10.0166 7.76267 9.82495 8.16667 9.82495 8.65C9.82495 9.2 10.075 9.63333 10.575 9.95C11.075 10.2667 11.9416 10.6 13.175 10.95C14.325 11.2833 15.196 11.8123 15.788 12.537C16.3793 13.2623 16.675 14.1 16.675 15.05C16.675 16.2333 16.325 17.1333 15.625 17.75C14.925 18.3667 14.0583 18.75 13.025 18.9V21H11.025Z" />
										</svg>
									</i>
									<span className="text nav-text">Receita</span>
								</Link>
							</li>
						</ul>
					</div>

					<div className="bottom-content">
						<li className="">
							<a className="sidebar-link">
								<i className="bx bx-log-out icon-sidebar">
									<svg
										className="sidebar-svg"
										width="25"
										height="26"
										viewBox="0 0 19 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M3 16H5V18H17V2H5V4H3V1C3 0.734784 3.10536 0.48043 3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0H18C18.2652 0 18.5196 0.105357 18.7071 0.292893C18.8946 0.48043 19 0.734784 19 1V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V16ZM5 9H12V11H5V14L0 10L5 6V9Z" />
									</svg>
								</i>
								<span className="text nav-text">Logout</span>
							</a>
						</li>

						<li className="mode">
							<div className="sun-moon">
								<i className="bx bx-moon icon-sidebar moon">
									<svg
										className="sidebar-svg"
										width="25"
										height="25"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 2V1M11 21V20M20 11H21M1 11H2M17.5 4.5L19 3M3 19L4.5 17.5M3 3L4.5 4.5M17.5 17.5L19 19"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
										/>
										<path
											d="M11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</i>
								<i className="bx bx-sun icon-sidebar sun">
									<svg
										className="sidebar-svg"
										width="25"
										height="25"
										viewBox="0 0 136 136"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M71.4462 135.935C52.309 135.935 34.3528 128.517 20.8848 115.05C7.41681 101.582 1.67326e-06 83.625 1.67326e-06 64.4876C-0.00285518 51.2858 3.65259 38.3414 10.5606 27.0911C17.4686 15.8409 27.3589 6.7249 39.1339 0.754999C40.3453 0.137463 41.7117 -0.10958 43.0627 0.0447072C44.4136 0.198995 45.6892 0.747779 46.7302 1.62255C47.7712 2.49733 48.5315 3.65934 48.9161 4.96354C49.3007 6.26773 49.2927 7.65633 48.893 8.956C45.533 19.8089 45.2028 31.3738 47.938 42.4007C50.6733 53.4277 56.37 63.4976 64.4126 71.5221C70.1842 77.3366 77.0518 81.9486 84.6179 85.091C92.1839 88.2334 100.298 89.8439 108.491 89.8292C114.758 89.8339 120.99 88.8939 126.978 87.0408C128.277 86.6408 129.666 86.6326 130.97 87.0172C132.275 87.4017 133.437 88.162 134.312 89.2031C135.187 90.2442 135.735 91.52 135.89 92.8711C136.044 94.2222 135.797 95.5888 135.179 96.8002C129.209 108.575 120.093 118.466 108.843 125.374C97.5925 132.282 84.6481 135.937 71.4462 135.935ZM38.8866 11.2633C29.7558 16.8188 22.2132 24.6367 16.9885 33.9608C11.7638 43.2849 9.03375 53.7995 9.0625 64.4876C9.0625 98.8863 37.0475 126.872 71.4462 126.872C82.1343 126.901 92.649 124.171 101.973 118.946C111.297 113.721 119.115 106.179 124.671 97.048C119.365 98.2759 113.937 98.8948 108.491 98.8925C99.1082 98.9104 89.8147 97.067 81.1487 93.4689C72.4827 89.8708 64.6165 84.5896 58.0054 77.931C49.4168 69.3587 43.1544 58.7392 39.8093 47.0748C36.4641 35.4105 36.1466 23.0861 38.8866 11.265V11.2633Z" />
									</svg>
								</i>
							</div>
							<span className="mode-text text">Dark mode</span>

							<div
								className="toggle-switch "
								onClick={(e) => {
									darkMode();
								}}
							>
								<span className="switch"></span>
							</div>
						</li>
					</div>
				</div>
			</nav>
		</div>
	);
}
