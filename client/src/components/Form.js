import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import { Context } from "../context";

function BasicExample (props) {
  var completeWorkoutApi = 'http://localhost:9000/home/complete-workout';
  const [max, setMax] = useState("");
  /*const [context, setContext] = React.useContext(Context);
  console.log({context});*/

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
    .then(html => console.log(html));
  }

  /*function fetchNewWorkout() {
    const getWorkout = "http://localhost:9000/home/";
  fetch(getWorkout)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    //setContext(data.mainLift);
  })
  .catch((err) => {
    console.log(err);
  });
  }*/
  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Main Lift Result</Form.Label>
        <Form.Control type="text" placeholder="Enter max" onChange={(e) => setMax(e.target.value)}/>
        <Button variant="primary" type="submit" /*onClick={() => fetchNewWorkout()}*/>
        Complete Workout
      </Button>
      </Form.Group>
    </Form>
  );
}

export default BasicExample;