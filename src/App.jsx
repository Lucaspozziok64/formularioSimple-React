import "./App.css";
import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar className="bg-dark">
          <Container className="text-white">
            <Navbar.Brand href="#home">📝</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="text-white">
                Formulario Regsitro
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="my-5">
        <h1 className="text-white">Formulario</h1>
        <Formulario></Formulario>
      </main>
      <footer className="bg-dark text-white p-1 text-center">
        <p className="mb-0">&copy;Todos los derechos reservados</p>
        <p className="mb-0">Desarrollado por <a href="https://github.com/Lucaspozziok64">Lucas Figueroa</a>👨‍💻</p>
      </footer>
    </>
  );
}

export default App;
