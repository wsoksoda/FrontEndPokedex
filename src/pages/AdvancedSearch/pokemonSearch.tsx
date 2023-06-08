import React from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Type from "./Type";
import Egg from "./Egg";
import Ability from "./Ability";
import "./../../assets/index.css";
import TypeFilter from "./TypeFilter";
import AbilityFilter from "./AbilityFilter";
import EggFilter from "./EggFilter";

let filterValue = 3;

function Dropdown() {
  if (filterValue == 1) {
    return <Type />;
  } else if (filterValue == 2) {
    return <Ability />;
  } else if (filterValue == 3) {
    return <Egg />;
  } else {
    return <></>;
  }
}

function FilteredPokemonList() {
  if (filterValue == 1) {
    return <TypeFilter />;
  } else if (filterValue == 2) {
    return <AbilityFilter />;
  } else if (filterValue == 3) {
    return <EggFilter />;
  } else {
    return <></>;
  }
}

function PokemonSearch() {
  return (
    <div className="body" style={{ paddingTop: "2rem" }}>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="Filter" label="FilterRequest">
            <Form.Select
              aria-label="Floating label select example"
              onChange={() => (filterValue = 2)}
            >
              <option value="1" onChange={() => (filterValue = 1)}>
                Type
              </option>
              <option value="2" onChange={() => (filterValue = 2)}>
                Ability
              </option>
              <option value="3" onChange={() => (filterValue = 3)}>
                Egg Group
              </option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <Dropdown />
        </Col>
      </Row>
      <FilteredPokemonList />
    </div>
  );
}

export default PokemonSearch;
