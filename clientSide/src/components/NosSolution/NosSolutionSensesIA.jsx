import React from "react";
import SensesIA from '../images/Groupe 19747.png';


import plateformeIntelligente from "../images/plateformeIntelligente.png";
import stockageCloud from "../images/stockageCloud.png";
import kitElectronique from "../images/kitElectronique.png";
function NosSolutionSensesIA(props) {
    return (
        <div className="container">
            <h1 className="NosSolutionsTitle"> Nos solutions</h1>
            <div className="row" id="blocSensesIA">
                <div className="col" id="descriptionSensesIA">
                    <h2>Senses AI :</h2>
                    <p id="p_descriptionSensesIA">Super Senses est une solution technologique permettant aux industriels la collection des données importants et des indicateurs de performances à distance et en temps réel via la technologie internet des objets.
                        Après la collection des datas nous faisons l’analyse et le traitement des données à travers des modèles basées sur l’intelligence artificielle. Les algorithmes permettant aux superviseurs de détecter les dérives des procès d’une manière anticipé et ils permettant de proposer des recommandations via des outils d’aide à la décision générés d’une manière automatique.
                    </p>
                </div>
                <div className="col">
                    <img src={SensesIA} alt="img-SensesIA" id="img-descriptionSensesIA" />
                </div>
            </div>

            <h4 id="ComposantsSensesIATitle">La solution senses.IA se compose de</h4>
            


                <div className="row text-center" id="blocComposantsSensesIA" >

                    <div className="col-md-3 offset-1 img-thumbnail shadow" id="compBorder1">

                        <img src={kitElectronique} id="kitElectronique" />
                        <h6>kit électronique<br/> Collecte des datas en temps réel</h6>
                    </div>


                    <div className="col-md-3 offset-1  img-thumbnail shadow " id="compBorder2">


                        <img src={stockageCloud} id="stockageCloud" />
                        <h6>Stockage dans le cloud</h6>


                    </div>



                    <div className="col-md-3 offset-1 img-thumbnail shadow" id="compBorder3">


                        <img src={plateformeIntelligente} id="plateformeIntelligente" />
                        <h6>Plateforme intelligente de prédiction d'anomalie</h6>


                    </div>

                </div>
        </div>
    )
}
export default NosSolutionSensesIA;