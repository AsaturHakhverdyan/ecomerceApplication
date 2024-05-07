import s from "../HeaderBottom/HeaderBottom.module.scss";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function HeaderBottom() {
	return (
		<div className={s.headerBottom}>
			<Link to={"/"}>
				<span>E-Commerse App</span>
			</Link>
			<div className={s.icons}>
				<Link to="/heart">
					<FaHeart className={s.Heart} />
				</Link>
				<Link to="/login">
					<FaUserAlt className={s.User} />
				</Link>
			</div>
		</div>
	);
}
export default HeaderBottom;
