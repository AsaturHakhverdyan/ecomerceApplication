import { useState } from "react";
import { Link } from "react-router-dom";
import s from "../HeaderTop/HeaderTopNav.module.scss";
import { FaBars, FaMixer } from "react-icons/fa";
import { useTranslation } from "../../context/languageContext";



function HeaderTopNav() {
  const [active, setActive] = useState(s.navMenu);
  const [icon, setIcon] = useState(true);
  const { t } = useTranslation();
  
  const navToggle = () => {
    active === s.navMenu
      ? setActive(`${s.navMenu} ${s.active}`)
      : setActive(s.navMenu);
    setIcon(!icon);
  };

  window.onscroll = () => {
    setActive(s.navMenu);
  };

  return (
    <nav className={s.nav}>
      <div className={active}>
        <Link to="/abouteus">{t("aboutUs")}</Link>
        <Link to="/contact">{t("contactUs")}</Link>
        <Link to="/services">{t("service")}</Link>
        <Link to="/credit">{t("creditconditions")}</Link>
      </div>
      <div onClick={navToggle} className={s.navToggle}>
        {(icon && <FaBars />) || <FaMixer />}
      </div>
    </nav>
  );
}
export default HeaderTopNav;
