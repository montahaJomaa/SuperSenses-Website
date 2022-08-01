import img1 from './images/18771.png';
import img2 from './images/Kannan-Future-Customer-Service-AI-Artificial-Intelligence-1200x627-1200x627.png';
import img3 from './images/Component17–6.png';

import img1Solution from './images/MaskGroup10115@2x.png';
import img2Solution from './images/Group 14382.png';



const NosValeur = () => {

  return (
    <div className="part2 container">
      <div class="col">
        <div class="row">
          <h1 class="text-center" id="title1">Nos valeurs & engagements </h1>
        </div>
        <div class="row">
          <h2 class="text-center text-sm-left" id="title2">Notre clé de réussite</h2>
        </div>
        <div class="col">

        </div>
      </div>
      <div className="p1">

        <p>Nos engagements et nos valeurs nous définissent.<br></br>Ils sont le moteur de notre développement et la clé de notre réussite.<br></br>
          Nous déposons nos savoir-faire et notre expertise au profit de nos clients.<br></br>
          Nous sommes engagés de digitaliser notre quotidien pour un avenir meilleur.</p>
      </div>

      <div className="images">

        <div class="container">
          <div class="row">
            <div class="col" id="hoverImg1">
              <img className="img" src={img1} alt="img1" />
            </div>
            <div class="col" id="hoverImg2">
              <img className="img" src={img2} alt="img2" />
            </div>
            <div class="col" id="hoverImg1">
              <img className="img" src={img3} alt="img3" />
            </div>
          </div>
        </div>
      </div>

      <div className="solution">
        <div class="container">
          <div class="col">
            <div class="row">
              <h1 class="text-center" id="title1">Nos solutions</h1>
            </div>
            <div class="row">
              <h2 class="text-center text-sm-left" id="title2">Découvrir les solutions techniques</h2>
            </div>
            <div class="col">

            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <img className="bgSolution" src={img1Solution} alt="img1" />
            <div className="box">
              <p>
                <div class="col">
                  <div class="row">
                    <h1 class="text-center" id="hodhodTitle">HODHOD</h1>
                    <div class="row text-center" id="hodhodparagraph" >

                      <p>Une application mobile pour<br></br> la municipalité et les citoyens.</p>
                    </div>
                  </div>
                </div>
              </p>

            </div>

          </div>
          <div class="col">
            <img className="chatLogo" src={img2Solution} alt="img1" />
          </div>

        </div>

      </div>
      <div class="text-center">
        <button type="button" class="btn btn-outline-dark" id="savoirplusbtn">Savoir plus</button>
      </div>

      <div class="mt-5" id="expertise" >
        <div class="bg-image">

          <h1 class="pt-5" id="expertiseTitle">Notre expertise</h1>

          <div id="expertiseBox" >
            <div class="flex-column" id="expertiseItem">
              <ul class="expertiseList pt-5 ">
                <li ><i class="bi bi-check-circle-fill mx-2 p-2 " ></i>Impression 3D</li>
                <li><i class="bi bi-check-circle-fill mx-2 p-2 " ></i>Machine Learning</li>
                <li><i class="bi bi-check-circle-fill mx-2 p-2 "></i>Internet des Objets</li>
                <li><i class="bi bi-check-circle-fill mx-2 p-2" ></i>Intelligence Artificielle</li>
                <li><i class="bi bi-check-circle-fill mx-2 p-2" ></i>Formation Technologique</li>
                <li><i class="bi bi-check-circle-fill mx-2 p-2" ></i>développement Web/Mobile</li>
                <li><i class="bi bi-check-circle-fill mx-2 p-2" ></i>Conception et layout de carte  électroniques</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );


}
export default NosValeur;