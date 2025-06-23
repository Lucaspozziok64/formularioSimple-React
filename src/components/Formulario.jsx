import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !dni || !email) {
      Swal.fire({
        title: "Debes rellenar todos los campos!",
        text: "Todos los campos son requeridos!😉",
        icon: "warning",
      });
    } else {
      //Aqui debo agregar mensaje de formulario enviado y limpiar los campos
      setApellido("");
      setNombre("");
      setDni("");
      setEmail("");

      Swal.fire({
        title: "Formulario Enviado!",
        text: "Gracias por tu visita!🫡",
        icon: "success",
      });
    }
  };

  return (
    <section className="contenedorForm">
      <Form onSubmit={handleSubmit} className="formulario text-white">
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDni">
          <Form.Label>Dni</Form.Label>
          <Form.Control
            type="text"
            placeholder="Dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="ejemplo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit" className="mb-1">
            Enviar
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Formulario;
