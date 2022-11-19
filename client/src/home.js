import Table from "./components/Table";
import Form from "./components/Form";
const Home = () => {
  
 
 /*https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7078616c440748bd49f735d765236ed0
 var workoutData;

  fetch(getWorkout)
  .then(testObj => testObj.json())
  .then(html =>  {
    console.log(html);
    workoutData = 
    html[0].main_lift + " " + 
    html[0].accessory_lifts + " " + 
    html[1].accessory_lifts + " " + 
    html[2].accessory_lifts;
    console.log(workoutData);
  })*/

  return (
    <div>
      <h1>Home Page</h1>
      <Table/>
      <Form/>
    </div>
  );
};
  
export default Home;