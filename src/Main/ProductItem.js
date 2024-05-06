import React, { useState } from "react";
import s from "./Main.module.scss";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spiner from "../loader/Spiner";
import { getNonce } from "../utiles/utiles";
import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants/constatns";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/slices/cartSlice";

export const ProductItem = ({ product, index }) => {
	const [isLoading, setIsLoading] = useState(false);
	const jwt_cookie = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_COOKIE);
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);

	async function addToHeart(product) {
		try {
			setIsLoading(true);
			let nonce = await getNonce();
			if (nonce) {
				await axios.post(
					`https://payl-dev.10web.cloud/wp-json/wc/store/v1/cart/add-item?cookie=${jwt_cookie}`,
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
				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	}

	function addItemToCard(product) {
		const currentProduct = cart.filter(item => item.id === product.id);
		return !currentProduct.length && dispatch(setCart(product));
	}

	return (
		<div
			key={product.id}
			className={s.product}
		>
			<Link
				to={`/${product.id}`}
				key={product.id}
				className={s.image}
			>
				<img
					src={product.image_url[0]}
					alt={index}
				/>
			</Link>
			<div className={s.iconsBox}>
				<p>{product.name}</p>
				<p>{product.price} Դ</p>
				<div>
					<div onClick={() => addItemToCard(product)}>
						<FaCartPlus
							className={s.cardPlus}
							key={product.id}
						/>
					</div>
					<div onClick={() => addToHeart(product)}>
						{isLoading ? (
							<Spiner isLoading={isLoading} />
						) : (
							<FaHeart className={s.Heart} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
