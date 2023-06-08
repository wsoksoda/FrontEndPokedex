import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "./../assets/index.css";
import { Link } from "react-router-dom";
import ForwardButton from "./forwardButton";
import BackButton from "./backButton";
import Search from "./search";

interface navbarProp {
  goBack: () => number;
  goForward: () => number;
}

function PokemonNavbar(props: navbarProp) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <button
          onClick={props.goBack}
          style={{ border: "none", background: "none" }}
        >
          <BackButton />
        </button>
        <Link to={"http://localhost:5173"}>
          <Navbar.Brand href="#">Pokédex</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Link
            to={`search`}
            style={{ textDecoration: "none", color: "#41295a" }}
          >
            Advanced Search
          </Link>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Search />
          <button
            onClick={props.goForward}
            style={{ border: "none", background: "none" }}
          >
            <ForwardButton />
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PokemonNavbar;
