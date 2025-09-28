import { Link } from "react-router-dom";
import { Container, Image } from "react-bootstrap";

export default function FooterComponent() {
  return (
    <div style={{ backgroundColor: "#DCF2F1" }}>
      <Container>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link to={"/"}>
              <Image
                src="/msa.png"
                width={40}
                height={30}
                alt="msa logo"
                className="pe-2"
              />
            </Link>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © {new Date().getFullYear()} MSA
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link
                className="text-body-secondary"
                to={"https://github.com/Mohammad-Saleh7"}
              >
                <i className="bi bi-github"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="text-body-secondary"
                to={"https://www.linkedin.com/company/apsignals/"}
              >
                <i className="bi bi-linkedin"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="text-body-secondary"
                to={
                  "https://www.instagram.com/_salehabbasis?igsh=ZDk2Z2MzNzE5NzVi"
                }
              >
                <i className="bi bi-instagram"></i>
              </Link>
            </li>
          </ul>
        </footer>
      </Container>
    </div>
  );
}
