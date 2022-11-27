import Table from "./components/Table";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import { Context } from "./context.js";

const Home = () => {
const [mainLift, setMainLift] = useState("");
const [accessoryOne, setAccesoryOne] = useState()
const [accessoryTwo, setAccesoryTwo] = useState()
const [accessoryThree, setAccesoryThree] = useState();
//const [mainLift, setMainLift] = useState('');
const [accessoryLifts, setAccessoryLifts] = useState([]);

/*useEffect(() => {
  const getWorkout = "http://localhost:9000/home/";
  fetch(getWorkout)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setMainLift(data.mainLift);
    setAccessoryLifts(data.accesoryLifts);
  })
  .catch((err) => {
    console.log(err);
  });
}, [mainLift]);*/
const getWorkout = "http://localhost:9000/home/";
fetch(getWorkout)
  .then(workoutObj => workoutObj.json())
  .then(workoutJSON =>  {
    console.log(workoutJSON);
    setMainLift(workoutJSON.mainLift);
    setAccesoryOne(workoutJSON.accesoryLifts[0]);
    setAccesoryTwo(workoutJSON.accesoryLifts[1]);
    setAccesoryThree(workoutJSON.accesoryLifts[2]);
    });

  return (
    <div>
      <h1>Home Page</h1>
      
      <Table mainLift = {mainLift}
      accessoryOne = {accessoryOne}
      accessoryTwo = {accessoryTwo}
      accessoryThree = {accessoryThree}/> 
      <Form/>
      
    </div>
  );
};
  
export default Home;