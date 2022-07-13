import './Header.css'

import logo from '../../assets/img/logo.png'
import info from '../../assets/img/info.png'
import {NavLink} from 'react-router-dom'


export const Header = props => {
    return (
        <header id="header" className="header">
            <div className="container">
                <div className="header__logo">
                    <NavLink to="/">
                        <img src={logo} alt="Logo" />
                    </NavLink>
                </div>
                <nav className="header__links">
                    <ul>
                        <li><NavLink to='/about'><img src={info} alt="Info"/></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}