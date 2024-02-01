import css from './Footer.module.css';

const Footer = () => {
    return(
        <footer>
            <span className={css.footerText}>*Każdy wynik jest to masa przypuszczalna - wynik nie uwzględnia tolerancji wykonania</span>  
        </footer>
    )
}

export default Footer;