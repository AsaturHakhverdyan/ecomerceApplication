import { useEffect, useState } from "react";
import Button from "../Custom/Button";
import s from "./Product.module.scss";
import axios from "axios";

function Product({ pathname }) {
	const [currentItem, setCurrentItem] = useState([]);

	useEffect(() => {
		let id = pathname.split("/").join("");
		(async () => {
			const { data } = await axios.get(
				`https://payl.10web.cloud/wp-json/single/product?id=${id}`
			);
			setCurrentItem(data);
		})();
	}, [pathname]);

	return (
		<div>
			<Button />
			<div className={s.containerMain}>
				<div className={s.leftInfo}>
					<img
						src={currentItem?.image_url ? currentItem?.image_url[0] : {}}
						alt="#"
					></img>
				</div>
				<div className={s.rightInfo}>
					<h1>{currentItem?.name}</h1>
					<h3>{currentItem?.price}֏</h3>
					<h5>
						{currentItem?.sale_price ? currentItem?.sale_price + "֏" : ""}
					</h5>
					<div className={s.instock}>
						{currentItem.stock_status === "instock" ? (
							<p>Առկա է</p>
						) : (
							<p>Առկա չէ</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
