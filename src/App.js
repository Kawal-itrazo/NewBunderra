import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
 import './App.css';
 import './styles.css'; 
 
 import Aboutus from './components/Aboutus'; 
 import Footer from './components/Footer';
 import GrazingProperties from './components/GrazingProperties';
 import OrganicCertifiedBeef from './components/OrganicCertifiedBeef';
 import Workforus from './components/Workforus';
 import Contactus from './components/Contactus';
 import Other from './components/Other';
 import PageNotFound from './components/PageNotFount' 

function App() {
  return (
    <> 
     <Router> 
       <Switch>
                <Route path="/" component={Aboutus} exact/> 
                <Route path="/grazingproperties" component={GrazingProperties} exact/>
                <Route path="/organiccertifiedbeef" component={OrganicCertifiedBeef} exact/>
                <Route path="/workforus" component={Workforus} exact/>
                <Route path="/contactus" component={Contactus} exact/> 
                <Route path="/aboutus" component={Aboutus} exact/>
                <Route path="/footer" component={Footer} exact/>
                <Route path="/other" component={Other} exact/>
                <Route component={PageNotFound}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
