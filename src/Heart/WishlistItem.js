import React, { useState } from "react";
import s from "./Heart.module.scss";
import { MdDeleteOutline } from "react-icons/md";
import Spiner from "../loader/Spiner";
import { getNonce } from "../utiles/utiles";
import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants/constatns";

export const WishlistItem = ({ item, setHeratSelect }) => {
	const [isLoading, setIsLoading] = useState(false);
	const jwt_cookie = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_COOKIE);

	const removeItemAction = async key => {
		try {
			setIsLoading(true);
			let nonce = await getNonce();
			if (nonce) {
				const { data } = await axios.post(
					`https://payl-dev.10web.cloud/wp-json/wc/store/v1/cart/remove-item?cookie=${jwt_cookie}`,
					{ key },
					{
						headers: {
							nonce,
						},
					}
				);
				setHeratSelect(data.items);
				setIsLoading(false);
			}
		} catch (error) {
			console.error(error.response.data);
			setIsLoading(false);
		}
	};
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
					{item.prices.regular_price} <span>{item.prices.currency_symbol}</span>
				</p>
			</div>
			<div
				className={s.remove}
				onClick={() => removeItemAction(item.key)}
			>
				{isLoading ? (
					<Spiner isLoading={isLoading} />
				) : (
					<MdDeleteOutline className={s.removeIcon} />
				)}
			</div>
		</div>
	);
};
