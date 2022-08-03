

import googlePlay from '../images/playstore.png';
import applestore from '../images/app-store.png';
import hodhod from '../images/Mask Group 10114.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const NosSolutionHodhod = () => {

  return (


    <div>
      <div className="container NosSolutionPa">
        <div class="col">
          <div class="row">
            <img id="hodhodImage" class="img-thumbnail shadow " src={hodhod} alt="hodhod image " />
          </div>
          <div class="row">
            <p id="hodhodStatement"><br></br>Devenez actionnaires dans votre commune</p><br></br><br></br>
            <div class="col">
              <img id="googlePlay" src={googlePlay} alt="google store" />
            </div>
            <div class="col">
              <img id="appStore" src={applestore} alt="apple store" />
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
export default NosSolutionHodhod;