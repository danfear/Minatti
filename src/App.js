import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Inicio from "./components/Inicio.component";
import Colecciones from "./components/colecciones.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar className="bavnarcolor" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/Inicio"} className="nav-link">
                  Minatti │ Tu Boutique online
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <Inicio {...props} />}
                  />
                  <Route
                    exact
                    path="/Inicio"
                    component={(props) => <Inicio {...props} />}
                  />
                  <Route
                    exact
                    path="/Colecciones/:id"
                    component={(props) => <Colecciones {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
