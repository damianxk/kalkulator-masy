import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.Header}>
       <h1 className={css.HeaderText}>Kalkulator masy Ulamex</h1>
    </div>
  );
};

export default Header;
