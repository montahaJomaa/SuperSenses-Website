import React from 'react';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import smartLogger from './images/smartLogger.png';
import novationCity from './images/novationCity.png';



{/*import logo_twitter from './images/logo_twitter.png';*/}

function NosReferents(props) {
  return (     
    <div className="bg-img" id="bg_img_footer1">
      
      <Container fluid className="title_references">
         <Row>
           <Col> 
             <h1>NOS RÉFÉRENCES</h1>
             <h5>Découvrir nos référents</h5></Col>
         </Row>
      </Container>
      
      <div class="d-flex justify-content-center">
        <img src={smartLogger} className="ref-img"/>
        <img src={novationCity} className="ref-img"/>
      </div>
    
    </div>

  );
}
export default NosReferents;
