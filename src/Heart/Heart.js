import { MdDeleteOutline } from "react-icons/md";
import s from "./Heart.module.scss";
import { LOCAL_STORAGE_KEYS } from "../constants/constatns";
import { useEffect, useState } from "react";
import axios from "axios";
import { getNonce } from "../utiles/utiles";
function Heart() {
	const [heartSelect, setHeratSelect] = useState([]);
	const jwt_cookie = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_COOKIE);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(
					`https://payl.10web.cloud/wp-json/wc/store/v1/cart?cookie=${jwt_cookie}`
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

	const removeItemAction = async key => {
		try {
			let nonce = await getNonce();
			if (nonce) {
				const { data } = await axios.post(
					`https://payl.10web.cloud/wp-json/wc/store/v1/cart/remove-item?cookie=${jwt_cookie}`,
					{ key },
					{
						headers: {
							nonce,
						},
					}
				);
				setHeratSelect(data.items);
			}
		} catch (error) {
			console.error(error.response.data);
		}
	};
	return (
		<div className={s.par}>
			<div>
				{heartSelect.length ? (
					heartSelect.map(item => {
						return (
							<div
								className={s.heartGeneralDiv}
								key={item.id}
							>
								<img
									src={item.images[0].src}
									alt={item.images[0].name}
								/>
								<div>
									<p>{item.name}</p>
									<p>
										{item.prices.regular_price}{" "}
										<span>{item.prices.currency_symbol}</span>
									</p>
								</div>
								<div
									className={s.remove}
									onClick={() => removeItemAction(item.key)}
								>
									<MdDeleteOutline className={s.removeIcon} />
								</div>
							</div>
						);
					})
				) : (
					<div>
						<p>Wishlist is empty</p>
					</div>
				)}
			</div>
		</div>
	);
}
export default Heart;
