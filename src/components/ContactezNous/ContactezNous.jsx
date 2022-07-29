import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Message } from "@material-ui/icons";


function ContactezNous(props) {
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
    const { nomPrenom, email,message } = form
    const newErrors = {}

    if (nomPrenom === '') newErrors.nomPrenom = 'Veuillez entrer votre prénom et votre nom! !'

    else if (email === '') newErrors.email = 'Veuillez entrer une adresse email correcte !';

    else if (message === '') newErrors.message = 'Veuillez saisir votre message';
    return newErrors
  }

  const handleSubmit = e => {

    e.preventDefault()

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      console.log('Formulaire soumis');
      console.log(form)
    }

    console.log(form)
  }
  return (
    <div className="ContactezNous_container">
      <Container className="bloc_welcoming_phrases">

        <h3 className="welcoming_phrase">
          Contactez nous
        </h3>

        <h5 className="welcoming_phrase">Nous sommes là pour vous!</h5>

        <h5 className="welcoming_phrase">Merci de remplir ce formulaire </h5>

      </Container>




      <Form className="Contact_form" >

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicText" >

              <Form.Label>Nom et Prenom :</Form.Label>

              <Form.Control type="text" className="Contact_input" controlId="nomPrenom"

                value={form.nomPrenom}
                onChange={(e) => setField('nomPrenom', e.target.value)}
                isInvalid={!!errors.nomPrenom}
              />

              <Form.Control.Feedback type="invalid">
                {errors.nomPrenom}
              </Form.Control.Feedback>

            </Form.Group>

          </Col>
        </Row>


        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail" >

              <Form.Label>Adresse email :</Form.Label>

              <Form.Control type="email" className="Contact_input" controlId="email"
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

        </Row>


        <FloatingLabel controlId="floatingTextarea2" >

          <Form.Label>Message :</Form.Label>

          <Form.Control as="textarea" style={{ height: '100px' }} className="Contact_input" controlId="message"
            
            value={form.message}
            onChange={(e) => setField('message', e.target.value)}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>

        </FloatingLabel>



        <Form.Text className="text-muted" >
          Super Senses n'utilisera vos informations personnelles que pour fournir le produit
          ou  le service que vous avez demandé et pour vous contacter avec un contenu connexe
          susceptible de vous intéresser.
          Vous pouvez vous désabonner de ces communications à tout moment.<br /> <br />
        </Form.Text>

        <Button variant="primary" type="submit" id="SeSoumettre_btn"
          onClick={handleSubmit}>Se soumettre</Button>


      </Form>


    </div>
  )
}
export default ContactezNous;