import React, { Fragment } from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home =() =>
    (
        <Fragment>
            <Helmet><title>Pictuinary Quiz-Home</title></Helmet>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/Person">Person Graph</Link></Nav.Link>
      <Nav.Link><Link to="/Gita">Gita Graph</Link></Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
<h1 style={{textAlign:'center'}}>Please Choose in the Navbar the graph you want to be diplayed</h1>

        </Fragment>
        
    );

export default Home;