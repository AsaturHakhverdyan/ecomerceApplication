import { Link } from "react-router-dom";
import s from "./Footer.module.scss";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
	return (
		<footer>
			<div className={s.informaiton}>
				<a href="tel:+374-98-33-33-23">TEL: +374-98-33-33-23</a>
				<Link to={"https://facebook.com"}>
					<FaFacebookSquare className={s.icons} />
				</Link>
			</div>
		</footer>
	);
}
export default Footer;
