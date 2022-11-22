import Table from 'react-bootstrap/Table';

function SmallExample(props) {
  console.log(props);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Lift</th>
          <th>Name and Variation</th>
          <th>Sets and Repetitions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Main Lift</td>
          <td>{props.mainLift}</td>
          <td>1 Rep Max</td>
        </tr>
        <tr>
          <td>Accesory Lift</td>
          <td>{props.accesoryOne}</td>
          <td></td>
        </tr>
        <tr>
          <td>Accesory Lift</td>
          <td>{props.accesoryTwo}</td>
          <td></td>
        </tr>
        <tr>
        <td>Accesory Lift</td>
          <td>{props.accesoryThree}</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SmallExample;