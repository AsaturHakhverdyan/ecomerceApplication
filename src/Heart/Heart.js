import s from "./Heart.module.scss";
import { BASE_URL, LOCAL_STORAGE_KEYS } from "../constants/constatns";
import { useEffect, useState } from "react";
import axios from "axios";
import { WishlistItem } from "./WishlistItem";

const Heart = () => {
	const [heartSelect, setHeratSelect] = useState([]);
	const jwt_cookie = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_COOKIE);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(
					`${BASE_URL}/wp-json/wc/store/v1/cart?cookie=${jwt_cookie}`
				);
				if (!data) {
					return;
				}
				setHeratSelect(data.items);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [jwt_cookie]);

	return (
		<div className={s.par}>
			<div>
				{heartSelect.length ? (
					heartSelect.map(item => (
						<WishlistItem
							key={item.id}
							item={item}
							setHeratSelect={setHeratSelect}
						/>
					))
				) : (
					<div>
						<p>Wishlist is empty</p>
					</div>
				)}
			</div>
		</div>
	);
};
export default Heart;
