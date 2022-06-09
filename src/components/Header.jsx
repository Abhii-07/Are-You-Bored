import { Navbar, Nav, Container } from "react-bootstrap"

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>I Am Bored</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header