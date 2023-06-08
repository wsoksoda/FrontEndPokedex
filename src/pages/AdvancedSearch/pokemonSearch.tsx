import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Type from "./Type";
import Egg from "./Egg";
import Ability from "./Ability";
import "./../../assets/index.css";
import { useEffect, useState } from "react";
import PokemonNavbar from "../pokemonNavbar";
import TypeFilter from "./TypeFilter";
import AbilityFilter from "./AbilityFilter";
import EggFilter from "./EggFilter";

function PokemonSearch() {
  const [filterValue, setFilterValue] = useState("1");
  const [choice, setChoice] = useState("1");

  function Dropdown() {
    if (filterValue == "1") {
      return <Type optionChoice={optionChoice} />;
    } else if (filterValue == "2") {
      return <Ability />;
    } else if (filterValue == "3") {
      return <Egg />;
    } else {
      return <></>;
    }
  }

  function FilteredPokemonList() {
    if (filterValue == "1") {
      return <TypeFilter choice="choice" />;
    } else if (filterValue == "2") {
      return <AbilityFilter choice="choice" />;
    } else if (filterValue == "3") {
      return <EggFilter choice="choice" />;
    } else {
      return <></>;
    }
  }

  function optionChoice(chosen: string): string {
    setChoice(chosen);
    return choice;
  }

  return (
    <div className="body" style={{ paddingTop: "2rem" }}>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="Filter" label="FilterRequest">
            <Form.Select
              aria-label="Floating label select example"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="1">Type</option>
              <option value="2">Ability</option>
              <option value="3">Egg Group</option>
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
