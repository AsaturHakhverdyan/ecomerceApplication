import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LOCAL_STORAGE_KEYS } from "../constants/constatns";
import s from "./Layout.module.scss";

const Layout = () => {
	const { pathname } = useLocation();
	const jwt_cookie = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_COOKIE);
	const navigate = useNavigate();
	return (
		<div className={s.section}>
			{pathname !== "/login" ? <Header /> : null}
			{jwt_cookie ? <Outlet /> : navigate("./login")}
			<div className={s.footer}>
				{pathname !== "/login" ? <Footer /> : null}
			</div>
		</div>
	);
};

export default Layout;
