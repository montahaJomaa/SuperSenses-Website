import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const notifySuccess = () => {
  toast.success(' Demande envoyée!', {
    position: "bottom-left",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
  });
}
function EspaceCarriereForm(props) {

  const navigate = useNavigate();

  const [form, setForm] = useState('')
  const [errors, setErrors] = useState('')

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

  const [radioValue, setRadioValue] = useState('Embauche');


  const radios = [
    { name: 'Embauche', value: 'Embauche' },
    { name: 'Stage', value: 'Stage' },
  ];

  const validateForm = () => {

    const {
      nomPrenomCandidat,
      emailCandidat,
      numTelephoneCandidat,
      selectSpecialite,
      CVCandidat,
      LettreMotivationCandidat
    } = form

    const newErrors = {}

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //let formatTel = /^\w+([3-9]{2}[0-9]{3}[0-9]{3})+$/;





    if (nomPrenomCandidat === '') newErrors.nomPrenomCandidat =
      'Veuillez entrer votre prénom et votre nom !';

    else if (nomPrenomCandidat.length > 30) newErrors.nomPrenomCandidat =
      'Merci de ne pas dépasser la longueur de 30 lettres!';

    else if (emailCandidat === '') newErrors.emailCandidat =
      'Veuillez entrer une adresse email  !';

    else if (!(emailCandidat.match(regexEmail))) newErrors.emailCandidat =
      'Veuillez entrer une adresse email correcte !';

    else if (numTelephoneCandidat === '') newErrors.numTelephoneCandidat =
      "Merci d'entrer un num tel valide !";

    else if (selectSpecialite === '') newErrors.selectSpecialite =
      'Merci de choisir une specialite !';

    else if (CVCandidat === '') newErrors.CVCandidat =
      'Veuillez entrer votre CV';

    else if (LettreMotivationCandidat === '') newErrors.LettreMotivationCandidat =
      'Veuillez entrer votre Lettre de Motivation';


    return newErrors
  }


  const handleSubmit = e => {


    e.preventDefault();

    const formErrors = validateForm()

    //check for errors

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {

      console.log('Formulaire soumis');

      const NewCandidat = {
        radioValue: radioValue,
        nomPrenomCandidat: form.nomPrenomCandidat,
        emailCandidat: form.emailCandidat,
        numTelephoneCandidat: form.numTelephoneCandidat,
        selectSpecialite: form.selectSpecialite,
        CVCandidat: form.CVCandidat,
        LettreMotivationCandidat: form.LettreMotivationCandidat
      }

      console.log(radioValue);
      console.log(NewCandidat);


      axios.post('http://localhost:3001/EspaceCarriereForm',
        NewCandidat).then((res) => {
          console.log(res);

        });

      //history.go(-1);

      navigate('/');
      notifySuccess()

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




      <Form className="Contact_form" onSubmit={handleSubmit}>

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
                onChange={(e) => setRadioValue(e.currentTarget.value)}>
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
                required
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

              <Form.Control type="email" className="Contact_input" controlId="emailCandidat"

                value={form.emailCandidat}
                onChange={(e) => setField('emailCandidat', e.target.value)}
                isInvalid={!!errors.emailCandidat}
                required />
              <Form.Control.Feedback type="invalid">
                {errors.emailCandidat}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicText" >

              <Form.Label>Numéro du telephone:</Form.Label>

              <Form.Control type="telephone" className="Contact_input" controlId="numTelephoneCandidat"
                value={form.numTelephoneCandidat}
                onChange={(e) => setField('numTelephoneCandidat', e.target.value)}
                isInvalid={!!errors.numTelephoneCandidat}
                required />

              <Form.Control.Feedback type="invalid">
                {errors.numTelephoneCandidat}
              </Form.Control.Feedback>

            </Form.Group>
          </Col>

          <Col>
            <Form.Label>Specialité:</Form.Label><br />

            <select id="selectSpecialite"
              value={form.selectSpecialite}
              onChange={(e) => setField('selectSpecialite', e.target.value)}
              isInvalid={!!errors.selectSpecialite}
              required >
              <option></option>
              <option >Web development</option>
              <option >Mobile developement</option>
              <option >IOT</option>
              <option >AI</option>
            </select>

            <Form.Control.Feedback type="invalid">
              {errors.selectSpecialite}
            </Form.Control.Feedback>
          </Col>

        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicText" >
              <Form.Label>Curriculum Vitae :</Form.Label>
              <Form.Control type="file" className="Contact_input" controlId="CVCandidat"
                value={form.CVCandidat}
                onChange={(e) => setField('CVCandidat', e.target.value)}
                isInvalid={!!errors.CVCandidat} accept=".pdf" required />
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
                isInvalid={!!errors.LettreMotivationCandidat} accept=".pdf" required />
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
    </div >
  )
}
export default EspaceCarriereForm;