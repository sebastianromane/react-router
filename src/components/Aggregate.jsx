// add menu component
import { Accordion } from "react-bootstrap";

export default function Navigation() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Torta </Accordion.Header>
        <Accordion.Body>
          🎂 Trufa
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sandwich </Accordion.Header>
        <Accordion.Body>
         🥪 Chacarero
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Pizzas</Accordion.Header>
        <Accordion.Body>
         🍕 Pizzas a la piedra
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
