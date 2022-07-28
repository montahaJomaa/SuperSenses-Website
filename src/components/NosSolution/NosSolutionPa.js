import video from "../images/video.png";
import img1 from '../images/Groupe 14672.png';
import img2 from '../images/Carbo-arroser-terre.png';
import img3 from '../images/Group14411.png';
import img4 from '../images/Group14483.png';
const NosSolutionPa = () => {

  return (
    <div>
      <div class="row p-3">
        
        <h2 class="d-flex justify-content-center" id="TitleHodhod">Hodhod:Devenez acteurs de votre Communes </h2>
        <p class="w-75  rounded p-5" id="NosSolutionParag1">
          La ‘Hodhod’ est une solution destinée à lutter contre la pollution citadine et elle permet aux municipalités d’avoir un canal de communication interactive avec les citoyens en particulier et tout l’écosystème en général.
          Ceci grâce à une Apps Mobile nommé ‘Hodhod’ inspiré de l’histoire du Huppe qui était un messager au prophète Soliman. L’application exploite tous les capteurs embarqué sur le Smartphone qui sera un outil de collecte des données sur terrain et remonter d’une manière efficace aux divers services de la municipalité.
        </p>
      </div>
      
      <div class="row">
        <img id="NosSolutionVideo" class="w-50" src={video} />
      </div>
      <p class="p-5 d-flex justify-content-center">Super senses fournit ses solutions innovantes à impact afin de résoudre des problèmes environnemental et digitaliser les villes tunisiennes. </p>  
     <h1 class="d-flex justify-content-center">Les Impacts du Hodhod</h1><br></br><br></br><br></br>
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