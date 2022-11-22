import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function BasicExample () {
  var completeWorkoutApi = 'http://localhost:9000/home/complete-workout';
  const [max, setMax] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let text = '{ "maxLift" : "' + max + '" }';
    //const obj = JSON.parse(text);
    //console.log(text);
    fetch(completeWorkoutApi, {
      method: "POST",
      mode: 'cors',
      body: text,
      headers: {
        "Content-Type" : "application/json"
      } 
    })
    .then(testObj => testObj.json())
    .then(html => console.log(html))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Main Lift Result</Form.Label>
        <Form.Control type="text" placeholder="Enter max" onChange={(e) => setMax(e.target.value)}/>
        <Button variant="primary" type="submit">
        Complete Workout
      </Button>
      </Form.Group>
    </Form>
  );
}

export default BasicExample;