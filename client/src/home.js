import Table from "./components/Table";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import { WorkoutContext } from './context';

const Home = () => {
/*const [mainLift, setMainLift] = useState("");
const [accessoryOne, setAccesoryOne] = useState()
const [accessoryTwo, setAccesoryTwo] = useState()
const [accessoryThree, setAccesoryThree] = useState();
const [accessoryReps, setAccessoryReps] = useState();
const [accessorySets, setAccessorySets] = useState();
const [mainReps, setMainLifts] = useState();
const [mainSets, setMainSets] = useState();
const [weight, setWeight] = useState();*/
const [workoutObj, setWorkoutObj] = 
useState(
  {
    mainLift : "", 
    weight : "",
    accesoryLifts : [],
    accessoryReps : "",
    accessorySets : "",
    mainReps : "",
    mainSets : ""
});


useEffect(() => {
  const getWorkout = "http://localhost:9000/home/";
  fetch(getWorkout)
  .then((res) => res.json())
  .then((workoutJSON) => {
    console.log(workoutJSON);
    setWorkoutObj(workoutJSON);
    console.log(workoutObj);
    /*setMainLift(workoutJSON.mainLift);
    setAccesoryOne(workoutJSON.accesoryLifts[0]);
    setAccesoryTwo(workoutJSON.accesoryLifts[1]);
    setAccesoryThree(workoutJSON.accesoryLifts[2]);
    setAccessoryReps(workoutJSON.accessoryReps);
    setAccessorySets(workoutJSON.accessorySets);
    setMainLifts(workoutJSON.mainSets);
    setMainSets(workoutJSON.mainReps);
    setWeight(workoutJSON.weight);*/
  })
  .catch((err) => {
    console.log(err);
  });
}, []);

  return (
    <div>
      <h1>Home Page</h1>
      
      <WorkoutContext.Provider value={[workoutObj, setWorkoutObj]}>
        <Table /*mainLift = {mainLift}
        accessoryOne = {accessoryOne}
        accessoryTwo = {accessoryTwo}
        accessoryThree = {accessoryThree}
        accessorySets = {accessorySets}
        accessoryReps = {accessoryReps}
        mainSets = {mainSets}
        mainReps = {mainReps}
        weight = {weight}*//>
        <Form/>
      </WorkoutContext.Provider>
    </div>
  );
};
  
export default Home;