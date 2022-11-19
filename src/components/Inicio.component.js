import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export default class Inicio extends Component {
  render() {
    return (
      <>
        <div>
          <h1> Nuestros productos</h1>
        </div>
        <Carousel>
          <Carousel.Item>
            <Link to={"/Colecciones/1"}>
              <img
                className="d-block w-100"
                src="https://www.aprenderjuntos.cl/wp-content/uploads/2020/09/primavera.jpg"
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Colección de primavera</h3>
              <p>Prendas para climas cálidos</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://t1.ev.ltmcdn.com/es/posts/4/6/0/equinoccio_de_otono_2022_hemisferio_norte_y_sur_3064_600.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>
                <Link to={"/Colecciones/2"}>Colección de otoño</Link>
              </h3>
              <p>Prendas para climas frios</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
