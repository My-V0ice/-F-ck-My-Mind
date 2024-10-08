import {NavLink} from "react-router-dom";
import './Header.scss';
import logo from '../../../Shared/assets/icons/logo.svg';

export function Header() {

    const activeLink: string = 'item__text list__item-active';
    const normalLink: string = 'item__text';

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <NavLink to={'/'}>
                        <img src={logo} className="header__logo"/>
                    </NavLink>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <NavLink to={'/'} className={({isActive}) => isActive ? activeLink : normalLink}>
                                <li className="list__item">
                            <span className="item__text">
                                Main
                            </span>
                                </li>
                            </NavLink>
                            <NavLink to={'/gallery'} className={({isActive}) => isActive ? activeLink : normalLink}>
                                <li className="list__item">
                        <span className="item__text">
                            Gallery
                        </span>
                                </li>
                            </NavLink>
                            <NavLink to={'/projects'} className={({isActive}) => isActive ? activeLink : normalLink}>
                                <li className="list__item">
                            <span className="item__text">
                                Projects
                            </span>
                                </li>
                            </NavLink>
                            <NavLink to={'/certifications'} className={({isActive}) => isActive ? activeLink : normalLink}>
                                <li className="list__item">
                            <span className="item__text">
                                Certifications
                            </span>
                                </li>
                            </NavLink>
                            <NavLink to={'/contact'} className={({isActive}) => isActive ? activeLink : normalLink}>
                                <li className="list__item">
                            <span className="item__text">
                                Contact
                            </span>
                                </li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}