import React from "react";
import description_img from '../images/description_img.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NosValeur from "../NosValeur";
import { LinkContainer } from "react-router-bootstrap";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
import NavDropdown from 'react-bootstrap/NavDropdown';


import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

import img1 from '../images/18771.png';
import img2 from '../images/Kannan-Future-Customer-Service-AI-Artificial-Intelligence-1200x627-1200x627.png';
import img3 from '../images/Component17–6.png';
import hodhod1 from "../images/hodhod1.png";
import hodhod2 from "../images/hodhod2.png";

import port1 from '../images/christina-wocintechchat-com-faEfWCdOKIg-unsplash.png';
import port2 from '../images/scott-graham-5fNmWej4tAA-unsplash.png';
import port3 from '../images/sigmund-Im_cQ6hQo10-unsplash.png';
import { Link } from 'react-router-dom';


function HomeInterface() {

  fontawesome.library.add(faCheckSquare, faCoffee);

  return (
    <div className="bg-img" id="bg_img_header">

      <Navbar bg="transparent" expand="lg" id="navbarTestIcons">
        <Container>
          <Navbar.Brand href="Accueil">
            <div className="bgTestImg"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span> <FontAwesomeIcon icon="bars" color="white" size="lg" /> </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="HomeNav">
              <Nav.Link className='Nav_home' id='NavText_home' href="/">Accueil</Nav.Link>
              <Nav.Link className='Nav_home' id='NavText_home' href="#NosValNosSolutions">Nos Solutions</Nav.Link>              
              <Nav.Link href="/NosExpertises" className='Nav_home' id='NavText_home' >
                Nos expertises
              </Nav.Link>
              <Nav.Link href="/Apropos" className='Nav_home' id='NavText_home' >
                A propos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="Description_supersenses">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="bienvenuto">Bienvenue à</div>
              <div className="big-title">Super Senses</div>
              <p className="bienvenuto-p">Super Senses est une startup Tunisienne dévoilée par une équipe d’ingénieurs
                multidisciplinaires. Notre vision est de créer un outil technologique d’aide à la
                décision capable d’ajouter un 6ieme sens utilisant l’intelligence artificielle.</p>
              <LinkContainer to="/Apropos"><Button className="more-info-btn" variant="outline-dark">Lire tout</Button></LinkContainer>
            </div>
            <div className="col-md-6 align-self-center">
              <div id="description_img">
                <img src={description_img} alt="description_img" className="img-responsive"
                  style={{ width: '100%', maxWidth: '471px' }} />
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div class="container">
        <div class="row">
          <h1 class="text-center" id="title1">Nos valeurs & Engagements</h1>
        </div>
        <div class="row">
          <h2 class="text-center text-sm-left" id="title2">Notre clé de réussite</h2>
        </div>
        <div class="col">
        </div>
      </div>
      <div className="p1">
        
        <p><br></br>Nos engagements et nos valeurs nous définissent.<br></br>Ils sont le moteur de notre développement et la clé de notre réussite.<br></br>
          Nous déposons nos savoir-faire et notre expertise au profit de nos clients.<br></br>
          Nous sommes engagés de digitaliser notre quotidien pour un avenir meilleur.</p>
      </div>
      
      <div className="images text-center">
        <div class="container text-center">
          <div class="row">

            <div class="col" >
              <div class="contenuS text-center">
                <img src={img1} alt="Avatar" class="image" />
                <div class="middle">
                  <div class="text">Engagements</div>
                </div>
              </div>
            </div>

            <div class="col" >
              <div class="contenuS text-center">
                <img src={img3} alt="Avatar" class="image" />
                <div class="middle">
                  <div class="text">Savoir-Faire</div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="contenuS text-center">
                <img src={img2} alt="Avatar" class="image" />
                <div class="middle">
                  <div class="text">Expertise </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="solution">
        <div class="container">
          <div class="col">
            <div class="row">
              <h1 class="text-center" id="NosValNosSolutions" >Nos Solutions</h1>
            </div>
            <div class="row">
              <h2 class="text-center text-sm-left" id="title2">Découvrir les solutions techniques</h2>
            </div>

          </div>
        </div>
      </div>

      <div className='container text-center'>
        <div className='row'>
          <div className='col' >
            <a href="Hodhod"><img src={hodhod1} id="hodhod1"/></a>
          </div>
          <div className='col'>
            <a href="SensesIA"><img src={hodhod2} id="hodhod1" /></a>
          </div>
        </div>
      </div>

      {/* 
      <div className="container" id="boxs">
        <div class="row">
          <div class="col">
            <img className="bgSolution img-thumbnail shadow rounded" src={img1Solution} alt="img1" id="img3Solution" />
            <div className="box">
              <p>
                <div class="col">
                  <div className='row'>
                    <img src={img2Solution} alt="hodhod" id="chatSize" />
                  </div>
                  <div class="row">

                    <Link to="/Hodhod" id="LinkHome"><h1 class="text-center" id="hodhodTitle">HODHOD</h1></Link>
                    <div class="row text-center" id="hodhodparagraph" >

                      <p>Une application mobile pour<br></br> la municipalité et les citoyens.</p>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className="col">
            <img src={img3Solution} className="img-thumbnail shadow rounded" id="img3Solution" />
            <div className='img3Box'>
              <img src={img2Solution} alt="hodhod" id="chatSize2" />
              <Link to="/SensesIA" id="LinkHome"><h1 id="hodhodTitle">Senses IA</h1></Link>
              <p id="SensiaP">Solution technologique permettant aux industriels la collection des données.</p>
            </div>
          </div>
        </div>

      </div> */}

      <br></br><br></br><br></br><br></br>
      <div className="expertisets">
        <div className='expertiseBox'>
          <ul>
            <li><h1 style={{textAlign: 'center',marginTop: '5px',marginBottom: '20px'}} >Nos Expertises</h1></li>
            <li><h5 id="expertiseBoxItems"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Machine Learning</h5></li>
            <li><h5 id="expertiseBoxItems"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Internet des Objets</h5></li>
            <li><h5 id="expertiseBoxItems"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Intelligence Artificielle</h5></li>
            <li><h5 id="expertiseBoxItems"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Formation technologique</h5></li>
            <li><h5 id="expertiseBoxItems"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Développement web/mobile</h5></li>
            <li><h5 id="expertiseBoxItems"><i class="bi bi-check-circle-fill"></i>&nbsp;Conception et layout des cartes électroniques</h5></li>
          </ul>
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
      {/* <div class="row text-center" id="portfolioBox"> */}
      <div className='container'>
        <div className='row'  >
          <h1 className='text-center'>Portfolio </h1>
          <h3 className='text-center'>L'esprit d'équipe est notre clé de réussite</h3><br></br>
          <div className='col mt-5 text-center'>
            <img src={port1} alt="portfolio" id="portfolio1" />
          </div>
          <div className='col mt-5 text-center'>
            <img src={port2} alt='portfolio' id="portfolio1" />
          </div>
          <div className='col mt-5 text-center'>
            <img src={port3} alt='portfolio' id="portfolio1" />
          </div>
        </div>
      </div>
      
    </div >
  );
}

export default HomeInterface;