import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Articuloscards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.obj.img} />
        <Card.Body>
          <Card.Title>{this.props.obj.name}</Card.Title>
          <Card.Text>
            <p>{this.props.obj.descr}</p>
            <h5>Precio ${this.props.obj.precio}</h5>
          </Card.Text>
          <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
      </Card>
    );
  }
}
