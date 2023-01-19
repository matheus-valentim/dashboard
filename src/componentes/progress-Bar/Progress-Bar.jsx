export default function ProgressBar({ bgcolor, completed }) {
	const containerStyles = {
		height: 10,
		width: "200px",
		backgroundColor: "#e0e0de",
		borderRadius: 50,
	};

	const fillerStyles = {
		height: "100%",
		width: `${completed}%`,
		backgroundColor: bgcolor,
		borderRadius: "inherit",
		textAlign: "right",
	};

	const labelStyles = {
		padding: 5,
		color: "white",
		fontWeight: "bold",
	};
	return (
		<div style={containerStyles}>
			<div style={fillerStyles}>
				<span style={labelStyles}></span>
			</div>
		</div>
	);
}
