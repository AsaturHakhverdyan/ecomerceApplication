import HeaderTopLanguages from "./HeaderTopLanguages";
import HeaderTopNav from "./HeaderTopNav";
import s from "../HeaderTop/HeaderTop.module.scss";

function HeaderTop() {
  return (
    <div className={s.headerTop}>
      <HeaderTopNav />
      <HeaderTopLanguages />
    </div>
  );
}
export default HeaderTop;
