import './Header.css'

import logo from '../../assets/img/logo.png'
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
                        <li><NavLink to='/'>Home</NavLink></li>
                        {/* <li><NavLink to='/game'>Game</NavLink></li> */}
                        <li><NavLink to='/about'>About</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}