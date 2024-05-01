import React, { useState } from "react";
import { useSelector } from "react-redux";
import s from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart() {
	const cart = useSelector(state => state.cart);

	const [itemPrice, setItemPrice] = useState(
		cart.reduce((initial, sum) => initial + sum.price, 0)
	);

	function onAdd(item) {
		setItemPrice(itemPrice + item.price);
	}

	function onDel(item) {
		setItemPrice(itemPrice =>
			item.price ? item.price : itemPrice - item.price
		);
	}

	return (
		<div className={s.cart}>
			<div className={s.parent}>
				{cart.map(item => {
					return (
						<CartItem
							item={item}
							key={item.id}
							priceIncrement={price => setItemPrice(itemPrice + price)}
							priceDecrement={price => setItemPrice(itemPrice - price)}
							onAdd={onAdd}
							onDel={onDel}
						/>
					);
				})}
				{cart.length ? (
					<p className={s.total}>
						{itemPrice < 0 ? setItemPrice(0) : `Total ${itemPrice} Դ`}
					</p>
				) : (
					<span className={s.empty}>Is empty</span>
				)}
			</div>
		</div>
	);
}

export default Cart;
