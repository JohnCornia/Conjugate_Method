import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample(props) {
  return (
    <Container>
      <Row>
        <Col>{props.text}</Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;