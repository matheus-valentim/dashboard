import "./transacoes.css";
import { useTranslation } from "react-i18next";

export default function Transacoes() {
	const { t } = useTranslation();

	const rows = [
		{
			id: 1143155,
			product: "Acer Nitro 5",
			img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "John Smith",
			date: "1 March",
			amount: 785,
			method: "Cash on Delivery",
			status: "Approved",
		},
		{
			id: 2235235,
			product: "Playstation 5",
			img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
			customer: "Michael Doe",
			date: "1 March",
			amount: 900,
			method: "Online Payment",
			status: "Pending",
		},
		{
			id: 2342353,
			product: "Redragon S101",
			img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "John Smith",
			date: "1 March",
			amount: 35,
			method: "Cash on Delivery",
			status: "Pending",
		},
		{
			id: 2357741,
			product: "Razer Blade 15",
			img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "Jane Smith",
			date: "1 March",
			amount: 920,
			method: "Online",
			status: "Approved",
		},
		{
			id: 2342355,
			product: "ASUS ROG Strix",
			img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "Harold Carol",
			date: "1 March",
			amount: 2000,
			method: "Online",
			status: "Pending",
		},
	];
	return (
		<table className="table" width="100%" aria-label="simple table">
			<thead>
				<tr>
					<th className="tableCell">{t("Tracking ID-transacoes")}</th>
					<th className="tableCell">{t("Product-transacoes")}</th>
					<th className="tableCell">{t("Customer-transacoes")}</th>
					<th className="tableCell">{t("Date-transacoes")}</th>
					<th className="tableCell">{t("Amount-transacoes")}</th>
					<th className="tableCell">{t("Payment Method-transacoes")}</th>
					<th className="tableCell">{t("Status-transacoes")}</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr key={row.id} className="tablehover">
						<td className="tableCell">{row.id}</td>
						<td className="tableCell">
							<div className="cellWrapper">
								<img src={row.img} alt="" className="image-transacoes" />
								{row.product}
							</div>
						</td>
						<td className="tableCell">{row.customer}</td>
						<td className="tableCell">{row.date}</td>
						<td className="tableCell">{row.amount}</td>
						<td className="tableCell">{row.method}</td>
						<td className="tableCell">
							<span className={`status ${row.status}`}>{row.status}</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
