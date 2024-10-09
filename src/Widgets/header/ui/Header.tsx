import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.scss';
import logo from '@shared/assets/icons/logo.svg';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className={style.content}>
                        <NavLink to={'/'}>
                            <img src={logo} alt="Lorum" className={style.logo}/>
                        </NavLink>
                        <nav className={style.nav}>
                            <ul className={style.list}>
                                <NavLink to={'/'}
                                         className={({isActive}) => isActive ? style.itemActive : style.itemText}>
                                    <li className={style.item}>
                            <span className={style.itemText}>
                                Main
                            </span>
                                    </li>
                                </NavLink>
                                <NavLink to={'/gallery'}
                                         className={({isActive}) => isActive ? style.itemActive : style.itemText}>
                                    <li className={style.item}>
                        <span className={style.itemText}>
                            Gallery
                        </span>
                                    </li>
                                </NavLink>
                                <NavLink to={'/projects'}
                                         className={({isActive}) => isActive ? style.itemActive : style.itemText}>
                                    <li className={style.item}>
                            <span className={style.itemText}>
                                Projects
                            </span>
                                    </li>
                                </NavLink>
                                <NavLink to={'/certifications'}
                                         className={({isActive}) => isActive ? style.itemActive : style.itemText}>
                                    <li className={style.item}>
                            <span className={style.itemText}>
                                Certifications
                            </span>
                                    </li>
                                </NavLink>
                                <NavLink to={'/contact'}
                                         className={({isActive}) => isActive ? style.itemActive : style.itemText}>
                                    <li className={style.item}>
                            <span className={style.itemText}>
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
}

