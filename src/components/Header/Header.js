import './Header.css'

import logo from '../../assets/img/logo.png'

export const Header = props => {
    return(
        <header id="header" className="header">
            <div className="container">
                <div className="header__logo">
                    <a href="#">
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>
                <nav className="header__links">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Game</a></li>
                        <li><a href="">Help</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}