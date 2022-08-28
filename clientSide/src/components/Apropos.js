import imgSensia from "./images/Explainer-videos-for-SAAS.png";
const Apropos = () => {

  return (
    <div id="AproposHeader" className="Apropos">
      <div class="text-center" >
        <h1 id="AproposNousHeaderTxt">A propos nous</h1>
      </div>
      <div class="container" id="AproposContent">
        <div class="row">
          
          <div class="col-sm-md-2">
            <h2 id="AproposSuperText">Super Senses</h2>
            <p id="AproposParag">
              <br/>
              Super Senses est une startup Tunisienne dévoilée par une équipe d’ingénieurs multidisciplinaires. Elle fournit des solutions innovantes à impact sociales et environnementales
              ayant pour objectif d’accélérer la transformation digitale principalement dans les activités municipales.
              Super Senses accompagne ses clients dans leurs projets de transformation digitale. Notre mission
              est de digitaliser le monde grâce à l'IA. Nous fournissons des solutions innovantes pour la prise de
              décision critique, améliorons les sociétés, l'efficacité des économies et la santé des environnements.
              Notre équipe apporte son expertise et son savoir-faire dans 3 domaines : l’Intelligence artificielle, le
              Digital et l’IOT.
            </p>
          </div>
          <div class="col" id="AproposImg">
            <img src={imgSensia} id="AproposImgSize"  />
          </div>
        </div>
      </div>
    </div>
  );

}
export default Apropos;