import s from "./AbouteUs.module.scss";
import Button from "../Custom/Button";
import { useTranslation } from "../context/languageContext";

function AboutUs() {
	const { t } = useTranslation();

	return (
		<div className={s.contentAbouteus}>
			<Button />
			<h2>{t("offer")}</h2>
			<img
				className={s.topimg}
				alt="#"
				src="https://d2xe71nj4xrmst.cloudfront.net/media/business/university-blvd-w-veirs-mill-rd-2-4440-2-UP9Mo5OaeppZlRJT_NM_io5LOD_SXfMGaIqjn0DqmGY.ace9477772ed.jpg"
			/>
			<div>
				<div className={s.flexible}>
					<img
						alt="#"
						src="https://media.istockphoto.com/photos/mobile-smartphone-in-electronic-store-picture-id827502902?k=20&m=827502902&s=612x612&w=0&h=cNl22lTSmDCwOKd5P3E07YBRacffEW0uIFFk0ALmbPM="
					/>
					{t("infoOffer")}
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
