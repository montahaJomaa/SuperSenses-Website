import React from 'react';

import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import img_offre1 from "../images/img_offre1.png";
import img_offre2 from "../images/img_offre2.png";
import img_offre3 from "../images/img_offre3.png";

const NosOffres = () => {

    return (
        <div className='NosOffres'>
            <div className='container'>
                <div className='row'>
                    <div className='col' id="boxF">
                        form
                    </div>
                    <div className='col img-thumbnail' id="boxM">
                        <h5 className='text-center'>Nos Offres</h5>
                        <h6 className='text-center'>5 offres d'emploi disponibles</h6>
                        <div className='row'>
                            <div className='col'>
                            <img src={img_offre1} className="w-50"/>
                            </div>
                            <div className="col img-thumbnail shadow w-75">
                                <h6 className='text-center'>Développeur WEB Full Stack Symfony 3/4 (H/F)</h6><br></br><br></br>
                            <div className='row'>
                                <div className='col'>
                                    CDI
                                </div>
                                <div className="col">
                                    Sousse-Tunisie
                                </div>
                                <div className="col">
                                    publié il y a 6 jours
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

};
export default NosOffres;