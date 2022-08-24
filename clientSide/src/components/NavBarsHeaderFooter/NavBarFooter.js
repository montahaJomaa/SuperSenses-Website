import logo_supersenses from "../images/logo_supersenses_white copy.png";
import logo_facebook from "../images/logo_facebook.png";
import logo_instagram from "../images/logo_instagram.png";
import logo_linkedIn from "../images/logo_linkedIn.png";
import { Link } from "react-router-dom";
const NavbarFooter = () => {

    return (
        <div id="supersenses-footer">
            <div className="container">
                <div className="row flex-footer">
                    
                    <div className="col-md-4 logo-footer-container align-self-end text-center">
                        <a href="#top">
                            <img src={logo_supersenses} className="logo-footer" alt="Super Senses Logo" /></a>
                    </div>
                    <div className="col-md-4 contact-container align-self-end text-center">
                        <div>
                            <a href="EspaceCarriere"  className="contact-link">
                                Espace carrière
                            </a>
                        </div>
                        <div>
                            <a href="ContactezNous" className="contact-link">
                                Contactez nous
                            </a>
                        </div>
                        <div>
                            <a href="tel:+21692469629" className="contact-link">
                                +216 92 469 629
                            </a>
                        </div>
                        <div>
                            <a href="mailto:contact@supersenses.tn" className="contact-link">
                                contact@supersenses.tn
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 social-media-container align-self-end text-center">
                        <div className="d-flex justify-content-center">
                            <div className="footer-socials-title">
                                Trouvez-nous sur
                            </div>
                            <div className="footer-social-icon">
                                <a href="https://www.facebook.com/SuperSenses.TN/">
                                    <img src={logo_facebook} alt="Facebook" />
                                </a>
                            </div>
                            <div className="footer-social-icon">
                                <a href="https://www.linkedin.com/company/super-senses-tn/">
                                    <img src={logo_linkedIn} alt="Linkedin" />
                                </a>
                            </div>
                            <div className="footer-social-icon">
                                <img src={logo_instagram} alt="Instagram" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copy-right">
                    SuperSenses &copy;2022 Tous droit réservés
                </div>
            </div>
        </div>
    );

};

export default NavbarFooter;