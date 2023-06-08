import { FloatingLabel, Form } from "react-bootstrap";

function Ability() {
  return (
    <FloatingLabel controlId="floatingInputGrid" label="Ability">
      <Form.Control type="text" placeholder="overgrow" />
    </FloatingLabel>
  );
}

export default Ability;
