import { FloatingLabel, Form } from "react-bootstrap";

function Egg() {
  return (
    <FloatingLabel controlId="Type" label="Select Type">
      <Form.Select aria-label="select type">
        <option value="1">Plant</option>
        <option value="2">Monster</option>
        <option value="3">Dragon</option>
        <option value="4">Water1</option>
        <option value="5">Bug</option>
        <option value="6">Flying</option>
        <option value="7">Ground</option>
        <option value="8">Fairy</option>
        <option value="9">No-Eggs</option>
        <option value="10">Humanshape</option>
        <option value="11">Water2</option>
        <option value="12">Mineral</option>
        <option value="13">Indeterminate</option>
        <option value="14">Water3</option>
        <option value="15">Ditto</option>
      </Form.Select>
    </FloatingLabel>
  );
}

export default Egg;
