import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "redux/lang/langSlice";
import { getLang } from "redux/lang/langSelector";
import style from "./SwitchLang.module.scss";

export default function SwitchLang() {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);
  
  return (
    <select
      className={style.select}
      onChange={(e) => dispatch(changeLang(e.target.value))}
      name="lang"
      value={lang}
    >
      <option value={"en"}>ENG</option>
      <option value={"ua"}>УКР</option>
    </select>
  );
};

