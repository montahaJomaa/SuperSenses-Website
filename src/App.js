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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <Router>
                <div className="App">

                    <div className="content">

                        <Routes>
                            <Route path="/HomeInterface" element={<HomeInterface />} />
                            <Route path="/NosExpertises" element={<><NavBarHeader /> <NosExpertises style={{ marginTop: '390px' }} /></>} />
                            <Route path="/NosOffres" element={<> <NavBarHeader /><NosOffres /></>} />
                            <Route path="/ContactezNous" element={<><NavBarHeader /> <ContactezNous /></>} />
                            <Route path="/3" element={<><NavBarHeader /><NosValeur/></>} />
                            <Route path="/4" element={<><NavBarHeader /><NosSolution /></>} />
                            <Route path="/6" element={<><NavBarHeader /><Apropos /></>} />
                            <Route path="/7" element={<><NavBarHeader />< EspaceCarriereForm /></>} />
                            <Route path="/8" element={<><NavBarHeader /><EspaceCarriereOffre /></>} />
                            <Route path="/9" element={<><NavBarHeader /><NosSolutionSensesIA/></>} />
                        </Routes>




                        {/*<Route path="/NosSolutions">
                               <NosSolutions/>
                            </Route>*/}


                        { /*<Route path="/Apropos">
                                <NosServices/>
                              </Route>*/}




                        <div className="bg-img" id="bg_img_footer">
                            <NavBarFooter />
                        </div>
                    </div>

                </div >
            </Router >
        );
    }
}

export default App;
