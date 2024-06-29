import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'


const Footer = props => {
  return (
    <footer
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">copy right &copy; Notes</Col>
        </Row>
      </Container>
    </footer>
  );
}


export default Footer
