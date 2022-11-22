import Table from "./components/Table";
import Form from "./components/Form";
import { useState } from "react";
const Home = () => {
const [mainLift, setMainLift] = useState("");
const [accesoryOne, setAccesoryOne] = useState()
const [accesoryTwo, setAccesoryTwo] = useState()
const [accesoryThree, setAccesoryThree] = useState();
var getWorkout = "http://localhost:9000/home/";
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
      <Table mainLift={mainLift} 
        accesoryOne={accesoryOne} 
        accesoryTwo={accesoryTwo} 
        accesoryThree={accesoryThree} /> 
      <Form/>
    </div>
  );
};
  
export default Home;