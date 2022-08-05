import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Dropdown from 'react-bootstrap/Dropdown';


import { useDispatch } from 'react-redux';


//import { registerUser } from '../actions/userActions.js';



function ContactezNous(props) {

  //const dispatch = useDispatch()
  const [color, setColor] = useState("#F0F8FF");
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
    <div className="ContactezNous_container">
      <Container className="bloc_welcoming_phrases">

        <h3 className="welcoming_phrase">
          Espace carrière
        </h3>

        <h5 className="welcoming_phrase">Condidature spontannée</h5>

      </Container>




      <Form className="Contact_form" >

        <Row>
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-info' : 'outline-info'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                 >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>

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
  )
}
export default ContactezNous;