import { useState , useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router";

const NavbarComponent = () => {
  const[changedColor, setChangeColor] = useState(false);

  const changedBackgroundColor = () => {
    if (window.scrollY > 10){
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  } 
  useEffect (() =>  {
    changedBackgroundColor();
    window.addEventListener('scroll', changedBackgroundColor)
  });

return(
    <div>
      <Navbar expand="lg" className={changedColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            Ngoding
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbae-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="navlink" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({isActive, isPending})=>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">
                Join With Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
  

export default NavbarComponent
