import imgSensia from "./images/Explainer-videos-for-SAAS.png";
const Apropos = () => {

  return (
    <div id="AproposHeader" className="Apropos">
      <div class="text-center" >
        <h1>A PROPOS NOUS</h1>
      </div>
      <div class="container" id="AproposContent">
        <div class="row">

          <div class="col" id="AproposImg">
            <img src={imgSensia} id="AproposImgSize"/>
          </div>
          <div class="col-sm">
            <h2 id="AproposSuperText">Super Senses</h2>
            <p id="AproposParag">
              une startup Tunisienne dévoilée par une équipe d’ingénieurs multidisciplinaires.<br></br>
              Notre vision est de crée un outil technologique d’aide à la décision capable d’ajouter un 6ieme sens utilisant l’intelligence artificielle.<br></br>
              Super Senses fournit des solutions innovantes à impact sociales et environnementales ayant pour objectif d’accélérer la transformation digitale principalement dans les activités municipales.
              <br></br><br></br>
              Super Senses accompagne ses clients dans leurs projets de transformation digitale. Notre mission
              est de digitaliser le monde grâce à l'IA. Nous fournissons des solutions innovantes pour la prise de
              décision critique, améliorons les sociétés, l'efficacité des économies et la santé des environnements.
              Notre équipe apporte son expertise et son savoir-faire dans 3 domaines : l’Intelligence artificielle, le
              Digital et l’IOT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Apropos;