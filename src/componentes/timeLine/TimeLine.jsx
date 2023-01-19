import "./timeLine.css";
import { useContext } from "react";
import { darkModeContext } from "../../contexts/darkModeProvider";

export default function TimeLine() {
	const { darkModeOn } = useContext(darkModeContext);
	return (
		<div className={darkModeOn ? "timeline" : "timeline white"}>
			<div className="timeline__component">
				<div className="timeline__date timeline__date--right">
					August 30, 2017
				</div>
				<p className="timeline__date timeline__date--right">6:43</p>
			</div>
			<div className="timeline__middle">
				<div className="timeline__point"></div>
			</div>

			<div className="timeline__component timeline__component--flex timeline__component--bg">
				<img
					src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
					className="timeline__img"
				/>
				<div>
					<h2 className="timeline__title">Matheus Figueiredo</h2>
					<p className="timeline__paragraph">
						{" "}
						Matheus created a event in august 21.{" "}
					</p>
				</div>
			</div>
			<div className="timeline__component">
				<div className="timeline__date timeline__date--right">
					August 30, 2017
				</div>
				<p className="timeline__date timeline__date--right">6:43</p>
			</div>
			<div className="timeline__middle">
				<div className="timeline__point"></div>
			</div>

			<div className="timeline__component timeline__component--flex timeline__component--bg">
				<img
					src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
					className="timeline__img"
				/>
				<div>
					<h2 className="timeline__title">Matheus Figueiredo</h2>
					<p className="timeline__paragraph">
						Matheus edited a event in august 21.
					</p>
				</div>
			</div>
			<div className="timeline__component">
				<div className="timeline__date timeline__date--right">
					August 30, 2017
				</div>
				<p className="timeline__date timeline__date--right">6:43</p>
			</div>
			<div className="timeline__middle">
				<div className="timeline__point"></div>
			</div>

			<div className="timeline__component timeline__component--flex timeline__component--bg">
				<img
					src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
					className="timeline__img"
				/>
				<div>
					<h2 className="timeline__title">Matheus Figueiredo</h2>
					<p className="timeline__paragraph">Matheus deleted a product.</p>
				</div>
			</div>
			<div className="timeline__component">
				<div className="timeline__date timeline__date--right">
					August 30, 2017
				</div>
				<p className="timeline__date timeline__date--right">6:43</p>
			</div>
			<div className="timeline__middle">
				<div className="timeline__point"></div>
			</div>

			<div className="timeline__component timeline__component--flex timeline__component--bg">
				<img
					src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
					className="timeline__img"
				/>
				<div>
					<h2 className="timeline__title">Matheus Figueiredo</h2>
					<p className="timeline__paragraph">Matheus edited a product.</p>
				</div>
			</div>
			<div className="timeline__component">
				<div className="timeline__date timeline__date--right">
					August 30, 2017
				</div>
				<p className="timeline__date timeline__date--right">6:43</p>
			</div>
			<div className="timeline__middle">
				<div className="timeline__point"></div>
			</div>

			<div className="timeline__component timeline__component--flex timeline__component--bg">
				<img
					src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
					className="timeline__img"
				/>
				<div>
					<h2 className="timeline__title">Matheus Figueiredo</h2>
					<p className="timeline__paragraph">Matheus created a product.</p>
				</div>
			</div>
			<div className="timeline__component">
				<div className="timeline__date timeline__date--right">
					August 30, 2017
				</div>
				<p className="timeline__date timeline__date--right">6:43</p>
			</div>
			<div className="timeline__middle">
				<div className="timeline__point"></div>
			</div>

			<div className="timeline__component timeline__component--flex timeline__component--bg">
				<img
					src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
					className="timeline__img"
				/>
				<div>
					<h2 className="timeline__title">Matheus Figueiredo</h2>
					<p className="timeline__paragraph">Matheus deleted a account.</p>
				</div>
			</div>
		</div>
	);
}
