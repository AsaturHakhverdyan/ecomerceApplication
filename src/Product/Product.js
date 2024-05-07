import { useEffect, useState } from "react";
import Button from "../Custom/Button";
import s from "./Product.module.scss";
import axios from "axios";
import { BASE_URL, TEL } from "../constants/constatns";
import { HeartButton } from "../components/HeartButton";

function Product({ pathname }) {
	const [currentItem, setCurrentItem] = useState([]);

	useEffect(() => {
		let id = pathname.split("/").join("");
		(async () => {
			const { data } = await axios.get(
				`${BASE_URL}/wp-json/single/product?id=${id}`
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
					<div>
						<h1>{currentItem?.name}</h1>
						<h3>{currentItem?.price}֏</h3>
						<h5>
							{currentItem?.sale_price ? currentItem?.sale_price + "֏" : ""}
						</h5>
					</div>
					<div>
						<p>պատվիրելու համար </p>
						<p className={s.tel}>
							<a href="tel:+373 00 00 00">{TEL}</a>
						</p>
					</div>
					<div className={s.instock}>
						{currentItem.stock_status === "instock" ? (
							<p>Առկա է</p>
						) : (
							<p>Առկա չէ</p>
						)}
						<div className={s.btn}>
							<HeartButton product={currentItem} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
