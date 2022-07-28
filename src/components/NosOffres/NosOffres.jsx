import React from 'react';

import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import img_offre1 from "../images/img_offre1.png";
import img_offre2 from "../images/img_offre2.png";
import img_offre3 from "../images/img_offre3.png";

function NosOffres(props) {
    return (
        <div id="NosOffres">
            <div id="NosOffres_title">
            <h2>Nos offres</h2>
            <p>5 offres d'emploi disponibles</p>
            </div>
            <Container id="NosOffres_data">

                <Row>
                    <Col className="col_img"><img src={img_offre1} alt="img_offre1" className='img_offre'/></Col>
                    <Col>
                        <p className="offre-titre">Ingénieur en  électromécanique</p>
                        <Row className='offre_info_glimpse'>
                            <Col className='Type_Contract'>CDI</Col>
                            <Col className='localisation'>Sousse-Tunisie</Col>
                            <Col className='date_publication'>Publiée il ya 54 minutes</Col>
                        </Row>
                    </Col>
                    <Col><Button variant="outline-dark" id="NosOffres_button">voir l'offre</Button></Col>
                </Row>

                

                <Row>
                    <Col className="col_img"><img src={img_offre1} alt="img_offre1" className='img_offre'/></Col>
                    <Col>
                        <p className="offre-titre">Consultant Cloud/Devops (H/F)</p>
                        <Row className='offre_info_glimpse'>
                            <Col className='Type_Contract'>CDI</Col>
                            <Col className='localisation'>Sousse-Tunisie</Col>
                            <Col className='date_publication'>Publiée il ya 6 jours</Col>
                        </Row>
                    </Col>
                    <Col><Button variant="outline-dark"  id="NosOffres_button">voir l'offre</Button></Col>
                </Row>




                <Row>
                    <Col className="col_img"><img src={img_offre2} alt="img_offre2" className='img_offre'/></Col>
                    <Col>
                        <p className="offre-titre">Testeur QA Web & Mobile</p>
                        <Row className='offre_info_glimpse'>
                            <Col className='Type_Contract'>CDI</Col>
                            <Col className='localisation'>Sousse-Tunisie</Col>
                            <Col className='date_publication'>Publiée il ya 1 semaine</Col>
                        </Row>
                    </Col>
                    <Col><Button variant="outline-dark"  id="NosOffres_button">voir l'offre</Button></Col>
                </Row>


                <Row>
                    <Col className="col_img"><img src={img_offre3} alt="img_offre3" className='img_offre'/></Col>
                    <Col>
                        <p className="offre-titre">Développeur WEB full stack Symfony 3/4 (H/F)</p>
                        <Row className='offre_info_glimpse'>
                            <Col className='Type_Contract'>CDI</Col>
                            <Col className='localisation'>Sousse-Tunisie</Col>
                            <Col className='date_publication'>Publiée il ya 3 heures</Col>
                        </Row>
                    </Col>
                    <Col><Button variant="outline-dark"  id="NosOffres_button">voir l'offre</Button></Col>
                </Row>

            </Container>

        </div>
    );
} export default NosOffres;