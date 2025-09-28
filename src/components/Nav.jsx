import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, Image } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function NavComponent() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#DCF2F1" }}>
        <Container>
          <Navbar.Brand href="#">
            <Image src="/msa.png" height={33} width={33} roundedCircle />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#0F1035",
                        fontWeight: "bold",
                      }
                    : undefined
                }
              >
                HomePage
              </NavLink>
              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#0F1035",
                        fontWeight: "bold",
                      }
                    : undefined
                }
              >
                AboutPage
              </NavLink>
              <NavLink
                className="nav-link"
                to="/courses"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#0F1035",
                        fontWeight: "bold",
                      }
                    : undefined
                }
              >
                CoursesPage
              </NavLink>
            </Nav>
            <div className="d-flex gap-2">
              <Dropdown>
                <Dropdown.Toggle variant="none">
                  <Image
                    src="https://picsum.photos/200"
                    width="33"
                    height="33"
                    alt="user image"
                    roundedCircle
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/authentication/logout">
                    LogOut
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                className="button-one"
                // as={Link}
                // to="/authentication/login"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </Button>
              <Button
                className="buttons"
                // as={Link}
                // to="/authentication/register"
                onClick={() => navigate("/auth/signup")}
              >
                Sign-Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
