import cls from './Header.module.css'
import logo from './img/logo.svg'

const Header = () => {
    return (
        <header className={cls.header}>
            <span>
                <img className={cls.logo} src={logo}/>
            </span>
            <span className={cls.text}>Social</span>
        </header>
    );
}

export default Header;