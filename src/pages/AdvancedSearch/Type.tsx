import React from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

function Type() {
  return (
    <FloatingLabel controlId="Type" label="Select Type">
      <Form.Select aria-label="select type">
        <option value="1">Poison</option>
        <option value="2">Grass</option>
        <option value="3">Fire</option>
        <option value="4">Flying</option>
        <option value="5">Water</option>
        <option value="6">Bug</option>
        <option value="7">Normal</option>
        <option value="8">Electric</option>
        <option value="9">Ground</option>
        <option value="10">Fairy</option>
        <option value="11">Fighting</option>
        <option value="12">Psychic</option>
        <option value="13">Rock</option>
        <option value="14">Steel</option>
        <option value="15">Ice</option>
        <option value="16">Ghost</option>
        <option value="17">Dragon</option>
        <option value="18">Dark</option>
      </Form.Select>
    </FloatingLabel>
  );
}

export default Type;
