import Table from 'react-bootstrap/Table';

function SmallExample(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Lift</th>
          <th>Name and Variation</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Main Lift</td>
          <td>{props.data}</td>
        </tr>
        <tr>
          <td>Accesory Lift One</td>
          <td></td>
        </tr>
        <tr>
          <td>Accesory Lift Two</td>
          <td></td>
        </tr>
        <tr>
          <td>Accesory Lift Three</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SmallExample;