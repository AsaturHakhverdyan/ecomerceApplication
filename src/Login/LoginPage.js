import { useState } from "react";
import { Login } from "./Login";
import s from "./login.module.scss";
import { SignUp } from "./SignUp";

function LoginPage() {
	const [isLoginShow, toggleLoginShow] = useState(true);
	const style = {
		border: "1px solid blue",
		color: "blue",
	};
	return (
		<section className={s.section}>
			<div>
				<button
					style={isLoginShow ? style : {}}
					onClick={() => toggleLoginShow(true)}
				>
					Մուտք
				</button>
				<button
					style={!isLoginShow ? style : {}}
					onClick={() => toggleLoginShow(false)}
				>
					Գրանցվել
				</button>
			</div>
			<div>{isLoginShow ? <Login /> : <SignUp />}</div>
		</section>
	);
}

export default LoginPage;
