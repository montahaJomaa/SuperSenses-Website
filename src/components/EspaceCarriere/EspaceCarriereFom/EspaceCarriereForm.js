


const EspaceCarriereForm = () => {

  return (
    <div className="formContent">
      <h1 class="text-center">Espace Carriere </h1>
      <p class="text-center">Candidature spontannée</p><br></br><br></br><br></br>
      <div class="img-thumbnail" style={{borderRadius:"15px"}} >
        <div class="container p-2 w-75 " >


          <div class="row">
            <div class="col">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Embauche</label>
              </div>
            </div>
            <div class="col">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Stage</label>
              </div>
            </div>
          </div>





          <div class="row pb-4">
            <div class="col">
              <label>Nom:</label>
              <input type="text" id="" required class="shadow" style={{ borderRadius: "15px", borderColor: "white" }} />
            </div>
            <div class="col">
              <label>Prenom:</label>
              <input type="text" required style={{ borderRadius: "15px", borderColor: "white" }} />
            </div>
          </div>
          <div class="row pb-4">
            <div class="col">
              <label>Numero du téléphone : </label>
              <input type="text" required style={{ borderRadius: "15px", borderColor: "white" }} />
            </div>
            <div class="col">
              <label>Addresse Email : </label>
              <input type="email" required style={{ borderRadius: "15px", borderColor: "white" }} />
            </div>
          </div>
          <div class="row pb-4">
            <label>CV (taille maximal est 10Mo):</label>
            <input type="file" style={{ borderRadius: "15px", borderColor: "white" }} class="shadow " />
          </div>
          <div class="row pb-4" >
            <label>Lettre de motivation (taille maximal est 10 Mo ):</label>
            <input type="file" style={{ borderRadius: "15px", borderColor: "white" }} class="shadow  " />
          </div>
          Super senses n'utilisera vos informations personnelles que pour fournir le produit ou le service que vous avez demandé et vous contacter avec un contenu connexe susceptible de vous intéresser. Vous pouvez vous désabonner de ces communications à tout moment.<br></br>
          <br></br><div class="text-success">Une réponse vous sera apportée dans les 48h.</div><br></br><br></br>
          <button type="button" class="btn btn-info" style={{ borderRadius: "15px" }}>Info</button><br></br><br></br>



        </div>
      </div>
    </div>
  );
};
export default EspaceCarriereForm;