import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/theme/themeSlice";
import { getTheme } from "../../redux/theme/themeSelector";
import s from "./SwitchTheme.module.scss";

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  return (
    <div>
      {theme === "light" ? (
        <button
          className={s.btnD}
          onClick={() => dispatch(changeTheme("dark"))}
        >
          <span role="img" aria-label="moon">
            ☀
          </span>
        </button>
      ) : (
        <button
          onClick={() => dispatch(changeTheme("light"))}
          className={s.btnL}
        >
          <span role="img" aria-label="sun">
            ☾
          </span>
        </button>
      )}
    </div>
  );
};

export default SwitchTheme;
