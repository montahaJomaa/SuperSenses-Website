import video from "../images/video.png";
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
    <div className="container ">
      <h1 className="text-center">Nos Solutions</h1>
      <div className="row mt-5">
        <div className="col">
          <h1>Hodhod</h1>
          <p>
            Super senses fournit ses solutions innovantes à impact afin de résoudre
            des problèmes environnemental et digitaliser les villes tunisiennes.
            La ‘Hodhod’ est une solution destinée à lutter contre la pollution citadine
            et elle permet aux municipalités d’avoir un canal de communication interactive avec
            les citoyens en particulier et tout l'écosystème en général. Notre solution se compose de :
          </p>
        </div>
        <div className="col">
          <img src={video} alt="video" className="videoBorder" />
        </div>
      </div>

      <div className="row text-center">

        <div className="col img-thumbnail shadow" id="compBorder1">

          <img src={kitelectronique} className="kitelectronique text-center " />
          <h6>Capteurs embarqués / kit électronique Collecte des datas.</h6>
        </div>

        <div className="col">

        </div>

        <div className="col img-thumbnail shadow" id="compBorder2">


          <img src={platform} className="platform text-center" />
          <h6>Plateforme intelligente interactive.</h6>

        </div>

        <div className="col">

        </div>

        <div className="col img-thumbnail shadow" id="compBorder3">


          <img src={appmobile} className="appmobile text-center" />
          <h6>Application mobile.</h6>


        </div>

      </div>

      <div className="row " id="mobSize">
        <div className="col">
          <img src={mob} />
        </div>
        <div className="col">
          <h6>L’application exploite tous les capteurs embarqué sur le Smartphone qui sera un outil de collecte des données sur terrain et remonter d’une manière efficace aux divers services de la municipalité.</h6>
        </div>
      </div>


      <div className="row" id="backgroundimg">
        <div className="row">
          <h3 className="text-center" id="deveneztitle">Devenez acteurs de votre Communes avec HODHOD</h3>
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
          <div class="col">
          <img class="w-75 img-thumbnail " src={img1} id="imageSize" />
          <p>Préserver l’environnement.</p>
          </div>
        <div class="col">
        <img class="w-75 img-thumbnail" src={img2} id="imageSize" />
        <p>Lutter contre la pollution.</p>
        </div>
        <div class="col">
        <img  class="w-75 img-thumbnail" src={img3} id="imageSize" />
        <p>Intégrer les citoyens dans l’amélioration de leurs villes</p>
        </div>
      </div>
      <div class="row p-3">
        <div class="col">
        <img  class="w-75 img-thumbnail" src={img4} id="imageSize" />
        <p>Informer les citoyens avec les nouveautés de leurs communes.</p>
        </div>
        <div class="col">
        <img class="w-75 img-thumbnail" src={img1} id="imageSize" />
        </div>
        <div class="col">
        <img  class="w-75 img-thumbnail"  src={img1}  id="imageSize" />
        </div>
      </div>
      </div>

    </div>



  );
}
export default NosSolutionPa;