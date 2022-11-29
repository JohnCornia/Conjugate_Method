import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useContext } from 'react';
import { WorkoutContext } from '../context';

function BasicExample (props) {
  const workout = useContext(WorkoutContext);
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
    .then(html => console.log(html));
    fetchNewWorkout();
  }

  function fetchNewWorkout() {
    const getWorkout = "http://localhost:9000/home/";
  fetch(getWorkout)
  .then((res) => res.json())
  .then((workoutJSON) => {
    console.log(workoutJSON);
    workout[1](workoutJSON);
  })
  .catch((err) => {
    console.log(err);
  });
  }
  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      {(workout[0].day == 3 || workout[0].day == 4) ? "" :  
      <><Form.Label>Main Lift Result</Form.Label>
        <Form.Control type="text" placeholder="Enter max" onChange={(e) => setMax(e.target.value)}/></>
        }
        <Button variant="primary" type="submit" >
        Complete Workout
      </Button>
      </Form.Group>
    </Form>
  );
}

export default BasicExample;