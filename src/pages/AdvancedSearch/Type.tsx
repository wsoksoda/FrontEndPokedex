import { FloatingLabel, Form } from "react-bootstrap";
import TypeFilter from "./TypeFilter";
import { useState } from "react";

interface Prop {
  optionChoice: (chosen: string) => string;
}

function Type(props: Prop) {
  const [filterValue, setFilterValue] = useState("");

  props.optionChoice(filterValue);

  return (
    <>
      <FloatingLabel controlId="Type" label="Select Type">
        <Form.Select
          aria-label="select type"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="poison">Poison</option>
          <option value="grass">Grass</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="water">Water</option>
          <option value="bug">Bug</option>
          <option value="normal">Normal</option>
          <option value="electric">Electric</option>
          <option value="ground">Ground</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="ice">Ice</option>
          <option value="ghost">Ghost</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
        </Form.Select>
      </FloatingLabel>
    </>
  );
}

export default Type;
