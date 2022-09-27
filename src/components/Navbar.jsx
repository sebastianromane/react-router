// navbar component
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar >
          <div className="head">
          <div className="menu">
              <Link to="/" className="text-black ms-3 text-decoration-none"> <span>🏠</span> Home </Link>
              <Link to="/contact" className="text-black ms-3 text-decoration-none"> <span>📱</span> Contacto </Link>
              <Link to="/program" className="text-black ms-3 text-decoration-none"> Acompañamientos </Link>
          </div>

          <div >
              <h1 className="brand1">Happy Cake 🍰</h1>
          </div>
          </div>     


      </Navbar>
    </>
  );
}
