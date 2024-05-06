import React, { useState } from "react";
import s from "./login.module.scss";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { LOCAL_STORAGE_KEYS } from "../constants/constatns";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Login = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [showPass, toggleShowPass] = useState(false);
	const navigate = useNavigate();

	const userLogin = async event => {
		event.preventDefault();
		if (login !== "" && password !== "") {
			try {
				const { data } = await axios.post(
					`https://payl.10web.cloud/wp-json/user-route/generate_auth_cookie/?email=${login}&password=${password}`
				);
				if (data?.cookie) {
					navigate("/");
					localStorage.setItem(LOCAL_STORAGE_KEYS.JWT_COOKIE, data.cookie);
				}
			} catch (err) {
				console.error(err);
			}
		}
	};

	return (
		<form onSubmit={event => userLogin(event)}>
			<label htmlFor="login">Էլ․ հասցե</label>
			<input
				type="text"
				id="login"
				placeholder="login"
				value={login}
				onChange={e => setLogin(e.target.value)}
			/>
			<label htmlFor="password">Գաղտնաբառ</label>
			<div className={s.showIcons}>
				<input
					id="password"
					placeholder="password"
					type={!showPass ? "password" : "text"}
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<div
					className={s.showIcon}
					onClick={() => toggleShowPass(prev => !prev)}
				>
					{!showPass ? <FaRegEyeSlash /> : <FaRegEye />}
				</div>
			</div>
			<button
				type="submit"
				className={s.btn}
			>
				Մուտք
			</button>
		</form>
	);
};
