import './AboutPage.css'

import git from '../../assets/img/github-sign.png'
import instagram from '../../assets/img/instagram.png'

export const AboutPage = props => {
    return(
        <section id="aboutPage" className="aboutPage">
            <div className="container">
                <div className="sanzhar">
                    <h1>Sanzhar</h1>
                    <p>
                        <a href="https://github.com/SanXzhar" target={'_blank'}><img src={git} alt="Github"/> Github</a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/sanzhar_abc/" target={'_blank'}><img src={instagram} alt="Instagram"/> Instagram</a>
                    </p>
                </div>
                <div className="maksat">
                    <h1>Maksat</h1>
                    <p>
                        <a href="https://github.com/1August" target={'_blank'}><img src={git} alt="Github"/> Github</a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/iwa_tenshi/" target={'_blank'}><img src={instagram} alt="Instagram"/> Instagram</a>
                    </p>
                </div>
            </div>
        </section>
    )
}