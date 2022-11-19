import React, { Component } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Articuloscards from "./articuloscards";

export default class Colecciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coleccion: [],
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get("http://localhost:4000/shop/list/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          coleccion: res.data,
        });
        console.log("aqui");
      })
      .catch((error) => {
        console.log("aquino");
      });
  }
  DataTable() {
    return this.state.coleccion.map((res, i) => {
      return <Articuloscards obj={res} key={i} />;
    });
  }
  render() {
    return <Row>{this.DataTable()}</Row>;
  }
}
