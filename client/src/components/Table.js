import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { WorkoutContext } from '../context';

function SmallExample(props) {
  const workout = useContext(WorkoutContext);
  console.log(workout);
  /*const [mainLift, setMainLift] = value.value;
  const [accessoryLift, setAccessory_lift] = value.value2;
  console.log({value});
  //console.log({accessoryLift});*/
  
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
          <td>{workout[0].mainLift}</td>
          <td>{workout[0].weight} {workout[0].mainSets} X {workout[0].mainReps}</td>
        </tr>
        <tr>
          <td>Accesory Lift</td>
          <td>{workout[0].accesoryLifts[0]}</td>
          <td>{workout[0].accessorySets} X {workout[0].accessoryReps}</td>
        </tr>
        <tr>
          <td>Accesory Lift</td>
          <td>{workout[0].accesoryLifts[1]}</td>
          <td>{workout[0].accessorySets} X {workout[0].accessoryReps}</td>
        </tr>
        <tr>
        <td>Accesory Lift</td>
          <td>{workout[0].accesoryLifts[2]}</td>
          <td>{workout[0].accessorySets} X {workout[0].accessoryReps}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SmallExample;