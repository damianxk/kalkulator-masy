import css from "./Header.module.css";
import { ReactComponent as Logo } from "./kalkulator.svg";

const Header = () => {
  return (
    <div className={css.Header}>
      <div className={css.HeaderLogo}>
        <Logo style={{ width: "60px", display: "inline" }} />
        <h1 className={css.HeaderText}>kalkulatormetalu.pl</h1>{" "}
      </div>
      <h2 className={css.h2h2}>
        - Twój niezawodny partner w obliczaniu wagi stali i aluminium
      </h2>
    </div>
  );
};

export default Header;
