import "./devices.css";
import ProgressBar from "../progress-Bar/Progress-Bar";

export default function Devices() {
	const data = [
		{
			device: "Mobile",
			color: "blue",
			completed: 60,
		},
		{ device: "PC", color: "red", completed: 30, icon: "<TabletMacRounded/>" },
		{
			device: "Tablet",
			color: "green",
			completed: 5,
		},
		{
			device: "TV",
			color: "yellow",
			completed: 5,
		},
	];

	return (
		<div className="Devices">
			<div className="devices-container">
				<div>
					<h4 className="devices-title">Sales report by devices</h4>
				</div>
				{data.map((dado) => {
					return (
						<div className="device-container">
							<div>
								<p className="device-p">{dado.device}</p>
							</div>

							<div className="device-wrapper">
								<ProgressBar bgcolor={dado.color} completed={dado.completed} />
								<p>{dado.completed}%</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
