import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBarHeader from "./components/NavBarsHeaderFooter/NavBarHeader.jsx";
import NavBarFooter from "./components/NavBarsHeaderFooter/NavBarFooter";
import HomeInterface from "./components/HomeInterface/HomeInterface.jsx";
import NosExpertises from "./components/NosExpertises/NosExpertises";
import ContactezNous from "./components/ContactezNous/ContactezNous";
import NosOffres from "./components/NosOffres/NosOffres";
import NosValeur from "./components/NosValeur";
import NosSolution from "./components/NosSolution/NosSolution";
import Apropos from './components/Apropos';
import EspaceCarriereForm from "./components/EspaceCarriere/EspaceCarriereFom/EspaceCarriereForm";
import EspaceCarriereOffre from "./components/EspaceCarriere/EspaceCarriereOffre/EspaceCarriereOffre";
import NosSolutionSensesIA from './components/NosSolution/NosSolutionSensesIA';

function App() {

    return (
        <Router>
            <div className="App">

                <div className="content">

                    <Routes>
                        <Route path="/" element={<HomeInterface />} />
                        <Route path="/NosExpertises" element={<><NavBarHeader /> <NosExpertises style={{ marginTop: '390px' }} /></>} />
                        <Route path="/NosOffres" element={<> <NavBarHeader /><NosOffres /></>} />
                        <Route path="/ContactezNous" element={<><NavBarHeader /> <ContactezNous /></>} />
                        <Route path="/Hodhod" element={<><NavBarHeader /><NosSolution /></>} />
                        <Route path="/Apropos" element={<><NavBarHeader /><Apropos /></>} />
                        <Route path="/EspaceCarriere" element={<><NavBarHeader />< EspaceCarriereForm /></>} />
                        <Route path="/InformationOffre" element={<><NavBarHeader /><EspaceCarriereOffre /></>} />
                        <Route path="/SensesIA" element={<><NavBarHeader /><NosSolutionSensesIA /></>} />
                    </Routes>
                    <div className="bg-img" id="bg_img_footer">
                        <NavBarFooter />
                    </div>
                </div>

            </div >
        </Router >
    );
}
export default App;
