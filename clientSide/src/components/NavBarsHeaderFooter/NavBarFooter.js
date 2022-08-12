import logo_supersenses from "../images/logo_supersenses_white copy.png";
import logo_facebook from "../images/logo_facebook.png";
import logo_instagram from "../images/logo_instagram.png";
import logo_linkedIn from "../images/logo_linkedIn.png";
import { Link } from "react-router-dom";
const NavbarFooter = () => {

    return (
        <div id="navfooter" >
            <div className="row">
                <div className="col">
                    <a href="/"><img src={logo_supersenses} className="w-50 " id="logo_sup" /></a>
                </div>
                <div className="col " id="col_nav">

                    <Link to="EspaceCarriere/" style={{ textDecoration: "none", color: "white" }}>
                        <div className="row" id="espCar">
                            &nbsp;&nbsp; Espace carriere
                        </div>
                    </Link>
                    <Link to="ContactezNous" style={{ textDecoration: "none", color: "white" }}>
                        <div className="row" id="espCar">
                            &nbsp;&nbsp; Contactez nous
                        </div>
                    </Link>
                    <div className="row" id="espCar">
                        &nbsp;&nbsp; +216 92 469 629

                    </div>
                    <div className="row" id="espCar">
                        &nbsp;&nbsp; info@supersenses.tn
                    </div>
                    {/* <div className="row">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">S'inscrire</button>
                            </div>
                        </div>
                    </div> */}
                    <div className="row mt-5" id="copyright_title">
                        SuperSenses &copy;2022 Tous droit réservés
                    </div>
                </div>
                <div className="col" id="SocialMediaIcons">

                    <ul>
                        <li><h6>Trouver nous sur </h6></li>
                        <li> <a href="https://www.facebook.com/SuperSenses.TN/"><img src={logo_facebook} className="" /></a></li>
                        <li><a href="https://www.linkedin.com/company/super-senses-tn/"><img src={logo_linkedIn}  /></a></li>
                        <li><img src={logo_instagram} className="" /></li>
                    </ul>




                </div>
            </div>

        </div>
    );

};

export default NavbarFooter;