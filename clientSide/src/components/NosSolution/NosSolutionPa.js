import video from "../images/senses_IA.png";
import img1 from '../images/Groupe 14672.png';
import img2 from '../images/Carbo-arroser-terre.png';
import img3 from '../images/Group14411.png';
import img4 from '../images/Group14483.png';
import kitelectronique from '../images/Groupe 19574.png';
import platform from '../images/Groupe 19575.png';
import appmobile from '../images/Groupe 19576.png';
import mob from "../images/Groupe 14747.png";
const NosSolutionPa = () => {

  return (
    <div className="container " id="hodhodP">

      <div className="row mt-5">
        <div className="col p-5">
          <h1>Hodhod</h1>
          <p>
            Super senses fournit ses solutions innovantes à impact afin de résoudre
            des problèmes environnemental et digitaliser les villes tunisiennes.
            La ‘Hodhod’ est une solution destinée à lutter contre la pollution citadine
            et elle permet aux municipalités d’avoir un canal de communication interactive avec
            les citoyens en particulier et tout l'écosystème en général.
          </p>
        </div>
        <div className="col">
          <img src={video} alt="video" className="videoBorder p-2 " id="videoPicture" />
        </div>
      </div>
      <h6> Notre solution se compose de :</h6>
      <div className="row text-center" id="hodhodbox" >

        <div className="col-md-3 offset-1 img-thumbnail shadow" id="compBorder1">

          <img src={kitelectronique} className="kitelectronique text-center " />
          <h6><br></br>Capteurs embarqués / kit électronique Collecte des datas.</h6>
        </div>


        <div className="col-md-3 offset-1  img-thumbnail shadow " id="compBorder2">


          <img src={platform} className="platform text-center" />
          <h6><br></br>Plateforme intelligente interactive.</h6>


        </div>



        <div className="col-md-3 offset-1 img-thumbnail shadow" id="compBorder3">


          <img src={appmobile} className="appmobile text-center" />
          <h6><br></br>Application mobile.</h6>


        </div>

      </div>
      <div className="container text-center">
        <div className="row " id="mobSize">
          <div className="col">
            <img src={mob} />
          </div>
          <div className="col">
            <h6 id="mobPara">L’application exploite tous les capteurs embarqué sur le Smartphone qui sera un outil de collecte des données sur terrain et remonter d’une manière efficace aux divers services de la municipalité.</h6>
          </div>
        </div>
      </div>

      <div className="row" id="backgroundimg">
        <div className="row">
          <h3 className="text-center" id="deveneztitle">Devenez acteurs de votre Commune avec HODHOD</h3>
        </div>
        <div className="row text-center" id="devenezParag">
          <p>
            Nous avons inventé Hodhod pour booster les municipalités à automatiser leurs procédures et engager les citoyens<br></br>
            pour une ville intelligente et moderne. La solution est destinée à lutter contre la pollution citadine et
            elle permet aux municipalités d’avoir un canal de communication interactive avec
            les citoyens en particulier et tout l’écosystème en général. La collecte et la
            gestion des réclamations se fait instantanément d’une manière organisée.
            La solution Hodhod est basée sur les nouvelles technologies principalement l’intelligence artificielle et
            l’internet des objets. L’application HodHod optimise les actions de la municipalité et
            la mène vers un volet de digitalisation. Ses impacts sur la communauté sont nombreux.</p>
        </div>

      </div>
      <h1 class="d-flex justify-content-center " id="ImpactBox">Les Impacts du Hodhod</h1><br></br><br></br><br></br>
      <div id="PicturesPadding">
        <div class="row p-3">
          <div class="col-md-3 offset-1 img-thumbnail shadow" id="bgPsize">
            <img class="w-100" src={img4} id="imageSize" />
            <h6 className="text-center"><br></br>Informer les citoyens avec les nouveautés de leurs communes.</h6>
          </div>
          <div class="col-md-3 offset-1 img-thumbnail shadow" id="bgPsize">
            <img class="w-100" src={img2} id="imageSize" />
            <h6 className="text-center"><br></br>Lutter contre la pollution.</h6>
            <h6 className="text-center">Préserver l’environnement.</h6>
          </div>
          <div class="col-md-3 offset-1 img-thumbnail shadow" id="bgPsize">
            <img class="w-100" src={img3} id="imageSize" />
            <h6 className="text-center"><br></br>Intégrer les citoyens dans l’amélioration de leurs villes</h6>
          </div>
        </div>
        {/* <div class="row p-3">
          
          <div class="col-md-3 offset-1 img-thumbnail shadow" id="bgPsize">
            <img class="w-100" src={img1} id="imageSize" />
          </div>
          <div class="col-md-3 offset-1 img-thumbnail shadow" id="bgPsize">
            <img class="w-100" src={img1} id="imageSize" />
          </div>
        </div> */}
      </div>



    </div>



  );
}
export default NosSolutionPa;