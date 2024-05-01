import React from "react";
import s from "./login.module.scss";

export const SignUp = () => {
	return (
		<form>
			<label htmlFor="login">Էլ․ հասցե</label>
			<input
				type="text"
				id="login"
				placeholder="login"
			/>
			<button className={s.btn}>Առաջ</button>
		</form>
	);
};
