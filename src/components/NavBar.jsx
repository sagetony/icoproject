import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "../assets/image/logo.svg"
import navIcon1 from "../assets/image/nav-icon1.svg"
import navIcon2 from "../assets/image/nav-icon2.svg"
import navIcon3 from "../assets/image/nav-icon3.svg"

export const NavBar = () => {
    const [activeLink, setactiveLink] = useState("home")
    const [scrolled, setScrolled] = useState("false")

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    const onUpdateActiveLink = (value) => {
        setactiveLink(value)
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="LOGO" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#tokensales"
                            className={
                                activeLink === "tokensales" ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("tokensales")}
                        >
                            Transfer Token
                        </Nav.Link>
                        <Nav.Link
                            href="#roadmap"
                            className={
                                activeLink === "roadmap" ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("roadmap")}
                        >
                            Road Map
                        </Nav.Link>
                        <Nav.Link
                            href="#team"
                            className={
                                activeLink === "team" ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("team")}
                        >
                            Our Teams
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className={
                                activeLink === "contact" ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("contact")}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#">
                                <img src={navIcon1} alt="" />
                            </a>
                            <a href="#">
                                <img src={navIcon2} alt="" />
                            </a>
                            <a href="#">
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                        <button
                            className="vvd"
                            onClick={() => {
                                console.log("connect")
                            }}
                        >
                            <span>Connect Wallet</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
