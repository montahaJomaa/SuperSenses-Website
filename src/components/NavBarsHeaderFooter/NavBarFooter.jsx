import React from "react";


import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import logo_supersenses_white from '../images/logo_supersenses_white.png';

import logo_linkedIn from '../images/logo_linkedIn.png';
import logo_facebook from '../images/logo_facebook.png';
import logo_instagram from '../images/logo_instagram.png';
{/*import logo_twitter from './images/logo_twitter.png';*/ }


function NavFooter(props) {

    return (
        <div id="nav-footer" >
            <div className="container">

                <div className='contact_info_FooterNavBar'>
                    <Row>
                        <Col xs={{ order: 'first' }}><img src={logo_supersenses_white} alt="logo_supersenses_white" className='logo_supersenses_white' /></Col>

                        <Col xs>
                            <p id='NavText'>
                                Contactez nous<br />
                                (216) 92 469 629<br />
                                info.supersenses@gmail.com
                            </p>

                            <InputGroup className="mb-3">

                                <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <Button variant="primary" id="button-addon2" style={{ color: 'white', backgroundColor: '#1D4D90', borderColor: '#1D4D90' }} >S'inscrire </Button>

                            </InputGroup>
                        </Col>

                        <Col xs={{ order: 'last' }}>

                            <div id="media_contact">
                                <p id='NavText' className="media_text">Trouvez nous sur</p>

                                <div>

                                    <a href="#LinkedIn"><img src={logo_linkedIn}  className="media_icons"/></a>
                                    <a href="#Facebook"><img src={logo_facebook} className="media_icons"/></a>
                                    <a href="#Instagram"><img src={logo_instagram} className="media_icons"/></a>
                                    {/*<Nav.Link href="#Twitter"><img src={logo_twitter} /></Nav.Link>*/}
                               
                                </div>
                            </div>

                        </Col>

                    </Row>

                </div >

            </div>

            <div className='copyrights'>

                <p id='NavText'>SUPER SENSES &copy;2022 Tous droits réservés</p>

            </div>

        </div>

    );
}
export default NavFooter;