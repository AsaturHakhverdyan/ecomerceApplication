import React, { useState } from "react";
import Spiner from "../loader/Spiner";
import { getNonce } from "../utiles/utiles";
import axios from "axios";
import { BASE_URL, LOCAL_STORAGE_KEYS } from "../constants/constatns";
import { FaHeart } from "react-icons/fa";
import s from "../Main/Main.module.scss";

export const HeartButton = ({ product }) => {
	const [isLoading, setIsLoading] = useState(false);
	const jwt_cookie = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_COOKIE);
	async function addToHeart(product) {
		try {
			setIsLoading(true);
			let nonce = await getNonce();
			if (nonce) {
				const data = await axios.post(
					`${BASE_URL}/wp-json/wc/store/v1/cart/add-item?cookie=${jwt_cookie}`,
					{
						id: product.id,
						quantity: 1,
					},
					{
						headers: {
							nonce,
						},
					}
				);
				console.log(data);
				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	}
	return (
		<div>
			<div onClick={() => addToHeart(product)}>
				{isLoading ? (
					<Spiner isLoading={isLoading} />
				) : (
					<FaHeart className={s.Heart} />
				)}
			</div>
		</div>
	);
};
