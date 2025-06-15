import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  return (
    <section className="container bg-secondary">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDni">
          <Form.Label>Dni</Form.Label>
          <Form.Control type="text" placeholder="Dni" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ejemplo@gmail.com" required />
          <Form.Text className="text-muted">
            Nunca compartiremos su correo electrónico con nadie más.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="d-flex justify-content-end">
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default Formulario;
