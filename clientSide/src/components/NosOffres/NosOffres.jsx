import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import img_offre1 from "../images/img_offre1.png";
import img_offre2 from "../images/img_offre2.png";
import img_offre3 from "../images/img_offre3.png";
import EspaceCarriereForm from "../EspaceCarriere/EspaceCarriereFom/EspaceCarriereForm";
import { Link } from 'react-router-dom';
const NosOffres = () => {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Embauche', value: '1' },
        { name: 'Stage', value: '2' },

    ];

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })

        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null
            })

    }

    const validateForm = () => {
        const { nomPrenomCandidat, email, numTelephoneCandidat, CVCandidat, LettreMotivationCandidat } = form
        // get new errors
        const newErrors = {}
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //let formatTel = /^\w+([3-9]{2}[0-9]{3}[0-9]{3})+$/;

        if (nomPrenomCandidat === '') newErrors.nomPrenomCandidat =
            'Veuillez entrer votre prénom et votre nom !';
        else if (nomPrenomCandidat.length > 30) newErrors.nomPrenomCandidat =
            'Merci de ne pas dépasser la longueur de 30 lettres!';
        else if (email === '' || !(email.match(regexEmail))) newErrors.email =
            'Veuillez entrer votre adresse email!';
        else if (!(email.match(regexEmail))) newErrors.email =
            'Veuillez entrer une adresse email correcte !';
        //else if (numTelephoneCandidat === '' || !(numTelephoneCandidat.match(formatTel)))
        // newErrors.numTelephoneCandidat = 'Merci d entrer un num tel valide !';

        else if (CVCandidat === '') newErrors.CVCandidat = 'Veuillez entrer votre CV';

        else if (LettreMotivationCandidat === '') newErrors.LettreMotivationCandidat = 'Veuillez entrer votre Lettre de Motivation';


        return newErrors
    }

    const handleSubmit = e => {

        e.preventDefault()

        const formErrors = validateForm()
        //check for errors
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
        } else {
            console.log(form)
            //no errors found ! submit the form

            //dispatch(registerUser(form))

        }
    }
    return (
        <div className='NosOffres'>
            <div className='container'>
                <br></br><br></br><h1 className='text-center' id="textOffre">Espace Carriere</h1>
                <div className='row'>
                    <div className='col' id="boxF">
                        <Form className="Contact_form" >

                            <Row>

                            </Row><br />

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicText" >

                                        <Form.Label>Nom et Prenom :</Form.Label>

                                        <Form.Control type="text" className="Contact_input" controlId="nomPrenomCandidat"
                                            required="required"
                                            value={form.nomPrenomCandidat}
                                            onChange={(e) => setField('nomPrenomCandidat', e.target.value)}
                                            isInvalid={!!errors.nomPrenomCandidat}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.nomPrenomCandidat}
                                        </Form.Control.Feedback>

                                    </Form.Group>

                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >

                                        <Form.Label>Adresse email :</Form.Label>

                                        <Form.Control type="email" className="Contact_input" controlId="email"
                                            value={form.email}
                                            onChange={(e) => setField('email', e.target.value)}
                                            isInvalid={!!errors.email} required="required"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicText" >

                                        <Form.Label>Num telephone:</Form.Label>

                                        <Form.Control type="telephone" className="Contact_input" controlId="numTelephoneCandidat"
                                            value={form.numTelephoneCandidat}
                                            onChange={(e) => setField('numTelephoneCandidat', e.target.value)}
                                            isInvalid={!!errors.numTelephoneCandidat} required="required" />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.numTelephoneCandidat}
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Label>Specialité:</Form.Label>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                            choisissez une option
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu required="required">
                                            <Dropdown.Item href="#/action-1">Web development</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Mobile developement</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">IOT</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">AI</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicText" >
                                        <Form.Label>Curriculum Vitae :</Form.Label>
                                        <Form.Control type="file" className="Contact_input" controlId="CVCandidat"
                                            value={form.CVCandidat}
                                            onChange={(e) => setField('CVCandidat', e.target.value)}
                                            isInvalid={!!errors.CVCandidat} accept=".pdf" required="required" />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.CVCandidat}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicText" >
                                        <Form.Label>Lettre de motivation :</Form.Label>
                                        <Form.Control type="file" className="Contact_input" controlId="LettreMotivationCandidat"
                                            value={form.LettreMotivationCandidat}
                                            onChange={(e) => setField('LettreMotivationCandidat', e.target.value)}
                                            isInvalid={!!errors.LettreMotivationCandidat} accept=".pdf" required="required" />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.LettreMotivationCandidat}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Form.Text className="text-muted" >
                                Super Senses n'utilisera vos informations personnelles que pour fournir le produit
                                ou  le service que vous avez demandé et pour vous contacter avec un contenu connexe
                                susceptible de vous intéresser.
                                Vous pouvez vous désabonner de ces communications à tout moment.<br /> <br />
                            </Form.Text>

                            <Button variant="primary" type="submit" id="SeSoumettre_btn"
                                onClick={handleSubmit}>Postulez</Button>


                        </Form>

                    </div>
                    <div className='col img-thumbnail shadow' id="boxM">
                        <h2 className='text-center'>Nos Offres</h2>
                        <h6 className='text-center'>5 offres d'emploi disponibles</h6>
                        <div className='row mt-5'>
                            <div className='col'>
                                <img src={img_offre1} className="w-50" />
                            </div>
                            <div className="col" id="boxoffres">
                                <div className='row '>
                                    <h6 className='text-center col'>Développeur WEB Full Stack Symfony 3/4 (H/F)</h6>
                                  <button type="button" class="btn btn-outline-dark" id="buttonOffre"> <Link to="/InformationOffre" class="btn-outline-dark" style={{textDecoration:"none"}}>voir l'offre</Link></button>
                                </div>

                                <div className='row' id="infoOffre">
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
                        <div className='row mt-5'>
                            <div className='col'>
                                <img src={img_offre1} className="w-50" />
                            </div>
                            <div className="col" id="boxoffres">
                                <div className='row '>
                                    <h6 className='text-center col'>Développeur WEB Full Stack Symfony 3/4 (H/F)</h6>
                                    <button type="button" class="btn btn-outline-dark" id="buttonOffre">voir l'offre</button>
                                </div>

                                <div className='row' id="infoOffre">
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
                        <div className='row mt-5'>
                            <div className='col'>
                                <img src={img_offre1} className="w-50" />
                            </div>
                            <div className="col" id="boxoffres">
                                <div className='row '>
                                    <h6 className='text-center col'>Développeur WEB Full Stack Symfony 3/4 (H/F)</h6>
                                    <button type="button" class="btn btn-outline-dark" id="buttonOffre">voir l'offre</button>
                                </div>

                                <div className='row' id="infoOffre">
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
                        <div className='row mt-5'>
                            <div className='col'>
                                <img src={img_offre1} className="w-50" />
                            </div>
                            <div className="col" id="boxoffres">
                                <div className='row '>
                                    <h6 className='text-center col'>Développeur WEB Full Stack Symfony 3/4 (H/F)</h6>
                                    <button type="button" class="btn btn-outline-dark" id="buttonOffre">voir l'offre</button>
                                </div>

                                <div className='row' id="infoOffre">
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