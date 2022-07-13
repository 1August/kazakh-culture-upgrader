import './Footer.css'

export const Footer = props => {
    return(
        <footer id="footer" className="footer">
            <div className="container">
                <div className="footer__thanks">
                    <h5>Thanks for using!</h5>
                    <span className="legal">© All rights reserved. 2022</span>
                </div>
                <div className="footer__links">
                    <a href="#">Help</a>
                    <a href="#">Support us</a>
                </div>
            </div>
        </footer>
    )
}