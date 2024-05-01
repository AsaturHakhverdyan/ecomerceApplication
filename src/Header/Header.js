import HeaderBottom from "./HeaderBottom/HeaderBottom";
import s from "../Header/Header.module.scss";

function Header() {
	return (
		<div className={s.headerSection}>
			<HeaderBottom />
		</div>
	);
}
export default Header;
