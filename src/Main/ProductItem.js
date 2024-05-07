import React from "react";
import s from "./Main.module.scss";

import { Link } from "react-router-dom";
import { HeartButton } from "../components/HeartButton";

export const ProductItem = ({ product, index }) => {
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
				<HeartButton product={product} />
			</div>
		</div>
	);
};
