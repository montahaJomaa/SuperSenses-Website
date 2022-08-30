import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBarHeader from "./components/NavBarsHeaderFooter/NavBarHeader.jsx";
import NavBarFooter from "./components/NavBarsHeaderFooter/NavBarFooter";
import HomeInterface from "./components/HomeInterface/HomeInterface.jsx";
import NosExpertises from "./components/NosExpertises/NosExpertises";
import ContactezNous from "./components/ContactezNous/ContactezNous";
import NosOffres from "./components/NosOffres/NosOffres";
import NosSolution from "./components/NosSolutions/NosSolution";
import Apropos from './components/Apropos';
import EspaceCarriereForm from "./components/EspaceCarriere/EspaceCarriereFom/EspaceCarriereForm";
import EspaceCarriereOffre from "./components/EspaceCarriere/EspaceCarriereOffre/EspaceCarriereOffre";
import NosSolutionSensesIA from './components/NosSolutions/NosSolutionSensesIA';

import RiseLoader from "react-spinners/RiseLoader"

const notify = () => {
    toast('Demande envoyée !');
}

function App() {
    const [loading, setLoading] = useState('false');
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    },[])
    return (
        <Router>
            <div className="App">
                {loading ?
                    (<RiseLoader
                        id="RiseLoader"
                        color={'#25ACDE'}
                        loading={loading}
                        size={30}                        
                    />)
                    :
                    (<div className="content">

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
                    </div>)
                }

            </div >
            <ToastContainer />
        </Router >
    );
}
export default App;
