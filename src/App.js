import React from 'react';
import Navbar from './components/Navbar'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Home from './components/Home'
import PreLoader from './components/PreLoader'
import {BrowserRouter,Route} from 'react-router-dom'
import Faq from './components/Faq'
import SimCards from './components/SimCards'
import DataPlans from './components/DataPlans'
import ControlCenter from './components/ControlCenter'
import WIN from './components/WIN'
import PartnerProgram from './components/PartnerProgram'
import Contact from './components/Contact'
import GetConnected from './components/GetConnected'
import NBIOT from './components/NBIOT'
import Global from './components/Global'
import Developers from './components/Developers'
import ManagedFailover from './components/ManagedFailover'
import Terms from './components/Terms'
import Agreement from './components/Agreement'
import Policy from './components/Policy'

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <PreLoader />
        <TopBar />
        <Navbar /> 

        <Route exact path = '/' component = {Home} /> 
        <Route path = '/faq' component = {Faq} />    
        <Route path = '/sim-cards' component = {SimCards} /> 
        <Route path = '/data-plans' component = {DataPlans} />
        <Route path = '/control-center' component = {ControlCenter} />
        <Route path = '/wireless-ip-networking' component = {WIN} />
        <Route path = '/partner-program' component = {PartnerProgram} />
        <Route path = '/contact-us' component = {Contact} />
        <Route path = '/get-connected' component = {GetConnected} />
        <Route path = '/nb-iot' component = {NBIOT} />
        <Route path = '/global' component = {Global} />
        <Route path = '/developers' component = {Developers} />
        <Route path = '/managed-failover' component = {ManagedFailover} />
        <Route path = '/terms-of-use' component = {Terms} />
        <Route path = '/form-of-agreement' component = {Agreement} />
        <Route path = '/privacy-policy' component = {Policy} />

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
