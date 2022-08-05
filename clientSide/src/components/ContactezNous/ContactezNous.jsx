import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import FloatingLabel from 'react-bootstrap/FloatingLabel';

import axios from "axios";


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
    const { nomPrenomContact, emailContact, messageContact } = form
    const newErrors = {}
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (nomPrenomContact === '') newErrors.nomPrenomContact =
      'Veuillez entrer votre prénom et votre nom !';
    else if (nomPrenomContact.length > 30) newErrors.nomPrenomContact =
      'Merci de ne pas dépasser la longueur de 30 lettres!';

    else if (emailContact === '' || !(emailContact.match(regexEmail))) newErrors.emailContact =
      'Veuillez entrer une adresse email correcte !';

    else if (messageContact === '') newErrors.messageContact =
      'Veuillez saisir votre message';
    
    else if (messageContact.length < 10) newErrors.messageContact = 'Message trop court !'
    
    return newErrors
  }

  const handleSubmit = e => {

    e.preventDefault()

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      console.log('Formulaire soumis');
      
      const NewContact = {
        nomPrenomContact: form.nomPrenomContact,
        emailContact: form.emailContact,
        messageContact: form.messageContact
      }

      axios.post('http://localhost:3001/ContactezNous', NewContact).then((res) => {
        console.log(res);
      });
    }

   
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

              <Form.Control type="text" className="Contact_input" controlId="nomPrenomContact"

                value={form.nomPrenomContact}
                onChange={(e) => setField('nomPrenomContact', e.target.value)}
                isInvalid={!!errors.nomPrenomContact}
              />

              <Form.Control.Feedback type="invalid">
                {errors.nomPrenomContact}
              </Form.Control.Feedback>

            </Form.Group>

          </Col>
        </Row>


        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail" >

              <Form.Label>Adresse email :</Form.Label>

              <Form.Control type="email" className="Contact_input" controlId="emailContact"
                value={form.emailContact}
                onChange={(e) => setField('emailContact', e.target.value)}
                isInvalid={!!errors.emailContact}
              />
              <Form.Control.Feedback type="invalid">
                {errors.emailContact}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

        </Row>

        <Form.Label>Message :</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" >

          

          <Form.Control
            style={{ height: '100px' }} className="Contact_input" controlId="messageContact"
            as="textarea"
            type="textarea"
            value={form.messageContact}
            onChange={(e) => setField('messageContact', e.target.value)}
            isInvalid={!!errors.messageContact}
          />
          <Form.Control.Feedback type="invalid">
            {errors.messageContact}
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