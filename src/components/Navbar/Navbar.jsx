import {NavLink} from 'react-router-dom'
import cls from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={cls.navbar}>
            <div className={`${cls.item}`}>
                <NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to="dialogs" activeClassName={cls.active}>Messages</NavLink>
            </div>
            <div className={cls.item}>
                <a>News</a>
            </div>
            <div className={cls.item}>
                <a>Music</a>
            </div>
            <div className={cls.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;