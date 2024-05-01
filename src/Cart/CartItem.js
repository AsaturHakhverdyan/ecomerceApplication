import { React, useState } from "react";
import s from "./CartItem.module.scss";

function CartItem({ item, priceIncrement, priceDecrement, onAdd, onDel }) {
	const [count, setCount] = useState(1);

	return (
		<div className={s.Buy}>
			<img
				src={item.image_url[0]}
				alt={item.name}
			></img>
			<p>{item.name}</p>
			<p>{item.price} Դ</p>
			<button
				onClick={() => {
					priceIncrement(item.price);
					onAdd(item);
					setCount(count + 1);
				}}
			>
				+
			</button>
			<span>{count}</span>
			<button
				disabled={count === 1}
				onClick={() => {
					priceDecrement(item.price);
					onDel(item);
					setCount(count <= 1 ? 1 : count - 1);
				}}
			>
				-
			</button>
		</div>
	);
}

export default CartItem;
