import s from "./Footer.module.scss";
import {
	FaFacebookSquare,
	FaInstagram,
	FaYoutube,
	FaTelegram,
} from "react-icons/fa";
function Footer() {
	return (
		<footer>
			<div>
				<h5>Tablets</h5>
				<h6>Samsung</h6>
				<h6>Apple</h6>
				<h6>Xiaomi</h6>
			</div>
			<div>
				<h5>Phones</h5>
				<h6>Apple</h6>
				<h6>OnePlus</h6>
				<h6>Huawei</h6>
				<h6>Google</h6>
				<h6>Realme</h6>
			</div>
			<div>
				<h5>Watches</h5>
				<h6>Apple</h6>
				<h6>Samsung</h6>
				<h6>Huawei</h6>
				<h6>Xiaomi</h6>
			</div>
			<div>
				<h5>Accessories</h5>
				<h6>Flash Drive</h6>
				<h6>SD Cards</h6>
				<h6>Cases</h6>
				<h6>Holders</h6>
			</div>
			<div className={s.informaiton}>
				<a href="tel:+374-98-33-33-23">+374-98-33-33-23</a>
				<FaFacebookSquare className={s.icons} />
				<FaInstagram className={s.icons} />
				<FaYoutube className={s.icons} />
				<FaTelegram className={s.icons} />
				<h5>Work schedule</h5>
				<h6>Mon-Sat: 10:00-20:00</h6>
				<h6>Sunday: 11:00-19:00</h6>
				<img src="https://yerevanmobile.am/static/version1648796224/frontend/Magento/ymobile/en_US/images/visa.png" />
				<img src="https://yerevanmobile.am/static/version1648796224/frontend/Magento/ymobile/en_US/images/master.png" />
				<img src="https://yerevanmobile.am/static/version1648796224/frontend/Magento/ymobile/en_US/images/arca.png" />
				<img src="https://yerevanmobile.am/static/version1648796224/frontend/Magento/ymobile/en_US/images/maestro.png" />
			</div>
		</footer>
	);
}
export default Footer;
