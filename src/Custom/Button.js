import { Link } from "react-router-dom";
import style from "./Button.module.scss";
import { useTranslation } from "../context/languageContext";

function Button() {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/">
        <button className={style.cButton}>
            {/* Գլխավոր */}
            {t('Home')}
        </button>
      </Link>
    </div>
  );
}
export default Button;
