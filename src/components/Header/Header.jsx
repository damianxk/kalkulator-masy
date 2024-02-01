import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.Header}>
      <a href="/" style={{ textDecoration: "none" }}>
        <img src="/logo.png" alt="logo kalkulatora stali" width="250" />
      </a>
    </div>
  );
};

export default Header;
