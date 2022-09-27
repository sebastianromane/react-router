// contact view
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
   
    <div className='contact'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <h1>Cuentanos, ¿en qué te podríamos ayudar?</h1>
      <Form.Label>Correo</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Descripción</Form.Label>
      <Form.Control type="text" placeholder="Ingrese consulta" />
    </Form.Group>
   
    <Button variant="primary" type="submit">
      Enviar
    </Button>
  </Form>
  </div>
);
}

export default Contact;