import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gita from './components/Gita';
import PersonData from './components/Persondata';
import Home from './components/Home';

function App() {
  return (
    <Router>
          <Route path="/" exact component={Home} />
           <Route path="/Gita" exact component={Gita} />
           <Route path="/Person" exact component={PersonData} />
           
         </Router>
  );
}

export default App;
