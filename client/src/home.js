import Table from "./components/Table";
import Form from "./components/Form";
import { useState } from "react";
const Home = () => {
  const [workout, setWorkout] = useState({});
var getWorkout = "http://localhost:9000/home/";
var workoutData;

 fetch(getWorkout)
  .then(testObj => testObj.json())
  .then(html =>  {
    console.log(html);
    setWorkout();
  })

  return (
    <div>
      <h1>Home Page</h1>
      <Table/>
      <Form/>
    </div>
  );
};
  
export default Home;